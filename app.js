/* ===== LingoNest — app.js : engine, loader, screens, speech, AI (BYOK), storage =====
   Load order (index.html): content.js → numbers.js → ui-en.js → app.js. ui-xx.js and lang-xx.js load on demand. */
'use strict';
const APP = { name: 'LingoNest', ver: '1.9.0' };
const CORE_MODS = ['content', 'numbers', 'ui-en', 'app', 'assistant-map', 'features'];

/* ---------- error log (last 10, shown in diagnostics) ---------- */
function logErr(m, f, l) {
  try {
    const a = JSON.parse(localStorage.getItem('ln_errs') || '[]');
    a.unshift({ m: String(m).slice(0, 200), f: String(f || '').split('/').pop(), l: l || 0, t: Date.now() });
    localStorage.setItem('ln_errs', JSON.stringify(a.slice(0, 10)));
  } catch (_) {}
}
addEventListener('error', e => logErr(e.message, e.filename, e.lineno));
addEventListener('unhandledrejection', e => logErr((e.reason && e.reason.message) || e.reason, 'promise', 0));

/* ---------- storage shim: localStorage → memory ---------- */
const S = (() => {
  const mem = {}; let ok = true;
  try { localStorage.setItem('__t', '1'); localStorage.removeItem('__t'); } catch (e) { ok = false; }
  return {
    ok,
    get(k, d) { try { const v = ok ? localStorage.getItem(k) : mem[k]; return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) {
      const s = JSON.stringify(v);
      try { if (ok) localStorage.setItem(k, s); else mem[k] = s; return true; }
      catch (e) { mem[k] = s; toast(T('saveFail'), 'err', 5000); return false; }
    },
    del(k) { try { if (ok) localStorage.removeItem(k); else delete mem[k]; } catch (e) {} }
  };
})();

/* ---------- state ---------- */
const DEF = {
  v: 1, user: '', ui: 'he', theme: 'gold', mode: 'night', lang: 'th', goal: 10, rate: 0.9, gender: 'm',
  voices: {}, onb: false, prog: {}, log: {}, newLog: {}, streak: { last: '', n: 0 }, phrases: [], custom: {},
  favs: {}, ai: { provider: 'gemini', model: '', has: {} }, backupAt: 0, firstUse: 0, seenVer: '', fix: {}, kit: [], badges: {}, flags: {}, weekGoal: 100
};
let st = Object.assign({}, DEF, S.get('ln_state', {}));
st.ai = Object.assign({}, DEF.ai, st.ai || {});
st.fix = st.fix || {};
if (!LANGS[st.lang]) st.lang = 'th';
if (!st.firstUse) st.firstUse = Date.now();
function save() { S.set('ln_state', st); }

/* ---------- i18n ---------- */
function T(k, vars) {
  let s = (LANG[st.ui] && LANG[st.ui][k]) || LANG.en[k] || k;
  if (vars) for (const v in vars) s = s.split('{' + v + '}').join(vars[v]);
  return s;
}
const isRTL = () => st.ui === 'he' || st.ui === 'ar';
const LN = l => LANGS[l].name[st.ui] || LANGS[l].name.en;

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const dayKey = off => { const d = new Date(); d.setDate(d.getDate() + off); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

function toast(msg, kind, ms) {
  const el = document.createElement('div');
  el.className = 'toast ' + (kind || '');
  el.setAttribute('role', 'status');
  el.textContent = msg;
  $('#toasts').appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 300); }, ms || 2600);
}

/* ---------- content model ---------- */
function genderize(lang, s) {
  if (st.gender !== 'f' || !s || !GENDER_F[lang]) return s;
  return GENDER_F[lang].reduce((a, [re, to]) => a.replace(re, to), s);
}
let _itemsCache = {};
function items(lang) {
  if (!WD[lang]) return [];
  const key = lang + st.gender + JSON.stringify(st.fix[lang] || {}).length + (st.custom[lang] || []).length + JSON.stringify((st.custom[lang] || []).map(c => c.id + c.text));
  if (_itemsCache[lang] && _itemsCache[lang].key === key) return _itemsCache[lang].list;
  const g = s => genderize(lang, s);
  const L = [];
  (ALPHA[lang] || []).forEach((a, i) => L.push({ k: 'L:' + i, type: 'L', lvl: 1, cat: 'letters', text: a[0], tts: a[1], heb: a[2], roman: a[3], he: a[2], en: a[3] }));
  (VOWELS[lang] || []).forEach((a, i) => L.push({ k: 'V:' + i, type: 'L', lvl: 1, cat: 'vowels', text: a[0], tts: a[1], heb: a[2], roman: a[3], he: a[2], en: a[3] }));
  CONCEPTS.forEach(c => {
    const t0 = WD[lang] && WD[lang][c[0]]; if (!t0) return;
    const fx = st.fix[lang] && st.fix[lang][c[0]];
    const t = fx ? [fx.text || t0[0], fx.roman || t0[1], fx.heb || t0[2]] : t0;
    L.push({ k: 'W:' + c[0], type: isPhraseCat(c[1]) ? 'P' : 'W', lvl: c[2], cat: c[1], he: c[3], en: c[4], text: g(t[0]), roman: g(t[1]), heb: g(t[2]), tts: SPEAK_HEB[lang] ? g(t[2]) : undefined });
  });
  (st.custom[lang] || []).forEach(c => L.push({ k: 'C:' + c.id, type: 'W', lvl: MAXL, cat: 'mine', he: c.he, en: c.he, text: c.text, roman: c.roman || '', heb: c.heb || '', cid: c.id }));
  _itemsCache[lang] = { key, list: L };
  return L;
}
const meaning = it => (st.ui === 'he' ? it.he : it.en) || it.he || it.en;
const pron = it => (st.ui === 'he' ? (it.heb || it.roman) : (it.roman || it.heb)) || '';
const pron2 = it => (st.ui === 'he' && it.heb && it.roman && it.type !== 'L') ? it.roman : '';
const ttsText = it => it.tts || it.text.replace(/\.\.\./g, ' ');

function P(lang) { st.prog[lang] = st.prog[lang] || {}; return st.prog[lang]; }
const IV = [0, 5 * 60e3, 864e5, 3 * 864e5, 7 * 864e5, 16 * 864e5, 35 * 864e5];
function grade(lang, k, ok) {
  const p = P(lang);
  const r = p[k] || { b: 0, d: 0, c: 0, w: 0 };
  if (ok) { r.b = Math.min(6, r.b + 1); r.c++; } else { r.b = 1; r.w++; }
  r.d = Date.now() + IV[r.b];
  p[k] = r;
  const t = today();
  st.log[t] = (st.log[t] || 0) + 1;
  const y = dayKey(-1);
  if (st.streak.last !== t) { st.streak.n = st.streak.last === y ? st.streak.n + 1 : 1; st.streak.last = t; }
  save();
  if (typeof onGraded === 'function') onGraded(lang, k, ok);
}
function levelStats(lang) {
  const p = P(lang), all = items(lang), out = {};
  for (let l = 1; l <= MAXL; l++) {
    const L = all.filter(i => i.lvl === l);
    out[l] = { total: L.length, seen: L.filter(i => p[i.k]).length, mastered: L.filter(i => p[i.k] && p[i.k].b >= 3).length };
  }
  return out;
}
function curLevel(lang) {
  const s = levelStats(lang);
  for (let l = 1; l < MAXL; l++) if (s[l].total && s[l].mastered / s[l].total < 0.7) return l;
  return s[MAXL].total ? MAXL : MAXL - 1;
}
function langPct(lang) {
  const all = items(lang), p = P(lang);
  if (!all.length) return LOADED[lang] ? 0 : null;
  return Math.round(100 * all.filter(i => p[i.k] && p[i.k].b >= 3).length / all.length);
}
function dueCount(lang) { const p = P(lang), now = Date.now(); return items(lang).filter(i => p[i.k] && p[i.k].d <= now).length; }
function newLeft() { return Math.max(0, st.goal - (st.newLog[today()] || 0)); }

/* ---------- speech: text-to-speech ---------- */
let VOICES = [];
const warnedVoice = {};
function loadVoices() { if ('speechSynthesis' in window) VOICES = speechSynthesis.getVoices() || []; }
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = () => { loadVoices(); if (NAV.cur === 'settings') render(); };
}
function voicesFor(lang) {
  const pre = LANGS[lang].tts.slice(0, 2).toLowerCase();
  return VOICES.filter(v => (v.lang || '').replace('_', '-').toLowerCase().startsWith(pre));
}
function voiceFor(lang) {
  const c = voicesFor(lang);
  if (!c.length) return null;
  const chosen = c.find(v => v.name === st.voices[lang]);
  if (chosen) return chosen;
  const full = LANGS[lang].tts.toLowerCase();
  return c.find(v => /google|natural|online/i.test(v.name) && v.lang.replace('_', '-').toLowerCase() === full) ||
         c.find(v => v.lang.replace('_', '-').toLowerCase() === full) || c[0];
}
/* languages without a voice (Yiddish) read the Hebrew-letter pronunciation with the Hebrew voice */
const sayStr = (lang, text, heb) => (SPEAK_HEB[lang] && heb) ? heb : text;
function speak(text, lang, slow, onend, altVoice) {
  if (!('speechSynthesis' in window)) { toast(T('noTTS'), 'err', 4000); if (onend) onend(); return; }
  if (!text) return;
  if (SPEAK_HEB[lang]) text = String(text).replace(/[\u0591-\u05C7]/g, '').replace(/[־]/g, ' ');
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = LANGS[lang].tts;
  let v = voiceFor(lang);
  if (altVoice && v) { const others = voicesFor(lang).filter(x => x.name !== v.name); if (others.length) v = others[0]; else u.pitch = 1.25; }
  if (onend) { u.onend = onend; u.onerror = onend; }
  if (v) u.voice = v;
  else if (!warnedVoice[lang]) { warnedVoice[lang] = 1; toast(T('noVoice', { l: LN(lang) }), 'warn', 6000); }
  u.rate = slow ? Math.max(0.35, st.rate * 0.6) : st.rate;
  setTimeout(() => speechSynthesis.speak(u), 30);
}

/* ---------- speech: recognition (say it) ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\u064B-\u065F]/g, '').replace(/[^\p{L}\p{N}]/gu, ''); }
function sim(a, b) {
  if (!a || !b) return 0;
  if (a === b || a.includes(b) || b.includes(a)) return 1;
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return 1 - d[m][n] / Math.max(m, n);
}
function sayIt(it, lang, out, cb) {
  if (!SR) { toast(T('noSR'), 'warn', 5000); return; }
  if (location.protocol === 'file:') { toast(T('fileMic'), 'warn', 6000); return; }
  const r = new SR();
  r.lang = LANGS[lang].tts; r.maxAlternatives = 4; r.interimResults = false;
  if (out) out.textContent = T('listening');
  r.onresult = e => {
    const alts = [...e.results[0]].map(a => a.transcript);
    const target = norm(it.tts || it.text);
    const best = Math.max(...alts.map(a => sim(norm(a), target)));
    if (cb) cb(best >= 0.72, alts[0]);
    if (out) {
      out.innerHTML = best >= 0.72 ? '✅ ' + esc(T('saidGood')) : '🔁 ' + esc(T('saidHeard')) + ' <b dir="auto">' + esc(alts[0]) + '</b>';
      out.className = 'said ' + (best >= 0.72 ? 'ok' : 'no');
    }
  };
  r.onerror = e => { if (out) out.textContent = ''; if (e.error === 'no-speech') toast(T('noSpeech'), 'warn', 3000); else toast(T('srErr') + ' (' + e.error + ')', 'err', 4000); };
  r.onend = () => { if (out && out.textContent === T('listening')) out.textContent = ''; };
  try { r.start(); } catch (e) { toast(T('srErr'), 'err'); }
}

/* ---------- IndexedDB (secrets) + AES-GCM key encryption ---------- */
const IDB = {
  db: null,
  open() {
    if (this.db) return Promise.resolve(this.db);
    return new Promise((res, rej) => {
      if (!('indexedDB' in window)) return rej(new Error('no idb'));
      const r = indexedDB.open('lingonest', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('secrets');
      r.onsuccess = () => { this.db = r.result; res(this.db); };
      r.onerror = () => rej(r.error);
    });
  },
  async tx(mode, fn) {
    const db = await this.open();
    return new Promise((res, rej) => { const s = db.transaction('secrets', mode).objectStore('secrets'); const q = fn(s); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); });
  },
  get(k) { return this.tx('readonly', s => s.get(k)); },
  put(k, v) { return this.tx('readwrite', s => s.put(v, k)); },
  del(k) { return this.tx('readwrite', s => s.delete(k)); },
  clear() { return this.tx('readwrite', s => s.clear()); }
};
const memKeys = {};
async function cryptoKey() {
  let k = await IDB.get('ck');
  if (!k) { k = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']); await IDB.put('ck', k); }
  return k;
}
function cleanKey(k) { return String(k || '').split(/[,\n\r\s]+/).map(x => x.trim()).filter(Boolean)[0] || ''; }
async function setKey(provider, plain) {
  plain = cleanKey(plain);
  if (!plain) { delete memKeys[provider]; try { await IDB.del('ak_' + provider); } catch (e) {} st.ai.has[provider] = false; save(); return 'none'; }
  memKeys[provider] = plain; st.ai.has[provider] = true; save();
  try {
    const ck = await cryptoKey();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, ck, new TextEncoder().encode(plain));
    const back = new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, ck, ct));
    if (back !== plain) throw new Error('verify');
    await IDB.put('ak_' + provider, { iv, ct });
    return 'enc';
  } catch (e) { return 'mem'; }
}
async function getKey(provider) {
  if (provider === 'local') return 'local';
  if (memKeys[provider]) return memKeys[provider];
  try {
    const r = await IDB.get('ak_' + provider);
    if (!r) return '';
    const ck = await cryptoKey();
    memKeys[provider] = new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: r.iv }, ck, r.ct));
    return memKeys[provider];
  } catch (e) { return ''; }
}
const aiReady = () => st.ai.provider === 'local' || !!st.ai.has[st.ai.provider];

/* ---------- AI (BYOK) — golden rule: default + fallback chain + live model list ---------- */
const AI = {
  gemini: { tag: 'FREE', link: 'https://aistudio.google.com/app/apikey', models: ['gemini-flash-latest', 'gemini-2.5-flash', 'gemini-flash-lite-latest'] },
  claude: { tag: 'API', link: 'https://console.anthropic.com/settings/keys', models: ['claude-haiku-4-5', 'claude-sonnet-4-6', 'claude-sonnet-4-5'] },
  openai: { tag: 'API', link: 'https://platform.openai.com/api-keys', models: ['gpt-4o-mini', 'gpt-4.1-mini', 'gpt-4o'] },
  local:  { tag: 'LOCAL', link: 'https://ollama.com', models: ['llama3.1', 'qwen2.5', 'gemma2'] }
};
const hdr = v => String(v).replace(/[^\x20-\x7E]/g, '');
async function httpJSON(url, opt) {
  const r = await fetch(url, opt);
  let j = null; try { j = await r.json(); } catch (e) {}
  if (!r.ok) { const e = new Error((j && (j.error && (j.error.message || j.error.type) || j.message)) || ('HTTP ' + r.status)); e.status = r.status; throw e; }
  return j;
}
async function callModel(p, model, key, prompt) {
  if (p === 'gemini') {
    const j = await httpJSON('https://generativelanguage.googleapis.com/v1beta/models/' + encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(hdr(key)), {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0.3, responseMimeType: 'application/json' } })
    });
    return ((j.candidates || [])[0] && j.candidates[0].content.parts.map(x => x.text || '').join('')) || '';
  }
  if (p === 'claude') {
    const j = await httpJSON('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': hdr(key), 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model, max_tokens: 1500, messages: [{ role: 'user', content: prompt }] })
    });
    return (j.content || []).map(c => c.text || '').join('');
  }
  const url = p === 'local' ? 'http://localhost:11434/v1/chat/completions' : 'https://api.openai.com/v1/chat/completions';
  const h = { 'Content-Type': 'application/json' };
  if (p === 'openai') h.Authorization = 'Bearer ' + hdr(key);
  const body = { model, temperature: 0.3, messages: [{ role: 'user', content: prompt }] };
  if (p === 'openai') body.response_format = { type: 'json_object' };
  const j = await httpJSON(url, { method: 'POST', headers: h, body: JSON.stringify(body) });
  return (j.choices && j.choices[0] && j.choices[0].message.content) || '';
}
const aiBusy = e => [429, 500, 502, 503, 504].includes(e.status) || /overload|high demand|unavailable|rate limit|resource.?exhausted/i.test(e.message || '');
async function aiJSON(prompt) {
  const p = st.ai.provider;
  const key = await getKey(p);
  if (!key) throw new Error(T('aiNoKey'));
  const base = AI[p].models;
  const chain = st.ai.model ? [st.ai.model].concat(base.filter(m => m !== st.ai.model)) : base;
  let last;
  for (const m of chain) {
    try {
      const txt = await callModel(p, m, key, prompt);
      const a = txt.indexOf('{'), b = txt.lastIndexOf('}');
      if (a < 0 || b < a) throw new Error(T('aiBadJson'));
      return JSON.parse(txt.slice(a, b + 1));
    } catch (e) {
      last = e;
      if (e.status === 404 || (e.status === 400 && /model/i.test(e.message))) continue;
      if (aiBusy(e)) continue;          /* overloaded / rate-limited → next model in the chain (e.g. flash-lite is often free) */
      throw e;
    }
  }
  throw last || new Error('AI');
}
async function liveModels() {
  const p = st.ai.provider, key = await getKey(p);
  if (!key) throw new Error(T('aiNoKey'));
  if (p === 'gemini') {
    const j = await httpJSON('https://generativelanguage.googleapis.com/v1beta/models?key=' + encodeURIComponent(hdr(key)));
    return (j.models || []).filter(m => (m.supportedGenerationMethods || []).includes('generateContent')).map(m => m.name.replace('models/', '')).filter(n => /gemini/.test(n));
  }
  if (p === 'claude') {
    const j = await httpJSON('https://api.anthropic.com/v1/models', { headers: { 'x-api-key': hdr(key), 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' } });
    return (j.data || []).map(m => m.id);
  }
  if (p === 'openai') {
    const j = await httpJSON('https://api.openai.com/v1/models', { headers: { Authorization: 'Bearer ' + hdr(key) } });
    return (j.data || []).map(m => m.id).filter(id => /^(gpt|o\d)/.test(id)).sort();
  }
  const j = await httpJSON('http://localhost:11434/api/tags');
  return (j.models || []).map(m => m.name);
}
function aiLangName(l) { return LANGS[l].name.en; }
function genderNote(l) {
  if (l === 'th') return st.gender === 'f' ? ' The speaker is female: use ค่ะ/คะ and ดิฉัน.' : ' The speaker is male: use ครับ and ผม.';
  return st.gender === 'f' ? ' The speaker is female (use feminine forms where grammar requires).' : ' The speaker is male (use masculine forms where grammar requires).';
}
async function aiTranslate(text, lang) {
  const prompt = 'You translate short travel sentences for a Hebrew-speaking traveler. Translate the sentence below into ' + aiLangName(lang) +
    ' exactly as a native speaker would say it naturally and politely to a local person.' + genderNote(lang) +
    ' Return ONLY a JSON object: {"text":"translation in native script","roman":"simple Latin transliteration","heb":"pronunciation written in Hebrew letters without niqqud","back":"literal meaning of your translation, in Hebrew"}.\nSentence: """' + text + '"""';
  return aiJSON(prompt);
}
async function aiWords(topic, lang, n) {
  const prompt = 'Create ' + n + ' useful ' + aiLangName(lang) + ' vocabulary items for a Hebrew-speaking traveler about the topic: "' + topic + '". Prefer everyday words and short expressions actually used by locals.' + genderNote(lang) +
    ' Return ONLY a JSON object: {"items":[{"he":"meaning in Hebrew","text":"word in native script","roman":"simple Latin transliteration","heb":"pronunciation written in Hebrew letters without niqqud"}]}';
  const j = await aiJSON(prompt);
  return (j.items || []).filter(x => x && x.text && x.he).slice(0, n);
}

/* ---------- navigation ---------- */
const NAV = { cur: 'home', arg: null, stack: [] };
function go(id, arg, noPush) {
  if (!noPush && NAV.cur !== id) NAV.stack.push({ id: NAV.cur, arg: NAV.arg });
  if (id === 'home') NAV.stack = [];
  if (DLG.cur >= 0 || DLG.run) { DLG.run++; DLG.cur = -1; }
  if (id === 'cards' && !noPush) cardsStart();
  NAV.cur = id; NAV.arg = arg;
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  render();
  window.scrollTo(0, 0);
  const m = $('#app'); m.classList.remove('enter'); void m.offsetWidth; m.classList.add('enter');
  const h = m.querySelector('h1,h2'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
}
function back() { const p = NAV.stack.pop(); if (p) go(p.id, p.arg, true); else go('home', null, true); }

/* ---------- theming ---------- */
const THEMES = ['gold', 'sapphire', 'emerald', 'wine', 'copper'];
function applyTheme() {
  const d = document.documentElement;
  d.setAttribute('data-theme', st.theme);
  d.setAttribute('data-mode', st.mode);
  d.lang = st.ui === 'he' ? 'he' : st.ui;
  d.dir = isRTL() ? 'rtl' : 'ltr';
  const m = document.querySelector('meta[name=theme-color]');
  if (m) m.content = getComputedStyle(d).getPropertyValue('--bg').trim() || '#000000';
}

/* ---------- UI atoms ---------- */
const tgt = (it, lang, cls) => '<span class="tgt ' + (cls || '') + '" lang="' + LANGS[lang].tts + '" dir="' + LANGS[lang].dir + '">' + esc(it.text) + '</span>';
const backBtn = () => '<button class="back" data-act="back" aria-label="' + esc(T('back')) + '"><span class="arr">' + (isRTL() ? '→' : '←') + '</span> ' + esc(T('back')) + '</button>';
const header = title => '<header class="bar">' + backBtn() + '<h2>' + esc(title) + '</h2><button class="home-ic" data-act="home" aria-label="' + esc(T('home')) + '">⌂</button></header>';
const bar = (v, max) => '<div class="pbar" role="progressbar" aria-valuemin="0" aria-valuemax="' + max + '" aria-valuenow="' + v + '"><i style="width:' + (max ? Math.round(100 * v / max) : 0) + '%"></i></div>';
const soundBtns = (k) => '<button class="ic" data-act="say" data-k="' + esc(k) + '" aria-label="' + esc(T('listen')) + '">🔊</button><button class="ic" data-act="say" data-slow="1" data-k="' + esc(k) + '" aria-label="' + esc(T('slow')) + '">🐢</button>';
function findItem(lang, k) { return items(lang).find(i => i.k === k); }

/* ---------- render router ---------- */
function render() {
  applyTheme();
  const f = SCREENS[NAV.cur] || SCREENS.home;
  $('#app').innerHTML = f(NAV.arg);
  if (NAV.cur === 'lesson') LESSON.paint();
  document.title = APP.name;
}
const SCREENS = {};

/* ===== HOME ===== */
SCREENS.home = () => {
  const lang = st.lang, stats = levelStats(lang), cur = curLevel(lang), s = stats[cur];
  const due = dueCount(lang), nl = newLeft();
  const all = items(lang).filter(i => i.type !== 'L');
  const wod = all[(Math.floor(Date.now() / 864e5) * 7) % all.length];
  const chips = Object.keys(LANGS).map(l => '<button class="chip' + (l === lang ? ' on' : '') + '" data-act="setLang" data-l="' + l + '" aria-pressed="' + (l === lang) + '"><span class="fl">' + LANGS[l].flag + '</span><span>' + esc(LN(l)) + '</span>' + (langPct(l) == null ? '' : '<small>' + langPct(l) + '%</small>') + '</button>').join('');
  return `
  <header class="top">
    <div class="brand"><span class="logo" aria-hidden="true">✦</span><div><b>${APP.name}</b><small>${esc(T('tagline'))}</small></div></div>
    <div class="tools">
      <button class="dot ${aiReady() ? 'on' : ''}" data-act="nav" data-to="settings" data-sec="ai" aria-label="${esc(T('aiStatus'))}: ${aiReady() ? esc(T('connected')) : esc(T('notConnected'))}"></button>
      <button class="ic" data-act="themeSheet" aria-label="${esc(T('design'))}">🎨</button>
      <button class="ic" data-act="nav" data-to="about" aria-label="${esc(T('about'))}">ℹ️</button>
      <button class="ic" data-act="nav" data-to="settings" aria-label="${esc(T('settings'))}">⚙️</button>
    </div>
  </header>
  <p class="hello">${esc(st.user ? T('helloName', { n: st.user }) : T('helloAnon'))}</p>
  <nav class="chips" aria-label="${esc(T('chooseLang'))}">${chips}</nav>
  <button class="search-btn" data-act="nav" data-to="search">🔍 <span>${esc(T('searchBtn', { l: LN(lang) }))}</span></button>
  <section class="hero" aria-label="${esc(T('wordOfDay'))}">
    <div class="hero-top"><span>${esc(T('wordOfDay'))}</span><span>${typeof weekCount === 'function' ? '<span class="wk" title="' + esc(T('weekGoal')) + '">🎯 ' + weekCount() + '/' + (st.weekGoal || 100) + '</span> ' : ''}<span class="streak" title="${esc(T('streak'))}">🔥 ${st.streak.last === today() || st.streak.last === dayKey(-1) ? st.streak.n : 0}</span></span></div>
    <div class="wod">${tgt(wod, lang, 'xl')}</div>
    <div class="wod-sub"><span class="pr">${esc(pron(wod))}</span><span class="mn">${esc(meaning(wod))}</span></div>
    <div class="row c">${soundBtns(wod.k)}<button class="ic" data-act="big" data-k="${wod.k}" aria-label="${esc(T('showBig'))}">⛶</button></div>
    <hr class="rule">
    <div class="lvl"><span>${esc(T('level'))} ${cur} · ${esc(T('lvl' + cur))}</span><span>${s.mastered}/${s.total}</span></div>
    ${bar(s.mastered, s.total)}
    <button class="cta" data-act="startAuto">▶ ${esc(T('continue'))}<small>${esc(T('ctaSub', { d: due, n: nl }))}</small></button>
  </section>
  <div class="grid">
    <button class="tile" data-act="nav" data-to="letters"><span>🔤</span><b>${esc(T('letters'))}</b><small>${(ALPHA[lang] || []).length} ${esc(T('lettersCount'))}${VOWELS[lang] ? ' + ' + esc(T('vowels')) : ''}</small></button>
    <button class="tile" data-act="nav" data-to="topics"><span>💬</span><b>${esc(T('words'))}</b><small>${esc(T('countWords', { n: items(lang).filter(i => i.type === 'W').length, c: WORD_CATS.length - 1 }))}</small></button>
    <button class="tile" data-act="nav" data-to="topics" data-arg="P"><span>🗣️</span><b>${esc(T('phrases'))}</b><small>${esc(T('countPhrases', { n: items(lang).filter(i => i.type === 'P').length, c: PHRASE_CATS.length }))}</small></button>
    <button class="tile" data-act="nav" data-to="practice"><span>🎯</span><b>${esc(T('practice'))}</b><small>${esc(T('practiceSub'))}</small></button>
    <button class="tile" data-act="nav" data-to="dialogs"><span>🎭</span><b>${esc(T('dialogs'))}</b><small>${esc(T('dialogsSub', { n: DIALOGS.length }))}</small></button>
    <button class="tile" data-act="nav" data-to="price"><span>💰</span><b>${esc(T('prices'))}</b><small>${esc(T('pricesSub'))}</small></button>
    <button class="tile" data-act="nav" data-to="chat"><span>🤖</span><b>${esc(T('chat'))}</b><small>${esc(T('chatSub'))}</small></button>
    <button class="tile" data-act="nav" data-to="kit"><span>🧳</span><b>${esc(T('kit'))}</b><small>${esc(T('kitSub'))}</small></button>
    <button class="tile" data-act="nav" data-to="tips"><span>💡</span><b>${esc(T('tips'))}</b><small>${esc(T('tipsSub'))}</small></button>
    <button class="tile" data-act="nav" data-to="search"><span>🔍</span><b>${esc(T('searchTitle'))}</b><small>${esc(T('searchSub'))}</small></button>
    <button class="tile wide" data-act="nav" data-to="speak"><span>📢</span><b>${esc(T('speakForMe'))}</b><small>${esc(T('speakSub', { l: LN(lang) }))}</small></button>
    <button class="tile wide" data-act="nav" data-to="progress"><span>📈</span><b>${esc(T('progress'))}</b><small>${esc(T('progressSub'))}</small></button>
  </div>
  ${location.protocol === 'file:' ? '<p class="warn">⚠️ ' + esc(T('fileWarn')) + '</p>' : ''}
  <footer class="badge">AppNest · v${APP.ver}</footer>`;
};

/* ===== LETTERS ===== */
function langNote(lang) {
  if (ALPHA_NOTE[lang]) return T(ALPHA_NOTE[lang]);
  const n = LANG_NOTE[lang]; return n ? (n[st.ui] || n.en || '') : T('noteGeneric');
}
SCREENS.letters = () => {
  const lang = st.lang, p = P(lang);
  const tile = i => {
    const r = p[i.k]; const cls = r ? (r.b >= 3 ? 'm' : 's') : '';
    return '<button class="lt ' + cls + '" data-act="letter" data-k="' + i.k + '"><span class="tgt" lang="' + LANGS[lang].tts + '">' + esc(i.text) + '</span><small>' + esc(st.ui === 'he' ? i.heb.split(' (')[0].split(' — ')[0] : i.roman) + '</small></button>';
  };
  const tiles = items(lang).filter(i => i.cat === 'letters').map(tile).join('');
  const vw = items(lang).filter(i => i.cat === 'vowels');
  const vowelsHtml = vw.length ? '<h3>' + esc(T('vowels')) + '</h3><p class="note">' + esc(VOWEL_NOTE[lang] ? (VOWEL_NOTE[lang][st.ui] || VOWEL_NOTE[lang].en) : T(lang === 'th' ? 'vowelNoteTh' : 'vowelNoteAr')) + '</p>' +
    '<button class="cta slim" data-act="startScope" data-scope="cat:vowels">🎯 ' + esc(T('practiceVowels')) + '</button><div class="letters">' + vw.map(tile).join('') + '</div>' : '';
  const TN = TONES[lang], TW = TWISTER[lang];
  const tonesHtml = TN ? '<h3>' + esc(T('tones')) + '</h3><p class="note">' + esc(T('toneNote')) + '</p><div class="items">' +
    TN.map((t, n) => '<div class="irow"><div class="itx"><span class="tgt lg" lang="' + LANGS[lang].tts + '">' + esc(t[0]) + '</span><span class="pr">' + esc(T(t[2])) + ' · ' + esc(t[1]) + '</span><span class="mn">' + esc(T(t[3])) + '</span></div><div class="iac"><button class="ic" data-act="sayRaw" data-t="' + esc(t[0]) + '">🔊</button><button class="ic" data-act="sayRaw" data-slow="1" data-t="' + esc(t[0]) + '">🐢</button></div></div>').join('') +
    (TW ? '<div class="irow"><div class="itx"><span class="tgt md" lang="' + LANGS[lang].tts + '">' + esc(TW) + '</span><span class="mn">' + esc(T('twister')) + '</span></div><div class="iac"><button class="ic" data-act="sayRaw" data-t="' + esc(TW) + '">🔊</button><button class="ic" data-act="sayRaw" data-slow="1" data-t="' + esc(TW) + '">🐢</button></div></div>' : '') + '</div>' : '';
  return header(T('letters') + ' · ' + LN(lang)) + `
  <p class="note">${esc(langNote(lang))}</p>
  <button class="cta slim" data-act="startScope" data-scope="cat:letters">🎯 ${esc(T('practiceLetters'))}</button>
  <div class="letters">${tiles}</div>
  <p class="legend"><i class="s"></i>${esc(T('seen'))} <i class="m"></i>${esc(T('mastered'))}</p>
  ${vowelsHtml}${tonesHtml}`;
};

/* ===== TOPICS ===== */
SCREENS.topics = mode => {
  const lang = st.lang, p = P(lang), all = items(lang);
  const cats = (mode === 'P' ? PHRASE_CATS : WORD_CATS).filter(c => c === 'mine' || all.some(i => i.cat === c));
  const rows = cats.map(c => {
    const L = all.filter(i => i.cat === c), m = L.filter(i => p[i.k] && p[i.k].b >= 3).length;
    return '<button class="trow" data-act="nav" data-to="list" data-arg="' + c + '"><span class="ti">' + CAT_ICON[c] + '</span><span class="tt"><b>' + esc(T('cat_' + c)) + '</b><small>' + (c === 'mine' && !L.length ? esc(T('mineEmpty')) : m + '/' + L.length + ' · ' + esc(T('level')) + ' ' + lvRange(L)) + '</small>' + (L.length ? bar(m, L.length) : '') + '</span></button>';
  }).join('');
  return header(T(mode === 'P' ? 'phrases' : 'words') + ' · ' + LN(lang)) + '<div class="list">' + rows + '</div>';
};

function lvRange(L) { if (!L.length) return MAXL; const a = Math.min(...L.map(i => i.lvl)), b = Math.max(...L.map(i => i.lvl)); return a === b ? a : a + '–' + b; }
/* ===== ITEM LIST (category) ===== */
SCREENS.list = cat => {
  const lang = st.lang, p = P(lang), favs = st.favs[lang] || [];
  let L = items(lang).filter(i => i.cat === cat);
  if (cat === 'num') L = L.slice().sort((a, b) => parseInt(a.k.slice(3)) - parseInt(b.k.slice(3)));
  const rows = L.map(i => rowHTML(i, lang, p, favs)).join('');
  const mineTools = cat === 'mine' ? `<div class="row wrap">
      <button class="btn" data-act="addCustom">➕ ${esc(T('addWord'))}</button>
      <button class="btn gold" data-act="aiWords">✨ ${esc(T('aiWordsBtn'))}${aiReady() ? '' : ' <span class="tag">PRO</span>'}</button></div>` : '';
  return header(T('cat_' + cat) + ' · ' + LN(lang)) +
    (L.length ? '<button class="cta slim" data-act="startScope" data-scope="cat:' + cat + '">🎯 ' + esc(T('practiceThis')) + '</button>' : '') +
    mineTools + (L.length ? '<div class="items">' + rows + '</div>' : '<p class="empty">' + esc(T('mineEmptyLong')) + '</p>');
};
function rowHTML(i, lang, p, favs) {
    const r = p[i.k];
    return '<div class="irow' + (r && r.b >= 3 ? ' m' : '') + '"' + (i.cid ? ' data-lp="custom" data-id="' + i.cid + '"' : '') + '>' +
      '<div class="itx">' + tgt(i, lang, i.type === 'P' ? 'md' : 'lg') + '<span class="pr">' + esc(pron(i)) + (pron2(i) ? ' <em>' + esc(pron2(i)) + '</em>' : '') + '</span><span class="mn">' + esc(meaning(i)) + '</span></div>' +
      '<div class="iac">' + soundBtns(i.k) +
      '<button class="ic" data-act="big" data-k="' + i.k + '" aria-label="' + esc(T('showBig')) + '">⛶</button>' +
      '<button class="ic fav' + (favs.includes(i.k) ? ' on' : '') + '" data-act="fav" data-k="' + i.k + '" aria-label="' + esc(T('fav')) + '" aria-pressed="' + favs.includes(i.k) + '">★</button>' +
      (i.cid ? '<button class="ic" data-act="editCustom" data-id="' + i.cid + '" aria-label="' + esc(T('edit')) + '">✎</button>' : '') +
      '</div></div>';
}

/* ===== SEARCH: how do you say…? ===== */
let SQ = '';
function searchResults(q) {
  const lang = st.lang, nq = norm(q);
  if (!nq) return [];
  const score = i => {
    const f = [i.he, i.en, i.text, i.roman, i.heb].map(norm);
    if (f.some(x => x === nq)) return 3;
    if (f.some(x => x.startsWith(nq))) return 2;
    if (f.some(x => x.includes(nq))) return 1;
    return 0;
  };
  return items(lang).filter(i => i.type !== 'L').map(i => [i, score(i)]).filter(x => x[1]).sort((a, b) => b[1] - a[1]).slice(0, 30).map(x => x[0]);
}
function searchListHTML() {
  const lang = st.lang, res = searchResults(SQ);
  if (!SQ.trim()) return '<p class="hint">' + esc(T('searchHint')) + '</p>';
  const miss = '<div class="card"><p>' + esc(T('searchNone', { q: SQ })) + '</p><button class="cta slim" data-act="searchToSpeak">✨ ' + esc(T('searchTranslate')) + (aiReady() ? '' : ' <span class="tag">PRO</span>') + '</button></div>';
  return res.length ? '<div class="items">' + res.map(i => rowHTML(i, lang, P(lang), st.favs[lang] || [])).join('') + '</div>' + (res.length < 3 ? miss : '') : miss;
}
SCREENS.search = () => header(T('searchTitle') + ' · ' + LN(st.lang)) + `
  <label class="fld"><span>${esc(T('searchLabel'))}</span><input id="sIn" type="search" value="${esc(SQ)}" dir="auto" autocomplete="off" placeholder="${esc(T('searchPh'))}"></label>
  <div id="sRes">${searchListHTML()}</div>`;

/* ===== DIALOGUES ===== */
const DLG = { role: false, shown: {}, run: 0, cur: -1 };
function dlgLines(id) {
  const d = DIALOGS.find(x => x[0] === id); if (!d) return [];
  return d[2].map((x, n) => ({ n, me: x[0] === 'M', it: findItem(st.lang, 'W:' + x.slice(2)) })).filter(x => x.it);
}
SCREENS.dialogs = () => header(T('dialogs') + ' · ' + LN(st.lang)) + '<p class="note">' + esc(T('dialogsIntro')) + '</p><div class="list">' +
  DIALOGS.map(d => { const L = dlgLines(d[0]), p = P(st.lang), m = L.filter(x => p[x.it.k] && p[x.it.k].b >= 3).length;
    return '<button class="trow" data-act="nav" data-to="dialog" data-arg="' + d[0] + '"><span class="ti">' + d[1] + '</span><span class="tt"><b>' + esc(T('dlg_' + d[0])) + '</b><small>' + esc(T('dlgLines', { n: L.length })) + ' · ' + m + '/' + L.length + '</small>' + bar(m, L.length) + '</span></button>'; }).join('') + '</div>';
SCREENS.dialog = id => {
  const lang = st.lang, L = dlgLines(id), d = DIALOGS.find(x => x[0] === id);
  const line = x => {
    const hide = DLG.role && x.me && !DLG.shown[x.n];
    return '<div class="bub ' + (x.me ? 'me' : 'them') + (DLG.cur === x.n ? ' playing' : '') + '" id="dl' + x.n + '"><small class="who">' + esc(x.me ? T('you') : T('local')) + '</small>' +
      (hide ? '<p class="mn big">' + esc(meaning(x.it)) + '</p><button class="btn" data-act="dlgReveal" data-n="' + x.n + '">👁️ ' + esc(T('reveal')) + '</button>' +
        (SR ? ' <button class="btn" data-act="dlgSay" data-n="' + x.n + '">🎤 ' + esc(T('sayIt')) + '</button><p class="said" id="said' + x.n + '"></p>' : '')
      : tgt(x.it, lang, 'md') + '<span class="pr">' + esc(pron(x.it)) + '</span><span class="mn">' + esc(meaning(x.it)) + '</span>') +
      '<div class="bac"><button class="ic" data-act="dlgLine" data-n="' + x.n + '" aria-label="' + esc(T('listen')) + '">🔊</button><button class="ic" data-act="dlgLine" data-slow="1" data-n="' + x.n + '" aria-label="' + esc(T('slow')) + '">🐢</button></div></div>';
  };
  return header((d ? d[1] + ' ' : '') + T('dlg_' + id)) + `
  <div class="row wrap"><button class="cta slim" data-act="dlgPlay" data-arg="${id}">${DLG.cur >= 0 ? '⏹ ' + esc(T('stop')) : '▶ ' + esc(T('playAll'))}</button></div>
  <div class="seg"><button class="${DLG.role ? '' : 'on'}" data-act="dlgRole" data-v="0">📖 ${esc(T('readMode'))}</button><button class="${DLG.role ? 'on' : ''}" data-act="dlgRole" data-v="1">🎭 ${esc(T('roleMode'))}</button></div>
  ${DLG.role ? '<p class="hint">' + esc(T('roleHint')) + '</p>' : ''}
  <div class="chat">${L.map(line).join('')}</div>
  <button class="btn" data-act="startScope" data-scope="cat:dlg_${id}">🎯 ${esc(T('practiceDlg'))}</button>`;
};
function dlgStop() { DLG.run++; DLG.cur = -1; if ('speechSynthesis' in window) speechSynthesis.cancel(); }
function dlgPlay(id) {
  if (DLG.cur >= 0) { dlgStop(); render(); return; }
  const L = dlgLines(id), run = ++DLG.run;
  const step = i => {
    if (run !== DLG.run) return;
    if (i >= L.length || NAV.cur !== 'dialog') { DLG.cur = -1; if (NAV.cur === 'dialog') render(); return; }
    DLG.cur = L[i].n;
    document.querySelectorAll('.bub').forEach(b => b.classList.toggle('playing', b.id === 'dl' + L[i].n));
    const cta = document.querySelector('[data-act=dlgPlay]'); if (cta) cta.textContent = '⏹ ' + T('stop');
    const el = document.getElementById('dl' + L[i].n); if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    let done = false; const next = () => { if (done) return; done = true; setTimeout(() => step(i + 1), 450); };
    speak(ttsText(L[i].it), st.lang, false, next, !L[i].me);
    setTimeout(next, 2500 + 160 * ttsText(L[i].it).length);
  };
  step(0);
}

/* ===== PRICES & NUMBERS ===== */
const PRICE = { n: 350, cur: true, q: null, ok: 0, tot: 0 };
function priceHTML() {
  const lang = st.lang, r = numWords(lang, PRICE.n, PRICE.cur);
  if (!r) return '';
  return '<div class="card result"><p class="bignum">' + (PRICE.cur ? CUR_SYM[lang] + ' ' : '') + PRICE.n.toLocaleString('en-US') + '</p>' +
    '<span class="tgt lg" lang="' + LANGS[lang].tts + '" dir="' + LANGS[lang].dir + '">' + esc(r.text) + '</span>' +
    '<p class="pr big">' + esc(st.ui === 'he' ? r.heb : r.roman) + '</p>' + (st.ui === 'he' && lang !== 'en' && lang !== 'es' ? '<p class="tiny">' + esc(r.roman) + '</p>' : '') +
    '<div class="row c"><button class="ic" data-act="priceSay">🔊</button><button class="ic" data-act="priceSay" data-slow="1">🐢</button><button class="ic" data-act="priceBig">⛶</button></div></div>';
}
function priceQuizHTML() {
  const q = PRICE.q;
  if (!q) return '<button class="cta slim" data-act="priceQuiz">🎧 ' + esc(T('guessPrice')) + '</button><p class="hint">' + esc(T('guessHint')) + '</p>';
  return '<div class="card"><p class="qh">' + esc(T('guessQ')) + (PRICE.tot ? ' · ' + PRICE.ok + '/' + PRICE.tot : '') + '</p><div class="row c"><button class="listen" data-act="priceQSay">🔊</button><button class="ic" data-act="priceQSay" data-slow="1">🐢</button></div>' +
    (q.done ? '<div class="fb ' + (q.good ? 'ok' : 'no') + '"><b>' + esc(q.good ? T('right') : T('wrongWas')) + '</b> ' + q.n.toLocaleString('en-US') + ' · <span class="tgt sm" lang="' + LANGS[st.lang].tts + '">' + esc(numWords(st.lang, q.n, true).text) + '</span></div><button class="cta slim" data-act="priceQuiz">' + esc(T('next')) + '</button>'
      : '<label class="fld"><span>' + esc(T('typeNumber')) + '</span><input id="qIn" type="number" inputmode="numeric" min="0" max="999999" dir="ltr"></label><button class="cta slim" data-act="priceCheck">✓ ' + esc(T('check')) + '</button>') + '</div>';
}
SCREENS.price = () => {
  const lang = st.lang;
  return header(T('prices') + ' · ' + LN(lang)) + `
  <p class="note">${esc(T('pricesIntro'))}</p>
  <label class="fld"><span>${esc(T('typeNumber'))}</span><input id="pIn" type="number" inputmode="numeric" min="0" max="999999" value="${PRICE.n}" dir="ltr"></label>
  <div class="chips wrap">${[5, 20, 50, 100, 250, 500, 1000, 2500, 15000].map(n => '<button class="chip" data-act="priceSet" data-n="' + n + '">' + n.toLocaleString('en-US') + '</button>').join('')}</div>
  <div class="seg"><button class="${PRICE.cur ? 'on' : ''}" data-act="priceCur" data-v="1">💰 ${esc(T('withCur', { c: CUR_SYM[lang] }))}</button><button class="${PRICE.cur ? '' : 'on'}" data-act="priceCur" data-v="0">🔢 ${esc(T('numOnly'))}</button></div>
  <div id="pRes">${priceHTML()}</div>
  ${lang === 'ar' ? '<p class="tiny">' + esc(T('arNumNote')) + '</p>' : ''}
  <h3>🎧 ${esc(T('guessPrice'))}</h3><div id="pQuiz">${priceQuizHTML()}</div>`;
};
function randPrice() {
  const r = Math.random();
  if (r < 0.35) return 5 * (2 + Math.floor(Math.random() * 19));
  if (r < 0.75) return 10 * (10 + Math.floor(Math.random() * 90));
  if (r < 0.95) return 50 * (20 + Math.floor(Math.random() * 180));
  return 500 * (20 + Math.floor(Math.random() * 60));
}

/* ===== PRACTICE MENU ===== */
SCREENS.practice = () => {
  const lang = st.lang, p = P(lang), all = items(lang), now = Date.now(), favs = st.favs[lang] || [];
  const due = all.filter(i => p[i.k] && p[i.k].d <= now).length;
  const weak = all.filter(i => p[i.k] && (p[i.k].w > 0 && p[i.k].b <= 2)).length;
  const opt = (scope, ic, label, n) => '<button class="trow" data-act="startScope" data-scope="' + scope + '"' + (n === 0 ? ' disabled' : '') + '><span class="ti">' + ic + '</span><span class="tt"><b>' + esc(label) + '</b><small>' + (n == null ? '' : n + ' ' + esc(T('itemsN'))) + '</small></span></button>';
  return header(T('practice') + ' · ' + LN(lang)) + '<div class="list">' +
    opt('due', '⏰', T('prDue'), due) + opt('L', '🔤', T('letters'), all.filter(i => i.type === 'L').length) +
    opt('W', '💬', T('words'), all.filter(i => i.type === 'W').length) + opt('P', '🗣️', T('phrases'), all.filter(i => i.type === 'P').length) +
    opt('fav', '★', T('prFav'), favs.length) + opt('weak', '🩹', T('prWeak'), weak) + opt('listen', '🎧', T('prListen'), null) +
    (SR ? opt('say', '🎤', T('prSay'), null) : '') + (VOWELS[lang] ? opt('cat:vowels', '🔡', T('vowels'), VOWELS[lang].length) : '') +
    opt('build', '🧩', T('prBuild'), all.filter(i => i.type === 'P' && canBuild(i, lang)).length) +
    opt('dict', '⌨️', T('prDict'), all.filter(i => dictTarget(i)).length) +
    '<button class="trow" data-act="nav" data-to="cards" data-arg="mix"><span class="ti">🃏</span><span class="tt"><b>' + esc(T('prCards')) + '</b><small>' + esc(T('cardsSub')) + '</small></span></button>' +
    '</div>';
};

/* ---------- sentence builder + dictation helpers ---------- */
function sentTokens(it, lang) {
  const t = it.text.replace(/\.\.\./g, '…');
  let a;
  if (lang === 'th') {
    if (!(window.Intl && Intl.Segmenter)) return null;
    a = [...new Intl.Segmenter('th', { granularity: 'word' }).segment(t)].map(x => x.segment).filter(x => x.trim());
  } else a = t.split(/\s+/).filter(Boolean);
  const out = [];
  a.forEach(x => { if (/^[\p{P}\s]+$/u.test(x) && out.length) out[out.length - 1] += x; else out.push(x); });
  return out;
}
function canBuild(it, lang) { if (it.type !== 'P' || it.text.includes('...')) return false; const t = sentTokens(it, lang); return !!t && t.length >= 3 && t.length <= 9; }
const isLatin = s => /^[\p{Script=Latin}\p{P}\p{N}\s]+$/u.test(s);
function dictTarget(it) {
  if (it.type === 'L' || it.text.length > 32 || it.text.includes('...')) return '';
  if (isLatin(it.text)) return it.text;
  return it.roman && isLatin(it.roman) ? it.roman : '';
}
/* ===== FLASHCARDS ===== */
const CARDS = { deck: [], i: 0, flip: false, ok: 0, bad: 0, x0: null };
function cardsDeck() {
  const lang = st.lang, p = P(lang), all = items(lang).filter(i => i.type !== 'L'), now = Date.now();
  const due = all.filter(i => p[i.k] && p[i.k].d <= now);
  const seen = shuffle(all.filter(i => p[i.k] && !due.includes(i)));
  const fresh = all.filter(i => !p[i.k] && i.lvl <= curLevel(lang) + 1);
  return due.concat(seen, fresh).slice(0, 20);
}
SCREENS.cards = () => {
  const lang = st.lang, c = CARDS;
  if (!c.deck.length) return header(T('prCards')) + '<p class="empty">' + esc(T('nothingNow')) + '</p>';
  if (c.i >= c.deck.length) return header(T('prCards')) + '<div class="card sum"><p class="big-num">' + c.ok + '/' + c.deck.length + '</p><p>' + esc(T('cardsDone', { n: c.deck.length })) + '</p><div class="row c wrap"><button class="cta" data-act="cardsNew">🃏 ' + esc(T('another')) + '</button><button class="btn" data-act="home">⌂ ' + esc(T('home')) + '</button></div></div>';
  const it = c.deck[c.i];
  return header(T('prCards') + ' · ' + (c.i + 1) + '/' + c.deck.length) + `
  <div class="flash${c.flip ? ' flipped' : ''}" id="flash" data-act="cardFlip" role="button" tabindex="0" aria-label="${esc(T('cardFlip'))}">
    ${tgt(it, lang, it.type === 'P' ? 'lg' : 'xl')}
    ${c.flip ? '<p class="pr big">' + esc(pron(it)) + '</p><p class="mn big">' + esc(meaning(it)) + '</p>' : '<p class="tiny">' + esc(T('cardFlip')) + '</p>'}
  </div>
  <div class="row c">${soundBtns(it.k)}</div>
  <div class="row c cardbtns"><button class="btn red" data-act="cardGrade" data-ok="0">✗ ${esc(T('notYetKnew'))}</button><button class="btn gold" data-act="cardGrade" data-ok="1">✓ ${esc(T('knew'))}</button></div>
  <p class="hint c">${esc(T('swipeHint'))}</p>`;
};
function cardsStart() { Object.assign(CARDS, { deck: cardsDeck(), i: 0, flip: false, ok: 0, bad: 0 }); }
function cardGrade(ok) {
  const it = CARDS.deck[CARDS.i]; if (!it) return;
  grade(st.lang, it.k, ok); ok ? CARDS.ok++ : CARDS.bad++;
  CARDS.i++; CARDS.flip = false; render();
  const n = CARDS.deck[CARDS.i]; if (n) setTimeout(() => speak(ttsText(n), st.lang), 200);
}

/* ===== CONTENT QUALITY CHECK (Pro, uses the user's AI key) ===== */
const QA = { run: 0, busy: false, done: 0, total: 0, next: 0, issues: [], lang: '', msg: '', finished: false };
/* saved progress is only valid for the same release — a new release may already contain the fixes */
(() => { const saved = S.get('ln_qa', null); if (saved && saved.ver === APP.ver) Object.assign(QA, saved, { busy: false, msg: '' }); else if (saved) S.del('ln_qa'); })();
function qaSave() { S.set('ln_qa', { ver: APP.ver, lang: QA.lang, done: QA.done, total: QA.total, next: QA.next, issues: QA.issues, finished: QA.finished }); }
/* house style of the Hebrew-letter pronunciation — told to the reviewer so it doesn't flag deliberate choices */
const QA_STYLE = {
  _: 'Hebrew-letter pronunciation is deliberately simple: no niqqud (a segol is used only for the open e sound), aspiration is NOT marked, stress and tone are not marked. Equivalent Hebrew spellings (ו/וו, ט/ת, כ/ק) are fine. Do NOT report these conventions.',
  ary: 'This is Moroccan Darija (not Modern Standard Arabic) — judge it as spoken Moroccan Arabic. Darija has no fixed spelling: accept common Moroccan spellings. The Latin column deliberately uses the Moroccan chat alphabet (3 = ع, 7 = ح, 9 = ق). French loanwords common in Morocco are correct.',
  yi: 'This is standard YIVO Yiddish: Hebrew-origin words keep traditional Hebrew spelling (שבת, מזל, חבֿר) with Ashkenazi pronunciation; the Latin column is YIVO romanization; the Hebrew-letter column is a simplified spelling for Israeli readers (no Yiddish diacritics) that is also read aloud by a Hebrew voice. Hasidic pronunciation variants are fine, do not flag them.',
  it: 'Italian: Hebrew-letter pronunciation is an approximation; compound numbers are written as one word in Italian and hyphenated in the Hebrew column on purpose. The Latin column is empty on purpose.',
  pt: 'This is BRAZILIAN Portuguese (not European) — judge it by Brazilian usage and pronunciation (você, ônibus, te/de → צ׳י/דז׳י, initial r → ה). The Latin column is empty on purpose.',
  ro: 'Romanian: Hebrew-letter pronunciation is an approximation (ă, â/î have no Hebrew equivalent). The Latin column is empty on purpose.',
  fr: 'French: the Hebrew-letter pronunciation is an approximation — nasal vowels are written with ן, the French u as ו, liaison is shown where it matters. The Latin column is empty on purpose (French is already Latin script).',
  th: 'Thai conventions used on purpose: ก→ג, ข/ค→ק, ต→ט, ท/ถ→ט, ป→פ, พ/ผ→פ, จ→ג׳, ช→צ׳, final ล/ร→ן (e.g. แอปเปิ้ล = אֶפ-פֶן), the vowel ึ/ื → ו. Tones are not written.'
};
function qaBatches(lang) {
  const ids = CONCEPTS.map(c => c[0]).filter(id => WD[lang] && WD[lang][id]);
  const out = []; for (let i = 0; i < ids.length; i += 30) out.push(ids.slice(i, i + 30)); return out;
}
const QA_WAITS = [15, 30, 60, 90, 120];                 /* seconds — free Gemini tier is often busy for a minute or two */
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function qaRun(resume) {
  const lang = st.lang, run = ++QA.run, batches = qaBatches(lang), cmap = {};
  CONCEPTS.forEach(c => { cmap[c[0]] = c; });
  if (!resume || QA.lang !== lang) Object.assign(QA, { done: 0, next: 0, issues: [], finished: false });
  Object.assign(QA, { lang, busy: true, msg: '', total: batches.reduce((a, b) => a + b.length, 0) });
  qaSave(); render();
  for (let bi = QA.next; bi < batches.length; bi++) {
    if (run !== QA.run) return;
    const b = batches[bi];
    const lines = b.map(id => { const t = WD[lang][id]; return id + ' | ' + cmap[id][3] + ' | ' + t[0] + ' | ' + t[1] + ' | ' + t[2]; }).join('\n');
    const prompt = 'You are a native ' + LANGS[lang].name.en + ' speaker and an experienced teacher, reviewing a travel phrasebook for Hebrew speakers. ' +
      'Each line: id | Hebrew meaning | ' + LANGS[lang].name.en + ' text | Latin transliteration | pronunciation written in Hebrew letters. ' +
      'Report ONLY real problems: a wrong or unnatural translation for the Hebrew meaning, spelling mistakes, or a transliteration / Hebrew-letter pronunciation that would clearly lead to a wrong pronunciation. ' +
      'Ignore small stylistic choices. ' + QA_STYLE._ + ' ' + (QA_STYLE[lang] || '') + ' The traveler is male, so male speaker forms are intentional' + (lang === 'th' ? ' (ครับ, ผม); lines where a local vendor or driver speaks may use ค่ะ on purpose' : '') + '. ' +
      'Return ONLY JSON: {"issues":[{"id":"...","problem":"short explanation in Hebrew","text":"corrected native text, or empty if fine","roman":"corrected transliteration, or empty","heb":"corrected Hebrew-letter pronunciation, or empty"}]}. If everything is fine return {"issues":[]}.\n\n' + lines;
    let tries = 0, res = null;
    while (!res) {
      if (run !== QA.run) return;
      try { res = await aiJSON(prompt); }
      catch (e) {
        const busy = aiBusy(e);
        if (busy && tries < QA_WAITS.length) {
          const wait = QA_WAITS[tries++];
          for (let sec = wait; sec > 0; sec--) { if (run !== QA.run) return; QA.msg = T('qaWait2', { s: sec, n: tries, m: QA_WAITS.length }); qaPaint(); await sleep(1000); }
          QA.msg = ''; continue;
        }
        QA.busy = false; QA.msg = busy ? T('qaBusyErr') : T('aiErr') + ': ' + e.message; qaSave(); qaPaint(); return;
      }
    }
    if (run !== QA.run) return;
    (res.issues || []).forEach(x => { if (x && b.includes(x.id) && (x.text || x.roman || x.heb) && !QA.issues.some(y => y.id === x.id)) QA.issues.push({ id: x.id, problem: String(x.problem || ''), text: String(x.text || ''), roman: String(x.roman || ''), heb: String(x.heb || '') }); });
    QA.done += b.length; QA.next = bi + 1; qaSave(); qaPaint();
    await sleep(2500);
  }
  QA.busy = false; QA.finished = true; QA.msg = T('qaDone'); qaSave(); qaPaint();
}
function qaIssueHTML(x, n) {
  const lang = QA.lang, t = WD[lang][x.id], c = CONCEPTS.find(k => k[0] === x.id), dir = LANGS[lang].dir, tl = LANGS[lang].tts;
  const cell = (a, b, cls) => b && b !== a ? '<span class="qa-old ' + (cls || '') + '">' + esc(a) + '</span> → <span class="qa-new ' + (cls || '') + '">' + esc(b) + '</span>' : '<span class="' + (cls || '') + '">' + esc(a) + '</span>';
  return '<div class="card qa"><p class="mn">' + esc(c ? (st.ui === 'he' ? c[3] : c[4]) : x.id) + ' · <small>' + esc(x.id) + '</small></p>' +
    '<p class="tgt md" lang="' + tl + '" dir="' + dir + '">' + cell(t[0], x.text) + '</p><p class="pr">' + cell(t[2], x.heb) + '</p><p class="tiny" dir="ltr">' + cell(t[1], x.roman) + '</p>' +
    '<p class="hint">💬 ' + esc(x.problem) + '</p><div class="row wrap"><button class="btn gold" data-act="qaApply" data-n="' + n + '">✓ ' + esc(T('qaApply')) + '</button><button class="btn" data-act="qaIgnore" data-n="' + n + '">' + esc(T('qaIgnore')) + '</button>' +
    (x.text ? '<button class="ic" data-act="sayRaw" data-t="' + esc(x.text) + '">🔊</button>' : '') + '</div></div>';
}
function qaBodyHTML() {
  const fixes = Object.keys(st.fix[st.lang] || {}).length;
  let h = '';
  if (QA.lang === st.lang && (QA.busy || QA.done || QA.msg)) {
    h += '<p>' + esc(T('qaProgress', { d: QA.done, t: QA.total })) + '</p>' + bar(QA.done, QA.total);
    if (QA.msg) h += '<p class="hint">' + esc(QA.msg) + '</p>';
    if (!QA.busy) h += '<p><b>' + esc(QA.issues.length ? T('qaFound', { n: QA.issues.length }) : T('qaNone')) + '</b></p>';
    h += QA.issues.map(qaIssueHTML).join('');
    if (QA.issues.length && !QA.busy) h += '<button class="btn" data-act="qaCopy">📋 ' + esc(T('qaCopy')) + '</button><p class="tiny">' + esc(T('qaCopyHint')) + '</p>';
  }
  if (fixes) h += '<div class="card"><p>' + esc(T('qaFixes', { n: fixes })) + '</p><div class="row wrap"><button class="btn" data-act="qaCopyFixes">📋 ' + esc(T('qaCopy')) + '</button><button class="btn red" data-act="qaReset">' + esc(T('qaReset')) + '</button></div></div>';
  return h;
}
function qaPaint() { const b = $('#qaBody'); if (b && NAV.cur === 'qa') { b.innerHTML = qaBodyHTML(); const s = $('#qaStart'); if (s) s.outerHTML = qaStartBtn(); } }
const qaStartBtn = () => {
  if (QA.busy && QA.lang === st.lang) return '<div id="qaStart"><button class="cta slim" data-act="qaStop">⏹ ' + esc(T('qaStop')) + '</button></div>';
  const canResume = QA.lang === st.lang && QA.next > 0 && !QA.finished;
  return '<div id="qaStart">' + (canResume ? '<button class="cta slim" data-act="qaResume">▶ ' + esc(T('qaResume', { d: QA.done, t: QA.total })) + '</button><button class="btn" data-act="qaStart">↺ ' + esc(T('qaRestart')) + '</button>'
    : '<button class="cta slim" data-act="qaStart">🔍 ' + esc(T('qaStart', { l: LN(st.lang) })) + (aiReady() ? '' : ' <span class="tag">PRO</span>') + '</button>') + '</div>';
};
SCREENS.qa = () => header(T('qaTitle') + ' · ' + LN(st.lang)) + '<p class="note">' + esc(T('qaIntro')) + '</p>' + qaStartBtn() + '<p class="tiny">' + esc(T('aiPrivacy')) + '</p><div id="qaBody">' + qaBodyHTML() + '</div>';
function qaReportText(list, lang) {
  return 'LingoNest ' + APP.ver + ' · ' + LANGS[lang].name.en + '\n' + list.map(x => { const t = WD[lang][x.id] || ['', '', '']; return x.id + ': ' + t[0] + ' | ' + t[1] + ' | ' + t[2] + '  →  ' + (x.text || t[0]) + ' | ' + (x.roman || t[1]) + ' | ' + (x.heb || t[2]) + (x.problem ? '  (' + x.problem + ')' : ''); }).join('\n');
}

/* ===== LESSON (session engine) ===== */
const LESSON = {
  q: [], i: 0, ok: 0, bad: 0, fresh: 0, answered: false, lang: 'th', listenOnly: false,
  start(scope) {
    const lang = this.lang = st.lang, p = P(lang), all = items(lang), now = Date.now();
    let q = [];
    this.listenOnly = scope === 'listen';
    this.sayMode = scope === 'say';
    if (scope === 'auto') {
      const cur = curLevel(lang);
      const due = all.filter(i => p[i.k] && p[i.k].d <= now && i.lvl <= cur + 1).sort((a, b) => p[a.k].d - p[b.k].d).slice(0, 15);
      let fresh = all.filter(i => !p[i.k] && i.lvl === cur).slice(0, Math.min(newLeft(), 7));
      if (!fresh.length && !due.length) fresh = all.filter(i => !p[i.k] && i.lvl <= cur + 1).slice(0, 5);
      q = fresh.map(it => ({ it, intro: true })).concat(shuffle(due.concat(fresh)).map(it => ({ it })));
      this.fresh = fresh.length;
    } else {
      let pool;
      if (scope === 'due') pool = all.filter(i => p[i.k] && p[i.k].d <= now);
      else if (scope === 'fav') pool = all.filter(i => (st.favs[lang] || []).includes(i.k));
      else if (scope === 'weak') pool = all.filter(i => p[i.k] && p[i.k].w > 0 && p[i.k].b <= 2);
      else if (scope === 'listen' || scope === 'say') pool = all.filter(i => i.type !== 'L' && (p[i.k] || i.lvl <= 2));
      else if (scope === 'build') pool = all.filter(i => canBuild(i, lang) && (p[i.k] || i.lvl <= Math.max(curLevel(lang) + 2, 4)));
      else if (scope === 'dict') pool = all.filter(i => dictTarget(i) && (p[i.k] || i.lvl <= 2));
      else if (scope.startsWith('cat:')) pool = all.filter(i => i.cat === scope.slice(4));
      else pool = all.filter(i => i.type === scope);
      pool = shuffle(pool).slice(0, 10);
      const forced = { say: 'SAY', build: 'BUILD', dict: 'DICT' }[scope];
      q = pool.filter(it => !p[it.k] && scope !== 'listen' && (!forced || forced === 'BUILD')).map(it => ({ it, intro: true })).concat(pool.map(it => ({ it, kind: forced })));
      this.fresh = pool.filter(it => !p[it.k]).length;
    }
    if (!q.length) { toast(T('nothingNow'), '', 3500); return; }
    if (this.fresh) { st.newLog[today()] = (st.newLog[today()] || 0) + this.fresh; save(); }
    Object.assign(this, { q, i: 0, ok: 0, bad: 0, answered: false });
    go('lesson');
  },
  makeQ(step) {
    const it = step.it, lang = this.lang;
    const same = items(lang).filter(x => x.type === it.type && x.k !== it.k && x.text !== it.text && meaning(x) !== meaning(it));
    const opts = shuffle(shuffle(same).slice(0, 3).concat([it]));
    let kind = step.kind;
    if (!kind) {
      kind = this.listenOnly ? 'A2T' : pick(it.type === 'L' ? ['T2S', 'S2T', 'A2T'] : ['T2M', 'M2T', 'A2T', 'T2M']);
      const r = P(lang)[it.k];
      if (!this.listenOnly && it.type === 'P' && canBuild(it, lang) && Math.random() < 0.35) kind = 'BUILD';
      else if (!this.listenOnly && it.type === 'W' && r && r.b >= 2 && dictTarget(it) && Math.random() < 0.2) kind = 'DICT';
      if (!('speechSynthesis' in window) && (kind === 'A2T' || kind === 'DICT')) kind = 'T2M';
      step.kind = kind;
    }
    if (!step.opts) step.opts = opts;
    if (step.kind === 'BUILD' && !step.toks) { step.toks = sentTokens(it, lang); step.pool = shuffle(step.toks.map((_, i) => i)); if (step.pool.every((v, i) => v === i)) step.pool.reverse(); step.sel = [];
    }
    return step;
  },
  paint() {
    const box = $('#lesson'); if (!box) return;
    const lang = this.lang;
    if (this.i >= this.q.length) { box.innerHTML = this.summary(); return; }
    const step = this.q[this.i], it = step.it;
    $('#lprog').style.width = Math.round(100 * this.i / this.q.length) + '%';
    if (step.intro) {
      const said = SR ? '<button class="btn" data-act="sayIt" data-k="' + it.k + '">🎤 ' + esc(T('sayIt')) + '</button>' : '';
      box.innerHTML = '<div class="card intro"><span class="new">' + esc(T('newItem')) + '</span>' + tgt(it, lang, it.type === 'P' ? 'lg' : 'xl') +
        '<p class="pr big">' + esc(pron(it)) + (pron2(it) ? ' <em>' + esc(pron2(it)) + '</em>' : '') + '</p><p class="mn big">' + esc(it.type === 'L' ? T('soundsLike') + ' ' + (st.ui === 'he' ? it.heb : it.roman) : meaning(it)) + '</p>' +
        '<div class="row c">' + soundBtns(it.k) + said + '</div><p class="said" id="said" aria-live="polite"></p>' +
        '<button class="cta" data-act="lnext">' + esc(T('gotIt')) + '</button></div>';
      setTimeout(() => speak(ttsText(it), lang), 250);
      return;
    }
    if (step.kind === 'SAY') {
      box.innerHTML = '<div class="card intro"><p class="qh">' + esc(T('qSAY')) + '</p><p class="ask">' + esc(meaning(it)) + '</p>' + tgt(it, lang, it.type === 'P' ? 'lg' : 'xl') +
        '<p class="pr big">' + esc(pron(it)) + '</p><div class="row c">' + soundBtns(it.k) + '</div>' +
        '<button class="listen" data-act="saySession" aria-label="' + esc(T('sayIt')) + '">🎤</button><p class="said" id="said" aria-live="polite"></p>' +
        '<div id="fb" aria-live="polite"><button class="btn" data-act="sayGrade" data-ok="0">' + esc(T('skipIt')) + '</button></div></div>';
      this.answered = false;
      return;
    }
    this.makeQ(step);
    const k = step.kind;
    if (k === 'BUILD') { this.paintBuild(step); return; }
    if (k === 'DICT') {
      const lat = !isLatin(it.text);
      box.innerHTML = '<div class="card"><p class="qh">' + esc(T(lat ? 'qDICTlat' : 'qDICT')) + '</p><div class="prompt"><button class="listen" data-act="say" data-k="' + it.k + '">🔊</button><button class="ic" data-act="say" data-slow="1" data-k="' + it.k + '">🐢</button></div>' +
        '<label class="fld"><span>' + esc(T('typeHere')) + '</span><input id="dIn" dir="ltr" autocomplete="off" autocapitalize="off" spellcheck="false"></label>' +
        '<button class="cta slim" data-act="dictCheck">✓ ' + esc(T('check')) + '</button><div id="fb" aria-live="polite"></div></div>';
      this.answered = false;
      setTimeout(() => { speak(ttsText(it), lang); const i = $('#dIn'); if (i) i.focus(); }, 250);
      return;
    }
    let prompt = '';
    if (k === 'T2M' || k === 'T2S') prompt = tgt(it, lang, it.type === 'P' ? 'lg' : 'xl');
    else if (k === 'M2T') prompt = '<p class="ask">' + esc(meaning(it)) + '</p>';
    else if (k === 'S2T') prompt = '<p class="ask">' + esc(T('whichLetter')) + '</p><p class="ask big">' + esc(st.ui === 'he' ? it.heb : it.roman) + '</p>';
    else prompt = '<button class="listen" data-act="say" data-k="' + it.k + '" aria-label="' + esc(T('listen')) + '">🔊</button><button class="ic" data-act="say" data-slow="1" data-k="' + it.k + '">🐢</button>';
    const q = { T2M: 'qT2M', M2T: 'qM2T', A2T: 'qA2T', T2S: 'qT2S', S2T: 'qS2T' }[k];
    const showsTarget = k === 'M2T' || k === 'A2T' || k === 'S2T';
    const opts = step.opts.map((o, n) => '<button class="opt" data-act="answer" data-n="' + n + '">' +
      (showsTarget ? tgt(o, lang, 'md') : esc(k === 'T2S' ? (st.ui === 'he' ? o.heb : o.roman) : meaning(o))) + '</button>').join('');
    box.innerHTML = '<div class="card"><p class="qh">' + esc(T(q)) + '</p><div class="prompt">' + prompt + '</div><div class="opts">' + opts + '</div><div id="fb" aria-live="polite"></div></div>';
    this.answered = false;
    if (k === 'A2T') setTimeout(() => speak(ttsText(it), lang), 250);
  },
  paintBuild(step) {
    const it = step.it, lang = this.lang, sep = lang === 'th' ? '' : ' ';
    const chip = (i, act, pos) => '<button class="wchip" data-act="' + act + '" data-n="' + pos + '" lang="' + LANGS[lang].tts + '">' + esc(step.toks[i]) + '</button>';
    $('#lesson').innerHTML = '<div class="card"><p class="qh">' + esc(T('qBUILD')) + '</p><p class="ask">' + esc(meaning(it)) + '</p>' +
      '<div class="bans" dir="' + LANGS[lang].dir + '">' + (step.sel.length ? step.sel.map((i, pos) => chip(i, 'bUndo', pos)).join('') : '<span class="tiny">' + esc(T('bTap')) + '</span>') + '</div>' +
      '<div class="bpool" dir="' + LANGS[lang].dir + '">' + step.pool.map((i, pos) => chip(i, 'bPick', pos)).join('') + '</div>' +
      '<div class="row wrap"><button class="cta slim" data-act="bCheck"' + (step.pool.length ? ' disabled' : '') + '>✓ ' + esc(T('check')) + '</button><button class="btn" data-act="bClear">↺ ' + esc(T('bClear')) + '</button></div><div id="fb" aria-live="polite"></div></div>';
    this.answered = false;
    step._sep = sep;
  },
  bPick(pos) { const s = this.q[this.i]; if (this.answered) return; s.sel.push(s.pool.splice(pos, 1)[0]); this.paintBuild(s); },
  bUndo(pos) { const s = this.q[this.i]; if (this.answered) return; s.pool.push(s.sel.splice(pos, 1)[0]); this.paintBuild(s); },
  bClear() { const s = this.q[this.i]; if (this.answered) return; s.pool = s.pool.concat(s.sel); s.sel = []; this.paintBuild(s); },
  bCheck() { const s = this.q[this.i]; if (this.answered || s.pool.length) return; const got = s.sel.map(i => s.toks[i]).join(s._sep), want = s.toks.join(s._sep); this.finish(got === want); },
  dictCheck() {
    const s = this.q[this.i], v = ($('#dIn') || {}).value || ''; if (this.answered) return;
    if (!v.trim()) { toast(T('typeFirst'), 'warn'); return; }
    this.finish(sim(norm(v), norm(dictTarget(s.it))) >= 0.8);
  },
  finish(good) {
    if (this.answered) return;
    this.answered = true;
    const step = this.q[this.i], it = step.it;
    grade(this.lang, it.k, good);
    good ? this.ok++ : this.bad++;
    if (!good && !step.retry) this.q.push({ it, retry: true, kind: step.kind });
    try { navigator.vibrate && navigator.vibrate(good ? 20 : [40, 40, 40]); } catch (e) {}
    document.querySelectorAll('#lesson .wchip, #lesson [data-act=bCheck], #lesson [data-act=bClear], #lesson [data-act=dictCheck]').forEach(b => { b.disabled = true; });
    const fb = $('#fb');
    fb.innerHTML = '<div class="fb ' + (good ? 'ok' : 'no') + '"><b>' + esc(good ? T('right') : T('wrongWas')) + '</b> ' + tgt(it, this.lang, 'sm') + ' · <span class="pr">' + esc(pron(it)) + '</span> · ' + esc(meaning(it)) + '</div><button class="cta" data-act="lnext">' + esc(T('next')) + '</button>';
    speak(ttsText(it), this.lang);
    const nb = fb.querySelector('.cta'); if (nb) nb.focus();
  },
  answer(n) {
    if (this.answered) return;
    this.answered = true;
    const step = this.q[this.i], it = step.it, chosen = step.opts[n], good = chosen.k === it.k;
    grade(this.lang, it.k, good);
    good ? this.ok++ : this.bad++;
    document.querySelectorAll('.opt').forEach((b, j) => {
      b.disabled = true;
      if (step.opts[j].k === it.k) b.classList.add('right'); else if (j === n) b.classList.add('wrong');
    });
    if (!good && !step.retry) this.q.push({ it, retry: true });
    try { navigator.vibrate && navigator.vibrate(good ? 20 : [40, 40, 40]); } catch (e) {}
    const fb = $('#fb');
    fb.innerHTML = '<div class="fb ' + (good ? 'ok' : 'no') + '"><b>' + esc(good ? T('right') : T('wrongWas')) + '</b> ' + tgt(it, this.lang, 'sm') + ' · <span class="pr">' + esc(pron(it)) + '</span> · ' + esc(it.type === 'L' ? (st.ui === 'he' ? it.heb : it.roman) : meaning(it)) + '</div><button class="cta" data-act="lnext">' + esc(T('next')) + '</button>';
    speak(ttsText(it), this.lang);
    const nb = fb.querySelector('.cta'); if (nb) nb.focus();
  },
  sayGrade(ok) {
    if (this.answered) return;
    this.answered = true;
    const it = this.q[this.i].it;
    grade(this.lang, it.k, ok);
    ok ? this.ok++ : this.bad++;
    if (ok && typeof flag === 'function') flag('say');
    $('#fb').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '"><b>' + esc(ok ? T('saidGood') : T('sayMore')) + '</b></div><button class="cta" data-act="lnext">' + esc(T('next')) + '</button>';
    const nb = $('#fb .cta'); if (nb) nb.focus();
  },
  next() { this.i++; this.paint(); },
  summary() {
    $('#lprog').style.width = '100%';
    const tot = this.ok + this.bad, pct = tot ? Math.round(100 * this.ok / tot) : 100;
    return '<div class="card sum"><p class="big-num">' + pct + '%</p><p>' + esc(T('sumLine', { ok: this.ok, t: tot })) + '</p>' +
      (this.fresh ? '<p>' + esc(T('sumNew', { n: this.fresh })) + '</p>' : '') + '<p>🔥 ' + esc(T('streakN', { n: st.streak.n })) + '</p>' +
      '<div class="row c wrap"><button class="cta" data-act="startAuto">▶ ' + esc(T('another')) + '</button><button class="btn" data-act="home">⌂ ' + esc(T('home')) + '</button></div></div>';
  }
};
SCREENS.lesson = () => '<header class="bar">' + backBtn() + '<div class="lp"><i id="lprog"></i></div><button class="home-ic" data-act="home" aria-label="' + esc(T('home')) + '">⌂</button></header><div id="lesson"></div>';

/* ===== SPEAK FOR ME ===== */
let SPK = { src: '', res: null, direct: false };
SCREENS.speak = () => {
  const lang = st.lang;
  const saved = st.phrases.filter(x => x.lang === lang);
  const res = SPK.res;
  const gt = 'https://translate.google.com/?sl=auto&tl=' + ({ ary: 'ar' }[lang] || lang) + '&op=translate&text=' + encodeURIComponent(SPK.src || '');
  return header(T('speakForMe') + ' · ' + LN(lang)) + `
  <p class="note">${esc(T('speakIntro'))}</p>
  <div class="seg" role="tablist">
    <button role="tab" class="${SPK.direct ? '' : 'on'}" aria-selected="${!SPK.direct}" data-act="spkMode" data-v="0">${esc(T('modeTranslate'))}</button>
    <button role="tab" class="${SPK.direct ? 'on' : ''}" aria-selected="${SPK.direct}" data-act="spkMode" data-v="1">${esc(T('modeDirect', { l: LN(lang) }))}</button>
  </div>
  <label class="fld"><span>${esc(SPK.direct ? T('typeIn', { l: LN(lang) }) : T('typeHe'))}</span>
    <textarea id="spkIn" rows="3" dir="${SPK.direct ? LANGS[lang].dir : 'auto'}" placeholder="${esc(SPK.direct ? '' : T('spkPh'))}">${esc(SPK.src)}</textarea></label>
  <div class="row wrap">
    ${SPK.direct ? `<button class="cta slim" data-act="spkDirect">🔊 ${esc(T('playIt'))}</button>`
      : `<button class="cta slim" data-act="spkTranslate">✨ ${esc(T('translate'))}${aiReady() ? '' : ' <span class="tag">PRO</span>'}</button>
         <a class="btn" href="${esc(gt)}" target="_blank" rel="noopener" data-act="gtLink">🌐 Google Translate</a>`}
  </div>
  ${!SPK.direct && !aiReady() ? '<p class="hint">' + esc(T('noAiHint')) + ' <button class="link" data-act="nav" data-to="settings" data-sec="ai">' + esc(T('connectAi')) + '</button></p>' : ''}
  ${res ? `<div class="card result">
      ${tgt(res, lang, 'lg')}
      <p class="pr big">${esc(st.ui === 'he' ? (res.heb || res.roman) : (res.roman || res.heb))}</p>
      ${res.back ? '<p class="mn">↩︎ ' + esc(res.back) + '</p>' : ''}
      <div class="row c wrap">
        <button class="ic" data-act="spkSay">🔊</button><button class="ic" data-act="spkSay" data-slow="1">🐢</button>
        <button class="btn" data-act="spkBig">⛶ ${esc(T('showBig'))}</button>
        <button class="btn gold" data-act="spkSave">💾 ${esc(T('saveIt'))}</button>
      </div>
      ${res.ai ? '<p class="tiny">' + esc(T('aiDisclaimer')) + '</p>' : ''}
    </div>` : ''}
  <h3>${esc(T('myPhrases'))} (${saved.length})</h3>
  ${saved.length ? '<div class="items">' + saved.map(x => `<div class="irow" data-lp="phrase" data-id="${x.id}">
      <div class="itx"><span class="tgt md" lang="${LANGS[lang].tts}" dir="${LANGS[lang].dir}">${esc(x.text)}</span>
      <span class="pr">${esc(st.ui === 'he' ? (x.heb || x.roman) : (x.roman || x.heb))}</span><span class="mn">${esc(x.src)}</span></div>
      <div class="iac"><button class="ic" data-act="phSay" data-id="${x.id}" aria-label="${esc(T('listen'))}">🔊</button>
      <button class="ic" data-act="phBig" data-id="${x.id}" aria-label="${esc(T('showBig'))}">⛶</button>
      <button class="ic" data-act="phEdit" data-id="${x.id}" aria-label="${esc(T('edit'))}">✎</button></div></div>`).join('') + '</div>'
    : '<p class="empty">' + esc(T('noPhrases')) + '</p>'}
  ${saved.length ? '<button class="btn" data-act="printBook">🖨️ ' + esc(T('printBook')) + '</button>' : ''}`;
};

/* ===== PROGRESS ===== */
SCREENS.progress = () => {
  const lang = st.lang, stats = levelStats(lang);
  const days = []; let mx = 1;
  for (let o = -6; o <= 0; o++) { const k = dayKey(o); const v = st.log[k] || 0; mx = Math.max(mx, v); days.push({ k, v }); }
  const dn = d => new Date(d.k + 'T12:00').toLocaleDateString(st.ui === 'he' ? 'he-IL' : st.ui, { weekday: 'short' });
  const chart = '<div class="chart" role="img" aria-label="' + esc(T('last7')) + '">' + days.map(d => '<div class="col"><i style="height:' + Math.round(100 * d.v / mx) + '%"></i><small>' + esc(dn(d)) + '</small><b>' + d.v + '</b></div>').join('') + '</div>';
  const lv = Array.from({ length: MAXL }, (_, n) => n + 1).filter(l => stats[l].total).map(l => '<div class="lvrow"><span>' + l + ' · ' + esc(T('lvl' + l)) + '</span><span>' + stats[l].mastered + '/' + stats[l].total + '</span>' + bar(stats[l].mastered, stats[l].total) + '</div>').join('');
  const other = Object.keys(LANGS).map(l => { const pc = langPct(l) || 0; return '<div class="lvrow"><span>' + LANGS[l].flag + ' ' + esc(LN(l)) + '</span><span>' + pc + '%</span>' + bar(pc, 100) + '</div>'; }).join('');
  const total = Object.values(st.log).reduce((a, b) => a + b, 0);
  return header(T('progress')) + `
  <div class="stats"><div><b>🔥 ${st.streak.last === today() || st.streak.last === dayKey(-1) ? st.streak.n : 0}</b><small>${esc(T('streak'))}</small></div>
  <div><b>${total}</b><small>${esc(T('totalAnswers'))}</small></div><div><b>${curLevel(lang)}</b><small>${esc(T('level'))} · ${esc(LN(lang))}</small></div></div>
  ${typeof goalHTML === 'function' ? goalHTML() : ''}
  <h3>${esc(T('last7'))}</h3>${chart}
  <h3>${esc(T('levelsIn', { l: LN(lang) }))}</h3><div class="card">${lv}</div>
  <p class="hint">${esc(T('levelRule'))}</p>
  <h3>${esc(T('allLangs'))}</h3><div class="card">${other}</div>
  ${typeof badgesHTML === 'function' ? '<h3>🏅 ' + esc(T('badges')) + ' (' + Object.keys(st.badges || {}).length + ')</h3>' + badgesHTML() : ''}`;
};

/* ===== SETTINGS ===== */
SCREENS.settings = sec => {
  const lang = st.lang, vs = voicesFor(lang), cur = voiceFor(lang);
  const prov = st.ai.provider;
  const uiOpts = ['he', 'en', 'ru', 'es', 'ar'].map(u => '<option value="' + u + '"' + (st.ui === u ? ' selected' : '') + '>' + { he: 'עברית', en: 'English', ru: 'Русский', es: 'Español', ar: 'العربية' }[u] + '</option>').join('');
  const sw = THEMES.map(t => '<button class="sw sw-' + t + (st.theme === t ? ' on' : '') + '" data-act="setTheme" data-t="' + t + '" aria-label="' + esc(T('th_' + t)) + '" aria-pressed="' + (st.theme === t) + '"><i></i><small>' + esc(T('th_' + t)) + '</small></button>').join('');
  const vOpts = '<option value="">' + esc(T('autoVoice')) + '</option>' + vs.map(v => '<option' + (st.voices[lang] === v.name ? ' selected' : '') + '>' + esc(v.name) + '</option>').join('');
  const provs = Object.keys(AI).map(p => '<button class="prov' + (prov === p ? ' on' : '') + '" data-act="setProv" data-p="' + p + '" aria-pressed="' + (prov === p) + '"><b>' + { gemini: 'Gemini', claude: 'Claude', openai: 'ChatGPT', local: 'Ollama' }[p] + '</b><span class="tag">' + AI[p].tag + '</span>' + (st.ai.has[p] ? '<i class="okd">●</i>' : '') + '</button>').join('');
  const mOpts = [''].concat(AI[prov].models).concat((st.ai.live && st.ai.live[prov]) || []).filter((m, i, a) => a.indexOf(m) === i)
    .map(m => '<option value="' + esc(m) + '"' + (st.ai.model === m ? ' selected' : '') + '>' + esc(m || T('autoModel')) + '</option>').join('');
  const errs = S.get('ln_errs', []);
  setTimeout(() => { if (sec) { const el = document.getElementById('sec-' + sec); if (el) el.scrollIntoView({ block: 'start' }); } persistStatus(); }, 50);
  return header(T('settings')) + `
  <section class="card set"><h3>👤 ${esc(T('profile'))}</h3>
    <label class="fld"><span>${esc(T('userName'))}</span><input id="uName" value="${esc(st.user)}" maxlength="40" autocomplete="nickname" data-ch="user"></label>
    <label class="fld"><span>${esc(T('uiLang'))}</span><select data-ch="ui">${uiOpts}</select></label>
  </section>
  <section class="card set"><h3>🎨 ${esc(T('design'))}</h3><div class="sws">${sw}</div>
    <div class="seg"><button class="${st.mode === 'night' ? 'on' : ''}" data-act="setMode" data-m="night">🌙 ${esc(T('night'))}</button><button class="${st.mode === 'day' ? 'on' : ''}" data-act="setMode" data-m="day">☀️ ${esc(T('day'))}</button></div>
  </section>
  <section class="card set"><h3>🐇 ${esc(T('pace'))}</h3><p class="hint">${esc(T('paceHint'))}</p>
    <div class="seg">${[[5, 'paceEasy'], [10, 'paceNormal'], [20, 'paceFast']].map(([n, k]) => '<button class="' + (st.goal === n ? 'on' : '') + '" data-act="setGoal" data-n="' + n + '">' + esc(T(k)) + '<small>' + n + '/' + esc(T('perDay')) + '</small></button>').join('')}</div>
    <p class="hint">🎯 ${esc(T('weekGoalHint'))}</p>
    <div class="seg">${[50, 100, 200, 350].map(n => '<button class="' + ((st.weekGoal || 100) === n ? 'on' : '') + '" data-act="setWeekGoal" data-n="' + n + '">' + n + '<small>' + esc(T('perWeek')) + '</small></button>').join('')}</div>
  </section>
  <section class="card set" id="sec-voice"><h3>🔊 ${esc(T('voiceSec'))}</h3>
    <label class="fld"><span>${esc(T('rate'))}: <b id="rateV">${st.rate.toFixed(2)}</b></span><input type="range" min="0.5" max="1.2" step="0.05" value="${st.rate}" data-ch="rate"></label>
    <label class="fld"><span>${esc(T('voiceFor', { l: LN(lang) }))}</span><select data-ch="voice">${vOpts}</select></label>
    <p class="${cur ? 'hint' : 'warn'}">${cur ? '✅ ' + esc(T('voiceFound', { v: cur.name })) : '⚠️ ' + esc(T('voiceMissing', { l: LN(lang) }))}</p>
    ${cur ? '' : '<details><summary>' + esc(T('howAddVoice')) + '</summary><p class="hint">' + esc(T('addVoiceWin')) + '</p><p class="hint">' + esc(T('addVoiceAnd')) + '</p><p class="hint">' + esc(T('addVoiceIos')) + '</p></details>'}
    <button class="btn" data-act="testVoice">▶ ${esc(T('testVoice'))}</button>
    <label class="fld"><span>${esc(T('iSpeakAs'))}</span></label>
    <div class="seg"><button class="${st.gender === 'm' ? 'on' : ''}" data-act="setGender" data-g="m">${esc(T('male'))}</button><button class="${st.gender === 'f' ? 'on' : ''}" data-act="setGender" data-g="f">${esc(T('female'))}</button></div>
    <p class="hint">${esc(T('genderHint'))}</p>
  </section>
  <section class="card set" id="sec-ai"><h3>✨ ${esc(T('aiSec'))} <span class="dot inl ${aiReady() ? 'on' : ''}"></span></h3>
    <p class="hint">${esc(T('aiIntro'))}</p>
    <div class="provs">${provs}</div>
    <details open><summary>${esc(T('howKey'))}</summary><p class="hint">${esc(T('key_' + prov))}</p>
      <a class="link" href="${AI[prov].link}" target="_blank" rel="noopener">${esc(AI[prov].link.replace('https://', ''))}</a>
      ${prov === 'gemini' ? ' · <a class="link" href="https://www.youtube.com/results?search_query=how+to+get+gemini+api+key+google+ai+studio" target="_blank" rel="noopener">▶ YouTube</a>' : ''}</details>
    ${prov === 'local' ? '' : `<label class="fld"><span>${esc(T('apiKey'))}</span><input id="aiKey" type="password" autocomplete="off" spellcheck="false" placeholder="${st.ai.has[prov] ? '••••••••  (' + esc(T('keySaved')) + ')' : ''}"></label>
    <div class="row wrap"><button class="btn gold" data-act="saveKey">💾 ${esc(T('saveKey'))}</button>${st.ai.has[prov] ? '<button class="btn" data-act="disconnect">⏏ ' + esc(T('disconnect')) + '</button>' : ''}</div>`}
    <label class="fld"><span>${esc(T('model'))}</span><select data-ch="model">${mOpts}</select></label>
    <div class="row wrap"><button class="btn" data-act="refreshModels">↻ ${esc(T('refreshModels'))}</button><button class="btn" data-act="testAi">🔌 ${esc(T('testAi'))}</button></div>
    <p class="tiny">🔒 ${esc(T('aiPrivacy'))}</p>
  </section>
  <section class="card set"><h3>🔍 ${esc(T('qaTitle'))}</h3><p class="hint">${esc(T('qaSub'))}</p><button class="btn" data-act="nav" data-to="qa">▶ ${esc(T('qaOpen'))}</button></section>
  <section class="card set"><h3>🪄 ${esc(T('asstSec'))}</h3><p class="hint">${esc(T('asstHint'))}</p></section>
  <section class="card set"><h3>💾 ${esc(T('backupSec'))}</h3>
    <div class="row wrap"><button class="btn" data-act="exportJson">⬇️ ${esc(T('exportJson'))}</button>
    <label class="btn">⬆️ ${esc(T('importJson'))}<input type="file" accept=".json,application/json" data-ch="import" hidden></label>
    <button class="btn" data-act="exportCsv">📊 CSV / Excel</button><button class="btn" data-act="printBook">🖨️ PDF</button></div>
    <p class="tiny">${esc(T('backupNote'))}</p><p class="tiny" id="persist"></p>
  </section>
  <section class="card set"><h3>🧭 ${esc(T('guide'))}</h3><button class="btn" data-act="guide">▶ ${esc(T('showGuide'))}</button></section>
  <section class="card set"><h3>🩺 ${esc(T('diag'))}</h3>
    <pre class="diag" id="diagTxt">${esc(diagText())}</pre>
    ${errs.length ? '' : '<p class="tiny">' + esc(T('noErrors')) + '</p>'}
    <button class="btn" data-act="copyDiag">📋 ${esc(T('copyDiag'))}</button>
  </section>
  <section class="card set danger"><h3>🗑️ ${esc(T('resetSec'))}</h3><p class="hint">${esc(T('resetHint'))}</p><button class="btn red" data-act="resetAll">${esc(T('resetAll'))}</button></section>
  <footer class="badge">AppNest · v${APP.ver}</footer>`;
};
function diagText() {
  const errs = S.get('ln_errs', []);
  return [APP.name + ' v' + APP.ver, 'UA: ' + navigator.userAgent.slice(0, 120), 'protocol: ' + location.protocol,
    'TTS: ' + ('speechSynthesis' in window) + ' · voices: ' + VOICES.length + ' · ' + Object.keys(LANGS).map(l => l + ':' + voicesFor(l).length).join(' '),
    'SpeechRecognition: ' + !!SR, 'localStorage: ' + S.ok + ' · IndexedDB: ' + ('indexedDB' in window) + ' · crypto: ' + !!(window.crypto && crypto.subtle),
    'SW: ' + ('serviceWorker' in navigator && !!navigator.serviceWorker.controller), 'AI: ' + st.ai.provider + ' · ready: ' + aiReady() + ' · model: ' + (st.ai.model || 'auto'),
    'modules: ' + Object.keys(window.__MODS || {}).map(k => k + '@' + window.__MODS[k]).join(' '), 'errors: ' + errs.length].concat(errs.map(e => new Date(e.t).toISOString().slice(0, 16) + ' ' + e.m + ' @' + e.f + ':' + e.l)).join('\n');
}
async function persistStatus() {
  const el = $('#persist'); if (!el) return;
  try {
    if (navigator.storage && navigator.storage.persisted) {
      let p = await navigator.storage.persisted();
      if (!p && navigator.storage.persist) p = await navigator.storage.persist();
      el.textContent = '📦 ' + T(p ? 'persistOk' : 'persistNo');
    }
  } catch (e) {}
}

/* ===== ABOUT ===== */
SCREENS.about = () => header(T('about')) + `
  <div class="card about"><span class="logo big" aria-hidden="true">✦</span><h3>${APP.name}</h3><p>${esc(T('tagline'))}</p><p class="tiny">v${APP.ver}</p></div>
  <div class="card"><dl class="kv">
    <dt>${esc(T('version'))}</dt><dd>${APP.ver}</dd><dt>${esc(T('developer'))}</dt><dd>Barak Aflalo</dd>
    <dt>${esc(T('platform'))}</dt><dd>PWA · HTML5</dd><dt>${esc(T('storage'))}</dt><dd>${esc(T('onDevice'))}</dd>
    <dt>${esc(T('license'))}</dt><dd>© AppNest 2026</dd></dl></div>
  <div class="list">
    <a class="trow" href="https://barakaflalo.github.io/appnest" target="_blank" rel="noopener"><span class="ti">🏪</span><span class="tt"><b>${esc(T('store'))}</b></span></a>
    <button class="trow" data-act="shareApp"><span class="ti">📤</span><span class="tt"><b>${esc(T('shareApp'))}</b></span></button>
    <a class="trow" href="mailto:appnest55@gmail.com?subject=${encodeURIComponent(APP.name + ' v' + APP.ver)}"><span class="ti">✉️</span><span class="tt"><b>${esc(T('feedback'))}</b></span></a>
    <button class="trow" data-act="guide"><span class="ti">🧭</span><span class="tt"><b>${esc(T('showGuide'))}</b></span></button>
    <a class="trow" href="privacy_policy.html" target="_blank" rel="noopener"><span class="ti">🔒</span><span class="tt"><b>${esc(T('privacy'))}</b></span></a>
  </div>
  <p class="tiny">${esc(T('disclaimer'))}</p>
  <footer class="badge">AppNest · v${APP.ver}</footer>`;

/* ---------- modal / overlays ---------- */
let lastFocus = null;
function modal(html, cls) {
  closeModal();
  lastFocus = document.activeElement;
  const w = document.createElement('div');
  w.className = 'modal-wrap'; w.id = 'modal';
  w.innerHTML = '<div class="modal ' + (cls || '') + '" role="dialog" aria-modal="true"><button class="x" data-act="closeModal" aria-label="' + esc(T('close')) + '">✕</button>' + html + '</div>';
  w.addEventListener('click', e => { if (e.target === w) closeModal(); });
  document.body.appendChild(w);
  const f = w.querySelector('input,textarea,select,button:not(.x)') || w.querySelector('.x'); if (f) f.focus();
}
function closeModal() { const m = $('#modal'); if (m) { m.remove(); if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {} } }
function confirmBox(msg, okLabel, cb, danger) {
  modal('<p class="cm">' + esc(msg) + '</p><div class="row c wrap"><button class="btn ' + (danger ? 'red' : 'gold') + '" id="cmOk">' + esc(okLabel) + '</button><button class="btn" data-act="closeModal">' + esc(T('cancel')) + '</button></div>');
  $('#cmOk').onclick = () => { closeModal(); cb(); };
}
function bigShow(text, lang, pr, mn, sayText) {
  const w = document.createElement('div');
  w.className = 'bigshow'; w.id = 'bigshow'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-modal', 'true');
  const len = [...text].length, size = len < 6 ? 30 : len < 14 ? 18 : len < 30 ? 11 : 8;
  w.innerHTML = '<button class="x" id="bsX" aria-label="' + esc(T('close')) + '">✕</button><div class="bs-in"><p class="tgt" lang="' + LANGS[lang].tts + '" dir="' + LANGS[lang].dir + '" style="font-size:' + size + 'vmin">' + esc(text) + '</p>' +
    (pr ? '<p class="pr">' + esc(pr) + '</p>' : '') + (mn ? '<p class="mn">' + esc(mn) + '</p>' : '') +
    '<div class="row c"><button class="ic xl" id="bsSay">🔊</button><button class="ic xl" id="bsSlow">🐢</button></div></div>';
  document.body.appendChild(w);
  document.body.classList.add('bs-open');
  const close = () => { w.remove(); document.body.classList.remove('bs-open'); };
  $('#bsX').onclick = close;
  const said = (sayText || text).replace(/\.\.\./g, ' ');
  $('#bsSay').onclick = () => speak(said, lang);
  $('#bsSlow').onclick = () => speak(said, lang, true);
  $('#bsX').focus();
  try { if (w.requestFullscreen && matchMedia('(max-width:700px)').matches) w.requestFullscreen().catch(() => {}); } catch (e) {}
}
function themeSheet() {
  modal('<h3>🎨 ' + esc(T('design')) + '</h3><div class="sws">' + THEMES.map(t => '<button class="sw sw-' + t + (st.theme === t ? ' on' : '') + '" data-act="setTheme" data-t="' + t + '" aria-pressed="' + (st.theme === t) + '"><i></i><small>' + esc(T('th_' + t)) + '</small></button>').join('') +
    '</div><div class="seg"><button class="' + (st.mode === 'night' ? 'on' : '') + '" data-act="setMode" data-m="night">🌙 ' + esc(T('night')) + '</button><button class="' + (st.mode === 'day' ? 'on' : '') + '" data-act="setMode" data-m="day">☀️ ' + esc(T('day')) + '</button></div>');
}

/* ---------- custom words (level 5) ---------- */
function customForm(c) {
  const lang = st.lang;
  modal('<h3>' + esc(c ? T('editWord') : T('addWord')) + ' · ' + esc(LN(lang)) + '</h3>' +
    '<label class="fld"><span>' + esc(T('fMeaning')) + '</span><input id="cHe" value="' + esc(c ? c.he : '') + '" dir="auto"></label>' +
    '<label class="fld"><span>' + esc(T('fText', { l: LN(lang) })) + '</span><input id="cTx" value="' + esc(c ? c.text : '') + '" dir="' + LANGS[lang].dir + '" lang="' + LANGS[lang].tts + '"></label>' +
    '<label class="fld"><span>' + esc(T('fHeb')) + '</span><input id="cHb" value="' + esc(c ? c.heb : '') + '" dir="rtl"></label>' +
    '<label class="fld"><span>' + esc(T('fRoman')) + '</span><input id="cRo" value="' + esc(c ? c.roman : '') + '" dir="ltr"></label>' +
    '<div class="row wrap"><button class="btn gold" id="cSave">💾 ' + esc(T('save')) + '</button><button class="btn" id="cTest">🔊</button>' + (c ? '<button class="btn red" id="cDel">🗑️ ' + esc(T('delete')) + '</button>' : '') + '</div>');
  $('#cTest').onclick = () => speak($('#cTx').value, lang);
  $('#cSave').onclick = () => {
    const he = $('#cHe').value.trim(), text = $('#cTx').value.trim();
    if (!he || !text) { toast(T('fillBoth'), 'warn'); return; }
    const list = st.custom[lang] = st.custom[lang] || [];
    const rec = { id: c ? c.id : uid(), he, text, heb: $('#cHb').value.trim(), roman: $('#cRo').value.trim() };
    if (c) list[list.findIndex(x => x.id === c.id)] = rec; else list.push(rec);
    save(); closeModal(); render(); toast(T('saved'));
  };
  if (c) $('#cDel').onclick = () => confirmBox(T('confirmDelete'), T('delete'), () => {
    st.custom[lang] = st.custom[lang].filter(x => x.id !== c.id); delete P(lang)['C:' + c.id]; save(); render(); toast(T('deleted'));
  }, true);
}
function aiWordsForm() {
  if (!aiReady()) { toast(T('needAi'), 'warn', 4000); go('settings', 'ai'); return; }
  const lang = st.lang;
  modal('<h3>✨ ' + esc(T('aiWordsBtn')) + ' · ' + esc(LN(lang)) + '</h3><p class="hint">' + esc(T('aiWordsHint')) + '</p>' +
    '<label class="fld"><span>' + esc(T('topic')) + '</span><input id="aTopic" placeholder="' + esc(T('topicPh')) + '" dir="auto"></label>' +
    '<label class="fld"><span>' + esc(T('howMany')) + '</span><select id="aN"><option>5</option><option selected>10</option><option>15</option></select></label>' +
    '<button class="cta slim" id="aGo">✨ ' + esc(T('generate')) + '</button><p class="tiny">' + esc(T('aiPrivacy')) + '</p>');
  $('#aGo').onclick = async () => {
    const topic = $('#aTopic').value.trim(); if (!topic) { toast(T('fillTopic'), 'warn'); return; }
    const b = $('#aGo'); b.disabled = true; b.textContent = '⏳ ' + T('working');
    try {
      const got = await aiWords(topic, lang, +$('#aN').value);
      const list = st.custom[lang] = st.custom[lang] || [];
      got.forEach(x => list.push({ id: uid(), he: String(x.he), text: String(x.text), heb: String(x.heb || ''), roman: String(x.roman || '') }));
      save(); closeModal(); render(); toast(T('addedN', { n: got.length }));
    } catch (e) { b.disabled = false; b.textContent = '✨ ' + T('generate'); toast(T('aiErr') + ': ' + e.message, 'err', 6000); }
  };
}

/* ---------- phrase edit ---------- */
function phraseForm(x) {
  modal('<h3>✎ ' + esc(T('editPhrase')) + '</h3>' +
    '<label class="fld"><span>' + esc(T('fSrc')) + '</span><input id="pSrc" value="' + esc(x.src) + '" dir="auto"></label>' +
    '<label class="fld"><span>' + esc(T('fText', { l: LN(x.lang) })) + '</span><textarea id="pTx" rows="2" dir="' + LANGS[x.lang].dir + '">' + esc(x.text) + '</textarea></label>' +
    '<label class="fld"><span>' + esc(T('fHeb')) + '</span><input id="pHb" value="' + esc(x.heb || '') + '" dir="rtl"></label>' +
    '<label class="fld"><span>' + esc(T('fRoman')) + '</span><input id="pRo" value="' + esc(x.roman || '') + '" dir="ltr"></label>' +
    '<div class="row wrap"><button class="btn gold" id="pSave">💾 ' + esc(T('save')) + '</button><button class="btn red" id="pDel">🗑️ ' + esc(T('delete')) + '</button></div>');
  $('#pSave').onclick = () => {
    Object.assign(x, { src: $('#pSrc').value.trim(), text: $('#pTx').value.trim(), heb: $('#pHb').value.trim(), roman: $('#pRo').value.trim() });
    if (!x.text) { toast(T('fillBoth'), 'warn'); return; }
    save(); closeModal(); render(); toast(T('saved'));
  };
  $('#pDel').onclick = () => confirmBox(T('confirmDelete'), T('delete'), () => { st.phrases = st.phrases.filter(p => p.id !== x.id); save(); render(); toast(T('deleted')); }, true);
}

/* ---------- export / import / print ---------- */
function download(name, data, type) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([data], { type }));
  a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
const stamp = () => today();
function exportJson() {
  const data = { app: APP.name, ver: APP.ver, user: st.user, date: new Date().toISOString(), secretsIncluded: false, state: Object.assign({}, st, { ai: { provider: st.ai.provider, model: st.ai.model, has: {} } }) };
  download('lingonest-safe-backup-' + stamp() + '.json', JSON.stringify(data, null, 1), 'application/json');
  st.backupAt = Date.now(); save(); toast(T('exported'));
}
function importJson(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const j = JSON.parse(r.result);
      if (!j || !j.state || j.app !== APP.name) throw new Error('format');
      confirmBox(T('confirmRestore', { d: (j.date || '').slice(0, 10), u: j.user || '—' }), T('restore'), () => {
        const keepHas = st.ai.has;
        st = Object.assign({}, DEF, j.state); st.ai = Object.assign({}, DEF.ai, j.state.ai || {}, { has: keepHas });
        _itemsCache = {}; save(); go('home'); toast(T('restored'));
      }, true);
    } catch (e) { toast(T('badFile'), 'err', 4000); }
  };
  r.readAsText(file);
}
function csvCell(v) { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }
async function exportCsv() {
  try { await loadAllLangs(); } catch (e) {}
  const rows = [[T('userName') + ': ' + (st.user || '—'), T('date') + ': ' + stamp()], [], ['lang', 'level', 'category', 'text', 'pronunciation', 'meaning', 'box', 'correct', 'wrong']];
  Object.keys(LANGS).forEach(l => { const p = P(l); items(l).forEach(i => { const r = p[i.k] || {}; rows.push([l, i.lvl, i.cat, i.text, i.heb || i.roman, i.type === 'L' ? i.roman : i.he, r.b || 0, r.c || 0, r.w || 0]); }); });
  rows.push([], [T('myPhrases')], ['lang', 'source', 'text', 'pronunciation']);
  st.phrases.forEach(x => rows.push([x.lang, x.src, x.text, x.heb || x.roman]));
  download('lingonest-' + stamp() + '.csv', '\ufeff' + rows.map(r => r.map(csvCell).join(',')).join('\r\n'), 'text/csv;charset=utf-8');
  toast(T('exported'));
}
function printBook() {
  const lang = st.lang;
  const mine = st.phrases.filter(x => x.lang === lang);
  const base = items(lang).filter(i => i.type === 'P');
  const row = (a, b, c) => '<tr><td class="tgt" lang="' + LANGS[lang].tts + '" dir="' + LANGS[lang].dir + '">' + esc(a) + '</td><td>' + esc(b) + '</td><td>' + esc(c) + '</td></tr>';
  $('#print').innerHTML = '<h1>' + esc(T('phrasebook')) + ' · ' + esc(LN(lang)) + '</h1><p>' + esc((st.user ? st.user + ' · ' : '') + stamp()) + ' · ' + APP.name + '</p>' +
    (mine.length ? '<h2>' + esc(T('myPhrases')) + '</h2><table>' + mine.map(x => row(x.text, x.heb || x.roman, x.src)).join('') + '</table>' : '') +
    '<h2>' + esc(T('phrases')) + '</h2><table>' + base.map(i => row(i.text, pron(i), meaning(i))).join('') + '</table>';
  setTimeout(() => window.print(), 100);
}

/* ---------- onboarding guide ---------- */
function guide(step) {
  step = step || 0;
  const S5 = [['👋', 'g1t', 'g1b'], ['🌍', 'g2t', 'g2b'], ['🪜', 'g3t', 'g3b'], ['📢', 'g4t', 'g4b'], ['🔊', 'g5t', 'g5b']];
  const [ic, t, b] = S5[step];
  const langPick = step === 1 ? '<div class="chips wrap">' + Object.keys(LANGS).map(l => '<button class="chip' + (st.lang === l ? ' on' : '') + '" data-act="gLang" data-l="' + l + '"><span class="fl">' + LANGS[l].flag + '</span><span>' + esc(LN(l)) + '</span></button>').join('') + '</div>' : '';
  const nameIn = step === 4 ? '<label class="fld"><span>' + esc(T('userName')) + '</span><input id="gName" value="' + esc(st.user) + '" maxlength="40"></label>' : '';
  modal('<div class="guide"><p class="gstep">' + (step + 1) + ' / 5</p><div class="gic">' + ic + '</div><h3>' + esc(T(t)) + '</h3><p>' + esc(T(b)) + '</p>' + langPick + nameIn +
    '<div class="row c wrap">' + (step < 4 ? '<button class="cta slim" id="gNext">' + esc(T('next')) + '</button><button class="btn" id="gSkip">' + esc(T('skip')) + '</button>' : '<button class="cta slim" id="gDone">' + esc(T('start')) + '</button>') + '</div></div>');
  const done = () => { const n = $('#gName'); if (n) st.user = n.value.trim(); st.onb = true; save(); closeModal(); render(); };
  if ($('#gNext')) $('#gNext').onclick = () => guide(step + 1);
  if ($('#gSkip')) $('#gSkip').onclick = done;
  if ($('#gDone')) $('#gDone').onclick = done;
}

function copyText(t) { (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => toast(T('copied')), () => toast(T('copyFail'), 'warn')); }
/* ---------- actions (event delegation) ---------- */
const ACT = {
  back, home: () => go('home'), closeModal,
  nav: d => go(d.to, d.sec || d.arg || null),
  setLang: async d => { if (await switchLang(d.l)) render(); },
  gLang: async d => { if (await switchLang(d.l)) document.querySelectorAll('[data-act=gLang]').forEach(b => b.classList.toggle('on', b.dataset.l === d.l)); },
  themeSheet,
  setTheme: d => { st.theme = d.t; save(); applyTheme(); document.querySelectorAll('.sw').forEach(b => { b.classList.toggle('on', b.dataset.t === d.t); b.setAttribute('aria-pressed', b.dataset.t === d.t); }); },
  setMode: d => { st.mode = d.m; save(); applyTheme(); document.querySelectorAll('[data-act=setMode]').forEach(b => b.classList.toggle('on', b.dataset.m === d.m)); },
  setGoal: d => { st.goal = +d.n; save(); render(); },
  setGender: d => { st.gender = d.g; _itemsCache = {}; save(); render(); },
  say: d => { const it = findItem(st.lang, d.k) || findItem(LESSON.lang, d.k); if (it) speak(ttsText(it), st.lang, !!d.slow); },
  big: d => { const it = findItem(st.lang, d.k); if (it) bigShow(it.text, st.lang, pron(it), it.type === 'L' ? '' : meaning(it), ttsText(it)); },
  fav: (d, el) => { const f = st.favs[st.lang] = st.favs[st.lang] || []; const i = f.indexOf(d.k); if (i >= 0) f.splice(i, 1); else f.push(d.k); save(); el.classList.toggle('on', i < 0); el.setAttribute('aria-pressed', i < 0); },
  letter: d => {
    const it = findItem(st.lang, d.k), r = P(st.lang)[d.k];
    modal('<div class="ldet">' + tgt(it, st.lang, 'xxl') + '<p class="pr big">' + esc(it.tts) + '</p><p class="mn big">' + esc(T('soundsLike')) + ' ' + esc(st.ui === 'he' ? it.heb : it.roman) + '</p>' +
      (st.ui === 'he' ? '<p class="tiny">' + esc(it.roman) + '</p>' : '') + '<div class="row c">' + soundBtns(it.k) + (SR ? '<button class="btn" data-act="sayIt" data-k="' + it.k + '">🎤 ' + esc(T('sayIt')) + '</button>' : '') + '</div><p class="said" id="said" aria-live="polite"></p>' +
      '<p class="tiny">' + esc(r ? T('boxInfo', { b: r.b, c: r.c, w: r.w }) : T('notYet')) + '</p></div>');
    speak(it.tts, st.lang);
  },
  sayIt: d => { const it = findItem(st.lang, d.k); if (it) sayIt(it, st.lang, $('#said')); },
  sayRaw: d => speak(d.t, st.lang, !!d.slow),
  saySession: () => { const s = LESSON.q[LESSON.i]; if (s && !LESSON.answered) sayIt(s.it, LESSON.lang, $('#said'), ok => { if (ok) LESSON.sayGrade(true); }); },
  sayGrade: d => LESSON.sayGrade(d.ok === '1'),
  searchToSpeak: () => { SPK.src = SQ; SPK.direct = false; SPK.res = null; go('speak'); },
  whatsNew: () => whatsNew(),
  bPick: d => LESSON.bPick(+d.n), bUndo: d => LESSON.bUndo(+d.n), bClear: () => LESSON.bClear(), bCheck: () => LESSON.bCheck(), dictCheck: () => LESSON.dictCheck(),
  cardFlip: () => { if (CARDS._swiped && Date.now() - CARDS._swiped < 400) return; CARDS.flip = !CARDS.flip; render(); if (!CARDS.flip) { const it = CARDS.deck[CARDS.i]; if (it) speak(ttsText(it), st.lang); } },
  cardGrade: d => cardGrade(d.ok === '1'),
  cardsNew: () => { cardsStart(); render(); },
  qaStart: () => { if (!aiReady()) { toast(T('needAi'), 'warn', 4000); go('settings', 'ai'); return; } qaRun(false); },
  qaResume: () => { if (!aiReady()) { toast(T('needAi'), 'warn', 4000); go('settings', 'ai'); return; } qaRun(true); },
  qaStop: () => { QA.run++; QA.busy = false; QA.msg = ''; qaSave(); render(); },
  qaApply: d => { const x = QA.issues[+d.n]; if (!x) return; const f = st.fix[QA.lang] = st.fix[QA.lang] || {}; f[x.id] = { text: x.text, roman: x.roman, heb: x.heb, why: x.problem }; QA.issues.splice(+d.n, 1); _itemsCache = {}; save(); qaSave(); qaPaint(); toast(T('qaApplied')); },
  qaIgnore: d => { QA.issues.splice(+d.n, 1); qaSave(); qaPaint(); },
  qaCopy: () => copyText(qaReportText(QA.issues, QA.lang)),
  qaCopyFixes: () => { const f = st.fix[st.lang] || {}; copyText(qaReportText(Object.keys(f).map(id => Object.assign({ id, problem: f[id].why }, f[id])), st.lang)); },
  qaReset: () => confirmBox(T('qaReset') + '?', T('qaReset'), () => { delete st.fix[st.lang]; _itemsCache = {}; save(); render(); }, true),
  dlgPlay: d => dlgPlay(d.arg),
  dlgLine: d => { dlgStop(); const x = dlgLines(NAV.arg).find(l => l.n === +d.n); if (x) speak(ttsText(x.it), st.lang, !!d.slow, null, !x.me); },
  dlgRole: d => { dlgStop(); DLG.role = d.v === '1'; DLG.shown = {}; render(); },
  dlgReveal: d => { DLG.shown[d.n] = 1; if (typeof flag === 'function') flag('role'); render(); const x = dlgLines(NAV.arg).find(l => l.n === +d.n); if (x) speak(ttsText(x.it), st.lang); },
  dlgSay: d => { const x = dlgLines(NAV.arg).find(l => l.n === +d.n); if (x) sayIt(x.it, st.lang, $('#said' + d.n), ok => { if (ok) { grade(st.lang, x.it.k, true); setTimeout(() => { DLG.shown[d.n] = 1; render(); }, 900); } }); },
  priceSet: d => { PRICE.n = +d.n; const i = $('#pIn'); if (i) i.value = PRICE.n; $('#pRes').innerHTML = priceHTML(); ACT.priceSay({}); },
  priceCur: d => { PRICE.cur = d.v === '1'; render(); },
  priceSay: d => { const r = numWords(st.lang, PRICE.n, PRICE.cur); if (r) speak(sayStr(st.lang, r.text, r.heb), st.lang, !!d.slow); },
  priceBig: () => { const r = numWords(st.lang, PRICE.n, PRICE.cur); if (r) bigShow(r.text, st.lang, st.ui === 'he' ? r.heb : r.roman, (PRICE.cur ? CUR_SYM[st.lang] + ' ' : '') + PRICE.n.toLocaleString('en-US')); },
  priceQuiz: () => { PRICE.q = { n: randPrice() }; $('#pQuiz').innerHTML = priceQuizHTML(); ACT.priceQSay({}); const i = $('#qIn'); if (i) i.focus(); },
  priceQSay: d => { if (PRICE.q) { const r = numWords(st.lang, PRICE.q.n, true); speak(sayStr(st.lang, r.text, r.heb), st.lang, !!d.slow); } },
  priceCheck: () => {
    const q = PRICE.q, v = parseInt(($('#qIn') || {}).value, 10);
    if (!q || isNaN(v)) { toast(T('typeNumber'), 'warn'); return; }
    q.done = true; q.good = v === q.n; PRICE.tot++; if (q.good) PRICE.ok++;
    try { navigator.vibrate && navigator.vibrate(q.good ? 20 : [40, 40, 40]); } catch (e) {}
    $('#pQuiz').innerHTML = priceQuizHTML();
  },
  startAuto: () => LESSON.start('auto'),
  startScope: d => LESSON.start(d.scope),
  answer: d => LESSON.answer(+d.n),
  lnext: () => LESSON.next(),
  addCustom: () => customForm(null),
  editCustom: d => customForm((st.custom[st.lang] || []).find(x => x.id === d.id)),
  aiWords: aiWordsForm,
  spkMode: d => { SPK.src = ($('#spkIn') || {}).value || SPK.src; SPK.direct = d.v === '1'; SPK.res = null; render(); },
  spkDirect: () => { const v = $('#spkIn').value.trim(); if (!v) { toast(T('typeFirst'), 'warn'); return; } SPK.src = v; SPK.res = { text: v, roman: '', heb: '', back: '', src: v }; render(); speak(v, st.lang); },
  spkTranslate: async (d, el) => {
    const v = $('#spkIn').value.trim(); if (!v) { toast(T('typeFirst'), 'warn'); return; }
    SPK.src = v;
    if (!aiReady()) { toast(T('needAi'), 'warn', 4500); render(); return; }
    el.disabled = true; el.innerHTML = '⏳ ' + esc(T('working'));
    try {
      const r = await aiTranslate(v, st.lang);
      if (!r || !r.text) throw new Error(T('aiBadJson'));
      SPK.res = { text: String(r.text), roman: String(r.roman || ''), heb: String(r.heb || ''), back: String(r.back || ''), src: v, ai: true };
      render(); speak(sayStr(st.lang, SPK.res.text, SPK.res.heb), st.lang);
    } catch (e) { el.disabled = false; el.innerHTML = '✨ ' + esc(T('translate')); toast(T('aiErr') + ': ' + e.message, 'err', 6000); }
  },
  gtLink: () => { const v = $('#spkIn'); if (v) SPK.src = v.value; },
  spkSay: d => SPK.res && speak(sayStr(st.lang, SPK.res.text, SPK.res.heb), st.lang, !!d.slow),
  spkBig: () => SPK.res && bigShow(SPK.res.text, st.lang, st.ui === 'he' ? (SPK.res.heb || SPK.res.roman) : (SPK.res.roman || SPK.res.heb), SPK.res.src, sayStr(st.lang, SPK.res.text, SPK.res.heb)),
  spkSave: () => {
    if (!SPK.res) return;
    st.phrases.unshift({ id: uid(), lang: st.lang, src: SPK.res.src, text: SPK.res.text, roman: SPK.res.roman, heb: SPK.res.heb, ts: Date.now() });
    save(); SPK.res = null; SPK.src = ''; render(); toast(T('saved'));
  },
  phSay: d => { const x = st.phrases.find(p => p.id === d.id); if (x) speak(sayStr(x.lang, x.text, x.heb), x.lang); },
  phBig: d => { const x = st.phrases.find(p => p.id === d.id); if (x) bigShow(x.text, x.lang, st.ui === 'he' ? (x.heb || x.roman) : (x.roman || x.heb), x.src, sayStr(x.lang, x.text, x.heb)); },
  phEdit: d => { const x = st.phrases.find(p => p.id === d.id); if (x) phraseForm(x); },
  printBook,
  testVoice: () => { const it = items(st.lang).find(i => i.k === 'W:hello'); speak(it ? ttsText(it) : 'Hello', st.lang); },
  setProv: d => { st.ai.provider = d.p; st.ai.model = ''; save(); render(); },
  saveKey: async () => {
    const v = $('#aiKey').value; if (!cleanKey(v)) { toast(T('keyEmpty'), 'warn'); return; }
    const r = await setKey(st.ai.provider, v);
    toast(r === 'enc' ? T('keyEnc') : T('keyMem'), r === 'enc' ? '' : 'warn', 4500); render();
  },
  disconnect: () => confirmBox(T('confirmDisconnect'), T('disconnect'), async () => { await setKey(st.ai.provider, ''); render(); toast(T('disconnected')); }),
  refreshModels: async (d, el) => {
    el.disabled = true;
    try { const list = await liveModels(); st.ai.live = st.ai.live || {}; st.ai.live[st.ai.provider] = list.slice(0, 40); save(); render(); toast(T('modelsN', { n: list.length })); }
    catch (e) { el.disabled = false; toast(T('aiErr') + ': ' + e.message, 'err', 6000); }
  },
  testAi: async (d, el) => {
    el.disabled = true; el.textContent = '⏳ ' + T('working');
    try { const r = await aiTranslate('תודה רבה', 'en'); if (!r.text) throw new Error(T('aiBadJson')); toast('✅ ' + T('aiOk') + ' — ' + r.text, '', 4000); }
    catch (e) { toast(T('aiErr') + ': ' + e.message, 'err', 7000); }
    render();
  },
  exportJson, exportCsv,
  guide: () => guide(0),
  copyDiag: () => { const t = diagText(); (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => toast(T('copied')), () => toast(T('copyFail'), 'warn')); },
  resetAll: () => confirmBox(T('reset1'), T('continueBtn'), () => confirmBox(T('reset2'), T('resetAll'), async () => {
    try { await IDB.clear(); } catch (e) {}
    ['ln_state', 'ln_errs', 'ln_qa'].forEach(k => S.del(k));
    try { const ks = await caches.keys(); await Promise.all(ks.map(k => caches.delete(k))); } catch (e) {}
    location.reload();
  }, true), true),
  shareApp: async () => {
    const data = { title: APP.name, text: T('shareText', { u: st.user || '' }), url: location.href.split('#')[0] };
    try { if (navigator.share) await navigator.share(data); else { await navigator.clipboard.writeText(data.url); toast(T('linkCopied')); } } catch (e) {}
  }
};
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  const a = ACT[el.dataset.act];
  if (!a) return;
  if (el.tagName === 'A' && el.dataset.act !== 'gtLink') e.preventDefault();
  a(el.dataset, el, e);
});
document.addEventListener('change', e => {
  const k = e.target.dataset && e.target.dataset.ch; if (!k) return;
  const v = e.target.value;
  if (k === 'ui') { ensureUI(v).then(() => { st.ui = v; save(); render(); }, () => toast(T('loadFail'), 'err', 5000)); }
  else if (k === 'voice') { st.voices[st.lang] = v; save(); render(); const h = findItem(st.lang, 'W:hello'); speak(h ? ttsText(h) : 'Hello', st.lang); }
  else if (k === 'model') { st.ai.model = v; save(); }
  else if (k === 'import') { if (e.target.files[0]) importJson(e.target.files[0]); e.target.value = ''; }
  else if (k === 'user') { st.user = v.trim(); save(); }
  else if (k === 'rate') { st.rate = +v; save(); }
});
document.addEventListener('input', e => {
  const k = e.target.dataset && e.target.dataset.ch;
  if (k === 'rate') { const r = $('#rateV'); if (r) r.textContent = (+e.target.value).toFixed(2); }
  if (k === 'user') { st.user = e.target.value.trim(); save(); }
  if (e.target.id === 'spkIn') SPK.src = e.target.value;
  if (e.target.id === 'pIn') { const v = Math.max(0, Math.min(999999, parseInt(e.target.value, 10) || 0)); PRICE.n = v; const r = $('#pRes'); if (r) r.innerHTML = priceHTML(); }
  if (e.target.id === 'sIn') { SQ = e.target.value; const r = $('#sRes'); if (r) r.innerHTML = searchListHTML(); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { const b = $('#bigshow'); if (b) { b.remove(); document.body.classList.remove('bs-open'); return; } if ($('#modal')) { closeModal(); return; } }
  if (e.key === 'Tab' && $('#modal')) {
    const f = [...$('#modal').querySelectorAll('button,input,select,textarea,a[href]')].filter(x => !x.disabled && x.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
  if (e.key === 'Enter' && e.target.id === 'qIn') { ACT.priceCheck(); return; }
  if (e.key === 'Enter' && e.target.id === 'dIn') { LESSON.dictCheck(); return; }
  if (NAV.cur === 'cards' && !$('#modal') && e.target.tagName !== 'INPUT') { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); ACT.cardFlip(); return; } if (e.key === 'ArrowRight') { cardGrade(!isRTL()); return; } if (e.key === 'ArrowLeft') { cardGrade(isRTL()); return; } }
  if (NAV.cur === 'lesson' && !$('#modal') && /^[1-4]$/.test(e.key)) { const b = document.querySelectorAll('.opt')[+e.key - 1]; if (b && !b.disabled) b.click(); }
});
/* flashcard swipe: right = knew, left = not yet (mirrored in RTL) */
document.addEventListener('pointerdown', e => { if (NAV.cur === 'cards' && e.target.closest('#flash')) CARDS.x0 = e.clientX; }, true);
document.addEventListener('pointerup', e => {
  if (CARDS.x0 == null) return; const dx = e.clientX - CARDS.x0; CARDS.x0 = null;
  if (Math.abs(dx) > 70) { e.preventDefault(); CARDS._swiped = Date.now(); cardGrade(isRTL() ? dx < 0 : dx > 0); }
}, true);
/* long press → edit (phrases, custom words) */
let lpT = null;
document.addEventListener('pointerdown', e => {
  const row = e.target.closest('[data-lp]'); if (!row || e.target.closest('button')) return;
  lpT = setTimeout(() => {
    lpT = null;
    if (row.dataset.lp === 'phrase') ACT.phEdit({ id: row.dataset.id });
    else ACT.editCustom({ id: row.dataset.id });
    try { navigator.vibrate && navigator.vibrate(15); } catch (_) {}
  }, 550);
});
['pointerup', 'pointerleave', 'pointercancel', 'scroll'].forEach(ev => document.addEventListener(ev, () => { if (lpT) { clearTimeout(lpT); lpT = null; } }, true));

/* ---------- loader: UI dictionaries + language packs on demand ---------- */
const _loading = {};
function loadScript(file) {
  if (_loading[file]) return _loading[file];
  return _loading[file] = new Promise((res, rej) => {
    const el = document.createElement('script');
    el.src = file + '?v=' + APP.ver;
    el.onload = () => res();
    el.onerror = () => { delete _loading[file]; el.remove(); rej(new Error('load ' + file)); };
    document.head.appendChild(el);
  });
}
async function ensureLang(code) {
  if (!LANGS[code]) throw new Error('unknown language ' + code);
  if (LOADED[code]) return;
  await loadScript('lang-' + code + '.js');
  if (!LOADED[code]) throw new Error('pack ' + code + ' did not register');
  if (LOADED[code] !== APP.ver) showUpdateBar();
  _itemsCache = {};
}
async function ensureUI(code) {
  if (LANG[code] || code === 'en') return;
  await loadScript('ui-' + code + '.js');
  if (window.__MODS['ui-' + code] !== APP.ver) showUpdateBar();
}
function loadAllLangs() { return Promise.all(Object.keys(LANGS).map(l => ensureLang(l).catch(e => logErr(e.message, 'loader', 0)))); }
async function switchLang(code) {
  if (!LOADED[code]) toast('⏳ ' + T('loadingLang', { l: LN(code) }), '', 1500);
  try { await ensureLang(code); st.lang = code; save(); return true; }
  catch (e) { logErr(e.message, 'loader', 0); toast(T('loadFail'), 'err', 5000); return false; }
}
/* All files must come from the same release — otherwise buttons break silently after an update (lesson from StockAI). */
function showUpdateBar() {
  if ($('#updbar')) return;
  const b = document.createElement('button');
  b.id = 'updbar'; b.className = 'updbar';
  b.textContent = '⟳ ' + ((LANG[st.ui] && LANG[st.ui].updPartial) || 'העדכון לא נטען במלואו — לחץ לרענון · Update incomplete — tap to refresh');
  b.onclick = hardRefresh;
  document.body.appendChild(b);
}
async function hardRefresh() {
  try { const rs = await navigator.serviceWorker.getRegistrations(); await Promise.all(rs.map(r => r.unregister())); } catch (e) {}
  try { const ks = await caches.keys(); await Promise.all(ks.map(k => caches.delete(k))); } catch (e) {}
  location.reload();
}
function checkMods() {
  const bad = CORE_MODS.filter(m => window.__MODS[m] !== APP.ver);
  if (bad.length) { logErr('module mismatch: ' + bad.map(m => m + '@' + window.__MODS[m]).join(','), 'boot', 0); showUpdateBar(); }
}

/* ---------- what's new ---------- */
function whatsNew() {
  modal('<h3>✨ ' + esc(T('newIn', { v: APP.ver })) + '</h3><ul class="news">' + ['wn1', 'wn2', 'wn3', 'wn4', 'wn5'].map(k => '<li>' + esc(T(k)) + '</li>').join('') + '</ul><button class="cta slim" data-act="closeModal">' + esc(T('gotIt')) + '</button>');
}

/* ---------- boot ---------- */
async function boot() {
  window.__BOOTED = true;
  window.__MODS.app = APP.ver;
  checkMods();
  applyTheme();
  $('#app').innerHTML = '<p class="loading" aria-busy="true">⏳</p>';
  try { await ensureUI(st.ui); } catch (e) { logErr(e.message, 'loader', 0); st.ui = 'en'; }
  try { await ensureLang(st.lang); }
  catch (e) {
    logErr(e.message, 'loader', 0);
    const alt = Object.keys(LANGS).find(l => l !== st.lang);
    try { await ensureLang(alt); st.lang = alt; } catch (e2) { $('#app').innerHTML = '<p class="warn">' + esc(T('loadFail')) + '</p>'; return; }
  }
  render();
  if (st.ai.provider !== 'local' && st.ai.has[st.ai.provider]) getKey(st.ai.provider).catch(() => {});   /* decrypt once so the assistant can use it */
  const firstRun = !st.onb;
  if (st.seenVer !== APP.ver) {
    const had = !!st.seenVer || Object.keys(st.log).length > 0, mm = v => String(v).split('.').slice(0, 2).join('.');
    const feature = mm(st.seenVer) !== mm(APP.ver); st.seenVer = APP.ver; save();
    if (!firstRun && had && feature) setTimeout(whatsNew, 400);
  }
  if (firstRun) setTimeout(() => guide(0), 300);
  else if (st.backupAt && Date.now() - st.backupAt > 30 * 864e5 && Object.keys(st.log).length > 5) setTimeout(() => toast(T('backupNudge'), '', 5000), 1500);
  else if (!st.backupAt && Date.now() - st.firstUse > 14 * 864e5) setTimeout(() => toast(T('backupNudge'), '', 5000), 1500);
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(e => logErr('sw: ' + e.message, 'sw', 0));
  /* other languages load in the background (home-screen %, offline availability) */
  setTimeout(() => loadAllLangs().then(() => { if (NAV.cur === 'home' || NAV.cur === 'progress') render(); }), 1200);
}
/* boot() is called at the end of features.js (the last module), so every module is in place before the first render */
window.__MODS.app = '1.9.0';

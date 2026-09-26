/* ===== LingoNest — features.js : AI conversation · travel kit · grammar tips · weekly goal & badges =====
   Loaded after app.js (uses its helpers: st, T, esc, go, render, speak, items, aiJSON …). Ends by calling boot(). */
'use strict';

/* ---------- small helpers ---------- */
const tr = o => (o && (o[st.ui] || o.en || o.he)) || '';
function flag(name) { st.flags = st.flags || {}; st.flags[name] = (st.flags[name] || 0) + 1; save(); checkBadges(); }

/* ============================================================
   1. WEEKLY GOAL & BADGES
   ============================================================ */
function weekCount() {
  let n = 0; const d = new Date(), dow = d.getDay();              /* week starts on Sunday */
  for (let o = -dow; o <= 0; o++) n += st.log[dayKey(o)] || 0;
  return n;
}
const totalAnswers = () => Object.values(st.log).reduce((a, b) => a + b, 0);
const BADGES = [
  ['first', '🌱', () => totalAnswers() >= 1],
  ['ans100', '💯', () => totalAnswers() >= 100],
  ['ans500', '🚀', () => totalAnswers() >= 500],
  ['ans1000', '🏆', () => totalAnswers() >= 1000],
  ['streak3', '🔥', () => st.streak.n >= 3],
  ['streak7', '🌟', () => st.streak.n >= 7],
  ['streak30', '👑', () => st.streak.n >= 30],
  ['week', '🎯', () => weekCount() >= (st.weekGoal || 100)],
  ['letters', '🔤', () => Object.keys(LOADED).some(l => { const L = items(l).filter(i => i.cat === 'letters'), p = P(l); return L.length && L.every(i => p[i.k] && p[i.k].b >= 3); })],
  ['topic', '📚', () => Object.keys(LOADED).some(l => { const p = P(l); return WORD_CATS.concat(PHRASE_CATS).some(c => { const L = items(l).filter(i => i.cat === c); return L.length >= 5 && L.every(i => p[i.k] && p[i.k].b >= 3); }); })],
  ['level', '⬆️', () => Object.keys(LOADED).some(l => curLevel(l) >= 3)],
  ['poly', '🌍', () => Object.keys(st.prog).filter(l => Object.keys(st.prog[l] || {}).length >= 10).length >= 3],
  ['chat', '🤖', () => (st.flags || {}).chat >= 1],
  ['role', '🎭', () => (st.flags || {}).role >= 1],
  ['speaker', '🎤', () => (st.flags || {}).say >= 10],
  ['kit', '🧳', () => (st.kit || []).length >= 1]
];
let _badgeT = null;
function checkBadges() {
  clearTimeout(_badgeT);
  _badgeT = setTimeout(() => {
    st.badges = st.badges || {};
    let fresh = [];
    BADGES.forEach(([id, ic, ok]) => { try { if (!st.badges[id] && ok()) { st.badges[id] = Date.now(); fresh.push(ic + ' ' + T('b_' + id)); } } catch (e) {} });
    if (fresh.length) { save(); fresh.forEach((b, i) => setTimeout(() => toast('🏅 ' + T('badgeNew', { b }), '', 3500), i * 1200)); }
  }, 400);
}
/* called by grade() in app.js */
function onGraded() { checkBadges(); }

function goalHTML() {
  const g = st.weekGoal || 100, n = weekCount();
  return '<div class="card goal"><div class="lvl"><span>🎯 ' + esc(T('weekGoal')) + '</span><span>' + esc(T('weekN', { n: Math.min(n, 99999), g })) + '</span></div>' + bar(Math.min(n, g), g) +
    (n >= g ? '<p class="hint">✅ ' + esc(T('weekDone')) + '</p>' : '<p class="hint">' + esc(T('weekLeft', { n: g - n })) + '</p>') + '</div>';
}
function badgesHTML() {
  const got = st.badges || {};
  return '<div class="badges">' + BADGES.map(([id, ic]) => '<div class="badge' + (got[id] ? ' on' : '') + '" title="' + esc(T('bd_' + id)) + '"><span>' + (got[id] ? ic : '🔒') + '</span><b>' + esc(T('b_' + id)) + '</b><small>' + esc(T('bd_' + id)) + '</small></div>').join('') + '</div>';
}

/* ============================================================
   2. AI CONVERSATION — role-play with a local, in the target language
   ============================================================ */
const SCENARIOS = [
  ['taxi', '🚕', 'You are a taxi driver. The traveler just got into your taxi.'],
  ['market', '🛍️', 'You are a street-market vendor selling fruit and souvenirs. Friendly bargaining is normal.'],
  ['rest', '🍜', 'You are a waiter in a small local restaurant.'],
  ['hotel', '🏨', 'You are a hotel receptionist. The traveler is checking in.'],
  ['dir', '🧭', 'You are a friendly local on the street. The traveler looks lost and asks for directions.'],
  ['social', '☕', 'You are a friendly local of similar age at a café, making small talk with a tourist.'],
  ['free', '💬', 'You are a friendly local who is happy to chat about anything the traveler wants.']
];
const COUNTRY_CTX = { ka: 'Tbilisi, Georgia (Georgian script; polite forms)', vi: 'Hanoi, Vietnam (northern Vietnamese)', id: 'Bali or Jakarta, Indonesia', tw: 'Kumasi or Accra, Ghana (Asante Twi)', lg: 'Kampala, Uganda (Luganda)', ha: 'northern Nigeria (Hausa, Latin spelling with ɓ ɗ ƙ)', yo: 'Lagos or Ibadan, Nigeria (Yoruba with under-dots, tone marks optional)', ig: 'Enugu or Onitsha, Nigeria (Igbo with under-dots, tone marks optional)', sw: 'Tanzania or Kenya (standard Swahili)', am: 'Ethiopia (Amharic in Ge\'ez script; polite forms)', tr: 'Turkey', ko: 'South Korea (use polite -yo Korean)', ja: 'Japan (use polite desu/masu Japanese)', zh: 'mainland China (Mandarin, simplified characters, pinyin with tone marks in "roman")', hi: 'India (Hindi in Devanagari; common English loanwords are natural)', de: 'Germany', el: 'Greece (modern Greek)', yi: 'a Yiddish-speaking community (for example in New York, Antwerp or Bnei Brak). Use standard YIVO Yiddish spelling in Hebrew letters; in "heb" write a simplified Hebrew-letter spelling without Yiddish diacritics (it is read aloud by a Hebrew voice)', it: 'Italy', pt: 'Brazil (speak Brazilian Portuguese)', ro: 'Romania', fr: 'France or another French-speaking place', ary: 'Morocco. Speak Moroccan Darija as locals really talk (NOT Modern Standard Arabic), written in Arabic script; French loanwords are natural', th: 'Thailand', es: 'Spain or Latin America', ru: 'Russia', ar: 'an Arabic-speaking country (use simple Modern Standard Arabic that everyone understands)', en: 'an English-speaking country' };
const CHAT = { scen: null, lvl: 'easy', msgs: [], busy: false, sugg: [], showTr: true, summary: null, rec: null };

function chatPrompt(userMsg) {
  const lang = st.lang, L = LANGS[lang].name.en, sc = SCENARIOS.find(s => s[0] === CHAT.scen);
  const convo = CHAT.msgs.slice(-14).map(m => (m.me ? 'Traveler: ' : 'Local: ') + m.text).join('\n');
  return 'Role-play for a language learner. ' + sc[2] + ' The setting is ' + (COUNTRY_CTX[lang] || 'a country where ' + L + ' is spoken') + '. ' +
    'The traveler is a Hebrew speaker learning ' + L + ' (' + (st.gender === 'f' ? 'female' : 'male') + '). ' +
    (CHAT.lvl === 'easy' ? 'The traveler is a BEGINNER: use very short, simple, slow sentences (max 8 words) and common words only. ' : 'The traveler is intermediate: speak naturally but clearly, 1–2 sentences. ') +
    'Stay in character. Your "reply" must be ONLY in ' + L + ' (native script), polite, 1–2 short sentences, and move the conversation forward (ask something back). ' +
    'The traveler may write in ' + L + ', in Latin transliteration, in Hebrew or in English — always understand it. ' +
    'If the traveler did not write correct ' + L + ' (mistake, or wrote in Hebrew/English), set "better" to how a native would say what they meant, plus "better_heb" (its pronunciation in Hebrew letters), and "feedback" to a short friendly tip in Hebrew. If their ' + L + ' was fine, leave those three empty. ' +
    'Return ONLY JSON: {"reply":"","roman":"Latin transliteration of reply","heb":"pronunciation of reply in Hebrew letters, no niqqud","he":"Hebrew translation of reply","feedback":"","better":"","better_heb":"",' +
    '"suggest":[{"text":"a short answer the traveler could give next, in ' + L + '","heb":"its pronunciation in Hebrew letters","he":"its meaning in Hebrew"}]} — give 3 suggestions, simple ones for a beginner.\n\n' +
    (convo ? 'Conversation so far:\n' + convo + '\n\n' : '') +
    (userMsg ? 'Traveler\'s new message: "' + userMsg + '"' : 'Start the conversation now with a natural first line for this situation.');
}
async function chatTurn(userMsg) {
  if (CHAT.busy) return;
  if (!aiReady()) { toast(T('needAi'), 'warn', 4000); go('settings', 'ai'); return; }
  if (userMsg) CHAT.msgs.push({ me: true, text: userMsg });
  CHAT.busy = true; CHAT.sugg = []; chatPaint();
  try {
    const r = await aiJSON(chatPrompt(userMsg));
    if (!r || !r.reply) throw new Error(T('aiBadJson'));
    if (userMsg && (r.better || r.feedback)) { const last = CHAT.msgs[CHAT.msgs.length - 1]; last.better = String(r.better || ''); last.betterHeb = String(r.better_heb || ''); last.fb = String(r.feedback || ''); }
    CHAT.msgs.push({ me: false, text: String(r.reply), roman: String(r.roman || ''), heb: String(r.heb || ''), he: String(r.he || '') });
    CHAT.sugg = (r.suggest || []).filter(x => x && x.text).slice(0, 3).map(x => ({ text: String(x.text), heb: String(x.heb || ''), he: String(x.he || '') }));
    CHAT.busy = false; chatPaint();
    speak(sayStr(st.lang, String(r.reply), String(r.heb || '')), st.lang, false, null, true);
    if (CHAT.msgs.filter(m => m.me).length >= 3 && !(st.flags || {}).chat) flag('chat');
  } catch (e) {
    CHAT.busy = false;
    if (userMsg) { CHAT.msgs.pop(); const i = $('#cIn'); if (i) i.value = userMsg; }
    chatPaint(); toast((aiBusy(e) ? T('qaBusyErr') : T('aiErr') + ': ' + e.message), 'err', 7000);
  }
}
async function chatSummary() {
  if (CHAT.busy || !CHAT.msgs.length) return;
  CHAT.busy = true; chatPaint();
  const L = LANGS[st.lang].name.en;
  const convo = CHAT.msgs.map(m => (m.me ? 'Traveler: ' : 'Local: ') + m.text).join('\n');
  try {
    const r = await aiJSON('You are a kind ' + L + ' teacher. Here is a practice conversation of a Hebrew-speaking traveler (the "Traveler") with a local.\n' + convo +
      '\n\nReturn ONLY JSON, all explanations in Hebrew: {"good":"what the traveler did well (1-2 sentences)","improve":"the most important thing to improve (1-2 sentences)","phrases":[{"text":"useful ' + L + ' phrase from or for this conversation","roman":"Latin transliteration","heb":"pronunciation in Hebrew letters","he":"meaning in Hebrew"}]} with 3-5 phrases.');
    CHAT.summary = { good: String(r.good || ''), improve: String(r.improve || ''), phrases: (r.phrases || []).filter(x => x && x.text).slice(0, 5) };
  } catch (e) { toast((aiBusy(e) ? T('qaBusyErr') : T('aiErr') + ': ' + e.message), 'err', 7000); }
  CHAT.busy = false; chatPaint();
}
function chatListen() {
  if (!SR) { toast(T('noSR'), 'warn', 4000); return; }
  if (CHAT.rec) { try { CHAT.rec.stop(); } catch (e) {} return; }
  const r = CHAT.rec = new SR();
  r.lang = LANGS[st.lang].tts; r.interimResults = false; r.maxAlternatives = 1;
  const b = $('#cMic'); if (b) b.classList.add('on');
  r.onresult = e => { const t = e.results[0][0].transcript; const i = $('#cIn'); if (i) i.value = t; };
  r.onerror = e => { if (e.error !== 'no-speech' && e.error !== 'aborted') toast(T('srErr') + ' (' + e.error + ')', 'err'); };
  r.onend = () => { CHAT.rec = null; const b2 = $('#cMic'); if (b2) b2.classList.remove('on'); };
  try { r.start(); } catch (e) { CHAT.rec = null; }
}
function chatBubble(m, n) {
  const lang = st.lang, tl = LANGS[lang].tts, dir = LANGS[lang].dir;
  if (m.me) return '<div class="bub me"><small class="who">' + esc(T('you')) + '</small><span dir="auto" class="' + (isLatin(m.text) || /[\u0590-\u05FF]/.test(m.text) ? '' : 'tgt md') + '" lang="' + (/[\u0590-\u05FF]/.test(m.text) ? 'he' : tl) + '">' + esc(m.text) + '</span>' +
    (m.better ? '<div class="better"><small>✍️ ' + esc(T('chatBetter')) + '</small><span class="tgt md" lang="' + tl + '" dir="' + dir + '">' + esc(m.better) + '</span>' + (m.betterHeb ? '<span class="pr">' + esc(m.betterHeb) + '</span>' : '') +
      (m.fb ? '<span class="mn">💬 ' + esc(m.fb) + '</span>' : '') + '<div class="bac"><button class="ic" data-act="chatSayRaw" data-n="' + n + '" data-f="better">🔊</button></div></div>' : '') + '</div>';
  return '<div class="bub them"><small class="who">' + esc(T('local')) + '</small><span class="tgt md" lang="' + tl + '" dir="' + dir + '">' + esc(m.text) + '</span>' +
    '<span class="pr">' + esc(st.ui === 'he' ? (m.heb || m.roman) : (m.roman || m.heb)) + '</span>' + (CHAT.showTr && m.he ? '<span class="mn">' + esc(m.he) + '</span>' : '') +
    '<div class="bac"><button class="ic" data-act="chatSayRaw" data-n="' + n + '">🔊</button><button class="ic" data-act="chatSayRaw" data-n="' + n + '" data-slow="1">🐢</button>' +
    '<button class="ic" data-act="chatBig" data-n="' + n + '">⛶</button></div></div>';
}
function chatBodyHTML() {
  const lang = st.lang, tl = LANGS[lang].tts;
  let h = '<div class="chat">' + CHAT.msgs.map(chatBubble).join('') + (CHAT.busy ? '<div class="bub them typing"><span>…</span></div>' : '') + '</div>';
  if (CHAT.summary) {
    const s = CHAT.summary;
    h += '<div class="card"><h3>📝 ' + esc(T('chatSumTitle')) + '</h3><p><b>👍 ' + esc(T('chatGood')) + ':</b> ' + esc(s.good) + '</p><p><b>🎯 ' + esc(T('chatImprove')) + ':</b> ' + esc(s.improve) + '</p>' +
      (s.phrases.length ? '<h3>' + esc(T('chatPhrases')) + '</h3><div class="items">' + s.phrases.map((x, i) => '<div class="irow"><div class="itx"><span class="tgt md" lang="' + tl + '" dir="' + LANGS[lang].dir + '">' + esc(x.text) + '</span><span class="pr">' + esc(x.heb || x.roman || '') + '</span><span class="mn">' + esc(x.he || '') + '</span></div><div class="iac"><button class="ic" data-act="sayRaw" data-t="' + esc(sayStr(lang, x.text, x.heb)) + '">🔊</button></div></div>').join('') + '</div>' +
        '<button class="btn gold" data-act="chatAddMine">➕ ' + esc(T('chatAddMine')) + '</button>' : '') + '</div>';
  }
  if (!CHAT.busy && CHAT.sugg.length && !CHAT.summary) h += '<p class="tiny">' + esc(T('chatSugg')) + '</p><div class="suggs">' + CHAT.sugg.map((x, i) => '<button class="sugg" data-act="chatSugg" data-n="' + i + '"><span class="tgt sm" lang="' + tl + '">' + esc(x.text) + '</span><small>' + esc(st.ui === 'he' ? (x.heb || '') : '') + (x.he ? ' · ' + esc(x.he) : '') + '</small></button>').join('') + '</div>';
  return h;
}
function chatPaint() { const b = $('#chatBody'); if (b && NAV.cur === 'chat') { b.innerHTML = chatBodyHTML(); const s = $('#cSend'); if (s) s.disabled = CHAT.busy; b.lastElementChild && b.lastElementChild.scrollIntoView && b.lastElementChild.scrollIntoView({ block: 'end', behavior: 'smooth' }); } }
SCREENS.chat = () => {
  const lang = st.lang;
  if (!CHAT.scen) {
    return header(T('chat') + ' · ' + LN(lang)) + '<p class="note">' + esc(T('chatIntro')) + '</p>' +
      '<div class="seg"><button class="' + (CHAT.lvl === 'easy' ? 'on' : '') + '" data-act="chatLvl" data-v="easy">🌱 ' + esc(T('lvEasy')) + '</button><button class="' + (CHAT.lvl === 'mid' ? 'on' : '') + '" data-act="chatLvl" data-v="mid">🌳 ' + esc(T('lvMid')) + '</button></div>' +
      (aiReady() ? '' : '<p class="warn">🔌 ' + esc(T('needAi')) + ' <button class="link" data-act="nav" data-to="settings" data-sec="ai">' + esc(T('connectAi')) + '</button></p>') +
      '<div class="list">' + SCENARIOS.map(s => '<button class="trow" data-act="chatStart" data-s="' + s[0] + '"><span class="ti">' + s[1] + '</span><span class="tt"><b>' + esc(T('scen_' + s[0])) + '</b></span></button>').join('') + '</div>' +
      '<p class="tiny">🔒 ' + esc(T('aiPrivacy')) + '</p>';
  }
  const sc = SCENARIOS.find(s => s[0] === CHAT.scen);
  return header(sc[1] + ' ' + T('scen_' + sc[0])) + `
  <div class="row wrap"><button class="btn" data-act="chatTr">${CHAT.showTr ? '🙈' : '👁️'} ${esc(T('chatTr'))}</button><button class="btn" data-act="chatEnd">📝 ${esc(T('chatEnd'))}</button><button class="btn" data-act="chatNew">↺ ${esc(T('chatNew'))}</button></div>
  <div id="chatBody">${chatBodyHTML()}</div>
  <div class="composer">
    ${SR ? '<button class="ic" id="cMic" data-act="chatMic" aria-label="' + esc(T('sayIt')) + '">🎤</button>' : ''}
    <textarea id="cIn" rows="2" dir="auto" placeholder="${esc(T('chatPh', { l: LN(lang) }))}"></textarea>
    <button class="cta slim" id="cSend" data-act="chatSend"${CHAT.busy ? ' disabled' : ''}>${esc(T('chatSend'))}</button>
  </div>`;
};

/* ============================================================
   3. TRAVEL KIT — emergency numbers, personal cards, quick phrases (all offline)
   ============================================================ */
const KIT_TYPES = [['hotel', '🏨'], ['allergy', '⚠️'], ['meds', '💊'], ['contact', '📞'], ['custom', '📝']];
const KIT_QUICK = ['W:help', 'W:police', 'W:doctor', 'W:hospital', 'W:p_doctor', 'W:p_police', 'W:sp_unwell', 'W:sp_nearhosp', 'W:c_lost', 'W:c_passport', 'W:sp_embassy', 'W:p_address', 'W:p_english'];
SCREENS.kit = () => {
  const lang = st.lang, tl = LANGS[lang].tts, dir = LANGS[lang].dir;
  const cards = (st.kit || []).filter(c => c.lang === lang);
  const favs = (st.favs[lang] || []).map(k => findItem(lang, k)).filter(Boolean);
  const quick = KIT_QUICK.map(k => findItem(lang, k)).filter(Boolean);
  const qbtn = it => '<button class="qk" data-act="big" data-k="' + it.k + '"><span class="tgt sm" lang="' + tl + '" dir="' + dir + '">' + esc(it.text) + '</span><small>' + esc(meaning(it)) + '</small></button>';
  const em = EMERG[lang] || [];
  return header('🧳 ' + T('kit') + ' · ' + LN(lang)) + `
  <p class="note">${esc(T('kitIntro'))}</p>
  <h3>🆘 ${esc(T('kitEmerg'))}${COUNTRY[lang] ? ' — ' + esc(tr(COUNTRY[lang])) : ''}</h3>
  <div class="list">${em.map(e => '<div class="trow em"><span class="ti">' + e[0] + '</span><span class="tt"><b>' + esc(tr(e[1])) + '</b></span>' + e.slice(2).map(n => '<a class="btn red" href="tel:' + esc(n) + '">📞 ' + esc(n) + '</a>').join('') + '</div>').join('')}</div>
  <p class="tiny">${esc(T('kitEmergNote'))}</p>
  <h3>🗂️ ${esc(T('kitCards'))}</h3>
  ${cards.length ? '<div class="items">' + cards.map(c => '<div class="irow kitcard" data-lp="kit" data-id="' + c.id + '"><div class="itx"><b>' + esc((KIT_TYPES.find(t => t[0] === c.type) || ['', '📝'])[1] + ' ' + (c.title || T('kt_' + c.type))) + '</b><span class="tgt md" lang="' + tl + '" dir="' + dir + '">' + esc(c.text) + '</span>' + (c.src ? '<span class="mn">' + esc(c.src) + '</span>' : '') + '</div><div class="iac"><button class="ic" data-act="kitBig" data-id="' + c.id + '" aria-label="' + esc(T('showBig')) + '">⛶</button><button class="ic" data-act="kitSay" data-id="' + c.id + '">🔊</button><button class="ic" data-act="kitEdit" data-id="' + c.id + '" aria-label="' + esc(T('edit')) + '">✎</button></div></div>').join('') + '</div>' : '<p class="empty">' + esc(T('kitEmpty')) + '</p>'}
  <div class="chips wrap">${KIT_TYPES.map(t => '<button class="chip" data-act="kitAdd" data-t="' + t[0] + '">' + t[1] + ' ' + esc(T('kt_' + t[0])) + '</button>').join('')}</div>
  <h3>⚡ ${esc(T('kitQuick'))}</h3><div class="qgrid">${quick.map(qbtn).join('')}</div>
  <h3>★ ${esc(T('kitFavs'))}</h3>${favs.length ? '<div class="qgrid">' + favs.map(qbtn).join('') + '</div>' : '<p class="empty">' + esc(T('kitFavsEmpty')) + '</p>'}`;
};
function kitForm(c, type) {
  const lang = st.lang, t = c ? c.type : type;
  modal('<h3>' + (KIT_TYPES.find(x => x[0] === t) || ['', '📝'])[1] + ' ' + esc(c ? T('edit') : T('kt_' + t)) + '</h3><p class="hint">' + esc(T('kitHint_' + t)) + '</p>' +
    '<label class="fld"><span>' + esc(T('kitTitle')) + '</span><input id="kTitle" value="' + esc(c ? c.title : T('kt_' + t)) + '" dir="auto"></label>' +
    '<label class="fld"><span>' + esc(T('kitSrc')) + '</span><textarea id="kSrc" rows="2" dir="auto">' + esc(c ? c.src : '') + '</textarea></label>' +
    '<button class="btn gold" id="kTr">✨ ' + esc(T('kitTranslate', { l: LN(lang) })) + (aiReady() ? '' : ' <span class="tag">PRO</span>') + '</button>' +
    '<label class="fld"><span>' + esc(T('kitText', { l: LN(lang) })) + '</span><textarea id="kText" rows="3" dir="' + LANGS[lang].dir + '" lang="' + LANGS[lang].tts + '">' + esc(c ? c.text : '') + '</textarea></label>' +
    '<div class="row wrap"><button class="cta slim" id="kSave">💾 ' + esc(T('save')) + '</button>' + (c ? '<button class="btn red" id="kDel">🗑️ ' + esc(T('delete')) + '</button>' : '') + '</div>');
  $('#kTr').onclick = async () => {
    const src = $('#kSrc').value.trim(); if (!src) { toast(T('typeFirst'), 'warn'); return; }
    if (!aiReady()) { toast(T('needAi'), 'warn', 4000); return; }
    const b = $('#kTr'); b.disabled = true; b.textContent = '⏳ ' + T('working');
    try {
      const r = await aiJSON('Translate this note for a traveler into ' + LANGS[lang].name.en + ' so a local person can read it and understand clearly (it may be shown to a doctor, a driver or a waiter). Keep names, numbers and addresses exactly as written. ' + genderNote(lang) +
        ' Return ONLY JSON {"text":"the translation in native script"}.\nNote: """' + src + '"""');
      if (r && r.text) $('#kText').value = String(r.text);
    } catch (e) { toast(T('aiErr') + ': ' + e.message, 'err', 6000); }
    b.disabled = false; b.textContent = '✨ ' + T('kitTranslate', { l: LN(lang) });
  };
  $('#kSave').onclick = () => {
    const text = $('#kText').value.trim(); if (!text) { toast(T('fillBoth'), 'warn'); return; }
    st.kit = st.kit || [];
    const rec = { id: c ? c.id : uid(), lang, type: t, title: $('#kTitle').value.trim(), src: $('#kSrc').value.trim(), text };
    if (c) st.kit[st.kit.findIndex(x => x.id === c.id)] = rec; else st.kit.push(rec);
    save(); closeModal(); render(); toast(T('saved')); checkBadges();
  };
  if (c) $('#kDel').onclick = () => confirmBox(T('confirmDelete'), T('delete'), () => { st.kit = st.kit.filter(x => x.id !== c.id); save(); render(); toast(T('deleted')); }, true);
}

/* ============================================================
   4. GRAMMAR & CULTURE TIPS
   ============================================================ */
SCREENS.tips = () => {
  const lang = st.lang, tl = LANGS[lang].tts, dir = LANGS[lang].dir, list = TIPS[lang] || [];
  return header('💡 ' + T('tips') + ' · ' + LN(lang)) + '<p class="note">' + esc(T('tipsIntro')) + '</p>' +
    (list.length ? list.map((t, i) => '<details class="card tip"' + (i === 0 ? ' open' : '') + '><summary>' + esc(tr(t.t)) + '</summary><p>' + esc(tr(t.b)) + '</p>' +
      (t.ex || []).map(e => '<div class="irow"><div class="itx"><span class="tgt md" lang="' + tl + '" dir="' + dir + '">' + esc(e[0]) + '</span><span class="pr">' + esc(st.ui === 'he' ? e[2] : (e[1] || e[2])) + '</span><span class="mn">' + esc(st.ui === 'he' ? e[3] : e[4]) + '</span></div><div class="iac"><button class="ic" data-act="sayRaw" data-t="' + esc(sayStr(lang, e[0], e[2])) + '">🔊</button><button class="ic" data-act="sayRaw" data-slow="1" data-t="' + esc(sayStr(lang, e[0], e[2])) + '">🐢</button></div></div>').join('') +
      '</details>').join('') : '<p class="empty">' + esc(T('nothingNow')) + '</p>') +
    '<p class="hint">🪄 ' + esc(T('tipsAsk')) + '</p>';
};

/* ============================================================
   actions
   ============================================================ */
Object.assign(ACT, {
  chatLvl: d => { CHAT.lvl = d.v; render(); },
  chatStart: d => { Object.assign(CHAT, { scen: d.s, msgs: [], sugg: [], summary: null, busy: false }); render(); chatTurn(''); },
  chatSend: () => { const i = $('#cIn'); const v = i ? i.value.trim() : ''; if (!v) { toast(T('typeFirst'), 'warn'); return; } i.value = ''; chatTurn(v); },
  chatSugg: d => { const x = CHAT.sugg[+d.n]; if (x) chatTurn(x.text); },
  chatMic: () => chatListen(),
  chatTr: () => { CHAT.showTr = !CHAT.showTr; render(); },
  chatNew: () => { Object.assign(CHAT, { scen: null, msgs: [], sugg: [], summary: null }); render(); },
  chatEnd: () => chatSummary(),
  chatSayRaw: d => { const m = CHAT.msgs[+d.n]; if (m) speak(d.f === 'better' ? sayStr(st.lang, m.better, m.betterHeb) : sayStr(st.lang, m.text, m.heb), st.lang, !!d.slow, null, !m.me); },
  chatBig: d => { const m = CHAT.msgs[+d.n]; if (m) bigShow(m.text, st.lang, st.ui === 'he' ? (m.heb || m.roman) : (m.roman || m.heb), m.he, sayStr(st.lang, m.text, m.heb)); },
  chatAddMine: () => {
    const s = CHAT.summary; if (!s) return;
    const list = st.custom[st.lang] = st.custom[st.lang] || [];
    let n = 0; s.phrases.forEach(x => { if (!list.some(c => c.text === x.text)) { list.push({ id: uid(), he: String(x.he || x.text), text: String(x.text), heb: String(x.heb || ''), roman: String(x.roman || '') }); n++; } });
    save(); toast(T('addedN', { n }));
  },
  kitAdd: d => kitForm(null, d.t),
  kitEdit: d => { const c = (st.kit || []).find(x => x.id === d.id); if (c) kitForm(c); },
  kitBig: d => { const c = (st.kit || []).find(x => x.id === d.id); if (c) bigShow(c.text, c.lang, '', c.title); },
  kitSay: d => { const c = (st.kit || []).find(x => x.id === d.id); if (c) speak(c.text, c.lang); },
  setWeekGoal: d => { st.weekGoal = +d.n; save(); render(); checkBadges(); }
});
/* Enter sends in the chat (Shift+Enter = new line) */
document.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && e.target.id === 'cIn') { e.preventDefault(); ACT.chatSend(); } });
/* long-press on a kit card → edit */
document.addEventListener('pointerdown', e => {
  const row = e.target.closest('[data-lp=kit]'); if (!row || e.target.closest('button')) return;
  const id = row.dataset.id, t = setTimeout(() => ACT.kitEdit({ id }), 550);
  const cancel = () => { clearTimeout(t); ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => row.removeEventListener(ev, cancel)); };
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => row.addEventListener(ev, cancel));
});

window.__MODS.features = '1.17.1';
boot();

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
  <button class="btn gold wide" data-act="nav" data-to="sheet">📄 ${esc(T('sheetTitle'))}</button>
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
   4b. TRIP CHEAT SHEET — a compact, printable page of the phrases that matter most
   ============================================================ */
const SHEET_SECS = [
  ['core', '⭐', ['hello', 'thanks', 'please', 'sorry', 'yes', 'no', 'ok', 'howmuch', 'p_toilet', 'p_nounder', 'p_english', 'p_slow', 'p_want', 'p_expensive', 'p_bill', 'p_water', 'p_nospicy']],
  ['nums', '🔢', ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n20', 'n50', 'n100', 'n1000']],
  ['move', '🚕', ['p_address', 'c_stophere', 'c_far', 'sm_meter', 'p_hotel', 'sm_airport', 'sm_busstop']],
  ['food', '🍽️', ['c_table', 'c_menu', 'c_delicious', 'c_nomeat', 'c_allergy', 'sf_takeaway', 'c_card']],
  ['emerg', '🆘', ['help', 'p_doctor', 'p_police', 'sp_nearhosp', 'sp_helpme', 'c_lost', 'sp_embassy']],
  ['fav', '★', null],
  ['mine', '💬', null]
];
function sheetRows(sec, lang) {
  if (sec[0] === 'fav') return (st.favs[lang] || []).map(k => findItem(lang, k)).filter(Boolean).map(i => [i.text, pron(i), meaning(i)]);
  if (sec[0] === 'mine') return st.phrases.filter(x => x.lang === lang).map(x => [x.text, st.ui === 'he' ? (x.heb || x.roman) : (x.roman || x.heb), x.src]);
  return sec[2].map(k => findItem(lang, 'W:' + k)).filter(Boolean).map(i => [i.text, pron(i), meaning(i)]);
}
function sheetHTML() {
  const lang = st.lang, on = st.sheet || {}, tl = LANGS[lang].tts, dir = LANGS[lang].dir;
  const em = (EMERG[lang] || []).map(e => tr(e[1]) + ': ' + e.slice(2).join(' / ')).join(' · ');
  let h = '<div class="sh-head"><b>' + esc(LN(lang)) + ' · <bdi lang="' + tl + '" dir="' + dir + '">' + esc(LANGS[lang].native) + '</bdi></b><small>LingoNest · ' + esc(T('sheetTitle')) + '</small></div>';
  if (em) h += '<p class="sh-em">🆘 ' + esc(em) + '</p>';
  SHEET_SECS.forEach(s => {
    if (on[s[0]] === false) return;
    const rows = sheetRows(s, lang); if (!rows.length) return;
    h += '<section class="sh-sec"><h4>' + s[1] + ' ' + esc(T('sh_' + s[0])) + '</h4>' + rows.map(r =>
      '<div class="sh-row"><span class="sh-mn">' + esc(r[2]) + '</span><span class="sh-tx" lang="' + tl + '" dir="' + dir + '">' + esc(r[0]) + '</span><span class="sh-pr">' + esc(r[1] || '') + '</span></div>').join('') + '</section>';
  });
  return h;
}
SCREENS.sheet = () => {
  if (!st.sheet) st.sheet = {};
  const togs = SHEET_SECS.map(s => {
    const n = sheetRows(s, st.lang).length, on = st.sheet[s[0]] !== false && n > 0;
    return '<button class="chip' + (on ? ' on' : '') + '" data-act="sheetTog" data-s="' + s[0] + '"' + (n ? '' : ' disabled') + ' aria-pressed="' + on + '">' + s[1] + ' ' + esc(T('sh_' + s[0])) + ' <small>' + n + '</small></button>';
  }).join('');
  return header('📄 ' + T('sheetTitle') + ' · ' + LN(st.lang)) + '<p class="note">' + esc(T('sheetIntro')) + '</p>' +
    '<div class="chips wrap">' + togs + '</div>' +
    '<div class="row wrap c"><button class="btn gold" data-act="sheetPrint">🖨️ ' + esc(T('sheetPrint')) + '</button></div>' +
    '<div class="sheet card" id="sheetBox">' + sheetHTML() + '</div>';
};

/* ============================================================
   4c. TRIP MODE — pick a destination language and a flight date; get a day-by-day plan
   ============================================================ */
/* unit = [id, icon, tasks, condition]; task = ['s', scope] lesson · ['d', dialogId] · ['n', screen] */
const TRIP_UNITS = [
  ['letters', '🔤', [['s', 'cat:letters']], l => !isLatin(LANGS[l].native)],
  ['greet', '👋', [['s', 'cat:greet'], ['s', 'cat:basic']]],
  ['num', '🔢', [['s', 'cat:num'], ['n', 'price']]],
  ['phr', '💬', [['s', 'cat:phr']]],
  ['food', '🍽️', [['s', 'cat:food'], ['s', 'cat:s_food'], ['d', 'rest']]],
  ['trans', '🚕', [['s', 'cat:trans'], ['s', 'cat:s_move'], ['d', 'taxi']]],
  ['shop', '🛍️', [['s', 'cat:shop'], ['s', 'cat:s_shop'], ['d', 'market'], ['d', 'clothes']]],
  ['hotel', '🏨', [['s', 'cat:hotel'], ['s', 'cat:s_hotel'], ['d', 'hotel'], ['d', 'sim']]],
  ['dirs', '🧭', [['s', 'cat:dirs'], ['d', 'dir'], ['d', 'tour']]],
  ['emerg', '🆘', [['s', 'cat:emerg'], ['s', 'cat:s_help'], ['d', 'pharm']]],
  ['conv', '🤝', [['s', 'cat:conv'], ['s', 'cat:s_social'], ['n', 'chat']]],
  ['airport', '✈️', [['s', 'cat:time'], ['d', 'airport']]]
];
const TRIP_REVIEW = ['review', '🔁', [['s', 'due'], ['n', 'cards']]];
const TRIP_FINAL = ['final', '🧳', [['n', 'kit'], ['n', 'sheet']]];
const TRIP_MAX = 90;
const TRIP_PRIORITY = ['greet', 'num', 'emerg', 'food', 'trans', 'phr', 'hotel', 'letters', 'shop', 'dirs', 'airport', 'conv'];
const dayMs = 864e5;
const ymd = d => { const x = new Date(d); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); };
const dayStart = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d).getTime(); };
const daysBetween = (a, b) => Math.round((dayStart(b) - dayStart(a)) / dayMs);
function tripPlan(t) {
  const units = TRIP_UNITS.filter(u => !u[3] || u[3](t.lang));
  const total = Math.max(1, Math.min(TRIP_MAX, daysBetween(t.start, t.date)));
  if (total === 1) return [[units.find(u => u[0] === 'greet'), units.find(u => u[0] === 'num'), units.find(u => u[0] === 'emerg'), TRIP_FINAL]];
  const D = total - 1, plan = [];
  let list = units;
  if (D * 3 < units.length) {                      /* short trip: keep the essentials, at most 3 topics a day */
    const keep = TRIP_PRIORITY.filter(id => units.some(u => u[0] === id)).slice(0, D * 3);
    list = units.filter(u => keep.includes(u[0]));
  }
  const N = list.length;
  for (let i = 0; i < D; i++) {
    if (D >= N) { const k = Math.floor(i * N / D); plan.push(i === 0 || k > Math.floor((i - 1) * N / D) ? [list[k]] : [TRIP_REVIEW]); }
    else plan.push(list.slice(Math.floor(i * N / D), Math.floor((i + 1) * N / D)));
  }
  plan.push([TRIP_FINAL]);
  return plan;
}
function taskLabel(k) {
  if (k[0] === 's') return k[1] === 'due' ? T('prDue') : k[1] === 'cat:letters' ? T('letters') : T('cat_' + k[1].slice(4));
  if (k[0] === 'd') return '🎭 ' + T('dlg_' + k[1]);
  return { price: '💰 ' + T('prices'), chat: '🤖 ' + T('chat'), kit: '🧳 ' + T('kit'), sheet: '📄 ' + T('sheetTitle'), cards: '🃏 ' + T('prCards') }[k[1]] || k[1];
}
function tripState() {
  const t = st.trip; if (!t || !LANGS[t.lang]) return null;
  const plan = tripPlan(t), today = daysBetween(t.start, ymd(Date.now())), left = daysBetween(ymd(Date.now()), t.date);
  return { t, plan, today: Math.max(0, Math.min(plan.length - 1, today)), left, done: Object.keys(t.done || {}).length };
}
function tripDayDate(t, i) { return new Date(dayStart(t.start) + i * dayMs).toLocaleDateString(st.ui === 'he' ? 'he-IL' : st.ui, { weekday: 'short', day: 'numeric', month: 'numeric' }); }
function tripTasksHTML(day, i) {
  return day.map(u => '<div class="tr-unit"><b>' + u[1] + ' ' + esc(T('tu_' + u[0])) + '</b><div class="tr-tasks">' +
    u[2].map((k, j) => '<button class="chip" data-act="tripTask" data-k="' + k[0] + '" data-v="' + esc(k[1]) + '">' + esc(taskLabel(k)) + '</button>').join('') + '</div></div>').join('');
}
function tripHomeCard() {
  const s = tripState(); if (!s) return '';
  if (s.left <= 0) return '<button class="tripcard" data-act="nav" data-to="trip"><span class="tc-ic">✈️</span><span class="tc-tx"><b>' + esc(T('tripGone', { l: LN(s.t.lang) })) + '</b><small>' + esc(T('tripGoneSub')) + '</small></span></button>';
  const day = s.plan[s.today], doneToday = s.t.done && s.t.done[s.today];
  return '<button class="tripcard" data-act="nav" data-to="trip"><span class="tc-ic">✈️</span><span class="tc-tx"><b>' + esc(T('tripLeft', { n: s.left, l: LN(s.t.lang) })) + '</b><small>' +
    (doneToday ? '✓ ' + esc(T('tripDoneToday')) : esc(T('tripToday')) + ': ' + day.map(u => u[1] + ' ' + T('tu_' + u[0])).join(' · ')) + '</small></span><span class="lc-sw">' + esc(T('tripOpen')) + ' ←</span></button>';
}
SCREENS.trip = () => {
  const s = tripState();
  if (!s) {
    const tomorrow = ymd(Date.now() + dayMs), def = st.tripDraft || ymd(Date.now() + 14 * dayMs);
    return header('✈️ ' + T('tripTitle')) + '<p class="note">' + esc(T('tripIntro')) + '</p>' +
      '<div class="card set"><h3>🌍 ' + esc(T('tripDest')) + '</h3><div class="row wrap">' + langBadge(st.lang) + '<b>' + esc(LN(st.lang)) + '</b><button class="btn" data-act="nav" data-to="langs">' + esc(T('switchLang')) + '</button></div>' +
      '<h3>📅 ' + esc(T('tripDate')) + '</h3><input type="date" id="tripDate" min="' + tomorrow + '" value="' + def + '">' +
      '<p class="tiny">' + esc(T('tripHint')) + '</p><button class="cta" data-act="tripCreate">✨ ' + esc(T('tripCreate')) + '</button></div>';
  }
  const { t, plan, today, left, done } = s;
  if (left <= 0) return header('✈️ ' + T('tripTitle')) + '<div class="card sum"><p class="big-num">✈️</p><h3>' + esc(T('tripGone', { l: LN(t.lang) })) + '</h3><p>' + esc(T('tripGoneSub')) + '</p>' +
    '<div class="row c wrap"><button class="btn gold" data-act="tripTask" data-k="n" data-v="kit">🧳 ' + esc(T('kit')) + '</button><button class="btn gold" data-act="tripTask" data-k="n" data-v="sheet">📄 ' + esc(T('sheetTitle')) + '</button><button class="btn" data-act="tripEnd">' + esc(T('tripEnd')) + '</button></div></div>';
  const pct = Math.round(done / plan.length * 100);
  const list = plan.map((day, i) => '<details class="card tr-day' + (i === today ? ' now' : '') + (t.done && t.done[i] ? ' ok' : '') + '"' + (i === today ? ' open' : '') + '><summary><span class="tr-n">' + (t.done && t.done[i] ? '✓' : i + 1) + '</span><span class="tr-d">' + esc(T('tripDay', { n: i + 1 })) + ' · ' + esc(tripDayDate(t, i)) + (i === today ? ' · <b>' + esc(T('today')) + '</b>' : '') + '</span><span class="tr-u">' + day.map(u => u[1]).join(' ') + '</span></summary>' +
    tripTasksHTML(day, i) + '<button class="btn' + (t.done && t.done[i] ? '' : ' gold') + '" data-act="tripDone" data-i="' + i + '">' + (t.done && t.done[i] ? '↺ ' + esc(T('tripUndo')) : '✓ ' + esc(T('tripMarkDone'))) + '</button></details>').join('');
  return header('✈️ ' + T('tripTitle') + ' · ' + LN(t.lang)) +
    '<div class="card trip-top"><div class="tt-big">' + left + '</div><div><b>' + esc(T('tripDaysLeft')) + '</b><small>' + esc(new Date(dayStart(t.date)).toLocaleDateString(st.ui === 'he' ? 'he-IL' : st.ui, { weekday: 'long', day: 'numeric', month: 'long' })) + '</small>' + bar(done, plan.length) + '<small>' + esc(T('tripProg', { d: done, n: plan.length, p: pct })) + '</small></div></div>' +
    '<div id="tripList">' + list + '</div>' +
    '<div class="row c wrap"><button class="btn" data-act="tripEdit">📅 ' + esc(T('tripChange')) + '</button><button class="btn" data-act="tripEnd">🗑️ ' + esc(T('tripEnd')) + '</button></div>';
};

/* ============================================================
   5. USER GUIDE (help.js is loaded on first open)
   ============================================================ */
const HLP = { q: '', open: 'start' };
function helpBody(s) {
  const lines = (s[4][st.ui] || s[4].en || s[4].he), out = []; let ul = [];
  const flush = () => { if (ul.length) { out.push('<ul>' + ul.join('') + '</ul>'); ul = []; } };
  lines.forEach(l => { if (l.startsWith('• ')) ul.push('<li>' + esc(l.slice(2)) + '</li>'); else { flush(); out.push('<p>' + esc(l) + '</p>'); } });
  flush();
  return out.join('');
}
function helpListHTML() {
  if (typeof HELP === 'undefined') return '<p class="loading">⏳</p>';
  const q = HLP.q.trim().toLowerCase();
  const list = HELP.filter(s => !q || (tr(s[3]) + ' ' + (s[4][st.ui] || s[4].en).join(' ') + ' ' + s[4].he.join(' ')).toLowerCase().includes(q));
  if (!list.length) return '<p class="empty">' + esc(T('helpNone')) + '</p>';
  return list.map(s => '<details class="card help"' + (q || HLP.open === s[0] ? ' open' : '') + ' data-hid="' + s[0] + '"><summary><span class="hi">' + s[1] + '</span>' + esc(tr(s[3])) + '</summary>' + helpBody(s) +
    (s[2] ? '<button class="btn gold" data-act="helpGo" data-to="' + s[2] + '">' + esc(T('helpOpen')) + ' ←</button>' : '') + '</details>').join('');
}
SCREENS.help = () => {
  if (typeof HELP === 'undefined') loadScript('help.js').then(() => { if (NAV.cur === 'help') render(); }, () => toast(T('loadFail'), 'err', 5000));
  return header('📖 ' + T('helpTitle')) + '<p class="note">' + esc(T('helpIntro')) + '</p>' +
    '<label class="lsearch"><span>🔍</span><input id="hSrch" type="search" autocomplete="off" placeholder="' + esc(T('helpSearch')) + '" value="' + esc(HLP.q) + '"></label>' +
    '<div id="hList">' + helpListHTML() + '</div>' +
    '<p class="tiny c">LingoNest ' + APP.ver + ' · AppNest · <a href="privacy_policy.html" target="_blank" rel="noopener">' + esc(T('privacy')) + '</a></p>';
};
document.addEventListener('input', e => { if (e.target.id === 'hSrch') { HLP.q = e.target.value; const b = $('#hList'); if (b) b.innerHTML = helpListHTML(); } });
document.addEventListener('toggle', e => { const d = e.target; if (d.matches && d.matches('details.help') && d.open) HLP.open = d.dataset.hid; }, true);

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
  setWeekGoal: d => { st.weekGoal = +d.n; save(); render(); checkBadges(); },
  sheetTog: d => { st.sheet = st.sheet || {}; st.sheet[d.s] = st.sheet[d.s] === false; save(); render(); },
  sheetPrint: () => { const p = $('#print'); p.innerHTML = '<div class="sheet print">' + sheetHTML() + '</div>'; flag('sheet'); setTimeout(() => window.print(), 100); },
  tripCreate: () => {
    const v = ($('#tripDate') || {}).value;
    if (!v || daysBetween(ymd(Date.now()), v) < 1) { toast(T('tripBadDate'), 'warn', 4000); return; }
    st.trip = { lang: st.lang, date: v, start: ymd(Date.now()), done: {} }; delete st.tripDraft; save(); flag('trip'); render();
    toast('✈️ ' + T('tripMade', { n: tripPlan(st.trip).length }), 'ok', 3500);
  },
  tripEdit: () => { if (st.trip) st.tripDraft = st.trip.date; st.trip = null; save(); render(); },
  tripEnd: () => { if (!confirm(T('tripEndQ'))) return; st.trip = null; save(); render(); },
  tripDone: d => { const t = st.trip; if (!t) return; t.done = t.done || {}; if (t.done[d.i]) delete t.done[d.i]; else { t.done[d.i] = 1; toast('🎉 ' + T('tripGood'), 'ok', 2000); } save(); render(); },
  tripTask: async d => {
    const t = st.trip;
    if (t && t.lang !== st.lang && !(await switchLang(t.lang))) return;
    if (d.k === 's') LESSON.start(d.v);
    else if (d.k === 'd') go('dialog', d.v);
    else go(d.v);
  },
  helpGo: d => { const p = String(d.to).split(':'); go(p[0], p[1] || null); }
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

window.__MODS.features = '1.20.0';
boot();

/* ===== LingoNest — assistant-map.js : the LingoNest "map" for the shared AppNest Assistant =====
   appnest-assistant.js is the shared engine and stays byte-identical across all AppNest apps — never edit it here.
   This file tells the engine about LingoNest: screens, fields, safe actions, live state, and how to reach the AI key.
   Loaded before app.js; every function below runs later, when app.js is ready. */
window.APPNEST_ASSISTANT_CONFIG = {
  appName: 'LingoNest',

  appDescription: [
    'LingoNest היא אפליקציה ללימוד שפות לטיול, מבוססת עברית. שפות לימוד: אנגלית, ספרדית, רוסית, ערבית ותאית.',
    'יש בה אותיות ותנועות, שיחה עם בינה (הבינה משחקת מקומי), ערכת טיול (מספרי חירום וכרטיסים אישיים), טיפים ודקדוק, יעד שבועי ותגים, מילים לפי נושאים, משפטים לפי מצבים, דיאלוגים מהחיים, מחירים ומספרים, "דבר בשבילי" (תרגום והקראה של משפט), חיפוש "איך אומרים", תרגול (בחירה, שמיעה, דיבור, בניית משפטים, הכתבה, כרטיסיות) ו-9 רמות עם חזרות מרווחות.',
    'התפקיד שלך: מורה סבלני וחבר לטיול. הסבר מילים, דקדוק, הגייה והבדלים תרבותיים בקצרה ובפשטות, עם דוגמה אחת או שתיים.',
    'כל פעם שאתה כותב מילה או משפט בשפה זרה — כתוב אותו בכתב המקורי, ומיד אחריו בסוגריים את ההגייה באותיות עבריות (ובמידת הצורך גם תעתיק לטיני). אל תכתוב שפה זרה בלי הגייה.',
    'התאם את התשובות לשפה שהמשתמש לומד כרגע ולרמה שלו (מופיעים במצב האפליקציה למטה). בתאית — שים לב ללשון הדובר (זכר: ครับ/ผม, נקבה: ค่ะ/ดิฉัน) לפי מה שמופיע במצב.',
    'אם המשתמש רוצה לשמור או להשמיע משפט לאדם מקומי: קודם נווט למסך "דבר בשבילי", ורק אחר כך כתוב את המשפט לשדה speakText, ואז אפשר להפעיל את הפעולה translateSpeakText.',
    'אם אתה לא בטוח איך אומרים משהו בניב המקומי — אמור זאת בכנות. אל תמציא.'
  ].join('\n'),

  tabs: [
    { name: 'דף הבית', screen: 'home' },
    { name: 'אותיות', screen: 'letters' },
    { name: 'מילים', screen: 'topics' },
    { name: 'משפטים', screen: 'topics:P' },
    { name: 'תרגול', screen: 'practice' },
    { name: 'כרטיסיות', screen: 'cards:mix' },
    { name: 'דיאלוגים', screen: 'dialogs' },
    { name: 'מחירים ומספרים', screen: 'price' },
    { name: 'דבר בשבילי', screen: 'speak' },
    { name: 'שיחה עם בינה', screen: 'chat' },
    { name: 'ערכת טיול', screen: 'kit' },
    { name: 'טיפים ודקדוק', screen: 'tips' },
    { name: 'איך אומרים (חיפוש)', screen: 'search' },
    { name: 'ההתקדמות שלי', screen: 'progress' },
    { name: 'בדיקת איכות תוכן', screen: 'qa' },
    { name: 'הגדרות', screen: 'settings' },
    { name: 'אודות', screen: 'about' }
  ],

  fields: [
    { name: 'speakText', label: 'שדה המשפט במסך "דבר בשבילי"', selector: '#spkIn' },
    { name: 'searchText', label: 'תיבת החיפוש במסך "איך אומרים"', selector: '#sIn' }
  ],

  navigate: function (screen) {
    var p = String(screen).split(':');
    go(p[0], p[1] || null);
  },

  /* LingoNest keeps the AI key encrypted (AES-GCM in IndexedDB). app.js decrypts it once at startup into memKeys;
     here we only hand the engine what it needs, in its {provider, keys} format. No key → null → the engine asks to connect one. */
  readAiConfig: function () {
    var p = st.ai.provider;
    if (p === 'local') return { provider: 'device', keys: { deviceUrl: 'http://localhost:11434/v1' } };
    var key = memKeys[p];
    if (!key) { if (st.ai.has[p]) getKey(p); return null; }
    var keys = {}; keys[p] = key;
    return { provider: p, keys: keys };
  },

  readState: function () {
    var lang = st.lang, cur = curLevel(lang), s = levelStats(lang)[cur];
    var lines = [
      'שפת לימוד: ' + LANGS[lang].name.he + ' (' + LANGS[lang].native + ')',
      'רמה נוכחית: ' + cur + ' — ' + T('lvl' + cur) + ' (' + s.mastered + '/' + s.total + ' נשלטו)',
      'התקדמות כללית בשפה: ' + (langPct(lang) || 0) + '% · חזרות ממתינות: ' + dueCount(lang) + ' · רצף ימים: ' + st.streak.n,
      'לשון הדובר: ' + (st.gender === 'f' ? 'נקבה' : 'זכר') + ' · מסך נוכחי: ' + NAV.cur + (NAV.arg ? ' (' + NAV.arg + ')' : '')
    ];
    var show = function (it) { return it.text + ' [' + (it.heb || it.roman || '') + '] = ' + it.he; };
    try {
      if (NAV.cur === 'list' && NAV.arg) lines.push('המילים שעל המסך (' + T('cat_' + NAV.arg) + '):\n' + items(lang).filter(function (i) { return i.cat === NAV.arg; }).slice(0, 45).map(show).join('\n'));
      if (NAV.cur === 'lesson' && LESSON.q[LESSON.i]) lines.push('הפריט שמתורגל עכשיו: ' + show(LESSON.q[LESSON.i].it));
      if (NAV.cur === 'cards' && CARDS.deck[CARDS.i]) lines.push('הכרטיס שעל המסך: ' + show(CARDS.deck[CARDS.i]));
      if (NAV.cur === 'dialog' && NAV.arg) lines.push('הדיאלוג שעל המסך:\n' + dlgLines(NAV.arg).map(function (x) { return (x.me ? 'אתה: ' : 'מקומי: ') + show(x.it); }).join('\n'));
      if (NAV.cur === 'chat' && typeof CHAT !== 'undefined' && CHAT.msgs.length) lines.push('שיחת התרגול שעל המסך:\n' + CHAT.msgs.slice(-10).map(function (m) { return (m.me ? 'המשתמש: ' : 'המקומי: ') + m.text; }).join('\n'));
      if (NAV.cur === 'speak' && SPK.res) lines.push('התרגום האחרון ב"דבר בשבילי": ' + SPK.res.text + ' [' + (SPK.res.heb || SPK.res.roman) + ']');
      var weak = items(lang).filter(function (i) { var r = P(lang)[i.k]; return r && r.w > 0 && r.b <= 2; }).slice(0, 12);
      if (weak.length) lines.push('מילים שהמשתמש מתקשה בהן:\n' + weak.map(show).join('\n'));
    } catch (e) {}
    return lines.join('\n');
  },

  actions: (function () {
    var a = {
      startLesson: { desc: 'מתחיל שיעור "המשך ללמוד" בשפה הנוכחית', run: function () { LESSON.start('auto'); }, done: 'פתחתי שיעור — בהצלחה!' },
      practiceMistakes: { desc: 'תרגול של המילים שהמשתמש טועה בהן', run: function () { LESSON.start('weak'); }, done: 'פתחתי תרגול טעויות.' },
      practiceSpeaking: { desc: 'תרגול דיבור (מיקרופון)', run: function () { LESSON.start('say'); }, done: 'פתחתי תרגול דיבור.' },
      buildSentences: { desc: 'תרגול בניית משפטים', run: function () { LESSON.start('build'); }, done: 'פתחתי בניית משפטים.' },
      dictation: { desc: 'תרגול הכתבה (שומעים ומקלידים)', run: function () { LESSON.start('dict'); }, done: 'פתחתי הכתבה.' },
      flashcards: { desc: 'פותח כרטיסיות לחזרה מהירה', run: function () { go('cards', 'mix'); }, done: 'פתחתי כרטיסיות.' },
      guessPrice: { desc: 'משחק "נחש את המחיר"', run: function () { go('price'); setTimeout(function () { ACT.priceQuiz(); }, 150); }, done: 'יאללה, תקשיב ותנחש 🎧' },
      translateSpeakText: { desc: 'מתרגם ומקריא את המשפט שכתוב בשדה speakText (רק כשנמצאים במסך "דבר בשבילי")', run: function () { var b = document.querySelector('[data-act=spkTranslate]'); if (!b) throw new Error('not on speak'); b.click(); }, done: 'מתרגם ומקריא…' },
      showGuide: { desc: 'מציג את מדריך הפתיחה', run: function () { guide(0); }, done: 'פתחתי את המדריך.' }
    };
    /* one safe action per learning language: switchTo_th, switchTo_ar … */
    Object.keys(LANGS).forEach(function (l) {
      a['switchTo_' + l] = { desc: 'מעבר ללימוד ' + LANGS[l].name.he, run: function () { switchLang(l).then(function (ok) { if (ok) go('home'); }); }, done: 'עוברים ל' + LANGS[l].name.he + ' ' + LANGS[l].flag };
    });
    return a;
  })(),

  suggestions: [
    'איך אומרים "איפה השוק?" ומה חשוב לדעת על ההגייה?',
    'תסביר לי את המילים שקשות לי ותן טיפ לזכור אותן',
    'תן לי 5 משפטים שימושיים למסעדה',
    'בוא נתרגל — תפתח לי שיעור'
  ]
};
window.__MODS['assistant-map'] = '1.16.0';

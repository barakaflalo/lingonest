/* ===== LingoNest — numbers.js : number → words engine (core). Per-language generators live in lang-xx.js ===== */
const NW = {};
const tk = (t, r, h) => [t, r == null ? t : r, h];
/* Every lang-xx.js registers NUM.xx = { tokens(n, withCurrency) → [[text, roman, hebrew, attachNext?], …], sep: ' ' } */
const NUM = {};
function numWords(lang, n, withCur) {
  const g = NUM[lang];
  if (!g) return null;
  const toks = g.tokens(n, !!withCur), sep = g.sep == null ? ' ' : g.sep;
  let text = '', roman = '', heb = '';
  toks.forEach((t, i) => {
    const gap = i > 0 && !toks[i - 1][3];
    text += (gap ? sep : '') + t[0];
    roman += (gap ? ' ' : '') + t[1];
    heb += (gap ? ' ' : '') + t[2];
  });
  return { text: text.trim(), roman, heb };
}
window.__MODS.numbers = '1.5.0';

/* ===== LingoNest — sw.js : offline cache. VERSION is stamped at build; every release gets a new cache. =====
   App files: network-first with no-cache revalidation (a fresh upload always wins online), cache fallback offline.
   Other origins (AI providers, Google Fonts): pass-through, never cached. */
const VERSION = 'lingonest-1.14.0';
const V = '?v=1.14.0';
const FILES = ["app.js","appnest-assistant.js","assistant-map.js","content.js","features.js","icon-192.png","icon-512.png","lang-am.js","lang-ar.js","lang-ary.js","lang-de.js","lang-el.js","lang-en.js","lang-es.js","lang-fr.js","lang-ha.js","lang-hi.js","lang-ig.js","lang-it.js","lang-ja.js","lang-ko.js","lang-pt.js","lang-ro.js","lang-ru.js","lang-sw.js","lang-th.js","lang-tr.js","lang-yi.js","lang-yo.js","lang-zh.js","manifest.json","numbers.js","privacy_policy.html","style.css","ui-ar.js","ui-en.js","ui-es.js","ui-he.js","ui-ru.js"];
const PRECACHE = ['./', './index.html'].concat(FILES.map(f => './' + f + (/\.(js|css)$/.test(f) ? V : '')));

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('lingonest-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req, { cache: 'no-cache' }).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : undefined)))
  );
});

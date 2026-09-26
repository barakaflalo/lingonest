/* ===== LingoNest — sw.js : offline cache. VERSION is stamped at build; every release gets its own cache. =====
   • Versioned files (?v=<this release>) are served from this release's cache first → a page never mixes releases.
   • The page itself and anything else of ours: network first (with a timeout), falling back to the cache when offline,
     on a slow network, or when the server answers with an error (5xx).
   • A new release installs in the background and waits; the app shows "update ready" and activates it on request.
   • Other origins (AI providers, Google Fonts): pass-through, never cached. */
const VERSION = 'lingonest-1.20.3';
const V = '?v=1.20.3';
const FILES = ["app.js","appnest-assistant.js","assistant-map.js","content.js","features.js","help.js","icon-192.png","icon-512.png","lang-am.js","lang-ar.js","lang-ary.js","lang-de.js","lang-el.js","lang-en.js","lang-es.js","lang-fr.js","lang-ha.js","lang-hi.js","lang-id.js","lang-ig.js","lang-it.js","lang-ja.js","lang-ka.js","lang-ko.js","lang-lg.js","lang-pt.js","lang-ro.js","lang-ru.js","lang-sw.js","lang-th.js","lang-tr.js","lang-tw.js","lang-vi.js","lang-yi.js","lang-yo.js","lang-zh.js","manifest.json","numbers.js","privacy_policy.html","style.css","ui-ar.js","ui-en.js","ui-es.js","ui-he.js","ui-ru.js"];
const PRECACHE = ['./', './index.html'].concat(FILES.map(f => './' + f + (/\.(js|css)$/.test(f) ? V : '')));
const NET_TIMEOUT = 6000;

async function notify(msg) { (await self.clients.matchAll({ includeUncontrolled: true })).forEach(c => c.postMessage(msg)); }

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    /* one missing file must not break the whole install — cache what we can and report */
    const res = await Promise.allSettled(PRECACHE.map(u => c.add(new Request(u, { cache: 'reload' }))));
    const ok = res.filter(r => r.status === 'fulfilled').length;
    await notify({ type: 'precache', ver: '1.20.3', ok, total: PRECACHE.length });
    if (!self.registration.active) await self.skipWaiting();   /* first install: nothing to mix with */
  })());
});
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('lingonest-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

function withTimeout(p, ms) { return new Promise((ok, bad) => { const t = setTimeout(() => bad(new Error('timeout')), ms); p.then(r => { clearTimeout(t); ok(r); }, e => { clearTimeout(t); bad(e); }); }); }
async function fromCache(req) {
  const c = await caches.open(VERSION);
  return (await c.match(req)) || (await c.match(req, { ignoreSearch: true })) || (req.mode === 'navigate' ? c.match('./index.html') : undefined);
}
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.search === V) {                         /* this release's own file: cache first, never another release's content */
    e.respondWith(caches.open(VERSION).then(c => c.match(req)).then(r => r || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  e.respondWith((async () => {
    try {
      const res = await withTimeout(fetch(req, { cache: 'no-cache' }), NET_TIMEOUT);
      if (res.status >= 500) { const c = await fromCache(req); if (c) return c; }
      if (res.ok && (req.mode === 'navigate' || !url.search)) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    } catch (err) {
      const c = await fromCache(req);
      if (c) return c;
      throw err;
    }
  })());
});

/* LingoNest service worker — bump VERSION on every upload so phones pick up the new build. */
const VERSION = 'lingonest-v1.0.0';
const SHELL = ['./', './index.html', './manifest.json', './privacy_policy.html', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('lingonest-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  // Other origins (AI providers, fonts) and non-GET: pass straight through, never cached.
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  // App shell: network-first (fresh uploads win), cache fallback when offline.
  e.respondWith(
    fetch(req, { cache: 'no-cache' }).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});

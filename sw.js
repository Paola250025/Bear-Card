const CACHE_NAME = 'bear-card-v5';
const CORE_ASSETS = [
  './',
  './index.html',
  './bear.html',
  './manifest.json',
  './apple-touch-icon.png',
  './assets/logo-badge-transparent.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Never cache the version file: it's how the page knows an update shipped,
  // so it always has to come straight from the network.
  if (new URL(req.url).pathname.endsWith('/version.json')) return;

  // Page loads: try the network first so visitors with signal always get
  // the latest content, falling back to the cached copy when offline or
  // when the connection is too slow/spotty to answer quickly (a race,
  // not just a .catch(), so a stalling connection doesn't leave someone
  // staring at a blank screen at a campsite with one bar of signal).
  if (req.mode === 'navigate') {
    event.respondWith(
      Promise.race([
        fetch(req).then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', clone));
          return res;
        }),
        new Promise((resolve) => {
          setTimeout(() => {
            caches.match('./index.html').then(resolve);
          }, 3000);
        }),
      ]).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Everything else (icons, manifest, fonts): cache first, network as backup,
  // and quietly cache same-origin responses as they come in.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res.ok && req.url.startsWith(self.location.origin)) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => cached);
    })
  );
});

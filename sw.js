const CACHE_NAME = 'kumano-guide-github-pages-v3';
const BASE_URL = new URL('./', self.registration.scope);
const CORE_ASSETS = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest', './icon.svg',
  './robots.txt', './sitemap.xml',
  './data/offline-map-manifest.json', './data/public-itinerary-2026-11.json',
  './offline/kumano-dual-pilgrim-stamps.gpx', './offline/kumano-dual-pilgrim-stamps.geojson',
  './offline/README-zh-TW.txt'
].map(path => new URL(path, BASE_URL).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(CORE_ASSETS))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys
      .filter(key => key.startsWith('kumano-guide-github-pages-') && key !== CACHE_NAME)
      .map(key => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE_URL.pathname)) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response && response.ok && (
      request.destination === 'style' || request.destination === 'script' ||
      request.destination === 'document' || url.pathname.includes('/offline/') ||
      url.pathname.includes('/data/')
    )) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => request.mode === 'navigate'
    ? caches.match(new URL('./index.html', BASE_URL).href)
    : Promise.reject(new Error('Offline resource not cached')))));
});

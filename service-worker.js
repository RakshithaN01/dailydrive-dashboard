const CACHE_NAME = "dailydrive-cache-v1";
const OFFLINE_URLS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./icons/icon-192.jpg",
  "./icons/icon-512.jpg",
  // Add all your game files and assets here
  "./game.html",
  "./games/2048.html",
  "./games/whack.html",
  "./games/mathquiz.html",
  "./games/sudoku.html",
  "./games/scramble.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_URLS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(
      cachedResponse => cachedResponse || fetch(event.request)
    )
  );
});

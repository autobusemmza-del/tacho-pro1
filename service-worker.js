self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("tacho-cache").then(cache => {
      return cache.addAll([
        "/tacho-pro1/",
        "/tacho-pro1/index.html",
        "/tacho-pro1/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

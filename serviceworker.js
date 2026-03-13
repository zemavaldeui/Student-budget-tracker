self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("valde-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
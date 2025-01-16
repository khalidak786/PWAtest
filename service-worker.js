self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('static-cache-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/main.js',
          // Add other assets here
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });

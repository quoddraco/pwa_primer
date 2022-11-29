var CACHE_NAME = 'pwa-cache';
var urlsToCache = [
    'favicon.ico',
    'index.html',
    'serviceworker.js',
    'manifest.json',
    'scripts.js',
    'pwa-logo.png',
    'pwa-logo192.png',
];

self.addEventListener("install", event => {
  console.log("Service Worker устанавливается.");
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Получаем доступ к кэшу');
                var x = cache.addAll(urlsToCache);
                console.log('Ресурсы добавлены в кэш');
                return x;
            })
    );  
});

self.addEventListener("activate", event => {
  console.log("Service Worker активируется.");
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v2';

//Add list of files to cache here.
const FILES_TO_CACHE = [
    'offline.html',
    'index.html'
];

//INSTALLATION
self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // Precache static resources here. MISE EN CACHE
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

//ACTIVATION
self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    //Remove previous cached data from disk.
    self.clients.claim();
});


//Accès a une ressource
self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Fetch' , evt.request.url);
    //add fetch event handler here
});
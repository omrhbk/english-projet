// Service Worker — English Master PWA
// Strateji: Network-first, localStorage fallback

const CACHE_NAME = 'english-master-v2';

// Offline'da sunulacak temel kaynaklar
const PRECACHE_URLS = [
    '/',
    '/src/styles/style.css',
    '/src/core/app.js',
    '/src/core/data.js',
    '/src/core/progress.js',
    '/src/core/config.js',
    '/src/core/services.js',
    '/src/core/auth.js',
    '/src/components/vocab.js',
    '/src/components/grammar.js',
    '/src/components/listening.js',
    '/src/components/reading.js',
    '/src/components/challenge.js',
    '/src/components/sentence-order.js',
    '/src/features/achievements.js',
    '/src/features/analytics.js',
    '/src/features/animations.js',
    '/src/features/audio.js',
    '/src/features/srs.js',
    '/src/features/progress-chart.js',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
];

// Install — temel kaynakları önbelleğe al
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
    );
    self.skipWaiting();
});

// Activate — eski cache sürümlerini temizle
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

// Fetch — network-first, cache fallback
self.addEventListener('fetch', event => {
    // API isteklerini cache'leme
    if (event.request.url.includes('/api/')) return;

    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Başarılı yanıtı cache'e yaz
                if (response && response.status === 200 && response.type === 'basic') {
                    const cloned = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
                }
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});

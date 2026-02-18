// ─────────────────────────────────────────────────────────
//  API Yapılandırması
//  API key'leri artık .env dosyasında tutulmakta,
//  server üzerinden /api/config endpoint'i ile alınmaktadır.
//  Kaynak kod içinde hiçbir key bulunmamaktadır.
// ─────────────────────────────────────────────────────────

let _config = null;

/**
 * Server'dan config değerlerini çeker (bir kez çeker, önbelleğe alır).
 * @returns {Promise<{unsplashAccessKey: string, geminiApiKey: string}>}
 */
export async function getConfig() {
    if (_config) return _config;

    try {
        const res = await fetch('/api/config');
        if (!res.ok) throw new Error('Config alınamadı');
        _config = await res.json();
    } catch {
        // Server'a ulaşılamazsa boş döndür — uygulama yine de çalışır
        _config = { unsplashAccessKey: '', geminiApiKey: '' };
    }

    return _config;
}

/**
 * Unsplash Access Key'i döndürür.
 * @returns {Promise<string>}
 */
export async function getUnsplashKey() {
    const cfg = await getConfig();
    return cfg.unsplashAccessKey || '';
}

/**
 * Gemini API Key'i döndürür.
 * @returns {Promise<string>}
 */
export async function getGeminiKey() {
    const cfg = await getConfig();
    return cfg.geminiApiKey || '';
}

// Geriye dönük uyumluluk için — eski UNSPLASH_ACCESS_KEY referanslarını kırmamak adına
// Ama artık bu değişkeni doğrudan kullanma; getUnsplashKey() kullan.
export const UNSPLASH_ACCESS_KEY = '';

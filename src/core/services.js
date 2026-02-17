// ─────────────────────────────────────────────────────────
//  External API Services
//  • Free Dictionary API  — tamamen ücretsiz, API key yok
//  • Web Speech API       — tarayıcı built-in TTS, ücretsiz
//  • Unsplash API         — ücretsiz, key config.js'de
// ─────────────────────────────────────────────────────────

import { UNSPLASH_ACCESS_KEY } from './config.js';

// ── 1. Free Dictionary API ───────────────────────────────
// Endpoint: https://api.dictionaryapi.dev/api/v2/entries/en/<word>
// Dönüş: tanım, fonetik, ses URL'si, örnek cümle, eş anlamlılar

const DICT_CACHE = new Map();     // Sayfa içi cache — aynı kelimeyi defalarca çekmesin

/**
 * Kelime için Free Dictionary API'den veri çeker.
 * @param {string} word
 * @returns {Promise<{phonetic: string, audioUrl: string, definition: string, example: string, synonyms: string[]}>}
 */
export async function fetchDictionary(word) {
    const key = word.toLowerCase();
    if (DICT_CACHE.has(key)) return DICT_CACHE.get(key);

    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key)}`);
        if (!res.ok) throw new Error('Not found');

        const data = await res.json();
        const entry = data[0];

        // Fonetik
        const phonetic = entry.phonetic ||
            entry.phonetics?.find(p => p.text)?.text || '';

        // Ses URL'si (MP3)
        const audioUrl = entry.phonetics?.find(p => p.audio && p.audio.startsWith('http'))?.audio ||
            entry.phonetics?.find(p => p.audio)?.audio?.replace('//', 'https://') || null;

        // İlk anlamdan ilk tanım + örnek
        const meanings = entry.meanings || [];
        const firstMeaning = meanings[0] || {};
        const firstDef = firstMeaning.definitions?.[0] || {};

        const definition = firstDef.definition || '';
        const example    = firstDef.example    || '';

        // Eş anlamlılar (tüm anlamlardan topla, max 5)
        const synonyms = [
            ...new Set(
                meanings.flatMap(m =>
                    m.definitions?.flatMap(d => d.synonyms || []) ?? []
                ).concat(
                    meanings.flatMap(m => m.synonyms || [])
                )
            )
        ].slice(0, 5);

        const result = { phonetic, audioUrl, definition, example, synonyms };
        DICT_CACHE.set(key, result);
        return result;

    } catch {
        return { phonetic: '', audioUrl: null, definition: '', example: '', synonyms: [] };
    }
}

// ── 2. Web Speech API — TTS (Telaffuz) ──────────────────
// Tarayıcı built-in — API key gerekmez
// Not: Google Cloud TTS için UNSPLASH gibi config.js'e GCP_TTS_KEY ekle
//      ve aşağıdaki fonksiyonu fetch ile GCP endpoint'e bağla.

/**
 * Verilen metni İngilizce olarak seslendirir.
 * @param {string} text
 * @param {number} rate  — konuşma hızı (0.5–2.0, varsayılan 0.9)
 */
export function speak(text, rate = 0.9) {
    if (!('speechSynthesis' in window)) return;

    // Önceki seslendirmeyi durdur
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang  = 'en-US';
    utterance.rate  = rate;
    utterance.pitch = 1.0;

    // İngilizce ses tercih et
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && v.localService) ||
                    voices.find(v => v.lang.startsWith('en')) ||
                    null;
    if (enVoice) utterance.voice = enVoice;

    window.speechSynthesis.speak(utterance);
}

/**
 * Dictionary API'den gelen ses URL'sini çalar (yoksa Web Speech'e düşer).
 * @param {string} word
 * @param {string|null} audioUrl — fetchDictionary'den gelen MP3 URL
 */
export function playPronunciation(word, audioUrl = null) {
    if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play().catch(() => speak(word));
    } else {
        speak(word);
    }
}

// ── 3. Unsplash API ──────────────────────────────────────
// Ücretsiz plan: 50 istek/saat
// Kayıt: https://unsplash.com/developers  → Access Key → config.js'e ekle

const UNSPLASH_CACHE = new Map();

/**
 * Bir kelime için Unsplash'tan görsel URL'si çeker.
 * @param {string} word
 * @returns {Promise<string|null>}  — img src URL veya null
 */
export async function fetchUnsplashImage(word) {
    if (!UNSPLASH_ACCESS_KEY || UNSPLASH_ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY') {
        return null;   // Key tanımlı değilse atla
    }

    const key = word.toLowerCase();
    if (UNSPLASH_CACHE.has(key)) return UNSPLASH_CACHE.get(key);

    try {
        const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(key)}&orientation=squarish&client_id=${UNSPLASH_ACCESS_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Unsplash error');

        const data = await res.json();
        const imgUrl = data?.urls?.small || null;
        UNSPLASH_CACHE.set(key, imgUrl);
        return imgUrl;
    } catch {
        UNSPLASH_CACHE.set(key, null);
        return null;
    }
}

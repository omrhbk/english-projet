/* ══════════════════════════════════════════════════════════
   Dictionary Module — Free Dictionary API + MyMemory Çeviri
   Features: services.js, timeout, Web Speech fallback,
   search history, SRS integration, vocabData link
══════════════════════════════════════════════════════════ */

import { fetchDictionary, playPronunciation } from '../core/services.js';
import { vocabData } from '../core/data.js';
import { getTypeBadgeHTML, getCEFRBadgeHTML } from '../core/utils.js';
import { showToast } from '../features/toast.js';

const HISTORY_KEY = 'dict_search_history';
const MAX_HISTORY = 20;

let audioUrl = "";
let currentWord = "";

// vocabData lookup map
const vocabMap = {};
vocabData.forEach(w => {
    vocabMap[w.word.toLowerCase()] = w;
});

export function initDictionary() {
    const appContainer = document.getElementById("app");
    const history = getHistory();

    appContainer.innerHTML = `
        <h2>📖 İngilizce Sözlük</h2>
        <div class="dictionary-wrapper">
            <div class="dictionary-search-row">
                <input
                    type="text"
                    id="dict-input"
                    class="search-input"
                    placeholder="Kelime ara... (örn: apple)"
                    autocomplete="off"
                />
                <button id="dict-search-btn" class="btn">Ara</button>
            </div>

            <div class="card-container">
                <div class="dictionary-card" id="dict-card">
                    <h2 id="word-title">Kelime Ara...</h2>
                    <p class="dict-phonetic" id="word-phonetic"></p>

                    <div id="vocab-link-section" style="display:none;margin:0.5rem 0;padding:0.5rem 0.75rem;border-radius:8px;background:rgba(74,144,226,0.08);border:1px solid rgba(74,144,226,0.2);">
                    </div>

                    <hr class="dict-divider" id="dict-divider" style="display:none;">

                    <div class="dict-section" id="dict-pos-section" style="display:none;">
                        <span class="dict-lang-label">📝 Kelime Türü</span>
                        <p class="dict-meaning" id="word-pos"></p>
                    </div>

                    <div class="dict-section" id="dict-en-section" style="display:none;">
                        <span class="dict-lang-label">🇬🇧 İngilizce Tanım</span>
                        <p class="dict-meaning" id="word-meaning"></p>
                    </div>

                    <div class="dict-section" id="dict-example-section" style="display:none;">
                        <span class="dict-lang-label">💬 Örnek Cümle</span>
                        <p class="dict-meaning" id="word-example" style="font-style:italic;"></p>
                    </div>

                    <div class="dict-section" id="dict-tr-section" style="display:none;">
                        <span class="dict-lang-label">🇹🇷 Türkçe Karşılık</span>
                        <p class="dict-meaning" id="word-turkish"></p>
                    </div>

                    <div class="dict-section" id="dict-synonyms-section" style="display:none;">
                        <span class="dict-lang-label">🔗 Eş Anlamlılar</span>
                        <p class="dict-meaning" id="word-synonyms"></p>
                    </div>

                    <p class="dict-meaning" id="word-placeholder">Kelimenin anlamı burada görünecek.</p>

                    <div id="dict-actions" style="display:none;margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
                        <button id="audio-btn" class="btn dict-audio-btn">🔊 Dinle</button>
                        <button id="srs-add-btn" class="btn secondary small" style="display:none;">📌 SRS'e Ekle</button>
                    </div>
                </div>
            </div>

            ${history.length > 0 ? `
            <div class="dict-history-section" style="margin-top:1.5rem;">
                <h4 style="margin-bottom:0.5rem;">📋 Son Aramalar</h4>
                <div id="dict-history" style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                    ${history.map(w => `
                        <button class="btn secondary small dict-history-btn" data-word="${w}">${w}</button>
                    `).join('')}
                </div>
                <button id="clear-history-btn" class="btn secondary small" style="margin-top:0.5rem;font-size:0.75rem;">Geçmişi Temizle</button>
            </div>
            ` : ''}
        </div>
    `;

    document.getElementById("dict-search-btn").addEventListener("click", handleSearch);
    document.getElementById("dict-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") handleSearch();
    });
    document.getElementById("audio-btn").addEventListener("click", playAudio);

    // SRS button
    const srsBtn = document.getElementById("srs-add-btn");
    if (srsBtn) {
        srsBtn.addEventListener("click", addToSRS);
    }

    // History buttons
    document.querySelectorAll('.dict-history-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById("dict-input").value = btn.dataset.word;
            handleSearch();
        });
    });

    // Clear history
    const clearBtn = document.getElementById('clear-history-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            localStorage.removeItem(HISTORY_KEY);
            const section = document.querySelector('.dict-history-section');
            if (section) section.remove();
        });
    }
}

async function handleSearch() {
    const input = document.getElementById("dict-input");
    const word = input.value.trim();
    if (!word) return;
    currentWord = word;
    addToHistory(word);
    await displayResult(word);
}

async function displayResult(word) {
    const titleEl       = document.getElementById("word-title");
    const phoneticEl    = document.getElementById("word-phonetic");
    const divider       = document.getElementById("dict-divider");
    const audioBtn      = document.getElementById("audio-btn");
    const posSection    = document.getElementById("dict-pos-section");
    const enSection     = document.getElementById("dict-en-section");
    const exampleSection = document.getElementById("dict-example-section");
    const trSection     = document.getElementById("dict-tr-section");
    const synonymsSection = document.getElementById("dict-synonyms-section");
    const meaningEl     = document.getElementById("word-meaning");
    const posEl         = document.getElementById("word-pos");
    const exampleEl     = document.getElementById("word-example");
    const turkishEl     = document.getElementById("word-turkish");
    const synonymsEl    = document.getElementById("word-synonyms");
    const placeholder   = document.getElementById("word-placeholder");
    const vocabLinkSection = document.getElementById("vocab-link-section");
    const dictActions   = document.getElementById("dict-actions");
    const srsBtn        = document.getElementById("srs-add-btn");

    // Loading state
    titleEl.textContent    = "Aranıyor...";
    phoneticEl.textContent = "";
    audioBtn.style.display = "none";
    divider.style.display  = "none";
    posSection.style.display = "none";
    enSection.style.display = "none";
    exampleSection.style.display = "none";
    trSection.style.display = "none";
    synonymsSection.style.display = "none";
    vocabLinkSection.style.display = "none";
    if (srsBtn) srsBtn.style.display = "none";
    placeholder.textContent = "Yükleniyor...";
    placeholder.style.display = "block";

    // Check vocabData match
    const vocabMatch = vocabMap[word.toLowerCase()];

    // Two API calls in parallel with timeout
    const [dictResult, trResult] = await Promise.allSettled([
        fetchDictionaryWithTimeout(word),
        fetchTurkishWithTimeout(word),
    ]);

    placeholder.style.display = "none";
    dictActions.style.display = "flex";

    // vocabData link
    if (vocabMatch) {
        vocabLinkSection.innerHTML = `
            <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                <span style="font-size:0.85rem;">✅ Kelime havuzunda mevcut</span>
                ${getTypeBadgeHTML(vocabMatch.type)}
                ${getCEFRBadgeHTML(vocabMatch.level)}
                <span style="font-size:0.85rem;color:var(--text-light);">— ${vocabMatch.meaning}</span>
            </div>
        `;
        vocabLinkSection.style.display = "block";
        if (srsBtn) {
            srsBtn.style.display = "inline-block";
            srsBtn.dataset.wordId = vocabMatch.id;
            srsBtn.disabled = false;
            srsBtn.textContent = "📌 SRS'e Ekle";
        }
    }

    if (dictResult.status === "rejected" || !dictResult.value || !dictResult.value.definition) {
        titleEl.textContent = word;
        placeholder.textContent = "API tanımı bulunamadı.";
        placeholder.style.display = "block";
        audioUrl = "";
        audioBtn.style.display = "inline-block";

        // Still show Turkish from vocabData
        if (vocabMatch) {
            turkishEl.textContent = vocabMatch.meaning;
            trSection.style.display = "block";
            divider.style.display = "block";
        }
        return;
    }

    const result = dictResult.value;

    titleEl.textContent    = word;
    phoneticEl.textContent = result.phonetic;
    divider.style.display  = "block";

    // Part of speech
    if (result.partOfSpeech) {
        posEl.textContent = result.partOfSpeech;
        posSection.style.display = "block";
    }

    // English definition
    meaningEl.textContent   = result.definition;
    enSection.style.display = "block";

    // Example sentence
    if (result.example) {
        exampleEl.textContent = `"${result.example}"`;
        exampleSection.style.display = "block";
    }

    // Turkish translation
    if (trResult.status === "fulfilled" && trResult.value) {
        turkishEl.textContent = trResult.value;
        trSection.style.display = "block";
    } else if (vocabMatch) {
        turkishEl.textContent = vocabMatch.meaning;
        trSection.style.display = "block";
    }

    // Synonyms
    if (result.synonyms && result.synonyms.length > 0) {
        synonymsEl.textContent = result.synonyms.join(', ');
        synonymsSection.style.display = "block";
    }

    // Audio
    audioUrl = result.audioUrl || "";
    audioBtn.style.display = "inline-block";
}

async function fetchDictionaryWithTimeout(word) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    try {
        const result = await fetchDictionary(word);
        clearTimeout(timeout);
        return result;
    } catch (err) {
        clearTimeout(timeout);
        throw err;
    }
}

async function fetchTurkishWithTimeout(word) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|tr`;
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);
        if (!res.ok) return null;
        const data = await res.json();
        if (data.responseStatus === 200 && data.responseData?.translatedText) {
            return data.responseData.translatedText;
        }
        return null;
    } catch {
        clearTimeout(timeout);
        return null;
    }
}

function playAudio() {
    playPronunciation(currentWord, audioUrl || null);
}

async function addToSRS() {
    const srsBtn = document.getElementById("srs-add-btn");
    const wordId = parseInt(srsBtn?.dataset.wordId);
    if (!wordId) return;

    try {
        const { reviewWord } = await import('../features/srs.js');
        reviewWord(wordId, 0); // 0 = bilmiyorum
        srsBtn.disabled = true;
        srsBtn.textContent = "✅ SRS'e Eklendi";
        showToast('Kelime tekrar kuyruğuna eklendi!', 'success');
    } catch {
        showToast('SRS modülü yüklenemedi.', 'error');
    }
}

// ── Search History ──────────────────────────────────────────
function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    } catch { return []; }
}

function addToHistory(word) {
    const history = getHistory().filter(w => w.toLowerCase() !== word.toLowerCase());
    history.unshift(word.toLowerCase());
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
}

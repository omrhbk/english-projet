/* ══════════════════════════════════════════════════════════
   Dictionary Module — Free Dictionary API + MyMemory Çeviri
══════════════════════════════════════════════════════════ */

let sesDosyasi = "";

export function initDictionary() {
    const appContainer = document.getElementById("app");

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
                    <hr class="dict-divider" id="dict-divider" style="display:none;">

                    <div class="dict-section" id="dict-en-section" style="display:none;">
                        <span class="dict-lang-label">🇬🇧 İngilizce Tanım</span>
                        <p class="dict-meaning" id="word-meaning"></p>
                    </div>

                    <div class="dict-section" id="dict-tr-section" style="display:none;">
                        <span class="dict-lang-label">🇹🇷 Türkçe Karşılık</span>
                        <p class="dict-meaning" id="word-turkish"></p>
                    </div>

                    <p class="dict-meaning" id="word-placeholder">Kelimenin anlamı burada görünecek.</p>

                    <button id="audio-btn" class="btn dict-audio-btn" style="display:none;">🔊 Dinle</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("dict-search-btn").addEventListener("click", handleSearch);
    document.getElementById("dict-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") handleSearch();
    });
    document.getElementById("audio-btn").addEventListener("click", sesCal);
}

async function handleSearch() {
    const input = document.getElementById("dict-input");
    const kelime = input.value.trim();
    if (!kelime) return;
    await kartaYazdir(kelime);
}

async function kartaYazdir(kelime) {
    const titleEl       = document.getElementById("word-title");
    const phoneticEl    = document.getElementById("word-phonetic");
    const divider       = document.getElementById("dict-divider");
    const btn           = document.getElementById("audio-btn");
    const enSection     = document.getElementById("dict-en-section");
    const trSection     = document.getElementById("dict-tr-section");
    const meaningEl     = document.getElementById("word-meaning");
    const turkishEl     = document.getElementById("word-turkish");
    const placeholder   = document.getElementById("word-placeholder");

    // Yüklenme durumu
    titleEl.textContent    = "Aranıyor...";
    phoneticEl.textContent = "";
    btn.style.display      = "none";
    divider.style.display  = "none";
    enSection.style.display = "none";
    trSection.style.display = "none";
    placeholder.textContent = "Yükleniyor...";
    placeholder.style.display = "block";

    // İki API isteğini paralel gönder
    const [dictResult, trResult] = await Promise.allSettled([
        fetchDefinition(kelime),
        fetchTurkish(kelime),
    ]);

    placeholder.style.display = "none";

    if (dictResult.status === "rejected" || dictResult.value === null) {
        titleEl.textContent       = "Bulunamadı";
        placeholder.textContent   = "Kelime bulunamadı, lütfen tekrar dene.";
        placeholder.style.display = "block";
        sesDosyasi = "";
        return;
    }

    const { word, phonetic, definition, audioUrl } = dictResult.value;

    titleEl.textContent    = word;
    phoneticEl.textContent = phonetic;
    divider.style.display  = "block";

    // İngilizce tanım
    meaningEl.textContent   = definition;
    enSection.style.display = "block";

    // Türkçe çeviri
    if (trResult.status === "fulfilled" && trResult.value) {
        turkishEl.textContent   = trResult.value;
        trSection.style.display = "block";
    }

    // Ses
    if (audioUrl) {
        sesDosyasi        = audioUrl;
        btn.style.display = "inline-block";
    } else {
        sesDosyasi        = "";
        btn.style.display = "none";
    }
}

async function fetchDefinition(kelime) {
    const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(kelime)}`
    );
    if (!res.ok) return null;

    const data     = await res.json();
    const ilk      = data[0];
    const audioUrl = ilk.phonetics.find(p => p.audio && p.audio !== "")?.audio || "";

    return {
        word:       ilk.word,
        phonetic:   ilk.phonetic || "",
        definition: ilk.meanings[0].definitions[0].definition,
        audioUrl,
    };
}

async function fetchTurkish(kelime) {
    // MyMemory API — ücretsiz, kayıt gerektirmez
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(kelime)}&langpair=en|tr`;
    const res  = await fetch(url);
    if (!res.ok) return null;

    const data = await res.json();
    // responseStatus 200 ise çeviri başarılı
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
        return data.responseData.translatedText;
    }
    return null;
}

function sesCal() {
    if (sesDosyasi) {
        new Audio(sesDosyasi).play();
    }
}

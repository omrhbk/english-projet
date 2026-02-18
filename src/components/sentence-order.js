/**
 * Cümle Sıralama Egzersizi — Sürükle & Bırak
 * Kelimeler karıştırılmış şekilde gösterilir.
 * Kullanıcı doğru sıraya koyar.
 */

const sentences = [
    { id: 1, words: ["I", "go", "to", "school", "every", "day"], hint: "Her gün okula giderim." },
    { id: 2, words: ["She", "is", "reading", "a", "book"], hint: "O bir kitap okuyor." },
    { id: 3, words: ["They", "play", "football", "in", "the", "park"], hint: "Parkta futbol oynuyorlar." },
    { id: 4, words: ["He", "drinks", "coffee", "every", "morning"], hint: "Her sabah kahve içer." },
    { id: 5, words: ["We", "are", "learning", "English", "together"], hint: "Birlikte İngilizce öğreniyoruz." },
    { id: 6, words: ["The", "cat", "is", "sleeping", "on", "the", "sofa"], hint: "Kedi koltukta uyuyor." },
    { id: 7, words: ["My", "brother", "works", "at", "a", "hospital"], hint: "Kardeşim hastanede çalışır." },
    { id: 8, words: ["She", "doesn't", "like", "cold", "weather"], hint: "Soğuk havayı sevmiyor." },
    { id: 9, words: ["We", "visited", "Paris", "last", "summer"], hint: "Geçen yaz Paris'i ziyaret ettik." },
    { id: 10, words: ["He", "has", "been", "studying", "for", "two", "hours"], hint: "İki saattir çalışıyor." },
    { id: 11, words: ["The", "children", "are", "playing", "in", "the", "garden"], hint: "Çocuklar bahçede oynuyor." },
    { id: 12, words: ["I", "will", "call", "you", "tomorrow", "morning"], hint: "Yarın sabah seni arayacağım." },
    { id: 13, words: ["She", "has", "never", "been", "to", "Japan"], hint: "Hiç Japonya'ya gitmedi." },
    { id: 14, words: ["They", "finished", "the", "project", "on", "time"], hint: "Projeyi zamanında bitirdiler." },
    { id: 15, words: ["He", "can", "speak", "three", "languages"], hint: "Üç dil konuşabilir." },
    { id: 16, words: ["The", "weather", "is", "very", "hot", "today"], hint: "Bugün hava çok sıcak." },
    { id: 17, words: ["I", "forgot", "my", "keys", "at", "home"], hint: "Anahtarlarımı evde unuttum." },
    { id: 18, words: ["She", "wants", "to", "become", "a", "doctor"], hint: "Doktor olmak istiyor." },
    { id: 19, words: ["We", "should", "exercise", "every", "day"], hint: "Her gün egzersiz yapmalıyız." },
    { id: 20, words: ["The", "movie", "starts", "at", "eight", "o'clock"], hint: "Film saat sekizde başlıyor." },
];

let currentSentence = null;
let dragSrcIndex = null;
let score = 0;
let questionCount = 0;
const TOTAL_QUESTIONS = 5;

export function initSentenceOrder() {
    score = 0;
    questionCount = 0;
    renderSentenceOrderUI();
}

function renderSentenceOrderUI() {
    const container = document.getElementById('vocab-content');
    container.innerHTML = `
        <div class="sentence-order-container">
            <div class="header-row">
                <button id="so-back-btn" class="btn secondary">❮ Geri</button>
                <h3>📝 Cümle Sıralama</h3>
                <span class="so-score-badge">Soru: <span id="so-q-num">0</span>/${TOTAL_QUESTIONS}</span>
            </div>
            <div id="so-area"></div>
        </div>
    `;

    document.getElementById('so-back-btn').addEventListener('click', () => {
        document.querySelector('[data-target=vocabulary]').click();
    });

    loadNextSentence();
}

function loadNextSentence() {
    if (questionCount >= TOTAL_QUESTIONS) {
        showFinalResult();
        return;
    }

    // Rastgele cümle seç (tekrar olmadan)
    const remaining = sentences.filter(s => s !== currentSentence);
    currentSentence = remaining[Math.floor(Math.random() * remaining.length)];
    questionCount++;

    document.getElementById('so-q-num').textContent = questionCount;

    const scrambled = [...currentSentence.words].sort(() => 0.5 - Math.random());
    // Eğer scrambled === original sırasıysa tekrar karıştır
    let tries = 0;
    while (scrambled.join(' ') === currentSentence.words.join(' ') && tries < 5) {
        scrambled.sort(() => 0.5 - Math.random());
        tries++;
    }

    const area = document.getElementById('so-area');
    area.innerHTML = `
        <div class="so-question">
            <p class="so-hint">💡 İpucu: <em>${currentSentence.hint}</em></p>
            <p class="so-instruction">Kelimeleri sürükleyerek doğru sıraya koy:</p>

            <div class="so-word-bank" id="so-word-bank">
                ${scrambled.map((w, i) => `
                    <div class="so-word" draggable="true" data-index="${i}" data-word="${w}">
                        ${w}
                    </div>
                `).join('')}
            </div>

            <p class="so-drop-label">Doğru sıra (buraya bırak):</p>
            <div class="so-drop-zone" id="so-drop-zone">
                <p class="so-drop-placeholder">Kelimeleri buraya sürükle →</p>
            </div>

            <div class="so-controls" style="margin-top:1rem; display:flex; gap:0.75rem; flex-wrap:wrap;">
                <button id="so-check-btn" class="btn" disabled>✅ Kontrol Et</button>
                <button id="so-reset-btn" class="btn secondary">🔄 Sıfırla</button>
            </div>
            <p id="so-feedback" class="so-feedback"></p>
        </div>
    `;

    setupDragDrop();
}

function setupDragDrop() {
    const wordBank = document.getElementById('so-word-bank');
    const dropZone = document.getElementById('so-drop-zone');

    // Touch/drag olayları
    function addDragListeners(container) {
        container.addEventListener('dragstart', (e) => {
            const el = e.target.closest('.so-word');
            if (!el) return;
            dragSrcIndex = [...el.parentElement.children].indexOf(el);
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', el.dataset.word);
            e.dataTransfer.setData('text/source', el.parentElement.id);
            el.classList.add('dragging');
        });

        container.addEventListener('dragend', (e) => {
            const el = e.target.closest('.so-word');
            if (el) el.classList.remove('dragging');
        });
    }

    function makeDropTarget(zone) {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');

            const word = e.dataTransfer.getData('text/plain');
            const sourceId = e.dataTransfer.getData('text/source');

            // Kaynak elementi bul ve kaldır
            const sourceEl = document.querySelector(`#${sourceId} .so-word.dragging`);
            if (sourceEl) sourceEl.remove();

            // Hedef zone'a ekle
            const placeholder = zone.querySelector('.so-drop-placeholder');
            if (placeholder) placeholder.remove();

            const newEl = document.createElement('div');
            newEl.className = 'so-word so-word-placed';
            newEl.draggable = true;
            newEl.dataset.word = word;
            newEl.textContent = word;

            // Drop konumunu belirle
            const afterEl = getDragAfterElement(zone, e.clientX);
            if (afterEl) {
                zone.insertBefore(newEl, afterEl);
            } else {
                zone.appendChild(newEl);
            }

            // Word bank boş kaldıysa placeholder koy
            const wb = document.getElementById('so-word-bank');
            if (wb && wb.children.length === 0) {
                wb.innerHTML = '<p class="so-drop-placeholder" style="color:var(--text-light)">Kelime bankası boş</p>';
            }

            updateCheckButton();
        });
    }

    function getDragAfterElement(container, x) {
        const draggableElements = [...container.querySelectorAll('.so-word:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    addDragListeners(wordBank);
    addDragListeners(dropZone);
    makeDropTarget(dropZone);
    makeDropTarget(wordBank);

    // Drop zone'daki kelimeleri geri word bank'e sürükleme
    dropZone.addEventListener('dragstart', (e) => {
        const el = e.target.closest('.so-word');
        if (!el) return;
        e.dataTransfer.setData('text/plain', el.dataset.word);
        e.dataTransfer.setData('text/source', 'so-drop-zone');
        el.classList.add('dragging');
    });

    // Kontrol butonu
    document.getElementById('so-check-btn').addEventListener('click', checkAnswer);
    document.getElementById('so-reset-btn').addEventListener('click', resetSentence);
}

function updateCheckButton() {
    const dropZone = document.getElementById('so-drop-zone');
    const placed = dropZone.querySelectorAll('.so-word').length;
    const checkBtn = document.getElementById('so-check-btn');
    if (checkBtn) checkBtn.disabled = placed !== currentSentence.words.length;
}

function checkAnswer() {
    const dropZone = document.getElementById('so-drop-zone');
    const placed = [...dropZone.querySelectorAll('.so-word')].map(el => el.dataset.word);
    const correct = currentSentence.words;

    const feedback = document.getElementById('so-feedback');
    const checkBtn = document.getElementById('so-check-btn');
    const resetBtn = document.getElementById('so-reset-btn');

    if (placed.join(' ') === correct.join(' ')) {
        feedback.textContent = `✅ Mükemmel! Doğru cümle: "${correct.join(' ')}" +20 XP`;
        feedback.className = 'so-feedback success';
        score++;
        if (window.progressManager) window.progressManager.addXP(20);
        if (window.showXPGain) window.showXPGain(20);
        if (window.audioManager) window.audioManager.playCorrect();
        // Tüm kelimelere yeşil efekt
        dropZone.querySelectorAll('.so-word').forEach(el => el.classList.add('correct'));
    } else {
        feedback.textContent = `❌ Yanlış. Doğru: "${correct.join(' ')}"`;
        feedback.className = 'so-feedback error';
        if (window.audioManager) window.audioManager.playWrong();
        dropZone.querySelectorAll('.so-word').forEach(el => el.classList.add('wrong'));
    }

    checkBtn.disabled = true;
    resetBtn.disabled = true;

    // 2 saniye sonra sonraki soruya geç
    setTimeout(() => {
        loadNextSentence();
    }, 2200);
}

function resetSentence() {
    // Mevcut cümleyi yeniden yükle
    const area = document.getElementById('so-area');
    const scrambled = [...currentSentence.words].sort(() => 0.5 - Math.random());

    const wb = document.getElementById('so-word-bank');
    const dz = document.getElementById('so-drop-zone');

    if (wb) {
        wb.innerHTML = scrambled.map((w, i) => `
            <div class="so-word" draggable="true" data-index="${i}" data-word="${w}">${w}</div>
        `).join('');
    }
    if (dz) {
        dz.innerHTML = '<p class="so-drop-placeholder">Kelimeleri buraya sürükle →</p>';
    }

    const feedback = document.getElementById('so-feedback');
    if (feedback) { feedback.textContent = ''; feedback.className = 'so-feedback'; }

    const checkBtn = document.getElementById('so-check-btn');
    if (checkBtn) checkBtn.disabled = true;

    setupDragDrop();
}

function showFinalResult() {
    const area = document.getElementById('so-area');
    const pct = Math.round((score / TOTAL_QUESTIONS) * 100);
    area.innerHTML = `
        <div class="challenge-result">
            <div style="font-size:3rem; margin-bottom:1rem;">🏁</div>
            <h2>Bitti!</h2>
            <div class="challenge-score-row" style="margin-top:1.5rem;">
                <div class="challenge-stat">Doğru: <span>${score}</span></div>
                <div class="challenge-stat">Toplam: <span>${TOTAL_QUESTIONS}</span></div>
                <div class="challenge-stat">Başarı: <span>${pct}%</span></div>
            </div>
            <div style="margin-top:1.5rem; display:flex; gap:0.75rem; justify-content:center;">
                <button id="so-retry-btn" class="btn">Tekrar Oyna</button>
                <button id="so-exit-btn" class="btn secondary">Menüye Dön</button>
            </div>
        </div>
    `;
    document.getElementById('so-retry-btn').addEventListener('click', initSentenceOrder);
    document.getElementById('so-exit-btn').addEventListener('click', () => {
        document.querySelector('[data-target=vocabulary]').click();
    });
}

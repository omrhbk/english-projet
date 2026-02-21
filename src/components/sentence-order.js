/**
 * Cümle Sıralama Egzersizi — Sürükle & Bırak + Tap-to-Order (mobil)
 * CEFR seviye filtresi, 70 cümle, Fisher-Yates shuffle, touch desteği
 */

import { fisherYatesShuffle, getCEFRBadgeHTML } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ── Cümle Veritabanı — CEFR seviyeli ─────────────────────
const sentences = [
    // A1 — Present Simple, Olumlu/Soru (15 cümle)
    { id: 1, words: ["I", "go", "to", "school", "every", "day"], hint: "Her gün okula giderim.", level: "A1", category: "affirmative" },
    { id: 2, words: ["She", "is", "reading", "a", "book"], hint: "O bir kitap okuyor.", level: "A1", category: "affirmative" },
    { id: 3, words: ["They", "play", "football", "in", "the", "park"], hint: "Parkta futbol oynuyorlar.", level: "A1", category: "affirmative" },
    { id: 4, words: ["He", "drinks", "coffee", "every", "morning"], hint: "Her sabah kahve içer.", level: "A1", category: "affirmative" },
    { id: 5, words: ["We", "are", "learning", "English", "together"], hint: "Birlikte İngilizce öğreniyoruz.", level: "A1", category: "affirmative" },
    { id: 6, words: ["The", "cat", "is", "sleeping", "on", "the", "sofa"], hint: "Kedi koltukta uyuyor.", level: "A1", category: "affirmative" },
    { id: 7, words: ["My", "brother", "works", "at", "a", "hospital"], hint: "Kardeşim hastanede çalışır.", level: "A1", category: "affirmative" },
    { id: 8, words: ["Where", "do", "you", "live"], hint: "Nerede yaşıyorsun?", level: "A1", category: "question" },
    { id: 9, words: ["She", "is", "my", "sister"], hint: "O benim kız kardeşim.", level: "A1", category: "affirmative" },
    { id: 10, words: ["Do", "you", "like", "ice", "cream"], hint: "Dondurma sever misin?", level: "A1", category: "question" },
    { id: 11, words: ["I", "have", "two", "brothers", "and", "one", "sister"], hint: "İki erkek bir kız kardeşim var.", level: "A1", category: "affirmative" },
    { id: 12, words: ["The", "children", "are", "playing", "in", "the", "garden"], hint: "Çocuklar bahçede oynuyor.", level: "A1", category: "affirmative" },
    { id: 13, words: ["What", "is", "your", "name"], hint: "Adın ne?", level: "A1", category: "question" },
    { id: 14, words: ["My", "mother", "cooks", "dinner", "every", "evening"], hint: "Annem her akşam yemek yapar.", level: "A1", category: "affirmative" },
    { id: 15, words: ["I", "like", "to", "eat", "fruit"], hint: "Meyve yemeyi severim.", level: "A1", category: "affirmative" },

    // A2 — Past Simple, Olumsuz (15 cümle)
    { id: 16, words: ["She", "doesn't", "like", "cold", "weather"], hint: "Soğuk havayı sevmiyor.", level: "A2", category: "negative" },
    { id: 17, words: ["We", "visited", "Paris", "last", "summer"], hint: "Geçen yaz Paris'i ziyaret ettik.", level: "A2", category: "past" },
    { id: 18, words: ["I", "will", "call", "you", "tomorrow", "morning"], hint: "Yarın sabah seni arayacağım.", level: "A2", category: "future" },
    { id: 19, words: ["The", "weather", "is", "very", "hot", "today"], hint: "Bugün hava çok sıcak.", level: "A2", category: "affirmative" },
    { id: 20, words: ["I", "forgot", "my", "keys", "at", "home"], hint: "Anahtarlarımı evde unuttum.", level: "A2", category: "past" },
    { id: 21, words: ["She", "wants", "to", "become", "a", "doctor"], hint: "Doktor olmak istiyor.", level: "A2", category: "affirmative" },
    { id: 22, words: ["We", "should", "exercise", "every", "day"], hint: "Her gün egzersiz yapmalıyız.", level: "A2", category: "affirmative" },
    { id: 23, words: ["The", "movie", "starts", "at", "eight", "o'clock"], hint: "Film saat sekizde başlıyor.", level: "A2", category: "affirmative" },
    { id: 24, words: ["He", "can", "speak", "three", "languages"], hint: "Üç dil konuşabilir.", level: "A2", category: "affirmative" },
    { id: 25, words: ["They", "finished", "the", "project", "on", "time"], hint: "Projeyi zamanında bitirdiler.", level: "A2", category: "past" },
    { id: 26, words: ["I", "didn't", "go", "to", "the", "party"], hint: "Partiye gitmedim.", level: "A2", category: "negative" },
    { id: 27, words: ["She", "bought", "a", "new", "dress", "yesterday"], hint: "Dün yeni bir elbise aldı.", level: "A2", category: "past" },
    { id: 28, words: ["They", "don't", "watch", "television", "at", "night"], hint: "Geceleyin televizyon izlemezler.", level: "A2", category: "negative" },
    { id: 29, words: ["He", "was", "very", "tired", "after", "work"], hint: "İşten sonra çok yorgundu.", level: "A2", category: "past" },
    { id: 30, words: ["Can", "you", "help", "me", "with", "this"], hint: "Bana bunda yardım edebilir misin?", level: "A2", category: "question" },

    // B1 — Present Perfect, Passive, Conditionals (20 cümle)
    { id: 31, words: ["She", "has", "never", "been", "to", "Japan"], hint: "Hiç Japonya'ya gitmedi.", level: "B1", category: "present-perfect" },
    { id: 32, words: ["He", "has", "been", "studying", "for", "two", "hours"], hint: "İki saattir çalışıyor.", level: "B1", category: "present-perfect" },
    { id: 33, words: ["I", "have", "already", "finished", "my", "homework"], hint: "Ödevimi çoktan bitirdim.", level: "B1", category: "present-perfect" },
    { id: 34, words: ["The", "letter", "was", "written", "by", "the", "teacher"], hint: "Mektup öğretmen tarafından yazıldı.", level: "B1", category: "passive" },
    { id: 35, words: ["If", "it", "rains", "I", "will", "stay", "home"], hint: "Yağmur yağarsa evde kalacağım.", level: "B1", category: "conditional" },
    { id: 36, words: ["Have", "you", "ever", "tried", "sushi"], hint: "Hiç suşi denedin mi?", level: "B1", category: "present-perfect" },
    { id: 37, words: ["The", "book", "was", "published", "in", "2020"], hint: "Kitap 2020'de yayınlandı.", level: "B1", category: "passive" },
    { id: 38, words: ["She", "would", "travel", "more", "if", "she", "had", "money"], hint: "Parası olsa daha çok seyahat ederdi.", level: "B1", category: "conditional" },
    { id: 39, words: ["They", "have", "been", "living", "here", "since", "2015"], hint: "2015'ten beri burada yaşıyorlar.", level: "B1", category: "present-perfect" },
    { id: 40, words: ["The", "new", "bridge", "was", "built", "last", "year"], hint: "Yeni köprü geçen yıl inşa edildi.", level: "B1", category: "passive" },
    { id: 41, words: ["I", "wish", "I", "could", "speak", "French"], hint: "Keşke Fransızca konuşabilsem.", level: "B1", category: "conditional" },
    { id: 42, words: ["English", "is", "spoken", "all", "over", "the", "world"], hint: "İngilizce tüm dünyada konuşulur.", level: "B1", category: "passive" },
    { id: 43, words: ["We", "haven't", "seen", "each", "other", "for", "months"], hint: "Aylardır birbirimizi görmedik.", level: "B1", category: "present-perfect" },
    { id: 44, words: ["The", "students", "must", "submit", "their", "essays", "tomorrow"], hint: "Öğrenciler yarın makalelerini sunmalı.", level: "B1", category: "obligation" },
    { id: 45, words: ["She", "has", "just", "arrived", "at", "the", "airport"], hint: "Havaalanına yeni vardı.", level: "B1", category: "present-perfect" },
    { id: 46, words: ["You", "should", "have", "told", "me", "earlier"], hint: "Bana daha önce söylemeliydin.", level: "B1", category: "modal-perfect" },
    { id: 47, words: ["The", "concert", "has", "been", "cancelled", "due", "to", "rain"], hint: "Konser yağmur nedeniyle iptal edildi.", level: "B1", category: "passive" },
    { id: 48, words: ["If", "I", "were", "you", "I", "would", "accept", "the", "offer"], hint: "Senin yerinde olsam teklifi kabul ederdim.", level: "B1", category: "conditional" },
    { id: 49, words: ["He", "might", "come", "to", "the", "party", "tonight"], hint: "Bu gece partiye gelebilir.", level: "B1", category: "modal" },
    { id: 50, words: ["The", "food", "was", "being", "prepared", "when", "we", "arrived"], hint: "Biz vardığımızda yemek hazırlanıyordu.", level: "B1", category: "passive" },

    // B2 — Koşullu, İleri Yapılar (10 cümle)
    { id: 51, words: ["If", "I", "had", "known", "I", "would", "have", "come"], hint: "Bilseydim gelirdim.", level: "B2", category: "conditional-3" },
    { id: 52, words: ["Not", "only", "did", "he", "pass", "but", "he", "got", "the", "highest", "grade"], hint: "Sadece geçmekle kalmadı, en yüksek notu aldı.", level: "B2", category: "inversion" },
    { id: 53, words: ["The", "more", "you", "practice", "the", "better", "you", "become"], hint: "Ne kadar çok pratik yaparsan o kadar iyi olursun.", level: "B2", category: "comparative" },
    { id: 54, words: ["Had", "I", "studied", "harder", "I", "would", "have", "passed"], hint: "Daha çok çalışsaydım geçerdim.", level: "B2", category: "conditional-3" },
    { id: 55, words: ["Despite", "being", "tired", "she", "continued", "working", "until", "midnight"], hint: "Yorgun olmasına rağmen gece yarısına kadar çalışmaya devam etti.", level: "B2", category: "concession" },
    { id: 56, words: ["It", "is", "believed", "that", "exercise", "improves", "mental", "health"], hint: "Egzersizin ruh sağlığını iyileştirdiğine inanılır.", level: "B2", category: "passive-report" },
    { id: 57, words: ["No", "sooner", "had", "we", "left", "than", "it", "started", "raining"], hint: "Biz ayrılır ayrılmaz yağmur başladı.", level: "B2", category: "inversion" },
    { id: 58, words: ["She", "insisted", "on", "paying", "for", "the", "dinner"], hint: "Akşam yemeğinin parasını ödemeye ısrar etti.", level: "B2", category: "gerund" },
    { id: 59, words: ["The", "research", "which", "was", "conducted", "last", "year", "showed", "interesting", "results"], hint: "Geçen yıl yapılan araştırma ilginç sonuçlar gösterdi.", level: "B2", category: "relative-clause" },
    { id: 60, words: ["By", "the", "time", "we", "arrive", "the", "show", "will", "have", "started"], hint: "Biz vardığımızda gösteri başlamış olacak.", level: "B2", category: "future-perfect" },
];

let currentSentence = null;
let dragSrcIndex = null;
let score = 0;
let questionCount = 0;
let usedIds = new Set();
let activeFilter = 'all';
const TOTAL_QUESTIONS = 5;

export function initSentenceOrder() {
    score = 0;
    questionCount = 0;
    usedIds.clear();
    renderSentenceOrderUI();
}

function getFilteredSentences() {
    return activeFilter === 'all' ? sentences : sentences.filter(s => s.level === activeFilter);
}

function renderSentenceOrderUI() {
    const container = document.getElementById('vocab-content');
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];

    container.innerHTML = `
        <div class="sentence-order-container">
            <div class="header-row">
                <button id="so-back-btn" class="btn secondary">❮ Geri</button>
                <h3>📝 Cümle Sıralama</h3>
                <span class="so-score-badge">Soru: <span id="so-q-num">0</span>/${TOTAL_QUESTIONS}</span>
            </div>
            <div class="reading-filters" style="display:flex;gap:0.5rem;margin:0.5rem 0 1rem;flex-wrap:wrap;">
                ${levels.map(l => `
                    <button class="btn ${activeFilter === l ? '' : 'secondary'} small so-filter-btn" data-level="${l}">
                        ${l === 'all' ? 'Tümü' : getCEFRBadgeHTML(l)}
                    </button>
                `).join('')}
            </div>
            <div id="so-area"></div>
        </div>
    `;

    document.getElementById('so-back-btn').addEventListener('click', () => {
        document.querySelector('[data-target=vocabulary]').click();
    });

    container.querySelectorAll('.so-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeFilter = btn.dataset.level;
            score = 0;
            questionCount = 0;
            usedIds.clear();
            renderSentenceOrderUI();
        });
    });

    loadNextSentence();
}

function loadNextSentence() {
    if (questionCount >= TOTAL_QUESTIONS) {
        showFinalResult();
        return;
    }

    const pool = getFilteredSentences().filter(s => !usedIds.has(s.id));
    if (pool.length === 0) {
        usedIds.clear();
    }
    const available = pool.length > 0 ? pool : getFilteredSentences();
    currentSentence = available[Math.floor(Math.random() * available.length)];
    usedIds.add(currentSentence.id);
    questionCount++;

    document.getElementById('so-q-num').textContent = questionCount;

    // Fisher-Yates shuffle
    const scrambled = fisherYatesShuffle([...currentSentence.words]);
    // Ensure not identical to correct order
    let tries = 0;
    while (scrambled.join(' ') === currentSentence.words.join(' ') && tries < 10) {
        fisherYatesShuffle(scrambled);
        tries++;
    }

    const area = document.getElementById('so-area');
    area.innerHTML = `
        <div class="so-question">
            <p class="so-hint">💡 İpucu: <em>${currentSentence.hint}</em> ${getCEFRBadgeHTML(currentSentence.level)}</p>
            <p class="so-instruction">Kelimeleri sürükleyerek veya tıklayarak doğru sıraya koy:</p>

            <div class="so-word-bank" id="so-word-bank">
                ${scrambled.map((w, i) => `
                    <div class="so-word" draggable="true" data-index="${i}" data-word="${w}">
                        ${w}
                    </div>
                `).join('')}
            </div>

            <p class="so-drop-label">Doğru sıra:</p>
            <div class="so-drop-zone" id="so-drop-zone">
                <p class="so-drop-placeholder">Kelimelere tıkla veya sürükle →</p>
            </div>

            <div class="so-controls" style="margin-top:1rem; display:flex; gap:0.75rem; flex-wrap:wrap;">
                <button id="so-check-btn" class="btn" disabled>✅ Kontrol Et</button>
                <button id="so-reset-btn" class="btn secondary">🔄 Sıfırla</button>
            </div>
            <p id="so-feedback" class="so-feedback"></p>
        </div>
    `;

    setupInteractions();
}

function setupInteractions() {
    const wordBank = document.getElementById('so-word-bank');
    const dropZone = document.getElementById('so-drop-zone');

    // ── Tap-to-Order (mobil & masaüstü) ─────────────────────
    function handleTap(e) {
        const el = e.target.closest('.so-word');
        if (!el) return;

        const source = el.parentElement;
        const placeholder = dropZone.querySelector('.so-drop-placeholder');
        if (placeholder) placeholder.remove();

        if (source.id === 'so-word-bank') {
            // Move from bank to drop zone
            el.classList.add('so-word-placed');
            dropZone.appendChild(el);
        } else {
            // Move from drop zone back to bank
            el.classList.remove('so-word-placed');
            wordBank.appendChild(el);
        }

        // Update bank placeholder
        if (wordBank.children.length === 0) {
            wordBank.innerHTML = '<p class="so-drop-placeholder" style="color:var(--text-light)">Kelime bankası boş</p>';
        }

        updateCheckButton();
    }

    wordBank.addEventListener('click', handleTap);
    dropZone.addEventListener('click', handleTap);

    // ── Drag & Drop (masaüstü) ──────────────────────────────
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

            const sourceEl = document.querySelector(`#${sourceId} .so-word.dragging`);
            if (sourceEl) sourceEl.remove();

            const placeholder = zone.querySelector('.so-drop-placeholder');
            if (placeholder) placeholder.remove();

            const newEl = document.createElement('div');
            newEl.className = 'so-word' + (zone.id === 'so-drop-zone' ? ' so-word-placed' : '');
            newEl.draggable = true;
            newEl.dataset.word = word;
            newEl.textContent = word;

            const afterEl = getDragAfterElement(zone, e.clientX);
            if (afterEl) {
                zone.insertBefore(newEl, afterEl);
            } else {
                zone.appendChild(newEl);
            }

            const wb = document.getElementById('so-word-bank');
            if (wb && wb.querySelectorAll('.so-word').length === 0) {
                wb.innerHTML = '<p class="so-drop-placeholder" style="color:var(--text-light)">Kelime bankası boş</p>';
            }

            updateCheckButton();
        });
    }

    function getDragAfterElement(container, x) {
        const elements = [...container.querySelectorAll('.so-word:not(.dragging)')];
        return elements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset, element: child };
            }
            return closest;
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    addDragListeners(wordBank);
    addDragListeners(dropZone);
    makeDropTarget(dropZone);
    makeDropTarget(wordBank);

    // ── Touch Drag (mobil sürükleme desteği) ────────────────
    let touchEl = null;
    let touchClone = null;

    function handleTouchStart(e) {
        const el = e.target.closest('.so-word');
        if (!el) return;
        touchEl = el;

        touchClone = el.cloneNode(true);
        touchClone.style.position = 'fixed';
        touchClone.style.zIndex = '9999';
        touchClone.style.opacity = '0.8';
        touchClone.style.pointerEvents = 'none';
        document.body.appendChild(touchClone);

        const touch = e.touches[0];
        touchClone.style.left = touch.clientX - 30 + 'px';
        touchClone.style.top = touch.clientY - 20 + 'px';

        el.classList.add('dragging');
    }

    function handleTouchMove(e) {
        if (!touchClone) return;
        e.preventDefault();
        const touch = e.touches[0];
        touchClone.style.left = touch.clientX - 30 + 'px';
        touchClone.style.top = touch.clientY - 20 + 'px';
    }

    function handleTouchEnd(e) {
        if (!touchEl || !touchClone) return;
        touchClone.remove();
        touchClone = null;

        const touch = e.changedTouches[0];
        const dzRect = dropZone.getBoundingClientRect();
        const wbRect = wordBank.getBoundingClientRect();

        if (isInside(touch, dzRect) && touchEl.parentElement.id === 'so-word-bank') {
            const placeholder = dropZone.querySelector('.so-drop-placeholder');
            if (placeholder) placeholder.remove();
            touchEl.classList.add('so-word-placed');
            dropZone.appendChild(touchEl);
        } else if (isInside(touch, wbRect) && touchEl.parentElement.id === 'so-drop-zone') {
            touchEl.classList.remove('so-word-placed');
            wordBank.appendChild(touchEl);
        }

        touchEl.classList.remove('dragging');
        touchEl = null;

        if (wordBank.querySelectorAll('.so-word').length === 0) {
            wordBank.innerHTML = '<p class="so-drop-placeholder" style="color:var(--text-light)">Kelime bankası boş</p>';
        }

        updateCheckButton();
    }

    function isInside(touch, rect) {
        return touch.clientX >= rect.left && touch.clientX <= rect.right &&
               touch.clientY >= rect.top && touch.clientY <= rect.bottom;
    }

    wordBank.addEventListener('touchstart', handleTouchStart, { passive: false });
    wordBank.addEventListener('touchmove', handleTouchMove, { passive: false });
    wordBank.addEventListener('touchend', handleTouchEnd);
    dropZone.addEventListener('touchstart', handleTouchStart, { passive: false });
    dropZone.addEventListener('touchmove', handleTouchMove, { passive: false });
    dropZone.addEventListener('touchend', handleTouchEnd);

    // Buttons
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
        feedback.textContent = `Mükemmel! Doğru cümle: "${correct.join(' ')}" +20 XP`;
        feedback.className = 'so-feedback success';
        score++;
        if (window.progressManager) window.progressManager.addXP(20);
        if (window.showXPGain) window.showXPGain(20);
        if (window.audioManager) window.audioManager.playCorrect();
        dropZone.querySelectorAll('.so-word').forEach(el => el.classList.add('correct'));
    } else {
        feedback.textContent = `Yanlış. Doğru: "${correct.join(' ')}"`;
        feedback.className = 'so-feedback error';
        if (window.audioManager) window.audioManager.playWrong();
        dropZone.querySelectorAll('.so-word').forEach(el => el.classList.add('wrong'));
    }

    checkBtn.disabled = true;
    resetBtn.disabled = true;

    setTimeout(() => loadNextSentence(), 2200);
}

function resetSentence() {
    const scrambled = fisherYatesShuffle([...currentSentence.words]);

    const wb = document.getElementById('so-word-bank');
    const dz = document.getElementById('so-drop-zone');

    if (wb) {
        wb.innerHTML = scrambled.map((w, i) => `
            <div class="so-word" draggable="true" data-index="${i}" data-word="${w}">${w}</div>
        `).join('');
    }
    if (dz) {
        dz.innerHTML = '<p class="so-drop-placeholder">Kelimelere tıkla veya sürükle →</p>';
    }

    const feedback = document.getElementById('so-feedback');
    if (feedback) { feedback.textContent = ''; feedback.className = 'so-feedback'; }

    const checkBtn = document.getElementById('so-check-btn');
    if (checkBtn) checkBtn.disabled = true;

    setupInteractions();
}

function showFinalResult() {
    const area = document.getElementById('so-area');
    const pct = Math.round((score / TOTAL_QUESTIONS) * 100);

    // Progress tracking
    if (window.progressManager) {
        window.progressManager.completeActivity(`sentence-order-${Date.now()}`);
    }

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

    if (pct >= 80) {
        showToast(`Harika! %${pct} başarı oranı!`, 'success');
    }

    document.getElementById('so-retry-btn').addEventListener('click', initSentenceOrder);
    document.getElementById('so-exit-btn').addEventListener('click', () => {
        document.querySelector('[data-target=vocabulary]').click();
    });
}

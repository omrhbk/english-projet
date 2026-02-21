// Sentence Builder Module — Karisik kelimeleri tiklayarak cumle kur
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';
import { saveToLeaderboard, renderLeaderboardHTML } from '../core/game-helpers.js';

const STORAGE_KEY = 'sentence_builder_leaderboard';

const SENTENCES = [
    { en: 'I would like a cup of coffee please', tr: 'Bir fincan kahve istiyorum lutfen' },
    { en: 'She is going to the library tomorrow', tr: 'Yarin kutuphaneye gidecek' },
    { en: 'We have been waiting for an hour', tr: 'Bir saattir bekliyoruz' },
    { en: 'The children are playing in the garden', tr: 'Cocuklar bahcede oynuyor' },
    { en: 'Can you tell me where the station is', tr: 'Bana istasyonun nerede oldugunu soyleyebilir misiniz' },
    { en: 'He has never been to London before', tr: 'Daha once hic Londra ya gitmedi' },
    { en: 'They will finish the project next week', tr: 'Projeyi gelecek hafta bitirecekler' },
    { en: 'I always drink water before breakfast', tr: 'Kahvaltidan once her zaman su icerim' },
    { en: 'My brother is older than me', tr: 'Erkek kardesim benden buyuk' },
    { en: 'It was raining when we arrived', tr: 'Biz vardigimizda yagmur yagiyordu' },
    { en: 'She wants to learn how to swim', tr: 'Yuzme ogrenmeyi istiyor' },
    { en: 'The movie starts at seven o clock', tr: 'Film saat yedide basliyor' },
    { en: 'Do you know what time it is', tr: 'Saat kac biliyor musun' },
    { en: 'I need to buy some groceries today', tr: 'Bugun bazi market alisverisi yapmam lazim' },
    { en: 'There are many beautiful parks in this city', tr: 'Bu sehirde cok guzel parklar var' },
    { en: 'He usually goes to bed at ten', tr: 'Genellikle saat onda yatar' },
    { en: 'We should study harder for the exam', tr: 'Sinav icin daha cok calismamiz lazim' },
    { en: 'The weather is getting colder every day', tr: 'Hava her gun daha soguk oluyor' },
    { en: 'I forgot to bring my umbrella today', tr: 'Bugun semiyemi getirmeyi unuttum' },
    { en: 'She asked me to help her with homework', tr: 'Odevinde ona yardim etmemi istedi' }
];

let currentIdx = 0;
let score = 0;
let selectedWords = [];
let shuffledSentences = [];
let totalAttempts = 0;
let correctCount = 0;

export function cleanupSentenceBuilder() { /* no timers */ }

export function initSentenceBuilder() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:650px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="sb-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Cumle Kurma</h2>
                <span id="sb-score" style="font-weight:700;color:var(--primary-color);">0 Puan</span>
            </div>
            <div id="sb-area"></div>
        </div>
    `;
    document.getElementById('sb-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    score = 0;
    currentIdx = 0;
    totalAttempts = 0;
    correctCount = 0;
    shuffledSentences = fisherYatesShuffle([...SENTENCES]).slice(0, 10);
    renderQuestion();
}

function renderQuestion() {
    const area = document.getElementById('sb-area');

    if (currentIdx >= shuffledSentences.length) {
        finishGame();
        return;
    }

    const sentence = shuffledSentences[currentIdx];
    const words = sentence.en.split(' ');
    const shuffled = fisherYatesShuffle([...words]);
    selectedWords = [];

    area.innerHTML = `
        <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1.5rem;box-shadow:var(--shadow);">
            <p style="color:var(--text-light);margin-bottom:0.25rem;">Soru ${currentIdx + 1}/${shuffledSentences.length}</p>
            <p style="font-weight:600;font-size:1.1rem;margin-bottom:1rem;">Turkce: "${sentence.tr}"</p>
            <p class="so-drop-zone-label">Cumleniz:</p>
            <div id="sb-answer" class="so-drop-zone" style="min-height:50px;margin-bottom:1rem;"></div>
            <p class="so-word-bank-label">Kelimeler:</p>
            <div id="sb-bank" class="so-word-bank">
                ${shuffled.map((w, i) => `<span class="so-word sb-word" data-idx="${i}" data-word="${w}">${w}</span>`).join('')}
            </div>
            <div style="display:flex;gap:0.5rem;margin-top:1rem;justify-content:center;">
                <button id="sb-clear" class="btn secondary small">Temizle</button>
                <button id="sb-check" class="btn small">Kontrol Et</button>
            </div>
            <div id="sb-feedback" class="ex-feedback" style="text-align:center;margin-top:0.75rem;"></div>
        </div>
    `;

    // Click to add words
    area.querySelectorAll('.sb-word').forEach(el => {
        el.addEventListener('click', () => {
            if (el.classList.contains('used')) return;
            el.classList.add('used');
            el.style.opacity = '0.3';
            selectedWords.push(el.dataset.word);
            updateAnswer();
        });
    });

    document.getElementById('sb-clear').addEventListener('click', () => {
        selectedWords = [];
        area.querySelectorAll('.sb-word').forEach(el => {
            el.classList.remove('used');
            el.style.opacity = '1';
        });
        updateAnswer();
    });

    document.getElementById('sb-check').addEventListener('click', checkSentence);

    // Click answer words to remove
    document.getElementById('sb-answer').addEventListener('click', (e) => {
        const wordEl = e.target.closest('.sb-answer-word');
        if (!wordEl) return;
        const idx = parseInt(wordEl.dataset.aidx);
        const removedWord = selectedWords[idx];
        selectedWords.splice(idx, 1);
        // Re-enable in bank
        const bankWord = area.querySelector(`.sb-word[data-word="${removedWord}"]:not(.used)`) ||
                          area.querySelector(`.sb-word.used[data-word="${removedWord}"]`);
        if (bankWord) {
            bankWord.classList.remove('used');
            bankWord.style.opacity = '1';
        }
        updateAnswer();
    });
}

function updateAnswer() {
    const answerEl = document.getElementById('sb-answer');
    if (!answerEl) return;
    answerEl.innerHTML = selectedWords.map((w, i) =>
        `<span class="so-word sb-answer-word" data-aidx="${i}" style="cursor:pointer;">${w}</span>`
    ).join('');
}

function checkSentence() {
    const sentence = shuffledSentences[currentIdx];
    const userAnswer = selectedWords.join(' ').toLowerCase();
    const correct = sentence.en.toLowerCase();
    totalAttempts++;

    const feedback = document.getElementById('sb-feedback');
    if (userAnswer === correct) {
        correctCount++;
        score += 20;
        document.getElementById('sb-score').textContent = `${score} Puan`;
        feedback.className = 'ex-feedback success';
        feedback.textContent = 'Dogru! Harika!';
        window.audioManager?.playCorrect?.();
        window.progressManager?.addXP?.(10);
        setTimeout(() => { currentIdx++; renderQuestion(); }, 1200);
    } else {
        feedback.className = 'ex-feedback error';
        feedback.textContent = `Yanlis. Dogru cevap: "${sentence.en}"`;
        window.audioManager?.playWrong?.();
        setTimeout(() => { currentIdx++; renderQuestion(); }, 2500);
    }
}

function finishGame() {
    saveToLeaderboard(STORAGE_KEY, { score, correct: correctCount, total: totalAttempts });
    const area = document.getElementById('sb-area');
    area.innerHTML = `
        <div class="challenge-result" style="text-align:center;">
            <h3>Tebrikler!</h3>
            <p style="font-size:1.5rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${score} Puan</p>
            <p style="color:var(--text-light);">${correctCount}/${totalAttempts} dogru</p>
            <button id="sb-restart" class="btn" style="margin-top:1rem;">Tekrar Oyna</button>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    document.getElementById('sb-restart').addEventListener('click', initSentenceBuilder);
}

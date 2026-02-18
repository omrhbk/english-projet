// Timed Challenge Module — 60 saniyede kaç doğru cevap verebilirsin?
import { vocabData } from '../core/data.js';

const CHALLENGE_DURATION = 60; // saniye
const OPTIONS_COUNT = 4;

let timerInterval = null;

/** Sayfa değişiminde dışarıdan çağrılır — aktif timer'ı durdurur */
export function cleanupChallenge() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

export function initTimedChallenge() {
    const container = document.getElementById('vocab-content');
    container.innerHTML = `
        <div class="timed-challenge-container">
            <div class="header-row">
                <button id="challenge-back-btn" class="btn secondary">❮ Geri</button>
                <h3>60 Saniyelik Kelime Testi</h3>
                <span></span>
            </div>
            <div id="challenge-area"></div>
        </div>
    `;

    document.getElementById('challenge-back-btn').addEventListener('click', () => {
        clearInterval(timerInterval);
        document.querySelector('[data-target=vocabulary]').click();
    });

    startChallenge();
}

function startChallenge() {
    let timeLeft = CHALLENGE_DURATION;
    let correct = 0;
    let wrong = 0;
    let currentWord = null;

    const area = document.getElementById('challenge-area');

    function renderQuestion() {
        // Rastgele kelime seç
        currentWord = vocabData[Math.floor(Math.random() * vocabData.length)];

        // 3 yanlış seçenek + 1 doğru, karıştır
        const distractors = vocabData
            .filter(w => w.id !== currentWord.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, OPTIONS_COUNT - 1)
            .map(w => w.meaning);

        const options = [...distractors, currentWord.meaning].sort(() => 0.5 - Math.random());

        area.innerHTML = `
            <div class="timer-ring ${timeLeft <= 10 ? 'urgent' : ''}" id="timer-display">
                ${timeLeft}s
            </div>
            <div class="challenge-score-row">
                <div class="challenge-stat">Doğru: <span id="c-correct">${correct}</span></div>
                <div class="challenge-stat">Yanlış: <span id="c-wrong">${wrong}</span></div>
            </div>
            <div class="challenge-question-card">
                <p class="challenge-question">"<strong>${currentWord.word}</strong>" kelimesinin anlamı nedir?</p>
                <div class="challenge-options">
                    ${options.map(opt => `
                        <button class="challenge-opt-btn" data-value="${opt}">${opt}</button>
                    `).join('')}
                </div>
            </div>
        `;

        document.querySelectorAll('.challenge-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const selected = btn.dataset.value;
                if (selected === currentWord.meaning) {
                    btn.classList.add('correct');
                    correct++;
                    if (window.audioManager) window.audioManager.playCorrect();
                    if (window.progressManager) window.progressManager.addXP(5);
                    if (window.showXPGain) window.showXPGain(5);
                } else {
                    btn.classList.add('wrong');
                    // Doğru cevabı göster
                    document.querySelectorAll('.challenge-opt-btn').forEach(b => {
                        if (b.dataset.value === currentWord.meaning) b.classList.add('correct');
                    });
                    wrong++;
                    if (window.audioManager) window.audioManager.playWrong();
                    if (window.errorAnalytics) window.errorAnalytics.trackMistake(currentWord.id);
                }
                // Tüm butonları devre dışı bırak
                document.querySelectorAll('.challenge-opt-btn').forEach(b => { b.disabled = true; });
                // 600ms sonra yeni soru
                setTimeout(renderQuestion, 700);
            });
        });
    }

    // Zamanlayıcı
    timerInterval = setInterval(() => {
        timeLeft--;
        const timerEl = document.getElementById('timer-display');
        if (timerEl) {
            timerEl.textContent = `${timeLeft}s`;
            if (timeLeft <= 10) timerEl.classList.add('urgent');
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResult(correct, wrong);
        }
    }, 1000);

    renderQuestion();
}

function showResult(correct, wrong) {
    const total = correct + wrong;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const xpEarned = correct * 5;

    const area = document.getElementById('challenge-area');
    area.innerHTML = `
        <div class="challenge-result">
            <div style="font-size:3rem; margin-bottom:1rem;">🏁</div>
            <h2>Süre Doldu!</h2>
            <div class="challenge-score-row" style="margin-top:1.5rem;">
                <div class="challenge-stat">Doğru: <span>${correct}</span></div>
                <div class="challenge-stat">Yanlış: <span>${wrong}</span></div>
                <div class="challenge-stat">Doğruluk: <span>${accuracy}%</span></div>
            </div>
            <p style="margin:1rem 0; color: var(--text-light);">Kazanılan XP: <strong>+${xpEarned}</strong></p>
            <button id="challenge-retry-btn" class="btn" style="margin-right:0.5rem;">Tekrar Oyna</button>
            <button id="challenge-exit-btn" class="btn secondary">Menüye Dön</button>
        </div>
    `;

    if (window.celebrateLevelUp && accuracy >= 80) window.celebrateLevelUp();

    document.getElementById('challenge-retry-btn').addEventListener('click', () => {
        startChallenge();
    });
    document.getElementById('challenge-exit-btn').addEventListener('click', () => {
        document.querySelector('[data-target=vocabulary]').click();
    });
}

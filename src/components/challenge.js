// Timed Challenge Module — Konfigürasyon, combo sistemi, leaderboard
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle, getTypeBadgeHTML, getCEFRBadgeHTML } from '../core/utils.js';
import { showToast } from '../features/toast.js';

/** Escape HTML special characters to prevent XSS */
function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const OPTIONS_COUNT = 4;
const LEADERBOARD_KEY = 'challenge_leaderboard';

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
                <h3>⚡ Hız Testi</h3>
                <span></span>
            </div>
            <div id="challenge-area"></div>
        </div>
    `;

    document.getElementById('challenge-back-btn').addEventListener('click', () => {
        cleanupChallenge();
        document.querySelector('[data-target=vocabulary]').click();
    });

    showConfigScreen();
}

// ── Konfigürasyon Ekranı ────────────────────────────────────
function showConfigScreen() {
    const area = document.getElementById('challenge-area');
    const leaderboard = getLeaderboard();

    area.innerHTML = `
        <div class="challenge-config" style="max-width:400px;margin:1.5rem auto;padding:1.5rem;background:var(--card-bg);border-radius:12px;box-shadow:var(--shadow);">
            <h3 style="text-align:center;margin-bottom:1.5rem;">⚡ Test Ayarları</h3>

            <div style="margin-bottom:1rem;">
                <label style="font-weight:600;margin-bottom:0.25rem;display:block;">Yön:</label>
                <select id="config-direction" class="search-filter" style="width:100%;">
                    <option value="en-tr">İngilizce → Türkçe</option>
                    <option value="tr-en">Türkçe → İngilizce</option>
                    <option value="mixed">Karışık</option>
                </select>
            </div>

            <div style="margin-bottom:1rem;">
                <label style="font-weight:600;margin-bottom:0.25rem;display:block;">Seviye:</label>
                <select id="config-level" class="search-filter" style="width:100%;">
                    <option value="all">Tümü</option>
                    <option value="A1">A1 - Başlangıç</option>
                    <option value="A2">A2 - Temel</option>
                    <option value="B1">B1 - Orta</option>
                    <option value="B2">B2 - İleri</option>
                </select>
            </div>

            <div style="margin-bottom:1rem;">
                <label style="font-weight:600;margin-bottom:0.25rem;display:block;">Kelime Türü:</label>
                <select id="config-type" class="search-filter" style="width:100%;">
                    <option value="all">Tümü</option>
                    <option value="noun">İsim (noun)</option>
                    <option value="verb">Fiil (verb)</option>
                    <option value="adjective">Sıfat (adjective)</option>
                </select>
            </div>

            <div style="margin-bottom:1.5rem;">
                <label style="font-weight:600;margin-bottom:0.25rem;display:block;">Süre:</label>
                <select id="config-duration" class="search-filter" style="width:100%;">
                    <option value="30">30 saniye</option>
                    <option value="60" selected>60 saniye</option>
                    <option value="90">90 saniye</option>
                    <option value="120">120 saniye</option>
                </select>
            </div>

            <button id="start-challenge-btn" class="btn" style="width:100%;font-size:1.1rem;padding:0.75rem;">🚀 Başla</button>
        </div>

        ${leaderboard.length > 0 ? `
        <div style="max-width:400px;margin:1.5rem auto;">
            <h4 style="margin-bottom:0.5rem;">🏆 En İyi Skorlar</h4>
            <div style="background:var(--card-bg);border-radius:8px;overflow:hidden;border:1px solid var(--border-color);">
                ${leaderboard.slice(0, 5).map((s, i) => `
                    <div style="display:flex;justify-content:space-between;padding:0.5rem 1rem;border-bottom:1px solid var(--border-color);${i === 0 ? 'background:rgba(74,144,226,0.1);font-weight:bold;' : ''}">
                        <span>${i + 1}. ${s.correct}/${s.total} (%${s.accuracy})</span>
                        <span style="color:var(--text-light);font-size:0.85rem;">${s.duration}s · ${s.date}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
    `;

    document.getElementById('start-challenge-btn').addEventListener('click', () => {
        const config = {
            direction: document.getElementById('config-direction').value,
            level: document.getElementById('config-level').value,
            type: document.getElementById('config-type').value,
            duration: parseInt(document.getElementById('config-duration').value)
        };
        startChallenge(config);
    });
}

// ── Oyun ─────────────────────────────────────────────────────
function startChallenge(config) {
    // Filter vocab pool
    let pool = [...vocabData];
    if (config.level !== 'all') pool = pool.filter(w => w.level === config.level);
    if (config.type !== 'all') pool = pool.filter(w => w.type === config.type);

    if (pool.length < 10) {
        showToast('Bu filtreyle yeterli kelime yok. Filtreleri genişletin.', 'warning');
        return;
    }

    let timeLeft = config.duration;
    let correct = 0;
    let wrong = 0;
    let combo = 0;
    let maxCombo = 0;
    let currentWord = null;
    const usedWordIds = new Set();
    const wrongWords = [];

    const area = document.getElementById('challenge-area');

    function renderQuestion() {
        // Pick unused word
        let candidates = pool.filter(w => !usedWordIds.has(w.id));
        if (candidates.length === 0) {
            usedWordIds.clear();
            candidates = [...pool];
        }
        currentWord = candidates[Math.floor(Math.random() * candidates.length)];
        usedWordIds.add(currentWord.id);

        // Determine direction
        let direction = config.direction;
        if (direction === 'mixed') direction = Math.random() > 0.5 ? 'en-tr' : 'tr-en';

        const isEnToTr = direction === 'en-tr';
        const questionText = isEnToTr ? currentWord.word : currentWord.meaning;
        const correctAnswer = isEnToTr ? currentWord.meaning : currentWord.word;

        // Distractors with unique answers
        const answerField = isEnToTr ? 'meaning' : 'word';
        const distractors = fisherYatesShuffle(
            pool.filter(w => w.id !== currentWord.id && w[answerField] !== correctAnswer)
        ).slice(0, OPTIONS_COUNT - 1).map(w => w[answerField]);

        const options = fisherYatesShuffle([...distractors, correctAnswer]);

        // Combo display
        const comboHTML = combo >= 3 ? `<div class="combo-badge" style="color:#ff6b35;font-weight:bold;font-size:1.1rem;animation:pulse 0.5s;">🔥 Combo x${combo}</div>` : '';

        area.innerHTML = `
            <div class="timer-ring ${timeLeft <= 10 ? 'urgent' : ''}" id="timer-display">
                ${timeLeft}s
            </div>
            <div class="challenge-score-row">
                <div class="challenge-stat">Doğru: <span id="c-correct">${correct}</span></div>
                <div class="challenge-stat">Yanlış: <span id="c-wrong">${wrong}</span></div>
                ${comboHTML}
            </div>
            <div class="challenge-question-card">
                <p class="challenge-question">
                    "${isEnToTr ? `<strong>${questionText}</strong> ${getTypeBadgeHTML(currentWord.type)}` : `<strong>${questionText}</strong>`}"
                    ${isEnToTr ? 'kelimesinin anlamı nedir?' : 'kelimesinin İngilizcesi nedir?'}
                </p>
                <div class="challenge-options">
                    ${options.map(opt => `
                        <button class="challenge-opt-btn" data-value="${escapeHTML(opt)}">${escapeHTML(opt)}</button>
                    `).join('')}
                </div>
            </div>
        `;

        document.querySelectorAll('.challenge-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const selected = btn.dataset.value;
                if (selected === correctAnswer) {
                    btn.classList.add('correct');
                    correct++;
                    combo++;
                    if (combo > maxCombo) maxCombo = combo;

                    // Combo XP bonus
                    let xp = 5;
                    if (combo >= 5) xp = 15;
                    else if (combo >= 3) xp = 10;

                    if (window.audioManager) window.audioManager.playCorrect();
                    if (window.progressManager) window.progressManager.addXP(xp);
                    if (window.showXPGain) window.showXPGain(xp);
                } else {
                    btn.classList.add('wrong');
                    document.querySelectorAll('.challenge-opt-btn').forEach(b => {
                        if (b.dataset.value === correctAnswer) b.classList.add('correct');
                    });
                    wrong++;
                    combo = 0;
                    wrongWords.push({ word: currentWord.word, meaning: currentWord.meaning, id: currentWord.id });
                    if (window.audioManager) window.audioManager.playWrong();
                    if (window.errorAnalytics) window.errorAnalytics.trackMistake(currentWord.id);
                }
                document.querySelectorAll('.challenge-opt-btn').forEach(b => { b.disabled = true; });
                setTimeout(renderQuestion, 700);
            });
        });
    }

    // Timer
    timerInterval = setInterval(() => {
        timeLeft--;
        const timerEl = document.getElementById('timer-display');
        if (timerEl) {
            timerEl.textContent = `${timeLeft}s`;
            if (timeLeft <= 10) timerEl.classList.add('urgent');
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            showResult(correct, wrong, maxCombo, wrongWords, config);
        }
    }, 1000);

    renderQuestion();
}

// ── Sonuç Ekranı ─────────────────────────────────────────────
function showResult(correct, wrong, maxCombo, wrongWords, config) {
    const total = correct + wrong;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const xpEarned = correct * 5;

    // Save to leaderboard
    saveToLeaderboard({ correct, total, accuracy, duration: config.duration, maxCombo });

    const area = document.getElementById('challenge-area');
    area.innerHTML = `
        <div class="challenge-result">
            <div style="font-size:3rem; margin-bottom:1rem;">🏁</div>
            <h2>Süre Doldu!</h2>
            <div class="challenge-score-row" style="margin-top:1.5rem;">
                <div class="challenge-stat">Doğru: <span>${correct}</span></div>
                <div class="challenge-stat">Yanlış: <span>${wrong}</span></div>
                <div class="challenge-stat">Doğruluk: <span>${accuracy}%</span></div>
                ${maxCombo >= 3 ? `<div class="challenge-stat">🔥 Max Combo: <span>${maxCombo}</span></div>` : ''}
            </div>
            <p style="margin:1rem 0; color: var(--text-light);">Kazanılan XP: <strong>+${xpEarned}</strong></p>

            ${wrongWords.length > 0 ? `
            <div style="margin:1rem 0;text-align:left;max-width:400px;margin-left:auto;margin-right:auto;">
                <h4 style="margin-bottom:0.5rem;">❌ Yanlış Bilinen Kelimeler:</h4>
                <div style="background:var(--card-bg);border-radius:8px;padding:0.5rem;border:1px solid var(--border-color);">
                    ${wrongWords.map(w => `
                        <div style="display:flex;justify-content:space-between;padding:0.4rem 0.5rem;border-bottom:1px solid var(--border-color);">
                            <strong>${w.word}</strong>
                            <span style="color:var(--text-light);">${w.meaning}</span>
                        </div>
                    `).join('')}
                </div>
                <button id="add-to-srs-btn" class="btn secondary small" style="margin-top:0.5rem;">📌 Tekrar Kuyruğuna Ekle</button>
            </div>
            ` : ''}

            <div style="margin-top:1rem;display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap;">
                <button id="challenge-retry-btn" class="btn">Tekrar Oyna</button>
                <button id="challenge-config-btn" class="btn secondary">Ayarlar</button>
                <button id="challenge-exit-btn" class="btn secondary">Menüye Dön</button>
            </div>
        </div>
    `;

    if (accuracy >= 80) {
        showToast(`Harika! %${accuracy} doğruluk oranı!`, 'success');
    }

    // SRS'e ekle butonu
    const srsBtn = document.getElementById('add-to-srs-btn');
    if (srsBtn) {
        srsBtn.addEventListener('click', async () => {
            try {
                const { reviewWord } = await import('../features/srs.js');
                wrongWords.forEach(w => reviewWord(w.id, 0));
                showToast(`${wrongWords.length} kelime tekrar kuyruğuna eklendi!`, 'success');
                srsBtn.disabled = true;
                srsBtn.textContent = '✅ Eklendi';
            } catch {
                showToast('SRS modülü yüklenemedi.', 'error');
            }
        });
    }

    document.getElementById('challenge-retry-btn').addEventListener('click', () => startChallenge(config));
    document.getElementById('challenge-config-btn').addEventListener('click', showConfigScreen);
    document.getElementById('challenge-exit-btn').addEventListener('click', () => {
        document.querySelector('[data-target=vocabulary]').click();
    });
}

// ── Leaderboard ──────────────────────────────────────────────
function getLeaderboard() {
    try {
        return JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || '[]');
    } catch { return []; }
}

function saveToLeaderboard(entry) {
    const board = getLeaderboard();
    board.push({
        ...entry,
        date: new Date().toLocaleDateString('tr-TR')
    });
    // Sort by accuracy desc, then correct desc
    board.sort((a, b) => b.accuracy - a.accuracy || b.correct - a.correct);
    // Keep top 10
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board.slice(0, 10)));
}

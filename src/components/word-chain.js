// Word Chain Game Module — Kelime Zinciri Oyunu
// Bilgisayar bir kelime soyler, kullanici son harfle baslayan kelime yazar
import { vocabData } from '../core/data.js';
import { getCEFRBadgeHTML } from '../core/utils.js';
import { showToast } from '../features/toast.js';

const LEADERBOARD_KEY = 'word_chain_leaderboard';
const POINTS_PER_WORD = 10;
const COMBO_THRESHOLD = 3;
const COMBO_BONUS = 5;

let timerInterval = null;

/** Sayfa degisiminde disaridan cagrilir — aktif timer'i durdurur */
export function cleanupWordChain() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// ── Ana Giris ────────────────────────────────────────────────
export function initWordChain() {
    cleanupWordChain();
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:600px;margin:0 auto;padding:1rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="wc-back-btn" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;font-size:1.4rem;">&#128279; Kelime Zinciri</h2>
                <span></span>
            </div>
            <div id="wc-area"></div>
        </div>
    `;

    document.getElementById('wc-back-btn').addEventListener('click', () => {
        cleanupWordChain();
        document.querySelector('[data-target=vocabulary]')?.click();
    });

    showConfigScreen();
}

// ── Konfigurasyon Ekrani ─────────────────────────────────────
function showConfigScreen() {
    const area = document.getElementById('wc-area');
    const leaderboard = getLeaderboard();

    area.innerHTML = `
        <div style="max-width:400px;margin:1.5rem auto;padding:1.5rem;background:var(--card-bg);border-radius:12px;box-shadow:var(--shadow);">
            <h3 style="text-align:center;margin-bottom:1.5rem;">&#128279; Oyun Ayarlari</h3>

            <div style="margin-bottom:1rem;">
                <label style="font-weight:600;margin-bottom:0.25rem;display:block;">Seviye Filtresi:</label>
                <select id="wc-config-level" class="search-filter" style="width:100%;">
                    <option value="all">Tumu</option>
                    <option value="A1">A1 - Baslangic</option>
                    <option value="A2">A2 - Temel</option>
                    <option value="B1">B1 - Orta</option>
                    <option value="B2">B2 - Ileri</option>
                </select>
            </div>

            <div style="margin-bottom:1.5rem;">
                <label style="font-weight:600;margin-bottom:0.25rem;display:block;">Sure:</label>
                <select id="wc-config-duration" class="search-filter" style="width:100%;">
                    <option value="60" selected>60 saniye</option>
                    <option value="90">90 saniye</option>
                    <option value="120">120 saniye</option>
                </select>
            </div>

            <button id="wc-start-btn" class="btn" style="width:100%;font-size:1.1rem;padding:0.75rem;">&#128640; Baslat</button>
        </div>

        ${leaderboard.length > 0 ? `
        <div style="max-width:400px;margin:1.5rem auto;">
            <h4 style="margin-bottom:0.5rem;">&#127942; En Iyi Skorlar</h4>
            <div style="background:var(--card-bg);border-radius:8px;overflow:hidden;border:1px solid var(--border-color);">
                ${leaderboard.slice(0, 5).map((s, i) => `
                    <div style="display:flex;justify-content:space-between;padding:0.5rem 1rem;border-bottom:1px solid var(--border-color);${i === 0 ? 'background:rgba(74,144,226,0.1);font-weight:bold;' : ''}">
                        <span>${i + 1}. ${s.score} puan (${s.wordCount} kelime)</span>
                        <span style="color:var(--text-light);font-size:0.85rem;">${s.duration}s &middot; ${s.date}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}

        <div style="max-width:400px;margin:1.5rem auto;padding:1rem;background:var(--card-bg);border-radius:12px;box-shadow:var(--shadow);">
            <h4 style="margin-bottom:0.5rem;">&#128214; Nasil Oynanir?</h4>
            <ul style="margin:0;padding-left:1.2rem;color:var(--text-light);font-size:0.9rem;line-height:1.7;">
                <li>Bilgisayar rastgele bir kelime ile baslar.</li>
                <li>Kelimenin <strong>son harfi</strong> ile baslayan bir kelime yaz.</li>
                <li>Kelime, kelime havuzunda (vocabData) bulunmali.</li>
                <li>Ayni kelime tekrar kullanilamaz.</li>
                <li>Dogru kelime: <strong>+${POINTS_PER_WORD} puan</strong></li>
                <li>${COMBO_THRESHOLD}+ ust uste dogru: <strong>+${COMBO_BONUS} bonus</strong></li>
            </ul>
        </div>
    `;

    document.getElementById('wc-start-btn').addEventListener('click', () => {
        const config = {
            level: document.getElementById('wc-config-level').value,
            duration: parseInt(document.getElementById('wc-config-duration').value)
        };
        startGame(config);
    });
}

// ── Kelime Havuzu Olustur ────────────────────────────────────
function buildWordPool(level) {
    let pool = [...vocabData];
    if (level !== 'all') {
        pool = pool.filter(w => w.level === level);
    }
    // Tekil kelimeleri al (ayni kelime birden fazla varsa)
    const seen = new Set();
    const unique = [];
    for (const item of pool) {
        const lower = item.word.toLowerCase();
        if (!seen.has(lower)) {
            seen.add(lower);
            unique.push(item);
        }
    }
    return unique;
}

// ── Havuzdan harf ile baslayan kelime bul ────────────────────
function findWordStartingWith(letter, pool, usedWords) {
    const candidates = pool.filter(
        w => w.word.toLowerCase().startsWith(letter) && !usedWords.has(w.word.toLowerCase())
    );
    if (candidates.length === 0) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
}

// ── Kelimeyi vocabData'dan bul ───────────────────────────────
function lookupWord(word, pool) {
    return pool.find(w => w.word.toLowerCase() === word.toLowerCase()) || null;
}

// ── Oyun Baslat ──────────────────────────────────────────────
function startGame(config) {
    const pool = buildWordPool(config.level);

    if (pool.length < 10) {
        showToast('Bu filtreyle yeterli kelime yok. Filtreleri genisletin.', 'warning');
        return;
    }

    const state = {
        config,
        pool,
        chain: [],          // { word, meaning, level, type, by: 'computer'|'user' }
        usedWords: new Set(),
        score: 0,
        combo: 0,
        maxCombo: 0,
        timeLeft: config.duration,
        totalDuration: config.duration,
        gameOver: false
    };

    // Bilgisayar ilk kelimeyi secer
    const firstWord = pool[Math.floor(Math.random() * pool.length)];
    addToChain(state, firstWord, 'computer');

    renderGameScreen(state);
    startTimer(state);
}

// ── Zincire Kelime Ekle ──────────────────────────────────────
function addToChain(state, wordObj, by) {
    state.chain.push({
        word: wordObj.word,
        meaning: wordObj.meaning,
        level: wordObj.level,
        type: wordObj.type,
        by
    });
    state.usedWords.add(wordObj.word.toLowerCase());
}

// ── Zamanlayici ──────────────────────────────────────────────
function startTimer(state) {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        state.timeLeft--;
        updateTimerDisplay(state);

        if (state.timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            state.gameOver = true;
            showResult(state);
        }
    }, 1000);
}

function updateTimerDisplay(state) {
    const el = document.getElementById('wc-timer');
    if (!el) return;

    const pct = (state.timeLeft / state.totalDuration) * 100;
    const isUrgent = state.timeLeft <= 10;

    el.textContent = `${state.timeLeft}s`;
    el.style.color = isUrgent ? '#e74c3c' : 'var(--text)';
    el.style.fontWeight = isUrgent ? 'bold' : '600';

    const bar = document.getElementById('wc-timer-bar');
    if (bar) {
        bar.style.width = `${pct}%`;
        bar.style.background = isUrgent
            ? '#e74c3c'
            : 'linear-gradient(90deg, #4a90e2, #6dd5ed)';
    }
}

// ── Oyun Ekrani ──────────────────────────────────────────────
function renderGameScreen(state) {
    const area = document.getElementById('wc-area');

    area.innerHTML = `
        <div style="background:var(--card-bg);border-radius:12px;box-shadow:var(--shadow);padding:1rem;margin-bottom:1rem;">
            <!-- Ust Bar: Timer + Skor + Combo -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
                <div style="display:flex;align-items:center;gap:0.75rem;">
                    <span id="wc-timer" style="font-size:1.3rem;font-weight:600;">${state.timeLeft}s</span>
                </div>
                <div style="display:flex;align-items:center;gap:1rem;">
                    <span id="wc-combo" style="font-weight:bold;color:#ff6b35;font-size:1rem;${state.combo >= COMBO_THRESHOLD ? '' : 'display:none;'}">&#128293; x${state.combo}</span>
                    <span style="font-weight:600;font-size:1.1rem;">&#11088; <span id="wc-score">${state.score}</span></span>
                </div>
            </div>

            <!-- Timer Bar -->
            <div style="height:4px;background:var(--border-color);border-radius:4px;overflow:hidden;margin-bottom:1rem;">
                <div id="wc-timer-bar" style="height:100%;width:100%;background:linear-gradient(90deg,#4a90e2,#6dd5ed);transition:width 1s linear;border-radius:4px;"></div>
            </div>

            <!-- Zincir Alani -->
            <div id="wc-chain" style="max-height:340px;overflow-y:auto;padding:0.5rem 0;">
                ${renderChain(state)}
            </div>
        </div>

        <!-- Input Alani -->
        <div style="background:var(--card-bg);border-radius:12px;box-shadow:var(--shadow);padding:1rem;">
            <div id="wc-prompt" style="text-align:center;margin-bottom:0.75rem;font-size:0.95rem;color:var(--text-light);">
                ${getPromptText(state)}
            </div>
            <div style="position:relative;">
                <input
                    type="text"
                    id="wc-input"
                    class="search-input"
                    placeholder="Kelimeyi yaz ve Enter'a bas..."
                    autocomplete="off"
                    spellcheck="false"
                    style="width:100%;padding:0.75rem 1rem;font-size:1rem;border-radius:8px;border:2px solid var(--border-color);background:var(--bg);color:var(--text);box-sizing:border-box;"
                />
            </div>
            <p id="wc-error" style="color:#e74c3c;font-size:0.85rem;margin-top:0.5rem;min-height:1.2rem;"></p>
        </div>
    `;

    const input = document.getElementById('wc-input');
    input.focus();

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleUserInput(state);
        }
    });

    // Otomatik scroll
    scrollChainToBottom();
}

// ── Zinciri Render Et ────────────────────────────────────────
function renderChain(state) {
    if (state.chain.length === 0) return '';

    return state.chain.map((item, index) => {
        const isLast = index === state.chain.length - 1;
        const isComputer = item.by === 'computer';
        const word = item.word;
        const lastChar = word.charAt(word.length - 1).toUpperCase();

        // Kelime: son harf vurgulu
        const wordDisplay = word.length > 1
            ? `<span>${escapeHTML(word.slice(0, -1))}</span><span style="color:#e74c3c;font-weight:800;font-size:1.3em;">${escapeHTML(word.slice(-1))}</span>`
            : `<span style="color:#e74c3c;font-weight:800;font-size:1.3em;">${escapeHTML(word)}</span>`;

        const bgColor = isLast
            ? (isComputer ? 'rgba(74,144,226,0.12)' : 'rgba(46,204,113,0.12)')
            : 'transparent';
        const borderLeft = isComputer ? '3px solid #4a90e2' : '3px solid #2ecc71';
        const icon = isComputer ? '&#129302;' : '&#128100;';

        const arrow = index < state.chain.length - 1
            ? `<div style="text-align:center;color:var(--text-light);font-size:1.2rem;line-height:1;">&#8595;</div>`
            : '';

        return `
            <div style="display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:8px;background:${bgColor};border-left:${borderLeft};margin-bottom:2px;transition:background 0.3s;">
                <span style="font-size:1.1rem;flex-shrink:0;">${icon}</span>
                <div style="flex:1;min-width:0;">
                    <div style="font-size:1.05rem;font-weight:600;">
                        ${wordDisplay}
                    </div>
                    <div style="font-size:0.8rem;color:var(--text-light);display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap;">
                        <span>${escapeHTML(item.meaning)}</span>
                        ${getCEFRBadgeHTML(item.level)}
                    </div>
                </div>
                <span style="font-size:0.75rem;color:var(--text-light);flex-shrink:0;">#${index + 1}</span>
            </div>
            ${arrow}
        `;
    }).join('');
}

// ── Prompt Metni ─────────────────────────────────────────────
function getPromptText(state) {
    const lastItem = state.chain[state.chain.length - 1];
    const lastChar = lastItem.word.charAt(lastItem.word.length - 1).toUpperCase();
    return `"<strong>${escapeHTML(lastItem.word)}</strong>" kelimesinin son harfi: <span style="color:#e74c3c;font-weight:800;font-size:1.3rem;">${lastChar}</span> &mdash; bu harfle baslayan bir kelime yaz!`;
}

// ── Kullanici Girdisi Isleme ─────────────────────────────────
function handleUserInput(state) {
    if (state.gameOver) return;

    const input = document.getElementById('wc-input');
    const errorEl = document.getElementById('wc-error');
    const word = input.value.trim().toLowerCase();

    if (!word) return;

    // Temizle
    errorEl.textContent = '';

    // Son kelimeyi al
    const lastItem = state.chain[state.chain.length - 1];
    const requiredLetter = lastItem.word.charAt(lastItem.word.length - 1).toLowerCase();

    // 1) Dogru harfle mi basliyor?
    if (!word.startsWith(requiredLetter)) {
        errorEl.textContent = `Kelime "${requiredLetter.toUpperCase()}" harfiyle baslamali!`;
        if (window.audioManager) window.audioManager.playWrong();
        shakeInput();
        return;
    }

    // 2) vocabData'da var mi?
    const found = lookupWord(word, state.pool);
    if (!found) {
        errorEl.textContent = 'Bu kelime kelime havuzunda bulunamadi!';
        if (window.audioManager) window.audioManager.playWrong();
        shakeInput();
        return;
    }

    // 3) Daha once kullanilmis mi?
    if (state.usedWords.has(word)) {
        errorEl.textContent = 'Bu kelime zaten kullanildi!';
        if (window.audioManager) window.audioManager.playWrong();
        shakeInput();
        return;
    }

    // -- Kullanici kelimesi gecerli --
    addToChain(state, found, 'user');

    // Skor hesapla
    state.combo++;
    if (state.combo > state.maxCombo) state.maxCombo = state.combo;

    let points = POINTS_PER_WORD;
    if (state.combo >= COMBO_THRESHOLD) {
        points += COMBO_BONUS;
    }
    state.score += points;

    if (window.audioManager) window.audioManager.playCorrect();
    if (window.progressManager) window.progressManager.addXP(points);
    if (window.showXPGain) window.showXPGain(points);

    // Input temizle
    input.value = '';

    // -- Bilgisayar sirasi --
    const userLastChar = found.word.charAt(found.word.length - 1).toLowerCase();
    const computerWord = findWordStartingWith(userLastChar, state.pool, state.usedWords);

    if (!computerWord) {
        // Bilgisayar kelime bulamadi — oyuncu kazandi!
        state.gameOver = true;
        clearInterval(timerInterval);
        timerInterval = null;

        updateGameUI(state);
        showToast('Bilgisayar kelime bulamadi! Tebrikler, kazandin!', 'success');

        // Bonus XP
        const bonusXP = 25;
        state.score += bonusXP;
        if (window.progressManager) window.progressManager.addXP(bonusXP);
        if (window.showXPGain) window.showXPGain(bonusXP);

        setTimeout(() => showResult(state, true), 1500);
        return;
    }

    addToChain(state, computerWord, 'computer');

    // Bilgisayar kelimesinin son harfiyle devam edecek kelime var mi kontrol et
    const nextLetter = computerWord.word.charAt(computerWord.word.length - 1).toLowerCase();
    const userCanContinue = state.pool.some(
        w => w.word.toLowerCase().startsWith(nextLetter) && !state.usedWords.has(w.word.toLowerCase())
    );

    if (!userCanContinue) {
        // Oyuncu icin kelime kalmadi
        state.gameOver = true;
        clearInterval(timerInterval);
        timerInterval = null;

        updateGameUI(state);
        showToast('Bu harfle baslayan kelime kalmadi! Oyun bitti.', 'warning');

        setTimeout(() => showResult(state, false), 1500);
        return;
    }

    updateGameUI(state);
}

// ── Oyun Arayuzunu Guncelle ──────────────────────────────────
function updateGameUI(state) {
    const chainEl = document.getElementById('wc-chain');
    if (chainEl) {
        chainEl.innerHTML = renderChain(state);
    }

    const scoreEl = document.getElementById('wc-score');
    if (scoreEl) scoreEl.textContent = state.score;

    const comboEl = document.getElementById('wc-combo');
    if (comboEl) {
        if (state.combo >= COMBO_THRESHOLD) {
            comboEl.style.display = '';
            comboEl.innerHTML = `&#128293; x${state.combo}`;
            comboEl.style.animation = 'none';
            // Trigger reflow for animation restart
            void comboEl.offsetWidth;
            comboEl.style.animation = 'pulse 0.4s ease-out';
        } else {
            comboEl.style.display = 'none';
        }
    }

    const promptEl = document.getElementById('wc-prompt');
    if (promptEl && !state.gameOver) {
        promptEl.innerHTML = getPromptText(state);
    }

    const input = document.getElementById('wc-input');
    if (input && !state.gameOver) {
        input.disabled = false;
        input.focus();
    } else if (input) {
        input.disabled = true;
    }

    scrollChainToBottom();
}

// ── Zincir Scroll ────────────────────────────────────────────
function scrollChainToBottom() {
    requestAnimationFrame(() => {
        const chainEl = document.getElementById('wc-chain');
        if (chainEl) {
            chainEl.scrollTop = chainEl.scrollHeight;
        }
    });
}

// ── Input Sallanma Efekti ────────────────────────────────────
function shakeInput() {
    const input = document.getElementById('wc-input');
    if (!input) return;
    input.style.animation = 'none';
    void input.offsetWidth;
    input.style.animation = 'shake 0.4s ease-out';
    input.select();
}

// ── Sonuc Ekrani ─────────────────────────────────────────────
function showResult(state, userWon = false) {
    cleanupWordChain();

    const userWords = state.chain.filter(c => c.by === 'user').length;
    const totalWords = state.chain.length;
    const longestChain = calculateLongestUserStreak(state.chain);
    const xpEarned = state.score;

    // Leaderboard kayit
    saveToLeaderboard({
        score: state.score,
        wordCount: userWords,
        totalChain: totalWords,
        longestChain,
        maxCombo: state.maxCombo,
        duration: state.config.duration
    });

    // Progress tracking
    if (window.progressManager) {
        window.progressManager.completeActivity?.(`word-chain-${Date.now()}`);
    }

    const area = document.getElementById('wc-area');

    area.innerHTML = `
        <div style="text-align:center;background:var(--card-bg);border-radius:12px;box-shadow:var(--shadow);padding:2rem 1.5rem;">
            <div style="font-size:3rem;margin-bottom:0.75rem;">${userWon ? '&#127942;' : '&#127937;'}</div>
            <h2 style="margin:0 0 0.5rem;">${userWon ? 'Tebrikler, Kazandin!' : 'Oyun Bitti!'}</h2>
            <p style="color:var(--text-light);margin-bottom:1.5rem;">
                ${userWon ? 'Bilgisayar kelime bulamadi.' : 'Sure doldu veya devam edilemiyor.'}
            </p>

            <!-- Istatistikler -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;max-width:320px;margin:0 auto 1.5rem;">
                <div style="background:var(--bg);padding:0.75rem;border-radius:8px;border:1px solid var(--border-color);">
                    <div style="font-size:1.5rem;font-weight:bold;color:#4a90e2;">${state.score}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Toplam Puan</div>
                </div>
                <div style="background:var(--bg);padding:0.75rem;border-radius:8px;border:1px solid var(--border-color);">
                    <div style="font-size:1.5rem;font-weight:bold;color:#2ecc71;">${userWords}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Kelime Yazdin</div>
                </div>
                <div style="background:var(--bg);padding:0.75rem;border-radius:8px;border:1px solid var(--border-color);">
                    <div style="font-size:1.5rem;font-weight:bold;color:#f39c12;">${totalWords}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Toplam Zincir</div>
                </div>
                <div style="background:var(--bg);padding:0.75rem;border-radius:8px;border:1px solid var(--border-color);">
                    <div style="font-size:1.5rem;font-weight:bold;color:#e74c3c;">${state.maxCombo}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Maks Combo</div>
                </div>
            </div>

            <p style="margin:0 0 1rem;color:var(--text-light);">Kazanilan XP: <strong style="color:#4a90e2;">+${xpEarned}</strong></p>

            <!-- Zincir Ozeti -->
            ${totalWords > 0 ? `
            <div style="text-align:left;max-width:400px;margin:0 auto 1.5rem;">
                <h4 style="margin-bottom:0.5rem;">&#128279; Kelime Zinciri:</h4>
                <div style="background:var(--bg);border-radius:8px;padding:0.75rem;border:1px solid var(--border-color);max-height:200px;overflow-y:auto;">
                    <div style="display:flex;flex-wrap:wrap;gap:0.3rem;align-items:center;">
                        ${state.chain.map((item, i) => {
                            const isUser = item.by === 'user';
                            const color = isUser ? '#2ecc71' : '#4a90e2';
                            const arrow = i < state.chain.length - 1 ? '<span style="color:var(--text-light);font-size:0.9rem;"> &#8594; </span>' : '';
                            return `<span style="display:inline-flex;align-items:center;gap:0.2rem;">
                                <span style="background:${color};color:#fff;padding:2px 8px;border-radius:6px;font-size:0.85rem;font-weight:500;" title="${escapeHTML(item.meaning)}">${escapeHTML(item.word)}</span>
                                ${arrow}
                            </span>`;
                        }).join('')}
                    </div>
                </div>
            </div>
            ` : ''}

            <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
                <button id="wc-retry-btn" class="btn" style="padding:0.6rem 1.5rem;">&#128260; Tekrar Oyna</button>
                <button id="wc-config-btn" class="btn secondary" style="padding:0.6rem 1.5rem;">&#9881; Ayarlar</button>
            </div>
        </div>
    `;

    document.getElementById('wc-retry-btn').addEventListener('click', () => startGame(state.config));
    document.getElementById('wc-config-btn').addEventListener('click', showConfigScreen);
}

// ── En Uzun Kullanici Serisi ─────────────────────────────────
function calculateLongestUserStreak(chain) {
    let maxStreak = 0;
    let current = 0;
    for (const item of chain) {
        if (item.by === 'user') {
            current++;
            if (current > maxStreak) maxStreak = current;
        } else {
            // Bilgisayar kelimesi araya girer ama seri kirilmaz
            // cunku oyun sirayla gider: bilgisayar -> kullanici -> bilgisayar -> ...
            // En uzun "kullanici kelimelerinin toplam sayisi" anlamli
        }
    }
    return maxStreak;
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
    board.sort((a, b) => b.score - a.score || b.wordCount - a.wordCount);
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board.slice(0, 10)));
}

// ── HTML Escape ──────────────────────────────────────────────
function escapeHTML(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// ── CSS Animasyonlari (inject once) ──────────────────────────
(function injectWordChainStyles() {
    if (document.getElementById('wc-styles')) return;
    const style = document.createElement('style');
    style.id = 'wc-styles';
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-6px); }
            50% { transform: translateX(6px); }
            75% { transform: translateX(-4px); }
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
        }
        #wc-chain::-webkit-scrollbar {
            width: 4px;
        }
        #wc-chain::-webkit-scrollbar-thumb {
            background: var(--border-color);
            border-radius: 4px;
        }
        #wc-input:focus {
            border-color: #4a90e2;
            outline: none;
            box-shadow: 0 0 0 3px rgba(74,144,226,0.2);
        }
    `;
    document.head.appendChild(style);
})();

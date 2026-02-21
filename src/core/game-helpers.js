// Game Helpers — Shared utilities for game modules
// Leaderboard CRUD, countdown timer, CEFR filter

// ── Leaderboard ──────────────────────────────────────────
export function getLeaderboard(storageKey) {
    try {
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch { return []; }
}

export function saveToLeaderboard(storageKey, entry, maxEntries = 10) {
    const board = getLeaderboard(storageKey);
    board.push({ ...entry, date: new Date().toISOString() });
    board.sort((a, b) => b.score - a.score);
    if (board.length > maxEntries) board.length = maxEntries;
    localStorage.setItem(storageKey, JSON.stringify(board));
    return board;
}

export function renderLeaderboardHTML(storageKey, title = 'Skor Tablosu') {
    const board = getLeaderboard(storageKey);
    if (board.length === 0) return '<p style="color:var(--text-light);text-align:center;">Henuz skor yok.</p>';
    const rows = board.map((e, i) => {
        const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
        const d = new Date(e.date).toLocaleDateString('tr-TR');
        return `<tr><td>${medal}</td><td>${e.score}</td><td style="color:var(--text-light);font-size:0.8rem;">${d}</td></tr>`;
    }).join('');
    return `
        <h4 style="margin-bottom:0.5rem;">${title}</h4>
        <table style="width:100%;border-collapse:collapse;">
            <thead><tr><th>#</th><th>Skor</th><th>Tarih</th></tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

// ── Countdown Timer ──────────────────────────────────────
export function createCountdown(seconds, onTick, onEnd) {
    let remaining = seconds;
    onTick(remaining);
    const id = setInterval(() => {
        remaining--;
        onTick(remaining);
        if (remaining <= 0) {
            clearInterval(id);
            onEnd();
        }
    }, 1000);
    return id;
}

// ── CEFR Filter ──────────────────────────────────────────
export function renderCEFRFilter(containerId, levels, onFilter) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const btns = ['Tümü', ...levels];
    container.innerHTML = btns.map(l =>
        `<button class="cefr-filter-btn${l === 'Tümü' ? ' active' : ''}" data-level="${l}">${l}</button>`
    ).join('');
    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.cefr-filter-btn');
        if (!btn) return;
        container.querySelectorAll('.cefr-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        onFilter(btn.dataset.level === 'Tümü' ? null : btn.dataset.level);
    });
}

// ── Score across all games ───────────────────────────────
const ALL_GAME_KEYS = [
    'word_chain_leaderboard', 'crossword_leaderboard', 'hangman_leaderboard',
    'memory_cards_leaderboard', 'speed_quiz_leaderboard', 'mini_quiz_leaderboard',
    'daily_challenge_leaderboard', 'sentence_builder_leaderboard',
    'word_scramble_leaderboard', 'word_search_leaderboard',
    'true_false_leaderboard', 'emoji_quiz_leaderboard'
];

export function getGlobalScores() {
    const scores = {};
    ALL_GAME_KEYS.forEach(key => {
        const board = getLeaderboard(key);
        const gameName = key.replace('_leaderboard', '').replace(/_/g, ' ');
        if (board.length > 0) {
            scores[gameName] = {
                best: board[0].score,
                total: board.reduce((s, e) => s + e.score, 0),
                plays: board.length
            };
        }
    });
    return scores;
}

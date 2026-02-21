// Leaderboard Module — Capraz skor toplama ve genel siralama
import { getGlobalScores, getLeaderboard } from '../core/game-helpers.js';

const GAME_KEYS = [
    { key: 'word_chain_leaderboard', name: 'Kelime Zinciri', icon: '⛓️' },
    { key: 'crossword_leaderboard', name: 'Bulmaca', icon: '📰' },
    { key: 'hangman_leaderboard', name: 'Adam Asmaca', icon: '🪢' },
    { key: 'memory_cards_leaderboard', name: 'Hafiza Kartlari', icon: '🃏' },
    { key: 'speed_quiz_leaderboard', name: 'Hiz Testi', icon: '⚡' },
    { key: 'mini_quiz_leaderboard', name: 'Mini Quiz', icon: '📝' },
    { key: 'daily_challenge_leaderboard', name: 'Gunluk Soru', icon: '📅' },
    { key: 'sentence_builder_leaderboard', name: 'Cumle Kurma', icon: '🔤' }
];

export function cleanupLeaderboard() { /* no timers */ }

export function initLeaderboard() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:800px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="lb-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Skor Tablosu</h2>
                <span></span>
            </div>
            <div id="lb-area"></div>
        </div>
    `;
    document.getElementById('lb-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    renderLeaderboard();
}

function renderLeaderboard() {
    const area = document.getElementById('lb-area');

    // Overall summary
    const scores = getGlobalScores();
    let totalBest = 0;
    let totalPlays = 0;
    Object.values(scores).forEach(s => {
        totalBest += s.best;
        totalPlays += s.plays;
    });

    let html = `
        <div style="background:linear-gradient(135deg,var(--primary-color),#764ba2);color:#fff;border-radius:var(--border-radius);padding:1.5rem;text-align:center;margin-bottom:1.5rem;">
            <h3 style="margin-bottom:0.75rem;">Genel Ozet</h3>
            <div style="display:flex;justify-content:center;gap:2rem;flex-wrap:wrap;">
                <div>
                    <div style="font-size:2rem;font-weight:700;">${totalBest}</div>
                    <div style="font-size:0.8rem;opacity:0.8;">Toplam En Iyi Skor</div>
                </div>
                <div>
                    <div style="font-size:2rem;font-weight:700;">${totalPlays}</div>
                    <div style="font-size:0.8rem;opacity:0.8;">Toplam Oyun</div>
                </div>
                <div>
                    <div style="font-size:2rem;font-weight:700;">${Object.keys(scores).length}</div>
                    <div style="font-size:0.8rem;opacity:0.8;">Aktif Oyun</div>
                </div>
            </div>
        </div>
    `;

    // Per-game leaderboards
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:1rem;">';

    for (const game of GAME_KEYS) {
        const board = getLeaderboard(game.key);
        const hasData = board.length > 0;

        html += `
            <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
                <h4 style="margin-bottom:0.5rem;">${game.icon} ${game.name}</h4>
        `;

        if (!hasData) {
            html += '<p style="color:var(--text-light);font-size:0.85rem;">Henuz oynamamis.</p>';
        } else {
            html += '<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">';
            html += '<thead><tr><th style="text-align:left;padding:0.25rem;">#</th><th style="text-align:left;padding:0.25rem;">Skor</th><th style="text-align:right;padding:0.25rem;">Tarih</th></tr></thead><tbody>';
            board.slice(0, 5).forEach((e, i) => {
                const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
                const d = new Date(e.date).toLocaleDateString('tr-TR');
                html += `<tr><td style="padding:0.25rem;">${medal}</td><td style="padding:0.25rem;font-weight:600;">${e.score}</td><td style="padding:0.25rem;text-align:right;color:var(--text-light);">${d}</td></tr>`;
            });
            html += '</tbody></table>';
        }

        html += '</div>';
    }

    html += '</div>';
    area.innerHTML = html;
}

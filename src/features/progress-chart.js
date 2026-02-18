/**
 * Progress Chart — Haftalık XP Çizelgesi + Streak Heatmap
 * LocalStorage'da günlük XP logunu tutar.
 * Dashboard'da gösterilir.
 */

const XP_LOG_KEY = 'xp_daily_log';
const HEATMAP_WEEKS = 12; // 12 hafta = 84 gün

/** Bugünün tarih anahtarını döndür: "2025-02-18" */
function todayKey() {
    return new Date().toISOString().split('T')[0];
}

/** XP log'unu yükle */
export function loadXPLog() {
    try {
        return JSON.parse(localStorage.getItem(XP_LOG_KEY) || '{}');
    } catch {
        return {};
    }
}

/** Belirli bir gün için XP ekle */
export function logDailyXP(amount) {
    const log = loadXPLog();
    const key = todayKey();
    log[key] = (log[key] || 0) + amount;
    localStorage.setItem(XP_LOG_KEY, JSON.stringify(log));
}

/** Son N günün XP verilerini dizi olarak döndür */
export function getRecentXP(days = 7) {
    const log = loadXPLog();
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split('T')[0];
        result.push({ date: key, xp: log[key] || 0 });
    }
    return result;
}

/** Haftalık XP bar chart HTML'i üret */
export function renderWeeklyChart() {
    const data = getRecentXP(7);
    const maxXP = Math.max(...data.map(d => d.xp), 1);

    const bars = data.map(d => {
        const pct = Math.round((d.xp / maxXP) * 100);
        const dayName = new Date(d.date + 'T12:00:00').toLocaleDateString('tr-TR', { weekday: 'short' });
        return `
            <div class="chart-bar-wrap">
                <div class="chart-bar-label">${d.xp > 0 ? d.xp : ''}</div>
                <div class="chart-bar-track">
                    <div class="chart-bar-fill ${pct > 0 ? 'has-xp' : ''}"
                         style="height:${pct}%"
                         title="${d.xp} XP - ${d.date}">
                    </div>
                </div>
                <div class="chart-bar-day">${dayName}</div>
            </div>
        `;
    }).join('');

    const totalWeekXP = data.reduce((s, d) => s + d.xp, 0);
    const activeDays = data.filter(d => d.xp > 0).length;

    return `
        <div class="weekly-chart-panel">
            <div class="chart-header">
                <h3>📊 Son 7 Günlük XP</h3>
                <span class="chart-summary">${totalWeekXP} XP — ${activeDays}/7 gün aktif</span>
            </div>
            <div class="chart-bars">${bars}</div>
        </div>
    `;
}

/** Streak Heatmap — Son 12 hafta (GitHub tarzı) */
export function renderStreakHeatmap() {
    const log = loadXPLog();
    const today = new Date();
    const totalDays = HEATMAP_WEEKS * 7;

    // Takvim grid'i oluştur (Pazartesi başlangıç)
    const cells = [];
    for (let i = totalDays - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split('T')[0];
        const xp = log[key] || 0;
        const level = xp === 0 ? 0 : xp < 30 ? 1 : xp < 70 ? 2 : xp < 120 ? 3 : 4;
        const label = d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
        cells.push(`<div class="heatmap-cell level-${level}" title="${label}: ${xp} XP"></div>`);
    }

    // Ay etiketleri
    const monthLabels = [];
    let lastMonth = -1;
    for (let i = totalDays - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const m = d.getMonth();
        if (m !== lastMonth) {
            monthLabels.push(d.toLocaleDateString('tr-TR', { month: 'short' }));
            lastMonth = m;
        }
    }

    return `
        <div class="heatmap-panel">
            <div class="chart-header">
                <h3>🔥 Aktivite Takvimi (${HEATMAP_WEEKS} Hafta)</h3>
                <div class="heatmap-legend">
                    <span>Az</span>
                    <div class="heatmap-cell level-0"></div>
                    <div class="heatmap-cell level-1"></div>
                    <div class="heatmap-cell level-2"></div>
                    <div class="heatmap-cell level-3"></div>
                    <div class="heatmap-cell level-4"></div>
                    <span>Çok</span>
                </div>
            </div>
            <div class="heatmap-grid">
                ${cells.join('')}
            </div>
        </div>
    `;
}

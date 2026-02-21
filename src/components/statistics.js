/**
 * Statistics Module — Detaylı İstatistik Paneli
 * Kelime türü dağılımı, CEFR ilerleme, zayıf kategoriler, öğrenme hızı
 */

import { vocabData } from '../core/data.js';
import { getCEFRBadgeHTML, getTypeBadgeHTML } from '../core/utils.js';

export function initStatistics() {
    const container = document.getElementById('app');

    // Gather data
    const stats = gatherStats();

    container.innerHTML = `
        <h2>📊 Detaylı İstatistikler</h2>
        <p style="color:var(--text-light);margin-bottom:1.5rem;">Öğrenme ilerlemenizin kapsamlı analizi</p>

        <div class="dashboard-grid" style="gap:1.5rem;">
            ${renderOverviewCard(stats)}
            ${renderTypeDistribution(stats)}
            ${renderCEFRProgress(stats)}
            ${renderWeakWords(stats)}
            ${renderLearningSpeed(stats)}
            ${renderStreakStats(stats)}
        </div>
    `;
}

function gatherStats() {
    const progress = window.progressManager?.state || {};
    const srsData = JSON.parse(localStorage.getItem('srs_data') || '{}');
    const errorData = JSON.parse(localStorage.getItem('error_analytics') || '{}');
    const dailyXP = JSON.parse(localStorage.getItem('daily_xp_log') || '{}');

    // Learned words (reviewed at least once with quality >= 3)
    const learnedIds = new Set();
    const learningIds = new Set();
    Object.entries(srsData).forEach(([id, card]) => {
        if (card.interval && card.interval >= 7) {
            learnedIds.add(parseInt(id));
        } else {
            learningIds.add(parseInt(id));
        }
    });

    // Type distribution
    const typeCounts = { noun: 0, verb: 0, adjective: 0, other: 0 };
    const levelCounts = { A1: 0, A2: 0, B1: 0, B2: 0 };
    const totalByLevel = { A1: 0, A2: 0, B1: 0, B2: 0 };

    vocabData.forEach(w => {
        const t = typeCounts[w.type] !== undefined ? w.type : 'other';
        typeCounts[t]++;
        if (totalByLevel[w.level] !== undefined) totalByLevel[w.level]++;
        if (learnedIds.has(w.id) && levelCounts[w.level] !== undefined) {
            levelCounts[w.level]++;
        }
    });

    // Error analytics — most mistaken words
    const weakWords = Object.entries(errorData)
        .map(([id, count]) => ({ id: parseInt(id), mistakes: count }))
        .sort((a, b) => b.mistakes - a.mistakes)
        .slice(0, 10);

    // Learning speed — last 7 days
    const today = new Date();
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split('T')[0];
        last7Days.push({
            date: d.toLocaleDateString('tr-TR', { weekday: 'short', day: 'numeric' }),
            xp: dailyXP[key] || 0
        });
    }

    return {
        xp: progress.xp || 0,
        level: progress.level || 1,
        streak: progress.streak || 0,
        completedCount: (progress.completedActivities || []).length,
        totalWords: vocabData.length,
        learnedCount: learnedIds.size,
        learningCount: learningIds.size,
        typeCounts,
        levelCounts,
        totalByLevel,
        weakWords,
        last7Days,
        srsCardCount: Object.keys(srsData).length
    };
}

function renderOverviewCard(stats) {
    const pct = stats.totalWords > 0 ? Math.round((stats.learnedCount / stats.totalWords) * 100) : 0;
    return `
        <div class="card" style="grid-column: span 2;">
            <h3>📈 Genel Bakış</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;margin-top:1rem;">
                <div style="text-align:center;padding:1rem;background:rgba(74,144,226,0.08);border-radius:8px;">
                    <div style="font-size:2rem;font-weight:700;color:var(--primary-color);">${stats.xp}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Toplam XP</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(126,211,33,0.08);border-radius:8px;">
                    <div style="font-size:2rem;font-weight:700;color:var(--accent-color);">${stats.level}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Seviye</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(245,166,35,0.08);border-radius:8px;">
                    <div style="font-size:2rem;font-weight:700;color:#f5a623;">${stats.streak}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Gün Serisi</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(155,89,182,0.08);border-radius:8px;">
                    <div style="font-size:2rem;font-weight:700;color:#9b59b6;">${stats.learnedCount}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Öğrenilen Kelime</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(231,76,60,0.08);border-radius:8px;">
                    <div style="font-size:2rem;font-weight:700;color:#e74c3c;">${stats.completedCount}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Aktivite</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(52,152,219,0.08);border-radius:8px;">
                    <div style="font-size:2rem;font-weight:700;color:#3498db;">${pct}%</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Kelime İlerleme</div>
                </div>
            </div>
        </div>
    `;
}

function renderTypeDistribution(stats) {
    const total = Object.values(stats.typeCounts).reduce((a, b) => a + b, 0);
    const types = [
        { key: 'noun', label: 'İsim', color: '#4a90e2' },
        { key: 'verb', label: 'Fiil', color: '#e24a4a' },
        { key: 'adjective', label: 'Sıfat', color: '#4aad5b' },
        { key: 'other', label: 'Diğer', color: '#e2a74a' }
    ];

    return `
        <div class="card">
            <h3>🏷️ Kelime Türü Dağılımı</h3>
            <div style="margin-top:1rem;">
                ${types.map(t => {
                    const count = stats.typeCounts[t.key];
                    const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                    return `
                        <div style="margin-bottom:0.75rem;">
                            <div style="display:flex;justify-content:space-between;margin-bottom:0.25rem;">
                                <span>${getTypeBadgeHTML(t.key)} ${t.label}</span>
                                <span style="font-weight:600;">${count} (%${pct})</span>
                            </div>
                            <div style="height:8px;background:var(--border-color);border-radius:4px;overflow:hidden;">
                                <div style="height:100%;width:${pct}%;background:${t.color};border-radius:4px;transition:width 0.5s;"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderCEFRProgress(stats) {
    const levels = [
        { key: 'A1', color: '#27ae60' },
        { key: 'A2', color: '#2ecc71' },
        { key: 'B1', color: '#f39c12' },
        { key: 'B2', color: '#e74c3c' }
    ];

    return `
        <div class="card">
            <h3>📚 CEFR Seviye İlerleme</h3>
            <div style="margin-top:1rem;">
                ${levels.map(l => {
                    const learned = stats.levelCounts[l.key];
                    const total = stats.totalByLevel[l.key];
                    const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
                    return `
                        <div style="margin-bottom:0.75rem;">
                            <div style="display:flex;justify-content:space-between;margin-bottom:0.25rem;">
                                <span>${getCEFRBadgeHTML(l.key)}</span>
                                <span style="font-size:0.85rem;">${learned}/${total} (%${pct})</span>
                            </div>
                            <div style="height:10px;background:var(--border-color);border-radius:5px;overflow:hidden;">
                                <div style="height:100%;width:${pct}%;background:${l.color};border-radius:5px;transition:width 0.5s;"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderWeakWords(stats) {
    if (stats.weakWords.length === 0) {
        return `
            <div class="card">
                <h3>⚠️ Zayıf Kelimeler</h3>
                <p style="color:var(--text-light);margin-top:1rem;">Henüz hata kaydı yok. Testleri çözdükçe burada en çok hata yaptığın kelimeler görünecek.</p>
            </div>
        `;
    }

    return `
        <div class="card">
            <h3>⚠️ En Çok Hata Yapılan Kelimeler</h3>
            <div style="margin-top:1rem;">
                ${stats.weakWords.map((w, i) => {
                    const word = vocabData.find(v => v.id === w.id);
                    if (!word) return '';
                    return `
                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border-color);">
                            <div>
                                <span style="font-weight:600;">${i + 1}. ${word.word}</span>
                                ${getTypeBadgeHTML(word.type)}
                                <span style="color:var(--text-light);margin-left:0.5rem;">${word.meaning}</span>
                            </div>
                            <span style="color:var(--danger-color);font-weight:600;">${w.mistakes}x</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderLearningSpeed(stats) {
    const maxXP = Math.max(...stats.last7Days.map(d => d.xp), 1);
    const totalWeekXP = stats.last7Days.reduce((sum, d) => sum + d.xp, 0);
    const avgDaily = Math.round(totalWeekXP / 7);

    return `
        <div class="card">
            <h3>📅 Son 7 Gün</h3>
            <p style="font-size:0.85rem;color:var(--text-light);margin-top:0.25rem;">Toplam: ${totalWeekXP} XP · Günlük Ort: ${avgDaily} XP</p>
            <div style="display:flex;align-items:flex-end;gap:4px;height:120px;margin-top:1rem;padding:0 0.5rem;">
                ${stats.last7Days.map(d => {
                    const h = maxXP > 0 ? Math.max((d.xp / maxXP) * 100, 4) : 4;
                    return `
                        <div style="flex:1;display:flex;flex-direction:column;align-items:center;">
                            <span style="font-size:0.65rem;font-weight:600;margin-bottom:2px;">${d.xp}</span>
                            <div style="width:100%;height:${h}%;background:var(--primary-color);border-radius:4px 4px 0 0;min-height:4px;transition:height 0.3s;"></div>
                            <span style="font-size:0.6rem;color:var(--text-light);margin-top:4px;">${d.date}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderStreakStats(stats) {
    return `
        <div class="card">
            <h3>🎯 SRS Durumu</h3>
            <div style="margin-top:1rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                <div style="text-align:center;padding:1rem;background:rgba(74,144,226,0.08);border-radius:8px;">
                    <div style="font-size:1.5rem;font-weight:700;">${stats.srsCardCount}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">SRS Kart</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(126,211,33,0.08);border-radius:8px;">
                    <div style="font-size:1.5rem;font-weight:700;">${stats.learnedCount}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Öğrenildi</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(245,166,35,0.08);border-radius:8px;">
                    <div style="font-size:1.5rem;font-weight:700;">${stats.learningCount}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Öğreniliyor</div>
                </div>
                <div style="text-align:center;padding:1rem;background:rgba(155,89,182,0.08);border-radius:8px;">
                    <div style="font-size:1.5rem;font-weight:700;">${stats.totalWords - stats.learnedCount - stats.learningCount}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Başlanmadı</div>
                </div>
            </div>
        </div>
    `;
}

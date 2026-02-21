// Export Progress Module — CSV/JSON olarak ilerleme disa aktarma
import { showToast } from '../features/toast.js';

export function cleanupExportProgress() { /* no timers */ }

export function initExportProgress() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:600px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="ep-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Ilerleme Aktar</h2>
                <span></span>
            </div>
            <div id="ep-area"></div>
        </div>
    `;
    document.getElementById('ep-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    renderExportOptions();
}

function renderExportOptions() {
    const area = document.getElementById('ep-area');
    const stats = window.progressManager?.getStats?.() || {};

    area.innerHTML = `
        <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1.5rem;box-shadow:var(--shadow);margin-bottom:1rem;">
            <h3 style="margin-bottom:1rem;">Mevcut Ilerleme</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                <div style="text-align:center;padding:1rem;background:var(--background-color);border-radius:8px;">
                    <div style="font-size:1.5rem;font-weight:700;color:var(--primary-color);">${stats.xp || 0}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Toplam XP</div>
                </div>
                <div style="text-align:center;padding:1rem;background:var(--background-color);border-radius:8px;">
                    <div style="font-size:1.5rem;font-weight:700;color:var(--primary-color);">${stats.level || 1}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Seviye</div>
                </div>
                <div style="text-align:center;padding:1rem;background:var(--background-color);border-radius:8px;">
                    <div style="font-size:1.5rem;font-weight:700;color:#ff6b35;">${stats.streak || 0}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Gunluk Seri</div>
                </div>
                <div style="text-align:center;padding:1rem;background:var(--background-color);border-radius:8px;">
                    <div style="font-size:1.5rem;font-weight:700;color:var(--accent-color);">${getDataKeyCount()}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Kayitli Veri</div>
                </div>
            </div>
        </div>

        <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1.5rem;box-shadow:var(--shadow);margin-bottom:1rem;">
            <h3 style="margin-bottom:1rem;">Disa Aktar</h3>
            <div style="display:flex;flex-direction:column;gap:0.75rem;">
                <button id="ep-json" class="btn" style="text-align:left;padding:1rem;">
                    <strong>JSON Olarak Indir</strong><br>
                    <span style="font-size:0.8rem;opacity:0.8;">Tum verilerinizi JSON formatinda indirin</span>
                </button>
                <button id="ep-csv" class="btn secondary" style="text-align:left;padding:1rem;">
                    <strong>CSV Olarak Indir</strong><br>
                    <span style="font-size:0.8rem;opacity:0.8;">Skor tablolarini Excel uyumlu CSV olarak indirin</span>
                </button>
            </div>
        </div>

        <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1.5rem;box-shadow:var(--shadow);">
            <h3 style="margin-bottom:1rem;">Veri Yonetimi</h3>
            <button id="ep-clear" class="btn" style="background:var(--danger-color);width:100%;text-align:left;padding:1rem;">
                <strong>Tum Verileri Sil</strong><br>
                <span style="font-size:0.8rem;opacity:0.8;">Dikkat: Bu islem geri alinamaz!</span>
            </button>
        </div>
    `;

    document.getElementById('ep-json').addEventListener('click', exportJSON);
    document.getElementById('ep-csv').addEventListener('click', exportCSV);
    document.getElementById('ep-clear').addEventListener('click', clearAllData);
}

function getDataKeyCount() {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
        count++;
    }
    return count;
}

function getAllData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
            data[key] = JSON.parse(localStorage.getItem(key));
        } catch {
            data[key] = localStorage.getItem(key);
        }
    }
    return data;
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function exportJSON() {
    const data = getAllData();
    const json = JSON.stringify(data, null, 2);
    const date = new Date().toISOString().slice(0, 10);
    downloadFile(json, `english-master-progress-${date}.json`, 'application/json');
    showToast('JSON dosyasi indirildi!', 'success');
}

function exportCSV() {
    const leaderboardKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.includes('leaderboard')) leaderboardKeys.push(key);
    }

    let csv = 'Oyun,Skor,Tarih\n';
    leaderboardKeys.forEach(key => {
        try {
            const board = JSON.parse(localStorage.getItem(key)) || [];
            const gameName = key.replace('_leaderboard', '').replace(/_/g, ' ');
            board.forEach(entry => {
                const date = entry.date ? new Date(entry.date).toLocaleDateString('tr-TR') : '-';
                csv += `"${gameName}",${entry.score},"${date}"\n`;
            });
        } catch { /* skip */ }
    });

    const date = new Date().toISOString().slice(0, 10);
    downloadFile(csv, `english-master-scores-${date}.csv`, 'text/csv');
    showToast('CSV dosyasi indirildi!', 'success');
}

function clearAllData() {
    if (!confirm('Tum verileriniz silinecek. Emin misiniz?')) return;
    if (!confirm('Bu islem geri alinamaz! Devam etmek istiyor musunuz?')) return;

    localStorage.clear();
    showToast('Tum veriler silindi. Sayfa yenileniyor...', 'warning');
    setTimeout(() => window.location.reload(), 1500);
}

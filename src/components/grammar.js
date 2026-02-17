import { grammarData, cefrLevels } from '../core/data.js';

export function initGrammarModule() {
    renderGrammarTopics();
}

// ── Konu Listesi (CEFR Seviye Filtreli) ─────────────────────────────────────
function renderGrammarTopics(activeLevel = 'all') {
    const container = document.getElementById('app');

    // Seviye filtre butonları
    const filterBtns = cefrLevels.map(l => `
        <button class="cefr-filter-btn ${activeLevel === l.id ? 'active' : ''}"
                data-level="${l.id}"
                style="--cefr-color: ${l.color}">
            ${l.emoji} ${l.id}
        </button>
    `).join('');

    // Konuları filtrele
    const filtered = activeLevel === 'all'
        ? grammarData
        : grammarData.filter(t => t.level === activeLevel);

    // Her seviye için badge rengi
    const levelColors = Object.fromEntries(cefrLevels.map(l => [l.id, l.color]));

    const topicsHtml = filtered.map(topic => `
        <div class="card grammar-card" data-id="${topic.id}">
            <div class="cefr-badge" style="background:${levelColors[topic.level] || '#999'}">
                ${topic.level}
            </div>
            <div class="card-icon">📚</div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <button class="btn">Derse Başla</button>
        </div>
    `).join('') || '<p class="no-results">Bu seviyede henüz ders eklenmedi.</p>';

    container.innerHTML = `
        <h2>📚 Gramer Dersleri</h2>
        <p>Seviyenizi seçin ve konuya başlayın.</p>

        <div class="cefr-filter-bar">
            <button class="cefr-filter-btn ${activeLevel === 'all' ? 'active' : ''}" data-level="all">
                🌍 Tümü
            </button>
            ${filterBtns}
        </div>

        <div class="dashboard-grid" style="margin-top:1.5rem;">
            ${topicsHtml}
        </div>
    `;

    // Filtre butonları
    container.querySelectorAll('.cefr-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => renderGrammarTopics(btn.dataset.level));
    });

    // Ders başlat butonları
    container.querySelectorAll('.grammar-card button').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = e.target.closest('.card').dataset.id;
            openGrammarLesson(id);
        });
    });
}

// ── Ders Sayfası ─────────────────────────────────────────────────────────────
function openGrammarLesson(topicId) {
    const topic = grammarData.find(t => t.id === topicId);
    if (!topic) return;
    const container = document.getElementById('app');

    const levelInfo = cefrLevels.find(l => l.id === topic.level);

    container.innerHTML = `
        <div class="grammar-lesson-container">
            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem;">
                <button id="back-to-grammar" class="btn secondary">❮ Konulara Dön</button>
                <span class="cefr-badge-large" style="background:${levelInfo?.color || '#999'}">
                    ${levelInfo?.emoji || ''} ${topic.level} — ${levelInfo?.label || topic.level}
                </span>
            </div>

            <div class="lesson-content">
                <h1>${topic.title}</h1>
                <div class="theory-box">
                    ${topic.content}
                </div>

                <hr class="divider">
                <h2>✏️ Alıştırmalar</h2>
                <div id="exercise-area"></div>
            </div>
        </div>
    `;

    document.getElementById('back-to-grammar').addEventListener('click', () => renderGrammarTopics());
    renderExercises(topic.exercises);
}

// ── Alıştırmalar ─────────────────────────────────────────────────────────────
function renderExercises(exercises) {
    const area = document.getElementById('exercise-area');
    area.innerHTML = '';

    exercises.forEach((ex, index) => {
        const exCard = document.createElement('div');
        exCard.className = 'exercise-card';
        exCard.innerHTML = `
            <span class="ex-number">Soru ${index + 1}</span>
            <p class="ex-question">${ex.question}</p>
            <div class="ex-interaction" id="ex-inter-${index}"></div>
            <p class="ex-feedback" id="feedback-${index}"></p>
        `;
        area.appendChild(exCard);

        const interactionDiv = exCard.querySelector(`#ex-inter-${index}`);

        if (ex.type === 'fill-blank') {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'ex-input';
            input.placeholder = 'Cevabınızı yazın...';
            input.addEventListener('keydown', e => {
                if (e.key === 'Enter') checkGenericAnswer(input.value, ex.answer, index, ex.hint);
            });

            const btn = document.createElement('button');
            btn.className = 'btn small';
            btn.textContent = 'Kontrol Et';
            btn.addEventListener('click', () => checkGenericAnswer(input.value, ex.answer, index, ex.hint));

            interactionDiv.appendChild(input);
            interactionDiv.appendChild(btn);

        } else if (ex.type === 'true-false') {
            ex.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'btn secondary small opt-btn';
                btn.textContent = opt;
                btn.addEventListener('click', () => checkGenericAnswer(opt, ex.answer, index, ex.hint));
                interactionDiv.appendChild(btn);
            });

        } else if (ex.type === 'writing') {
            const input = document.createElement('textarea');
            input.className = 'ex-input full-width';
            input.placeholder = 'Cümlenizi buraya yazın...';

            const btn = document.createElement('button');
            btn.className = 'btn small';
            btn.textContent = 'Kontrol Et';
            btn.addEventListener('click', () => checkWritingAnswer(input.value, ex.keywords, index));

            interactionDiv.appendChild(input);
            interactionDiv.appendChild(btn);
        }
    });
}

// ── Cevap Kontrol ─────────────────────────────────────────────────────────────
function checkGenericAnswer(userVal, correctVal, index, hint) {
    const feedback = document.getElementById(`feedback-${index}`);

    if (userVal.trim().toLowerCase() === correctVal.toLowerCase()) {
        feedback.textContent = "✅ Doğru! +10 XP";
        feedback.className = 'ex-feedback success';
        if (window.audioManager) window.audioManager.playCorrect();
        if (window.progressManager) {
            window.progressManager.addXP(10);
            if (window.showXPGain) window.showXPGain(10);
        }
    } else {
        feedback.textContent = `❌ Yanlış. İpucu: ${hint || 'Tekrar dene.'}`;
        feedback.className = 'ex-feedback error';
        if (window.audioManager) window.audioManager.playWrong();
    }
}

function checkWritingAnswer(userText, keywords, index) {
    const feedback = document.getElementById(`feedback-${index}`);
    const missing = keywords.filter(kw => !userText.toLowerCase().includes(kw.toLowerCase()));

    if (missing.length === 0 && userText.length > 5) {
        feedback.textContent = "✅ Harika cümle! +10 XP";
        feedback.className = 'ex-feedback success';
        if (window.audioManager) window.audioManager.playCorrect();
        if (window.progressManager) {
            window.progressManager.addXP(10);
            if (window.showXPGain) window.showXPGain(10);
        }
    } else {
        const hint = missing.length > 0
            ? `Şunları içerdiğinden emin ol: ${missing.join(', ')}`
            : 'Cümlen çok kısa, biraz daha uzat.';
        feedback.textContent = `⚠️ ${hint}`;
        feedback.className = 'ex-feedback warning';
        if (window.audioManager) window.audioManager.playWrong();
    }
}

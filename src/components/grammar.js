import { grammarData, cefrLevels } from '../core/data.js';

const GRAMMAR_PROGRESS_KEY = 'grammar_completed';

/** Tamamlanan grammar konularını yükle */
function loadCompletedTopics() {
    try {
        return JSON.parse(localStorage.getItem(GRAMMAR_PROGRESS_KEY) || '[]');
    } catch { return []; }
}

/** Bir konuyu tamamlandı olarak işaretle */
function markTopicCompleted(topicId) {
    const completed = loadCompletedTopics();
    if (!completed.includes(topicId)) {
        completed.push(topicId);
        localStorage.setItem(GRAMMAR_PROGRESS_KEY, JSON.stringify(completed));
    }
}

export function initGrammarModule() {
    renderGrammarTopics();
}

// ── Konu Listesi (CEFR Seviye Filtreli) ─────────────────────────────────────
function renderGrammarTopics(activeLevel = 'all') {
    const container = document.getElementById('app');

    const filterBtns = cefrLevels.map(l => `
        <button class="cefr-filter-btn ${activeLevel === l.id ? 'active' : ''}"
                data-level="${l.id}"
                style="--cefr-color: ${l.color}">
            ${l.emoji} ${l.id}
        </button>
    `).join('');

    const filtered = activeLevel === 'all'
        ? grammarData
        : grammarData.filter(t => t.level === activeLevel);

    const levelColors = Object.fromEntries(cefrLevels.map(l => [l.id, l.color]));
    const completedTopics = loadCompletedTopics();
    const completedCount = grammarData.filter(t => completedTopics.includes(t.id)).length;

    const topicsHtml = filtered.map(topic => {
        const isDone = completedTopics.includes(topic.id);
        const hasTest = topic.test && topic.test.length > 0;
        return `
        <div class="card grammar-card ${isDone ? 'grammar-completed' : ''}" data-id="${topic.id}">
            <div class="grammar-card-header">
                <div class="cefr-badge" style="background:${levelColors[topic.level] || '#999'}">
                    ${topic.level}
                </div>
                ${isDone ? '<div class="grammar-done-badge">✅ Tamamlandı</div>' : ''}
            </div>
            <div class="card-icon">📚</div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="grammar-card-meta">
                <span class="meta-badge">${topic.exercises.length} alıştırma</span>
                ${hasTest ? '<span class="meta-badge test-badge">Test</span>' : ''}
            </div>
            <button class="btn">${isDone ? '🔄 Tekrar Et' : 'Derse Başla'}</button>
        </div>
    `}).join('') || '<p class="no-results">Bu seviyede henüz ders eklenmedi.</p>';

    container.innerHTML = `
        <h2>📚 Gramer Dersleri</h2>
        <div class="grammar-progress-row">
            <p>Seviyenizi seçin ve konuya başlayın.</p>
            <span class="grammar-progress-badge">${completedCount}/${grammarData.length} konu tamamlandı</span>
        </div>

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

    container.querySelectorAll('.cefr-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => renderGrammarTopics(btn.dataset.level));
    });

    container.querySelectorAll('.grammar-card button').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = e.target.closest('.card').dataset.id;
            openGrammarLesson(id);
        });
    });
}

// ── Ders Sayfası — 4 Sekmeli ────────────────────────────────────────────────
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
                ${renderTabs(topic)}
                <div id="tab-content" class="grammar-tab-content"></div>
            </div>
        </div>
    `;

    document.getElementById('back-to-grammar').addEventListener('click', () => renderGrammarTopics());

    // Tab click handlers
    container.querySelectorAll('.grammar-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.grammar-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            switchTab(btn.dataset.tab, topic);
        });
    });

    // Show first tab by default
    switchTab('theory', topic);
}

function renderTabs(topic) {
    const hasExamples = topic.examples && topic.examples.length > 0;
    const hasTest = topic.test && topic.test.length > 0;

    return `
        <div class="grammar-tabs">
            <button class="grammar-tab active" data-tab="theory">📖 Konu Anlatımı</button>
            ${hasExamples ? '<button class="grammar-tab" data-tab="examples">💡 Örnekler</button>' : ''}
            <button class="grammar-tab" data-tab="exercises">✏️ Alıştırmalar</button>
            ${hasTest ? '<button class="grammar-tab" data-tab="test">🎯 Konu Testi</button>' : ''}
        </div>
    `;
}

function switchTab(tabName, topic) {
    const content = document.getElementById('tab-content');
    if (!content) return;

    // Reset animation
    content.classList.remove('grammar-tab-content');
    void content.offsetWidth;
    content.classList.add('grammar-tab-content');

    switch (tabName) {
        case 'theory':
            renderTheoryTab(content, topic);
            break;
        case 'examples':
            renderExamplesTab(content, topic);
            break;
        case 'exercises':
            renderExercisesTab(content, topic);
            break;
        case 'test':
            renderTestTab(content, topic);
            break;
    }
}

// ── Theory Tab ──────────────────────────────────────────────────────────────
function renderTheoryTab(container, topic) {
    container.innerHTML = `
        <div class="theory-box">
            ${topic.content}
        </div>
    `;
}

// ── Examples Tab ────────────────────────────────────────────────────────────
function renderExamplesTab(container, topic) {
    if (!topic.examples || topic.examples.length === 0) {
        container.innerHTML = '<p>Bu konu için örnek henüz eklenmedi.</p>';
        return;
    }

    const cards = topic.examples.map(ex => `
        <div class="grammar-example-card ${ex.correct ? 'grammar-example-correct' : 'grammar-example-wrong'}">
            <span class="grammar-example-label">${ex.correct ? '✅ Doğru' : '❌ Yanlış'}</span>
            <span class="grammar-example-sentence">${ex.sentence}</span>
            <span class="grammar-example-translation">${ex.translation}</span>
            ${ex.note ? `<span class="grammar-example-note">💡 ${ex.note}</span>` : ''}
        </div>
    `).join('');

    container.innerHTML = `
        <h2>💡 Örnekler</h2>
        <div class="grammar-examples-grid">
            ${cards}
        </div>
    `;
}

// ── Exercises Tab ───────────────────────────────────────────────────────────
function renderExercisesTab(container, topic) {
    container.innerHTML = `
        <h2>✏️ Alıştırmalar</h2>
        <div id="exercise-area"></div>
    `;
    renderExercises(topic.id, topic.exercises);
}

function renderExercises(topicId, exercises) {
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
                if (e.key === 'Enter') checkGenericAnswer(input.value, ex.answer, index, ex.hint, topicId, exercises);
            });

            const btn = document.createElement('button');
            btn.className = 'btn small';
            btn.textContent = 'Kontrol Et';
            btn.addEventListener('click', () => checkGenericAnswer(input.value, ex.answer, index, ex.hint, topicId, exercises));

            interactionDiv.appendChild(input);
            interactionDiv.appendChild(btn);

        } else if (ex.type === 'true-false') {
            ex.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'btn secondary small opt-btn';
                btn.textContent = opt;
                btn.addEventListener('click', () => checkGenericAnswer(opt, ex.answer, index, ex.hint, topicId, exercises));
                interactionDiv.appendChild(btn);
            });

        } else if (ex.type === 'multiple-choice') {
            const grid = document.createElement('div');
            grid.className = 'mc-options-grid';
            ex.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'mc-option-btn';
                btn.textContent = opt;
                btn.addEventListener('click', () => {
                    // Disable all buttons
                    grid.querySelectorAll('.mc-option-btn').forEach(b => {
                        b.disabled = true;
                        if (b.textContent === ex.answer) b.classList.add('correct');
                    });
                    if (opt !== ex.answer) btn.classList.add('wrong');
                    checkGenericAnswer(opt, ex.answer, index, ex.hint, topicId, exercises);
                });
                grid.appendChild(btn);
            });
            interactionDiv.appendChild(grid);

        } else if (ex.type === 'writing') {
            const input = document.createElement('textarea');
            input.className = 'ex-input full-width';
            input.placeholder = 'Cümlenizi buraya yazın...';

            const btn = document.createElement('button');
            btn.className = 'btn small';
            btn.textContent = 'Kontrol Et';
            btn.addEventListener('click', () => checkWritingAnswer(input.value, ex.keywords, index, topicId, exercises));

            interactionDiv.appendChild(input);
            interactionDiv.appendChild(btn);
        }
    });
}

// ── Cevap Kontrol ───────────────────────────────────────────────────────────
function checkGenericAnswer(userVal, correctVal, index, hint, topicId, exercises) {
    const feedback = document.getElementById(`feedback-${index}`);

    if (userVal.trim().toLowerCase() === correctVal.toLowerCase()) {
        feedback.textContent = "✅ Doğru! +10 XP";
        feedback.className = 'ex-feedback success';
        if (window.audioManager) window.audioManager.playCorrect();
        if (window.progressManager) {
            window.progressManager.addXP(10);
            if (window.showXPGain) window.showXPGain(10);
        }
        tryCompleteLesson(topicId, exercises);
    } else {
        feedback.textContent = `❌ Yanlış. İpucu: ${hint || 'Tekrar dene.'}`;
        feedback.className = 'ex-feedback error';
        if (window.audioManager) window.audioManager.playWrong();
    }
}

function checkWritingAnswer(userText, keywords, index, topicId, exercises) {
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
        tryCompleteLesson(topicId, exercises);
    } else {
        const hint = missing.length > 0
            ? `Şunları içerdiğinden emin ol: ${missing.join(', ')}`
            : 'Cümlen çok kısa, biraz daha uzat.';
        feedback.textContent = `⚠️ ${hint}`;
        feedback.className = 'ex-feedback warning';
        if (window.audioManager) window.audioManager.playWrong();
    }
}

/** Dersin tüm egzersizleri tamamlandıysa kutla */
function tryCompleteLesson(topicId, exercises) {
    if (!topicId || !exercises) return;
    setTimeout(() => {
        const successCount = document.querySelectorAll('.ex-feedback.success').length;
        if (successCount >= exercises.length) {
            markTopicCompleted(topicId);
            showLessonCompleteBanner();
        }
    }, 100);
}

function showLessonCompleteBanner() {
    if (document.getElementById('lesson-complete-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'lesson-complete-banner';
    banner.className = 'lesson-complete-banner';
    banner.innerHTML = `
        🎉 <strong>Tebrikler!</strong> Bu konuyu tamamladın! +50 XP
        <button id="close-banner" style="margin-left:1rem; background:transparent; border:none; cursor:pointer; font-size:1rem;">✕</button>
    `;
    document.querySelector('.grammar-lesson-container')?.appendChild(banner);

    if (window.progressManager) window.progressManager.addXP(50);
    if (window.showXPGain) window.showXPGain(50);
    if (window.celebrateLevelUp) window.celebrateLevelUp();

    document.getElementById('close-banner')?.addEventListener('click', () => banner.remove());
    setTimeout(() => banner.remove(), 5000);
}

// ── Test Tab ────────────────────────────────────────────────────────────────
function renderTestTab(container, topic) {
    if (!topic.test || topic.test.length === 0) {
        container.innerHTML = '<p>Bu konu için test henüz eklenmedi.</p>';
        return;
    }

    const state = { current: 0, score: 0, answered: false };
    showTestQuestion(container, topic, state);
}

function showTestQuestion(container, topic, state) {
    const questions = topic.test;
    const q = questions[state.current];
    const total = questions.length;
    const progress = ((state.current) / total) * 100;

    container.innerHTML = `
        <h2>🎯 Konu Testi</h2>
        <div class="grammar-test-counter">Soru ${state.current + 1} / ${total}</div>
        <div class="grammar-test-progress">
            <div class="grammar-test-progress-fill" style="width: ${progress}%"></div>
        </div>
        <div class="grammar-test-card">
            <p class="test-question">${q.question}</p>
            <div class="grammar-test-options" id="test-options"></div>
        </div>
    `;

    const optionsDiv = container.querySelector('#test-options');
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'grammar-test-opt';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
            if (state.answered) return;
            state.answered = true;

            // Disable all & show feedback
            optionsDiv.querySelectorAll('.grammar-test-opt').forEach((b, i) => {
                b.disabled = true;
                if (i === q.answer) b.classList.add('correct');
            });

            if (idx === q.answer) {
                state.score++;
                if (window.audioManager) window.audioManager.playCorrect();
            } else {
                btn.classList.add('wrong');
                if (window.audioManager) window.audioManager.playWrong();
            }

            // Auto-advance after delay
            setTimeout(() => {
                state.current++;
                state.answered = false;
                if (state.current < total) {
                    showTestQuestion(container, topic, state);
                } else {
                    showTestResult(container, topic, state);
                }
            }, 1200);
        });
        optionsDiv.appendChild(btn);
    });
}

function showTestResult(container, topic, state) {
    const total = topic.test.length;
    const score = state.score;
    const pct = Math.round((score / total) * 100);
    const isPerfect = score === total;

    let emoji, label;
    if (pct === 100) { emoji = '🏆'; label = 'Mükemmel! Hepsini bildin!'; }
    else if (pct >= 80) { emoji = '🌟'; label = 'Harika performans!'; }
    else if (pct >= 60) { emoji = '👍'; label = 'İyi gidiyorsun!'; }
    else if (pct >= 40) { emoji = '📖'; label = 'Biraz daha pratik yap.'; }
    else { emoji = '💪'; label = 'Tekrar dene, gelişeceksin!'; }

    const xpGained = isPerfect ? 30 : Math.round((score / total) * 25);

    container.innerHTML = `
        <div class="grammar-test-result">
            <div class="test-score-emoji">${emoji}</div>
            <div class="test-score-text">${score}/${total}</div>
            <div class="test-score-label">${label}</div>
            ${xpGained > 0 ? `<div class="test-xp-bonus">+${xpGained} XP</div>` : ''}
            <div style="margin-top:1rem; display:flex; gap:0.75rem; justify-content:center; flex-wrap:wrap;">
                <button class="btn" id="retry-test">🔄 Tekrar Dene</button>
                <button class="btn secondary" id="back-to-exercises">✏️ Alıştırmalara Dön</button>
            </div>
        </div>
    `;

    // Award XP
    if (window.progressManager && xpGained > 0) {
        window.progressManager.addXP(xpGained);
        if (window.showXPGain) window.showXPGain(xpGained);
    }

    // Perfect score confetti
    if (isPerfect && window.celebrateLevelUp) {
        window.celebrateLevelUp();
    }

    container.querySelector('#retry-test')?.addEventListener('click', () => {
        renderTestTab(container, topic);
    });

    container.querySelector('#back-to-exercises')?.addEventListener('click', () => {
        // Switch to exercises tab
        document.querySelectorAll('.grammar-tab').forEach(t => {
            t.classList.remove('active');
            if (t.dataset.tab === 'exercises') t.classList.add('active');
        });
        switchTab('exercises', topic);
    });
}

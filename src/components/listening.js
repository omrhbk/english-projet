import { listeningData } from '../core/data.js';

let currentVideoObserver = null;

export function initListeningModule() {
    const container = document.getElementById('app'); // Main app container
    // We override renderListening in app.js, so we can just inject into listening-content if we want, 
    // but better to manage full view here if we want complex logic.
    // For now, let's assume app.js calls this after rendering the grid.
    
    // Check if we are in the main listening menu or specific video
    // For simplicity, we'll re-render the list here if called completely
    renderListeningList();
}

function renderListeningList() {
    const container = document.getElementById('app');
    
    let videoCards = listeningData.map(video => `
        <div class="card listening-card" data-id="${video.id}">
            <div class="card-icon">🎬</div>
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <button class="btn">İzle & Öğren</button>
        </div>
    `).join('');

    container.innerHTML = `
        <h2>🎧 Duyduğunu Anlama</h2>
        <p>Videoları izle ve soruları cevapla.</p>
        <div class="dashboard-grid">
            ${videoCards}
        </div>
    `;

    // Attach events
    document.querySelectorAll('.listening-card button').forEach(btn => {
        btn.onclick = (e) => {
            const id = parseInt(e.target.closest('.card').dataset.id);
            loadVideoSession(id);
        };
    });
}

function loadVideoSession(id) {
    const videoData = listeningData.find(v => v.id === id);
    const container = document.getElementById('app');

    container.innerHTML = `
        <div class="video-session-container">
            <button id="back-to-list" class="btn secondary" style="margin-bottom: 1rem;">❮ Listeye Dön</button>
            
            <div class="video-wrapper">
                <video id="learning-video" controls width="100%">
                    <source src="${videoData.videoUrl}" type="video/mp4">
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
                
                <div id="question-overlay" class="question-overlay hidden">
                    <div class="question-card">
                        <h3 id="q-text">Soru Buraya Gelecek</h3>
                        <div id="q-options" class="options-grid"></div>
                        <p id="q-feedback"></p>
                        <button id="continue-video-btn" class="btn hidden">Videoya Devam Et ▶</button>
                    </div>
                </div>
            </div>

            <div class="video-controls-row" style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                <button id="toggle-transcript-btn" class="btn secondary small">📄 Altyazıyı Göster/Gizle</button>
            </div>

            <div id="transcript-box" class="transcript-box hidden">
                <h4>Konuşma Metni (Transcript)</h4>
                <p>${videoData.transcript ? videoData.transcript.replace(/\n/g, '<br>') : 'Bu video için altyazı yok.'}</p>
            </div>

            <div class="video-info">
                <h3>${videoData.title}</h3>
                <p>${videoData.description}</p>
            </div>
        </div>
    `;

    document.getElementById('back-to-list').addEventListener('click', renderListeningList);
    
    // Toggle Transcript Logic
    document.getElementById('toggle-transcript-btn').addEventListener('click', () => {
        document.getElementById('transcript-box').classList.toggle('hidden');
    });
    
    setupVideoLogic(videoData);
}

function setupVideoLogic(videoData) {
    const video = document.getElementById('learning-video');
    const overlay = document.getElementById('question-overlay');
    
    // Sort questions by time to ensure order
    const pendingQuestions = [...videoData.questions].sort((a, b) => a.time - b.time);
    
    video.ontimeupdate = () => {
        if (pendingQuestions.length > 0) {
            const nextQ = pendingQuestions[0];
            // Use >= check only (no upper bound) so fast timeupdate intervals
            // or slow browsers don't skip the question window entirely.
            // The question is shifted immediately so it only fires once.
            if (video.currentTime >= nextQ.time) {
                video.pause();
                pendingQuestions.shift(); // Remove before showing to prevent double-trigger
                showQuestion(nextQ);
            }
        }
    };
}

function showQuestion(question) {
    const overlay = document.getElementById('question-overlay');
    const qText = document.getElementById('q-text');
    const qOptions = document.getElementById('q-options');
    const feedback = document.getElementById('q-feedback');
    const continueBtn = document.getElementById('continue-video-btn');

    qText.textContent = question.question;
    qOptions.innerHTML = '';
    feedback.textContent = '';
    continueBtn.classList.add('hidden');
    
    question.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt, question.answer, btn);
        qOptions.appendChild(btn);
    });

    overlay.classList.remove('hidden');
}

function checkAnswer(selected, correct, btnElement) {
    const feedback = document.getElementById('q-feedback');
    const continueBtn = document.getElementById('continue-video-btn');
    const allBtns = document.querySelectorAll('.option-btn');

    // Disable all buttons
    allBtns.forEach(b => b.disabled = true);

    if (selected === correct) {
        btnElement.classList.add('correct');
        feedback.textContent = "Doğru Cevap! 🎉 +10 XP";
        feedback.className = 'feedback-msg success';
        continueBtn.classList.remove('hidden');

        // XP kazandır
        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
        if (window.audioManager) window.audioManager.playCorrect();

        continueBtn.onclick = () => {
            document.getElementById('question-overlay').classList.add('hidden');
            document.getElementById('learning-video').play();
        };

        // Auto continue on Enter
        const enterHandler = (e) => {
             if(e.key === 'Enter' && !continueBtn.classList.contains('hidden')) {
                 continueBtn.click();
                 document.removeEventListener('keypress', enterHandler);
             }
        };
        document.addEventListener('keypress', enterHandler);

    } else {
        btnElement.classList.add('wrong');
        feedback.textContent = "Yanlış Cevap. Tekrar dene.";
        feedback.className = 'feedback-msg error';
        if (window.audioManager) window.audioManager.playWrong();
        
        // Add Replay Button if not exists
        if (!document.getElementById('replay-btn')) {
            const replayBtn = document.createElement('button');
            replayBtn.id = 'replay-btn';
            replayBtn.textContent = '⏪ 3 Saniye Geri Sar';
            replayBtn.className = 'btn secondary small';
            replayBtn.style.marginTop = '1rem';
            replayBtn.onclick = () => {
                const video = document.getElementById('learning-video');
                video.currentTime = Math.max(0, video.currentTime - 3);
                video.play();
                document.getElementById('question-overlay').classList.add('hidden');
            };
            document.querySelector('.question-card').appendChild(replayBtn);
        }

        setTimeout(() => {
             allBtns.forEach(b => b.disabled = false);
             btnElement.disabled = true; // Keep wrong one disabled
        }, 1500);
    }
}

import { vocabData } from '../core/data.js';
import { fetchDictionary, playPronunciation, fetchUnsplashImage } from '../core/services.js';

let currentIndex = 0;
let isFlipped = false;

// --- Vocab Search / Browse ---

export function initVocabSearch() {
    const container = document.getElementById('vocab-content');
    container.innerHTML = `
        <div class="vocab-search-container">
            <div class="search-bar-row">
                <input type="text" id="vocab-search-input" placeholder="Kelime veya anlam ara..." class="search-input" autocomplete="off" />
                <select id="vocab-type-filter" class="search-filter">
                    <option value="all">Tümü</option>
                    <option value="noun">İsim (noun)</option>
                    <option value="verb">Fiil (verb)</option>
                    <option value="adjective">Sıfat (adjective)</option>
                </select>
            </div>
            <div id="vocab-results" class="vocab-results-grid"></div>
        </div>
    `;

    renderVocabResults(vocabData);

    document.getElementById('vocab-search-input').addEventListener('input', filterVocab);
    document.getElementById('vocab-type-filter').addEventListener('change', filterVocab);
}

function filterVocab() {
    const query = document.getElementById('vocab-search-input').value.toLowerCase().trim();
    const type = document.getElementById('vocab-type-filter').value;

    const filtered = vocabData.filter(word => {
        const matchesText = !query ||
            word.word.toLowerCase().includes(query) ||
            word.meaning.toLowerCase().includes(query) ||
            word.synonyms.some(s => s.toLowerCase().includes(query));
        const matchesType = type === 'all' || word.type === type;
        return matchesText && matchesType;
    });

    renderVocabResults(filtered);
}

function renderVocabResults(words) {
    const container = document.getElementById('vocab-results');

    if (words.length === 0) {
        container.innerHTML = `<p class="no-results">Sonuç bulunamadı.</p>`;
        return;
    }

    container.innerHTML = words.map(w => `
        <div class="vocab-result-card">
            <span class="badge">${w.type}</span>
            <h3 class="vocab-result-word">${w.word}</h3>
            <p class="vocab-result-meaning">${w.meaning}</p>
            <div class="tags">${w.synonyms.map(s => `<span class="tag">${s}</span>`).join('')}</div>
        </div>
    `).join('');
}

export function initFlashcards() {
    currentIndex = 0; // Reset state when (re)entering the module
    const container = document.getElementById('vocab-content');
    container.innerHTML = `
        <div class="flashcard-container">
            <div class="flashcard" id="flashcard">
                <div class="flashcard-front">
                    <img id="card-image" class="card-image" src="" alt="" style="display:none" />
                    <h2 id="card-word">Loading...</h2>
                    <div class="card-front-meta">
                        <span id="card-type" class="badge">Noun</span>
                        <span id="card-phonetic" class="phonetic"></span>
                        <button id="speak-btn" class="tts-btn" title="Telaffuzu Dinle" aria-label="Telaffuzu Dinle">🔊</button>
                    </div>
                    <p id="card-definition" class="card-definition"></p>
                    <p id="card-example" class="card-example"></p>
                    <p class="instruction">Çevirmek için tıkla</p>
                </div>
                <div class="flashcard-back">
                    <h2 id="card-meaning">Yükleniyor...</h2>
                    <div id="card-synonyms"></div>
                </div>
            </div>

            <div class="controls">
                <button id="prev-btn" class="btn secondary">❮ Önceki</button>
                <div class="progress">
                    <span id="current-card">1</span> / <span id="total-cards">0</span>
                </div>
                <button id="next-btn" class="btn">Sonraki ❯</button>
            </div>
        </div>
    `;

    setupEventListeners();
    loadCard(0);
}

function setupEventListeners() {
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    flashcard.addEventListener('click', flipCard);
    
    prevBtn.addEventListener('click', () => {
        if(currentIndex > 0) {
            currentIndex--;
            resetCard();
            loadCard(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if(currentIndex < vocabData.length - 1) {
            currentIndex++;
            resetCard();
            loadCard(currentIndex);
        }
    });
}

function flipCard() {
    isFlipped = !isFlipped;
    const flashcard = document.getElementById('flashcard');
    if(isFlipped) {
        flashcard.classList.add('flipped');
    } else {
        flashcard.classList.remove('flipped');
    }
}

function resetCard() {
    isFlipped = false;
    document.getElementById('flashcard').classList.remove('flipped');
}

function loadCard(index) {
    const wordData = vocabData[index];

    document.getElementById('card-word').textContent = wordData.word;
    document.getElementById('card-type').textContent = wordData.type;
    document.getElementById('card-meaning').textContent = wordData.meaning;

    // İlerleme göstergesi
    document.getElementById('current-card').textContent = index + 1;
    document.getElementById('total-cards').textContent = vocabData.length;

    // Buton durumları
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === vocabData.length - 1;

    // Fonetik placeholder — API gelene kadar boş
    const phoneticEl = document.getElementById('card-phonetic');
    if (phoneticEl) phoneticEl.textContent = '';

    // Tanım placeholder
    const defEl = document.getElementById('card-definition');
    if (defEl) defEl.textContent = 'Tanım yükleniyor...';

    // Örnek cümle placeholder
    const exEl = document.getElementById('card-example');
    if (exEl) exEl.textContent = '';

    // Görsel placeholder
    const imgEl = document.getElementById('card-image');
    if (imgEl) { imgEl.src = ''; imgEl.style.display = 'none'; }

    // Eş anlamlılar (statik liste varsayılan)
    const synonymsList = wordData.synonyms.map(s => `<span class="tag">${s}</span>`).join('');
    document.getElementById('card-synonyms').innerHTML =
        `<p>Eş Anlamlılar:</p><div class="tags">${synonymsList}</div>`;

    // ── Async API çağrıları ──────────────────────────────
    // Dictionary API: fonetik, tanım, örnek, ek eş anlamlılar
    fetchDictionary(wordData.word).then(dict => {
        if (phoneticEl && dict.phonetic) phoneticEl.textContent = dict.phonetic;

        if (defEl) defEl.textContent = dict.definition || wordData.meaning;

        if (exEl && dict.example) {
            exEl.innerHTML = `<em>"${dict.example}"</em>`;
        }

        // Dictionary'den gelen eş anlamlıları da ekle
        if (dict.synonyms.length > 0) {
            const combined = [...new Set([...wordData.synonyms, ...dict.synonyms])].slice(0, 6);
            const tags = combined.map(s => `<span class="tag">${s}</span>`).join('');
            document.getElementById('card-synonyms').innerHTML =
                `<p>Eş Anlamlılar:</p><div class="tags">${tags}</div>`;
        }

        // Ses butonu: Dictionary MP3 veya Web Speech API
        const speakBtn = document.getElementById('speak-btn');
        if (speakBtn) {
            speakBtn.onclick = () => playPronunciation(wordData.word, dict.audioUrl);
        }
    });

    // Unsplash: görsel
    fetchUnsplashImage(wordData.word).then(imgUrl => {
        if (imgEl && imgUrl) {
            imgEl.src = imgUrl;
            imgEl.alt = wordData.word;
            imgEl.style.display = 'block';
        }
    });
}

// --- Matching Game Logic ---

let selectedCards = [];
let matchedPairs = 0;

export function initMatchingGame() {
    const container = document.getElementById('vocab-content');
    container.innerHTML = `
        <div class="matching-container">
            <div class="header-row">
                <button id="back-btn" class="btn secondary">❮ Geri</button>
                <h3>Eşleştirme Oyunu</h3>
                <span id="score">Eşleşen: 0 / 5</span>
            </div>
            <div class="matching-grid" id="matching-grid">
                <!-- Cards will be injected here -->
            </div>
            <div id="game-message" class="hidden">
                <h2>Tebrikler! 🎉</h2>
                <button id="restart-match-btn" class="btn">Tekrar Oyna</button>
            </div>
        </div>
    `;

    document.getElementById('back-btn').addEventListener('click', () => {
        // Simple way to go back to vocab menu: reload the view
        document.querySelector('[data-target=vocabulary]').click();
    });

    startMatchingGame();
}

function startMatchingGame() {
    const grid = document.getElementById('matching-grid');
    grid.innerHTML = '';
    document.getElementById('game-message').classList.add('hidden');
    selectedCards = [];
    matchedPairs = 0;
    updateScore();

    // Select 5 random words
    const gameWords = [...vocabData].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    // Create pairs (Word and Meaning)
    let cards = [];
    gameWords.forEach(item => {
        cards.push({ id: item.id, type: 'word', content: item.word });
        cards.push({ id: item.id, type: 'meaning', content: item.meaning });
    });

    // Shuffle cards
    cards.sort(() => 0.5 - Math.random());

    // Render cards
    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('match-card');
        cardEl.dataset.id = card.id;
        cardEl.dataset.type = card.type;
        cardEl.textContent = card.content;
        cardEl.addEventListener('click', () => handleCardClick(cardEl));
        grid.appendChild(cardEl);
    });
}

function handleCardClick(card) {
    // Ignore if already matched or already selected or 2 cards already selected
    if (card.classList.contains('matched') || 
        card.classList.contains('selected') || 
        selectedCards.length >= 2) {
        return;
    }

    card.classList.add('selected');
    selectedCards.push(card);

    if (selectedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = selectedCards;
    const isMatch = card1.dataset.id === card2.dataset.id && card1.dataset.type !== card2.dataset.type;

    if (isMatch) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        card1.classList.remove('selected');
        card2.classList.remove('selected');
        selectedCards = [];
        matchedPairs++;
        updateScore();
        
        if (matchedPairs === 5) {
            setTimeout(() => {
                document.getElementById('game-message').classList.remove('hidden');
                document.getElementById('restart-match-btn').addEventListener('click', startMatchingGame);
            }, 500);
        }
    } else {
        // Mismatch feedback
        card1.classList.add('mismatch');
        card2.classList.add('mismatch');
        
        setTimeout(() => {
            card1.classList.remove('selected', 'mismatch');
            card2.classList.remove('selected', 'mismatch');
            selectedCards = [];
        }, 1000);
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Eşleşen: ${matchedPairs} / 5`;
}

// --- Puzzle Game (Word Scramble) Logic ---

let currentPuzzleWord = {};

export function initPuzzleGame() {
    const container = document.getElementById('vocab-content');
    container.innerHTML = `
        <div class="puzzle-container">
             <div class="header-row">
                <button id="back-btn-puzzle" class="btn secondary">❮ Geri</button>
                <h3>Kelime Bulmaca</h3>
                <span>Skor: <span id="puzzle-score">0</span></span>
            </div>
            
            <div class="puzzle-card">
                <p class="puzzle-hint">İpucu: <span id="puzzle-meaning">...</span></p>
                
                <div class="scrambled-letters" id="scrambled-letters">
                    <!-- Letters go here -->
                </div>

                <div class="answer-area">
                    <input type="text" id="puzzle-input" placeholder="Kelimeyi yazın..." autocomplete="off">
                    <button id="check-puzzle-btn" class="btn">Kontrol Et</button>
                </div>
                
                <p id="puzzle-feedback" class="feedback-msg"></p>
                <button id="next-puzzle-btn" class="btn hidden">Sonraki Kelime ❯</button>
            </div>
        </div>
    `;

    document.getElementById('back-btn-puzzle').addEventListener('click', () => {
        document.querySelector('[data-target=vocabulary]').click();
    });

    document.getElementById('check-puzzle-btn').addEventListener('click', checkPuzzleAnswer);
    document.getElementById('next-puzzle-btn').addEventListener('click', loadNewPuzzle);
    
    // Allow Enter key to submit
    const puzzleInput = document.getElementById('puzzle-input');
    
    puzzleInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            checkPuzzleAnswer();
        }
    });

    // Clear placeholder on focus (click)
    puzzleInput.addEventListener('focus', () => {
        puzzleInput.setAttribute('placeholder', '');
    });

    // Restore placeholder on blur
    puzzleInput.addEventListener('blur', () => {
        puzzleInput.setAttribute('placeholder', 'Kelimeyi yazın...');
    });

    loadNewPuzzle();
}

let puzzleScore = 0;

function loadNewPuzzle() {
    // Reset UI
    document.getElementById('puzzle-feedback').textContent = '';
    document.getElementById('puzzle-feedback').className = 'feedback-msg';
    const input = document.getElementById('puzzle-input');
    input.value = '';
    input.disabled = false;
    input.focus(); // Auto focus input
    document.getElementById('check-puzzle-btn').disabled = false;
    document.getElementById('next-puzzle-btn').classList.add('hidden');

    // Pick random word
    currentPuzzleWord = vocabData[Math.floor(Math.random() * vocabData.length)];
    
    // Show meaning
    document.getElementById('puzzle-meaning').textContent = currentPuzzleWord.meaning;
    
    // Scramble letters
    const letters = currentPuzzleWord.word.toUpperCase().split('');
    const scrambled = letters.sort(() => 0.5 - Math.random());
    
    const lettersContainer = document.getElementById('scrambled-letters');
    lettersContainer.innerHTML = '';
    
    scrambled.forEach(char => {
        const span = document.createElement('span');
        span.className = 'letter-tile';
        span.textContent = char;
        lettersContainer.appendChild(span);
    });
}

function checkPuzzleAnswer() {
    const input = document.getElementById('puzzle-input');
    const userGuess = input.value.trim().toUpperCase();
    const correctAnswer = currentPuzzleWord.word.toUpperCase();
    const feedback = document.getElementById('puzzle-feedback');

    if (userGuess === correctAnswer) {
        feedback.textContent = "Doğru! Harikasın. 🎉";
        feedback.className = 'feedback-msg success'; // Reset classes to just base + success
        puzzleScore += 10;
        document.getElementById('puzzle-score').textContent = puzzleScore;
        
        // Play success sound
        if (window.audioManager) window.audioManager.playCorrect();
        
        // Save Progress
        if (window.progressManager) {
            window.progressManager.addXP(10);
            if (window.showXPGain) window.showXPGain(10);
        }
        
        input.disabled = true;
        document.getElementById('check-puzzle-btn').disabled = true;
        const nextBtn = document.getElementById('next-puzzle-btn');
        nextBtn.classList.remove('hidden');
        nextBtn.focus(); // Focus next button so Enter works naturally
    } else {
        feedback.textContent = "Yanlış cevap, tekrar dene. 😔";
        feedback.classList.add('error');
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
        
        // Play wrong sound
        if (window.audioManager) window.audioManager.playWrong();
        
        // Track mistake
        if (window.errorAnalytics) {
            window.errorAnalytics.trackMistake(currentPuzzleWord.id);
        }
    }
}

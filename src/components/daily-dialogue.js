// Daily Dialogue Module — Gunluk Diyalog Senaryolari + TTS
import { showToast } from '../features/toast.js';

const SCENARIOS = [
    {
        id: 'restaurant', title: 'Restoran', icon: '🍽️',
        lines: [
            { speaker: 'waiter', en: 'Good evening! Welcome to our restaurant. Table for how many?', tr: 'Iyi aksamlar! Restoranımıza hosgeldiniz. Kac kisilik masa?' },
            { speaker: 'you', options: [
                { en: 'Table for two, please.', tr: 'Iki kisilik masa, lutfen.' },
                { en: 'Just one, thanks.', tr: 'Sadece bir kisi, tesekkurler.' }
            ]},
            { speaker: 'waiter', en: 'Right this way, please. Here is the menu.', tr: 'Bu taraftan buyurun. Iste menu.' },
            { speaker: 'you', options: [
                { en: 'Could I have the steak, please?', tr: 'Biftek alabilir miyim, lutfen?' },
                { en: 'What do you recommend?', tr: 'Ne tavsiye edersiniz?' }
            ]},
            { speaker: 'waiter', en: 'Excellent choice! Would you like anything to drink?', tr: 'Harika secim! Icecek bir sey ister misiniz?' },
            { speaker: 'you', options: [
                { en: 'Just water, please.', tr: 'Sadece su, lutfen.' },
                { en: 'I\'ll have a glass of juice.', tr: 'Bir bardak meyve suyu alayim.' }
            ]}
        ]
    },
    {
        id: 'hotel', title: 'Otel', icon: '🏨',
        lines: [
            { speaker: 'receptionist', en: 'Good afternoon! How can I help you?', tr: 'Iyi gunler! Size nasil yardimci olabilirim?' },
            { speaker: 'you', options: [
                { en: 'I have a reservation under Smith.', tr: 'Smith adina bir rezervasyonum var.' },
                { en: 'Do you have any rooms available?', tr: 'Bos odaniz var mi?' }
            ]},
            { speaker: 'receptionist', en: 'Yes, we have a room ready. How many nights will you be staying?', tr: 'Evet, hazir bir odamiz var. Kac gece kalacaksiniz?' },
            { speaker: 'you', options: [
                { en: 'Three nights, please.', tr: 'Uc gece, lutfen.' },
                { en: 'Just one night.', tr: 'Sadece bir gece.' }
            ]},
            { speaker: 'receptionist', en: 'Here is your room key. The elevator is on your left.', tr: 'Iste oda anahtariniz. Asansor solunuzda.' },
            { speaker: 'you', options: [
                { en: 'What time is breakfast?', tr: 'Kahvalti saat kacta?' },
                { en: 'Is there Wi-Fi in the room?', tr: 'Odada Wi-Fi var mi?' }
            ]}
        ]
    },
    {
        id: 'airport', title: 'Havaalani', icon: '✈️',
        lines: [
            { speaker: 'agent', en: 'Good morning. May I see your passport and boarding pass?', tr: 'Gunaydin. Pasaportunuzu ve binis kartinizi gorebilir miyim?' },
            { speaker: 'you', options: [
                { en: 'Here you go.', tr: 'Buyurun.' },
                { en: 'Sure, one moment please.', tr: 'Tabii, bir dakika lutfen.' }
            ]},
            { speaker: 'agent', en: 'Would you like a window seat or an aisle seat?', tr: 'Cam kenari mi yoksa koridor tarafi mi istersiniz?' },
            { speaker: 'you', options: [
                { en: 'Window seat, please.', tr: 'Cam kenari, lutfen.' },
                { en: 'Aisle seat would be great.', tr: 'Koridor tarafi harika olur.' }
            ]},
            { speaker: 'agent', en: 'Do you have any luggage to check in?', tr: 'Teslim edecek bagajiniz var mi?' },
            { speaker: 'you', options: [
                { en: 'Yes, one suitcase.', tr: 'Evet, bir bavul.' },
                { en: 'No, just carry-on.', tr: 'Hayir, sadece el bagaji.' }
            ]}
        ]
    },
    {
        id: 'shopping', title: 'Alisveris', icon: '🛍️',
        lines: [
            { speaker: 'clerk', en: 'Hi! Can I help you find anything?', tr: 'Merhaba! Bir sey bulmaniza yardimci olabilir miyim?' },
            { speaker: 'you', options: [
                { en: 'I\'m looking for a jacket.', tr: 'Bir ceket ariyorum.' },
                { en: 'Just browsing, thanks.', tr: 'Sadece bakiyorum, tesekkurler.' }
            ]},
            { speaker: 'clerk', en: 'What size do you wear?', tr: 'Hangi bedeni giyiyorsunuz?' },
            { speaker: 'you', options: [
                { en: 'Medium, please.', tr: 'Medium, lutfen.' },
                { en: 'I\'m not sure. Can I try it on?', tr: 'Emin degilim. Deneyebilir miyim?' }
            ]},
            { speaker: 'clerk', en: 'The fitting room is over there. How was it?', tr: 'Giyinme kabini orada. Nasil oldu?' },
            { speaker: 'you', options: [
                { en: 'It fits perfectly! I\'ll take it.', tr: 'Mukemmel oturdu! Bunu alacagim.' },
                { en: 'Do you have this in a different color?', tr: 'Bunun farkli rengi var mi?' }
            ]}
        ]
    },
    {
        id: 'doctor', title: 'Doktor', icon: '🏥',
        lines: [
            { speaker: 'doctor', en: 'Hello, what seems to be the problem?', tr: 'Merhaba, probleminiz nedir?' },
            { speaker: 'you', options: [
                { en: 'I have a headache and a sore throat.', tr: 'Bas agrim ve bogaz agrim var.' },
                { en: 'I\'ve been feeling dizzy lately.', tr: 'Son zamanlarda bas donmesi hissediyorum.' }
            ]},
            { speaker: 'doctor', en: 'How long have you been feeling this way?', tr: 'Ne zamandir boyle hissediyorsunuz?' },
            { speaker: 'you', options: [
                { en: 'For about three days.', tr: 'Yaklasik uc gundur.' },
                { en: 'Since yesterday morning.', tr: 'Dun sabahtan beri.' }
            ]},
            { speaker: 'doctor', en: 'I\'ll prescribe some medicine. Take it twice a day.', tr: 'Ilac yazacagim. Gunde iki kez alin.' },
            { speaker: 'you', options: [
                { en: 'Thank you, doctor.', tr: 'Tesekkur ederim, doktor.' },
                { en: 'Should I come back for a check-up?', tr: 'Kontrol icin tekrar gelmeli miyim?' }
            ]}
        ]
    },
    {
        id: 'directions', title: 'Yol Tarifi', icon: '🗺️',
        lines: [
            { speaker: 'stranger', en: 'Excuse me, could you help me?', tr: 'Afedersiniz, bana yardim edebilir misiniz?' },
            { speaker: 'you', options: [
                { en: 'Of course! What are you looking for?', tr: 'Tabii! Ne ariyorsunuz?' },
                { en: 'Sure, how can I help?', tr: 'Tabii, nasil yardimci olabilirim?' }
            ]},
            { speaker: 'stranger', en: 'How do I get to the train station?', tr: 'Tren istasyonuna nasil gidebilirim?' },
            { speaker: 'you', options: [
                { en: 'Go straight and turn left at the traffic lights.', tr: 'Duz gidin ve trafik isiginda sola donun.' },
                { en: 'It\'s about a 10-minute walk from here.', tr: 'Buradan yaklasik 10 dakikalik yuruyus mesafesinde.' }
            ]},
            { speaker: 'stranger', en: 'Thank you so much!', tr: 'Cok tesekkur ederim!' },
            { speaker: 'you', options: [
                { en: 'You\'re welcome! Have a nice day.', tr: 'Rica ederim! Iyi gunler.' },
                { en: 'No problem! Good luck.', tr: 'Sorun degil! Iyi sanslar.' }
            ]}
        ]
    }
];

let currentScenario = null;
let currentLineIndex = 0;
let dialogueHistory = [];

export function cleanupDailyDialogue() { /* no timers */ }

export function initDailyDialogue() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:650px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="dd-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Gunluk Diyalog</h2>
                <span></span>
            </div>
            <div id="dd-area"></div>
        </div>
    `;
    document.getElementById('dd-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    showScenarioList();
}

function showScenarioList() {
    const area = document.getElementById('dd-area');
    area.innerHTML = `
        <p style="color:var(--text-light);margin-bottom:1rem;">Bir senaryo secin ve diyalog pratiqi yapin:</p>
        <div class="dashboard-grid">
            ${SCENARIOS.map(s => `
                <div class="card" data-scenario="${s.id}" style="cursor:pointer;">
                    <div class="card-icon">${s.icon}</div>
                    <h3>${s.title}</h3>
                </div>
            `).join('')}
        </div>
    `;
    area.querySelectorAll('[data-scenario]').forEach(card => {
        card.addEventListener('click', () => {
            currentScenario = SCENARIOS.find(s => s.id === card.dataset.scenario);
            currentLineIndex = 0;
            dialogueHistory = [];
            startDialogue();
        });
    });
}

function startDialogue() {
    renderDialogue();
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        utter.rate = 0.85;
        speechSynthesis.speak(utter);
    }
}

function renderDialogue() {
    const area = document.getElementById('dd-area');
    const line = currentScenario.lines[currentLineIndex];

    const historyHTML = dialogueHistory.map(h => {
        const isYou = h.speaker === 'you';
        return `
            <div class="chat-bubble ${isYou ? 'chat-bubble-right' : 'chat-bubble-left'}">
                <div class="chat-speaker">${isYou ? 'Sen' : currentScenario.title}</div>
                <div class="chat-text">${h.en}</div>
                <div class="chat-translation">${h.tr}</div>
            </div>
        `;
    }).join('');

    let currentHTML = '';
    if (!line) {
        currentHTML = `
            <div style="text-align:center;padding:1.5rem;background:var(--card-bg);border-radius:var(--border-radius);box-shadow:var(--shadow);margin-top:1rem;">
                <h3>Diyalog Tamamlandi!</h3>
                <p style="color:var(--text-light);">Harika pratik yaptiniz!</p>
                <div style="margin-top:1rem;display:flex;gap:0.5rem;justify-content:center;">
                    <button id="dd-replay" class="btn secondary">Tekrar</button>
                    <button id="dd-list" class="btn">Diger Senaryolar</button>
                </div>
            </div>
        `;
    } else if (line.speaker === 'you') {
        currentHTML = `
            <div style="margin-top:1rem;">
                <p style="font-weight:600;margin-bottom:0.5rem;">Cevaninizi secin:</p>
                <div style="display:flex;flex-direction:column;gap:0.5rem;">
                    ${line.options.map((opt, i) => `
                        <button class="dd-option btn" data-idx="${i}" style="text-align:left;padding:0.75rem 1rem;">
                            ${opt.en}
                            <br><span style="font-size:0.8rem;opacity:0.7;">${opt.tr}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        speakText(line.en);
        currentHTML = `
            <div class="chat-bubble chat-bubble-left" style="margin-top:1rem;">
                <div class="chat-speaker">${currentScenario.title}</div>
                <div class="chat-text">${line.en}</div>
                <div class="chat-translation">${line.tr}</div>
                <button class="tts-btn dd-speak" style="margin-top:0.5rem;">🔊</button>
            </div>
            <div style="text-align:center;margin-top:0.75rem;">
                <button id="dd-continue" class="btn small">Devam Et</button>
            </div>
        `;
    }

    area.innerHTML = `
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
            <span style="font-size:1.5rem;">${currentScenario.icon}</span>
            <h3 style="margin:0;">${currentScenario.title}</h3>
        </div>
        <div class="chat-container">${historyHTML}</div>
        ${currentHTML}
    `;

    // Event listeners
    area.querySelectorAll('.dd-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const opt = line.options[parseInt(btn.dataset.idx)];
            dialogueHistory.push({ speaker: 'you', en: opt.en, tr: opt.tr });
            speakText(opt.en);
            window.progressManager?.addXP?.(5);
            currentLineIndex++;
            renderDialogue();
        });
    });

    const continueBtn = document.getElementById('dd-continue');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            dialogueHistory.push({ speaker: line.speaker, en: line.en, tr: line.tr });
            currentLineIndex++;
            renderDialogue();
        });
    }

    area.querySelectorAll('.dd-speak').forEach(btn => {
        btn.addEventListener('click', () => speakText(line.en));
    });

    const replayBtn = document.getElementById('dd-replay');
    if (replayBtn) {
        replayBtn.addEventListener('click', () => {
            currentLineIndex = 0;
            dialogueHistory = [];
            window.progressManager?.addXP?.(10);
            startDialogue();
        });
    }

    const listBtn = document.getElementById('dd-list');
    if (listBtn) {
        listBtn.addEventListener('click', showScenarioList);
    }
}

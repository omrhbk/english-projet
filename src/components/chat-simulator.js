// Chat Simulator Module — WhatsApp tarzi sohbet simulasyonu
import { showToast } from '../features/toast.js';

const CHAT_SCENARIOS = [
    {
        id: 'friend-meetup', title: 'Arkadasla Bulusma', icon: '👋',
        contact: 'Alex',
        messages: [
            { from: 'alex', text: 'Hey! Are you free this weekend? 😊', tr: 'Hey! Bu hafta sonu musait misin?' },
            { from: 'you', choices: [
                { text: 'Yes! What do you have in mind?', tr: 'Evet! Aklinda ne var?', next: 'plan' },
                { text: 'Sorry, I\'m busy on Saturday.', tr: 'Uzgunum, cumartesi mesgulum.', next: 'busy' }
            ]},
            { id: 'plan', from: 'alex', text: 'How about going to the cinema? There\'s a new movie out.', tr: 'Sinemaya gitmeye ne dersin? Yeni bir film cikti.' },
            { id: 'plan', from: 'you', choices: [
                { text: 'Sounds great! What time?', tr: 'Harika! Saat kacta?', next: 'time' },
                { text: 'I\'d prefer to go to a cafe instead.', tr: 'Onun yerine kafeye gitmeyi tercih ederim.', next: 'cafe' }
            ]},
            { id: 'busy', from: 'alex', text: 'No worries! How about Sunday then?', tr: 'Sorun degil! Pazar ne dersin?' },
            { id: 'busy', from: 'you', choices: [
                { text: 'Sunday works for me!', tr: 'Pazar bana uyar!', next: 'time' },
                { text: 'Maybe next week?', tr: 'Belki gelecek hafta?', next: 'end' }
            ]},
            { id: 'time', from: 'alex', text: 'Let\'s meet at 3 PM at the mall. See you there! 🎬', tr: 'Saat 3\'te AVM\'de bulusaliim. Orada gorusuruz!' },
            { id: 'time', from: 'you', choices: [
                { text: 'Perfect! See you then! 👍', tr: 'Mukemmel! O zaman gorusuruz!', next: 'end' },
                { text: 'Can we make it 4 PM instead?', tr: 'Saat 4 yapabilir miyiz?', next: 'end' }
            ]},
            { id: 'cafe', from: 'alex', text: 'Sure! I know a great place. I\'ll send you the location.', tr: 'Tabii! Harika bir yer biliyorum. Konumu gonderirim.' },
            { id: 'cafe', from: 'you', choices: [
                { text: 'Awesome, can\'t wait!', tr: 'Harika, sabırsızlanıyorum!', next: 'end' }
            ]},
            { id: 'end', from: 'alex', text: 'Great! Talk to you later! 😄', tr: 'Harika! Sonra konusuruz!' }
        ]
    },
    {
        id: 'job-inquiry', title: 'Is Basvurusu', icon: '💼',
        contact: 'HR Manager',
        messages: [
            { from: 'hr', text: 'Good morning! Thank you for your application. Are you available for an interview?', tr: 'Gunaydin! Basvurunuz icin tesekkurler. Mulakat icin musait misiniz?' },
            { from: 'you', choices: [
                { text: 'Yes, I am available anytime this week.', tr: 'Evet, bu hafta herhangi bir zaman muesaitim.', next: 'when' },
                { text: 'Could we schedule it for next week?', tr: 'Gelecek haftaya ayarlayabilir miyiz?', next: 'when' }
            ]},
            { id: 'when', from: 'hr', text: 'How about Wednesday at 10 AM? It will be a video call.', tr: 'Carsamba saat 10\'a ne dersiniz? Video gorusme olacak.' },
            { id: 'when', from: 'you', choices: [
                { text: 'That works perfectly. I\'ll be ready.', tr: 'Mukemmel uyuyor. Hazir olacagim.', next: 'confirm' },
                { text: 'Is there another time slot available?', tr: 'Baska bir zaman dilimi var mi?', next: 'confirm' }
            ]},
            { id: 'confirm', from: 'hr', text: 'I\'ll send you the meeting link by email. Good luck!', tr: 'Toplanti linkini e-postayla gonderirim. Iyi sanslar!' },
            { id: 'confirm', from: 'you', choices: [
                { text: 'Thank you very much! I look forward to it.', tr: 'Cok tesekkur ederim! Sabırsızlanıyorum.', next: 'end' }
            ]},
            { id: 'end', from: 'hr', text: 'You\'re welcome. Have a great day! 👋', tr: 'Rica ederim. Iyi gunler!' }
        ]
    },
    {
        id: 'neighbor', title: 'Komsuyla Sohbet', icon: '🏠',
        contact: 'Emma',
        messages: [
            { from: 'emma', text: 'Hi! I just moved in next door. I\'m Emma.', tr: 'Merhaba! Yan taraftaki daireye yeni tasindiim. Ben Emma.' },
            { from: 'you', choices: [
                { text: 'Welcome to the neighborhood! I\'m happy to meet you.', tr: 'Mahalleye hosgeldin! Tanistigima memnunum.', next: 'intro' },
                { text: 'Hi Emma! Nice to meet you. Let me know if you need anything.', tr: 'Merhaba Emma! Tanistigima memnunum. Bir seye ihtiyacin olursa haber ver.', next: 'intro' }
            ]},
            { id: 'intro', from: 'emma', text: 'Thanks! Is there a good supermarket nearby?', tr: 'Tesekkurler! Yakinlarda iyi bir supermarket var mi?' },
            { id: 'intro', from: 'you', choices: [
                { text: 'Yes, there\'s one just around the corner.', tr: 'Evet, hemen kosede bir tane var.', next: 'end' },
                { text: 'The closest one is about a 5-minute walk.', tr: 'En yakin olan yaklasik 5 dakikalik yuruyus mesafesinde.', next: 'end' }
            ]},
            { id: 'end', from: 'emma', text: 'That\'s great! Thanks for the help! 😊', tr: 'Harika! Yardimin icin tesekkurler!' }
        ]
    }
];

let currentChat = null;
let chatHistory = [];
let currentNode = null;

export function cleanupChatSimulator() { /* no timers */ }

export function initChatSimulator() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:500px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="cs-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Sohbet Simulatoru</h2>
                <span></span>
            </div>
            <div id="cs-area"></div>
        </div>
    `;
    document.getElementById('cs-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    showChatList();
}

function showChatList() {
    const area = document.getElementById('cs-area');
    area.innerHTML = `
        <p style="color:var(--text-light);margin-bottom:1rem;">Bir sohbet senaryosu secin:</p>
        ${CHAT_SCENARIOS.map(s => `
            <div class="card" data-chat="${s.id}" style="cursor:pointer;margin-bottom:0.75rem;flex-direction:row;gap:1rem;padding:1rem;">
                <span style="font-size:2rem;">${s.icon}</span>
                <div><h3 style="margin:0;font-size:1rem;">${s.title}</h3><p style="margin:0;color:var(--text-light);font-size:0.85rem;">${s.contact}</p></div>
            </div>
        `).join('')}
    `;
    area.querySelectorAll('[data-chat]').forEach(card => {
        card.addEventListener('click', () => {
            currentChat = CHAT_SCENARIOS.find(s => s.id === card.dataset.chat);
            chatHistory = [];
            currentNode = null;
            startChat();
        });
    });
}

function startChat() {
    processMessages(null);
}

function processMessages(afterId) {
    const msgs = currentChat.messages;
    let found = afterId === null;

    for (const msg of msgs) {
        if (!found) {
            if (msg.id === undefined && afterId === null) found = true;
            else if (msg.id === afterId) found = true;
            else continue;
        }
        if (found && msg.id !== undefined && msg.id !== afterId) continue;

        if (msg.choices) {
            currentNode = msg;
            renderChat();
            return;
        } else {
            chatHistory.push({ from: msg.from, text: msg.text, tr: msg.tr });
        }
    }

    // End of chat
    currentNode = null;
    renderChat();
}

function renderChat() {
    const area = document.getElementById('cs-area');

    const headerHTML = `
        <div class="chat-sim-header">
            <span style="font-size:1.3rem;">${currentChat.icon}</span>
            <strong>${currentChat.contact}</strong>
            <span style="color:var(--accent-color);font-size:0.8rem;">cevrimici</span>
        </div>
    `;

    const messagesHTML = chatHistory.map(m => {
        const isYou = m.from === 'you';
        return `
            <div class="chat-bubble ${isYou ? 'chat-bubble-right' : 'chat-bubble-left'}">
                <div class="chat-text">${m.text}</div>
                <div class="chat-translation">${m.tr}</div>
            </div>
        `;
    }).join('');

    let choicesHTML = '';
    if (currentNode && currentNode.choices) {
        choicesHTML = `
            <div style="margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
                ${currentNode.choices.map((c, i) => `
                    <button class="cs-choice btn" data-idx="${i}" style="text-align:left;padding:0.6rem 1rem;font-size:0.9rem;">
                        ${c.text}
                        <br><span style="font-size:0.75rem;opacity:0.7;">${c.tr}</span>
                    </button>
                `).join('')}
            </div>
        `;
    } else if (!currentNode) {
        choicesHTML = `
            <div style="text-align:center;padding:1rem;margin-top:0.75rem;">
                <p style="color:var(--accent-color);font-weight:600;">Sohbet tamamlandi!</p>
                <div style="display:flex;gap:0.5rem;justify-content:center;margin-top:0.75rem;">
                    <button id="cs-replay" class="btn secondary small">Tekrar</button>
                    <button id="cs-list" class="btn small">Diger Sohbetler</button>
                </div>
            </div>
        `;
    }

    area.innerHTML = `
        ${headerHTML}
        <div class="chat-sim-messages">${messagesHTML}</div>
        ${choicesHTML}
    `;

    // Scroll to bottom
    const msgContainer = area.querySelector('.chat-sim-messages');
    if (msgContainer) msgContainer.scrollTop = msgContainer.scrollHeight;

    // Choice handlers
    area.querySelectorAll('.cs-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            const choice = currentNode.choices[parseInt(btn.dataset.idx)];
            chatHistory.push({ from: 'you', text: choice.text, tr: choice.tr });
            window.progressManager?.addXP?.(5);
            const nextId = choice.next;
            processMessages(nextId);
        });
    });

    document.getElementById('cs-replay')?.addEventListener('click', () => {
        chatHistory = [];
        currentNode = null;
        window.progressManager?.addXP?.(10);
        startChat();
    });
    document.getElementById('cs-list')?.addEventListener('click', showChatList);
}

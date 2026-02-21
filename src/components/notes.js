// Notes Module — Kisisel not defteri, CRUD + kategori filtreleme
import { showToast } from '../features/toast.js';

const STORAGE_KEY = 'user_notes';
const CATEGORIES = ['Genel', 'Gramer', 'Kelime', 'Deyimler', 'Pratik'];

function getNotes() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
}

function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

let activeFilter = null;
let editingId = null;

export function cleanupNotes() { /* no timers */ }

export function initNotes() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:700px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="nt-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Notlarim</h2>
                <button id="nt-add" class="btn small">+ Yeni Not</button>
            </div>
            <div id="nt-filter" style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;"></div>
            <div id="nt-area"></div>
            <div id="nt-editor" style="display:none;"></div>
        </div>
    `;
    document.getElementById('nt-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    document.getElementById('nt-add').addEventListener('click', () => openEditor(null));
    activeFilter = null;
    editingId = null;
    renderFilters();
    renderNotes();
}

function renderFilters() {
    const filterEl = document.getElementById('nt-filter');
    filterEl.innerHTML = `
        <button class="cefr-filter-btn ${!activeFilter ? 'active' : ''}" data-cat="">Tumü</button>
        ${CATEGORIES.map(c => `<button class="cefr-filter-btn ${activeFilter === c ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('')}
    `;
    filterEl.querySelectorAll('.cefr-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeFilter = btn.dataset.cat || null;
            renderFilters();
            renderNotes();
        });
    });
}

function renderNotes() {
    const area = document.getElementById('nt-area');
    let notes = getNotes();
    if (activeFilter) {
        notes = notes.filter(n => n.category === activeFilter);
    }

    if (notes.length === 0) {
        area.innerHTML = `
            <div style="text-align:center;padding:3rem;color:var(--text-light);">
                <div style="font-size:3rem;margin-bottom:1rem;">📝</div>
                <p>Henuz not eklenmemis.</p>
                <p style="font-size:0.85rem;margin-top:0.5rem;">Yukardaki "Yeni Not" butonuyla baslayin.</p>
            </div>
        `;
        return;
    }

    area.innerHTML = notes.sort((a, b) => new Date(b.date) - new Date(a.date)).map(n => `
        <div class="note-card" style="background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);margin-bottom:0.75rem;border-left:4px solid var(--primary-color);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                <div>
                    <strong style="font-size:1rem;">${n.title}</strong>
                    <span class="tag" style="margin-left:0.5rem;font-size:0.7rem;">${n.category}</span>
                </div>
                <div style="display:flex;gap:0.5rem;">
                    <button class="nt-edit btn-icon" data-id="${n.id}" title="Duzenle" style="font-size:0.9rem;">✏️</button>
                    <button class="nt-delete btn-icon" data-id="${n.id}" title="Sil" style="font-size:0.9rem;">🗑️</button>
                </div>
            </div>
            <p style="color:var(--text-color);white-space:pre-wrap;font-size:0.9rem;line-height:1.6;">${n.content}</p>
            <p style="color:var(--text-light);font-size:0.75rem;margin-top:0.5rem;">${new Date(n.date).toLocaleDateString('tr-TR')} ${new Date(n.date).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
    `).join('');

    area.querySelectorAll('.nt-edit').forEach(btn => {
        btn.addEventListener('click', () => openEditor(parseInt(btn.dataset.id)));
    });

    area.querySelectorAll('.nt-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const notes = getNotes().filter(n => n.id !== parseInt(btn.dataset.id));
            saveNotes(notes);
            showToast('Not silindi.', 'info');
            renderNotes();
        });
    });
}

function openEditor(noteId) {
    const editor = document.getElementById('nt-editor');
    const notes = getNotes();
    const note = noteId ? notes.find(n => n.id === noteId) : null;
    editingId = noteId;

    editor.style.display = 'block';
    editor.innerHTML = `
        <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1.5rem;box-shadow:var(--shadow);margin-bottom:1rem;border:2px solid var(--primary-color);">
            <h3 style="margin-bottom:1rem;">${note ? 'Notu Duzenle' : 'Yeni Not'}</h3>
            <div style="margin-bottom:0.75rem;">
                <label style="font-size:0.85rem;font-weight:600;">Baslik</label>
                <input id="nt-title" class="ex-input" type="text" value="${note ? note.title : ''}" placeholder="Not basligi..." style="width:100%;display:block;margin-top:0.25rem;" />
            </div>
            <div style="margin-bottom:0.75rem;">
                <label style="font-size:0.85rem;font-weight:600;">Kategori</label>
                <select id="nt-category" class="search-filter" style="width:100%;display:block;margin-top:0.25rem;">
                    ${CATEGORIES.map(c => `<option value="${c}" ${note && note.category === c ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
            </div>
            <div style="margin-bottom:0.75rem;">
                <label style="font-size:0.85rem;font-weight:600;">Icerik</label>
                <textarea id="nt-content" class="ex-input full-width" placeholder="Notunuzu yazin..." style="min-height:120px;margin-top:0.25rem;">${note ? note.content : ''}</textarea>
            </div>
            <div style="display:flex;gap:0.5rem;justify-content:flex-end;">
                <button id="nt-cancel" class="btn secondary small">Iptal</button>
                <button id="nt-save" class="btn small">Kaydet</button>
            </div>
        </div>
    `;

    document.getElementById('nt-cancel').addEventListener('click', () => {
        editor.style.display = 'none';
        editor.innerHTML = '';
    });

    document.getElementById('nt-save').addEventListener('click', () => {
        const title = document.getElementById('nt-title').value.trim();
        const content = document.getElementById('nt-content').value.trim();
        const category = document.getElementById('nt-category').value;

        if (!title || !content) {
            showToast('Baslik ve icerik gerekli!', 'warning');
            return;
        }

        const notes = getNotes();
        if (editingId) {
            const note = notes.find(n => n.id === editingId);
            if (note) {
                note.title = title;
                note.content = content;
                note.category = category;
                note.date = new Date().toISOString();
            }
        } else {
            notes.push({
                id: Date.now(),
                title,
                content,
                category,
                date: new Date().toISOString()
            });
        }

        saveNotes(notes);
        editor.style.display = 'none';
        editor.innerHTML = '';
        showToast(editingId ? 'Not guncellendi!' : 'Not eklendi!', 'success');
        renderNotes();
    });
}

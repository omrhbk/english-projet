/**
 * Auth Modülü — JWT + Email/Şifre Giriş Sistemi
 * Token localStorage'da saklanır.
 * Her API isteğine Authorization: Bearer <token> header eklenir.
 */

const AUTH_KEY = 'auth_token';
const USER_KEY = 'auth_user';
const API_BASE = '';

// ── Token Yönetimi ───────────────────────────────────────────────────────────

export function getToken() {
    return localStorage.getItem(AUTH_KEY);
}

export function getUser() {
    try {
        return JSON.parse(localStorage.getItem(USER_KEY) || 'null');
    } catch {
        return null;
    }
}

export function isLoggedIn() {
    const token = getToken();
    if (!token) return false;
    // JWT'nin expire olup olmadığını kontrol et (payload base64 decode)
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 > Date.now();
    } catch {
        return false;
    }
}

function saveAuth(token, user) {
    localStorage.setItem(AUTH_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    // progress.js'in user_id'si ile senkronize et
    localStorage.setItem('user_id', user.userId);
}

export function logout() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);
    showAuthModal();
}

// ── API İstekleri ────────────────────────────────────────────────────────────

export async function apiRequest(method, path, body = null) {
    const headers = { 'Content-Type': 'application/json' };
    const token = getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const opts = { method, headers };
    if (body) opts.body = JSON.stringify(body);

    const res = await fetch(`${API_BASE}${path}`, opts);
    return res.json();
}

async function register(email, password, displayName) {
    return apiRequest('POST', '/api/auth/register', { email, password, displayName });
}

async function login(email, password) {
    return apiRequest('POST', '/api/auth/login', { email, password });
}

// ── Auth Modal UI ────────────────────────────────────────────────────────────

export function showAuthModal(defaultTab = 'login') {
    // Varsa eski modalı kaldır
    const existing = document.getElementById('auth-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'auth-modal';
    modal.className = 'auth-modal-overlay';
    modal.innerHTML = `
        <div class="auth-modal">
            <div class="auth-modal-header">
                <h2>🇬🇧 English Master</h2>
                <p>İlerlemenizi kaydetmek için giriş yapın</p>
            </div>

            <div class="auth-tabs">
                <button class="auth-tab ${defaultTab === 'login' ? 'active' : ''}" data-tab="login">Giriş Yap</button>
                <button class="auth-tab ${defaultTab === 'register' ? 'active' : ''}" data-tab="register">Kayıt Ol</button>
            </div>

            <!-- Giriş Formu -->
            <form id="login-form" class="auth-form ${defaultTab === 'login' ? '' : 'hidden'}">
                <div class="auth-field">
                    <label>Email</label>
                    <input type="email" id="login-email" placeholder="ornek@mail.com" required autocomplete="email"/>
                </div>
                <div class="auth-field">
                    <label>Şifre</label>
                    <input type="password" id="login-password" placeholder="Şifreniz" required autocomplete="current-password"/>
                </div>
                <p id="login-error" class="auth-error hidden"></p>
                <button type="submit" class="btn auth-submit-btn">Giriş Yap</button>
            </form>

            <!-- Kayıt Formu -->
            <form id="register-form" class="auth-form ${defaultTab === 'register' ? '' : 'hidden'}">
                <div class="auth-field">
                    <label>İsim (opsiyonel)</label>
                    <input type="text" id="reg-name" placeholder="Adınız"/>
                </div>
                <div class="auth-field">
                    <label>Email</label>
                    <input type="email" id="reg-email" placeholder="ornek@mail.com" required autocomplete="email"/>
                </div>
                <div class="auth-field">
                    <label>Şifre (min. 8 karakter)</label>
                    <input type="password" id="reg-password" placeholder="Şifreniz" required autocomplete="new-password"/>
                </div>
                <p id="register-error" class="auth-error hidden"></p>
                <button type="submit" class="btn auth-submit-btn">Kayıt Ol</button>
            </form>

            <div class="auth-divider">
                <span>veya</span>
            </div>
            <button id="guest-btn" class="btn secondary auth-guest-btn">Misafir Olarak Devam Et</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Tab geçişi
    modal.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            modal.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            modal.querySelectorAll('.auth-form').forEach(f => f.classList.add('hidden'));
            document.getElementById(`${tab.dataset.tab}-form`).classList.remove('hidden');
        });
    });

    // Giriş formu
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const errEl = document.getElementById('login-error');
        const btn = e.target.querySelector('button[type=submit]');

        btn.disabled = true;
        btn.textContent = 'Giriş yapılıyor...';
        errEl.classList.add('hidden');

        try {
            const res = await login(email, password);
            if (res.success) {
                saveAuth(res.token, { userId: res.userId, email: res.email, displayName: res.displayName });
                modal.remove();
                showUserBadge(res.displayName);
                window.location.reload();
            } else {
                errEl.textContent = res.error || 'Giriş başarısız';
                errEl.classList.remove('hidden');
            }
        } catch {
            errEl.textContent = 'Sunucuya bağlanılamadı. Misafir modu kullanılıyor.';
            errEl.classList.remove('hidden');
        } finally {
            btn.disabled = false;
            btn.textContent = 'Giriş Yap';
        }
    });

    // Kayıt formu
    document.getElementById('register-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value;
        const displayName = document.getElementById('reg-name').value.trim();
        const errEl = document.getElementById('register-error');
        const btn = e.target.querySelector('button[type=submit]');

        btn.disabled = true;
        btn.textContent = 'Kaydediliyor...';
        errEl.classList.add('hidden');

        try {
            const res = await register(email, password, displayName);
            if (res.success) {
                saveAuth(res.token, { userId: res.userId, email: res.email, displayName: res.displayName });
                modal.remove();
                showUserBadge(res.displayName);
                window.location.reload();
            } else {
                errEl.textContent = res.error || 'Kayıt başarısız';
                errEl.classList.remove('hidden');
            }
        } catch {
            errEl.textContent = 'Sunucuya bağlanılamadı. Misafir modu kullanılıyor.';
            errEl.classList.remove('hidden');
        } finally {
            btn.disabled = false;
            btn.textContent = 'Kayıt Ol';
        }
    });

    // Misafir butonu
    document.getElementById('guest-btn').addEventListener('click', () => {
        modal.remove();
    });
}

/** Navbar'a kullanıcı adı badge'i ekle */
export function showUserBadge(displayName) {
    const navControls = document.querySelector('.nav-controls');
    if (!navControls) return;

    const existing = document.getElementById('user-badge');
    if (existing) existing.remove();

    const badge = document.createElement('div');
    badge.id = 'user-badge';
    badge.className = 'user-badge';
    badge.innerHTML = `
        <span class="user-badge-name">👤 ${displayName || 'Kullanıcı'}</span>
        <button id="logout-btn" class="btn-icon" title="Çıkış Yap">🚪</button>
    `;
    navControls.insertBefore(badge, navControls.firstChild);

    document.getElementById('logout-btn').addEventListener('click', () => {
        if (confirm('Çıkış yapmak istediğinizden emin misiniz?')) logout();
    });
}

/** Uygulama başlangıcında auth durumunu kontrol et */
export function initAuth() {
    if (isLoggedIn()) {
        const user = getUser();
        if (user) showUserBadge(user.displayName);
    } else {
        showAuthModal();
    }
}

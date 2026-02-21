// Utility Functions — Global yardımcı fonksiyonlar

// ─── Alphabet Validation ───────────────────────────────────
const TURKISH_CHARS = /[çÇşŞğĞıİöÖüÜ]/;
const ENGLISH_ALLOWED = /^[a-zA-Z0-9\s\-'.,?!";:()\[\]]*$/;

/**
 * Validates that input contains only English-allowed characters.
 * Returns { valid: boolean, message: string }
 */
export function validateEnglishInput(value) {
    if (TURKISH_CHARS.test(value)) {
        return { valid: false, message: 'Türkçe karakter kullanılamaz (ç, ş, ğ, ı, ö, ü)' };
    }
    if (!ENGLISH_ALLOWED.test(value)) {
        return { valid: false, message: 'Sadece İngilizce harfler kullanılabilir' };
    }
    return { valid: true, message: '' };
}

/**
 * Attaches real-time English validation to an input element.
 * Shows inline warning on Turkish/invalid characters.
 */
export function attachEnglishValidation(inputEl) {
    if (!inputEl) return;

    // Create warning element
    let warningEl = inputEl.parentElement.querySelector('.input-warning');
    if (!warningEl) {
        warningEl = document.createElement('span');
        warningEl.className = 'input-warning';
        inputEl.parentElement.style.position = 'relative';
        inputEl.insertAdjacentElement('afterend', warningEl);
    }

    inputEl.addEventListener('input', () => {
        const result = validateEnglishInput(inputEl.value);
        if (!result.valid) {
            inputEl.classList.add('input-invalid');
            warningEl.textContent = result.message;
            warningEl.style.display = 'block';
        } else {
            inputEl.classList.remove('input-invalid');
            warningEl.textContent = '';
            warningEl.style.display = 'none';
        }
    });
}

// ─── Type Badge System ─────────────────────────────────────
const TYPE_CONFIG = {
    noun:      { label: 'n.',   color: '#4a90e2' },
    verb:      { label: 'v.',   color: '#e24a4a' },
    adjective: { label: 'adj.', color: '#4aad5b' },
    adverb:    { label: 'adv.', color: '#9b59b6' },
    other:     { label: 'oth.', color: '#e2a74a' }
};

/**
 * Returns short label for a word type (e.g. "noun" → "n.")
 */
export function getTypeLabel(type) {
    return (TYPE_CONFIG[type] || TYPE_CONFIG.other).label;
}

/**
 * Returns HTML badge string for a word type with color coding
 */
export function getTypeBadgeHTML(type) {
    const c = TYPE_CONFIG[type] || TYPE_CONFIG.other;
    return `<span class="type-badge" style="background:${c.color};color:#fff;padding:2px 8px;border-radius:12px;font-size:0.7rem;font-weight:600;margin-left:6px;vertical-align:middle;">${c.label}</span>`;
}

/**
 * Returns CSS class name for a word type
 */
export function getTypeCSSClass(type) {
    return `type-${type || 'other'}`;
}

// ─── Fisher-Yates Shuffle ──────────────────────────────────
/**
 * Shuffles array in-place using Fisher-Yates algorithm (unbiased).
 * Returns the same array reference.
 */
export function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ─── CEFR Badge ────────────────────────────────────────────
const CEFR_CONFIG = {
    A1: { emoji: '🌱', color: '#27ae60' },
    A2: { emoji: '🌿', color: '#2ecc71' },
    B1: { emoji: '🌟', color: '#f39c12' },
    B2: { emoji: '🔥', color: '#e74c3c' },
    C1: { emoji: '💎', color: '#8e44ad' },
    C2: { emoji: '👑', color: '#2c3e50' }
};

/**
 * Returns HTML badge for CEFR level
 */
export function getCEFRBadgeHTML(level) {
    const c = CEFR_CONFIG[level] || { emoji: '', color: '#999' };
    return `<span class="cefr-badge" style="background:${c.color};color:#fff;padding:2px 8px;border-radius:12px;font-size:0.7rem;font-weight:600;">${level} ${c.emoji}</span>`;
}

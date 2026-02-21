// Toast Notification System — alert() yerine kullanılacak in-app bildirim

let toastContainer = null;

function ensureContainer() {
    if (toastContainer && document.body.contains(toastContainer)) return toastContainer;

    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        pointer-events: none;
    `;
    document.body.appendChild(toastContainer);
    return toastContainer;
}

/**
 * Shows a toast notification at the top of the page.
 * @param {string} message - The message to display
 * @param {'success'|'error'|'warning'|'info'|'levelup'} type - Toast type
 * @param {number} duration - Duration in ms (default 4000)
 */
export function showToast(message, type = 'info', duration = 4000) {
    const container = ensureContainer();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️',
        levelup: '🎉'
    };

    const colors = {
        success: { bg: '#27ae60', border: '#2ecc71' },
        error:   { bg: '#e74c3c', border: '#c0392b' },
        warning: { bg: '#f39c12', border: '#e67e22' },
        info:    { bg: '#3498db', border: '#2980b9' },
        levelup: { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', border: '#f5576c' }
    };

    const c = colors[type] || colors.info;
    const isGradient = c.bg.includes('gradient');

    toast.style.cssText = `
        ${isGradient ? `background: ${c.bg}` : `background: ${c.bg}`};
        color: #fff;
        padding: 14px 24px;
        border-radius: 12px;
        font-size: 0.95rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        border-left: 4px solid ${c.border};
        pointer-events: auto;
        cursor: pointer;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: 90vw;
        text-align: center;
    `;

    toast.innerHTML = `${icons[type] || ''} ${message}`;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });

    // Click to dismiss
    toast.addEventListener('click', () => dismissToast(toast));

    // Auto dismiss
    setTimeout(() => dismissToast(toast), duration);
}

function dismissToast(toast) {
    if (!toast || !toast.parentElement) return;
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 400);
}

// Make globally available
window.showToast = showToast;

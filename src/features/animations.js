// Animation Effects Module

export function showXPGain(amount, targetElement = null) {
    const xpElement = document.createElement('div');
    xpElement.className = 'floating-xp';
    xpElement.textContent = `+${amount} XP`;
    
    // Position near the target element or center screen
    if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        xpElement.style.left = `${rect.left + rect.width / 2}px`;
        xpElement.style.top = `${rect.top}px`;
    } else {
        xpElement.style.left = '50%';
        xpElement.style.top = '40%';
    }
    
    document.body.appendChild(xpElement);
    
    // Animate and remove
    setTimeout(() => xpElement.classList.add('animate'), 100);
    setTimeout(() => xpElement.remove(), 2000);
}

export function celebrateLevelUp() {
    // Create confetti-like effect
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createConfetti(), i * 50);
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.textContent = ['🎉', '⭐', '🎊', '✨', '🏆'][Math.floor(Math.random() * 5)];
    
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 4000);
}

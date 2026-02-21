document.getElementById('year').textContent = new Date().getFullYear();

const langBtns = document.querySelectorAll('.lang-btn');
const translations = {
    en: {
        badge: 'COMING SOON',
        description: 'We are working on a professional communication platform designed for modern communication. Our priority is security, stability, and high-quality performance. We will keep you informed about the progress regularly.',
        launchLabel: 'LAUNCH DATE',
        launchSubtitle: 'Official launch planned for 2026. Subject to change.',
        discordSubtitle: 'Join the community',
        donateTitle: 'Donate',
        donateSubtitle: 'Support the project'
    },
    pl: {
        badge: 'WKRÓTCE',
        description: 'Pracujemy nad profesjonalną platformą komunikacyjną zaprojektowaną do nowoczesnej komunikacji. Naszym priorytetem jest bezpieczeństwo, stabilność oraz wysoka jakość działania. O postępach prac będziemy informować na bieżąco.',
        launchLabel: 'DATA PREMIERY',
        launchSubtitle: 'Oficjalne uruchomienie planowane na 2026. Termin może ulec zmianie.',
        discordSubtitle: 'Dołącz do społeczności',
        donateTitle: 'Donate',
        donateSubtitle: 'Wesprzyj projekt'
    }
};

function changeLanguage(lang) {
    document.getElementById('badgeText').textContent = translations[lang].badge;
    document.getElementById('description').textContent = translations[lang].description;
    document.getElementById('launchLabel').textContent = translations[lang].launchLabel;
    document.getElementById('launchSubtitle').textContent = translations[lang].launchSubtitle;
    document.getElementById('discordSubtitle').textContent = translations[lang].discordSubtitle;
    document.getElementById('donateTitle').textContent = translations[lang].donateTitle;
    document.getElementById('donateSubtitle').textContent = translations[lang].donateSubtitle;
    
    localStorage.setItem('preferredLanguage', lang);
    
    langBtns.forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'pl'; 
    changeLanguage(savedLang);
});

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        changeLanguage(lang);
    });
});
// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    const smoothScroll = (targetId) => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        menu.classList.toggle('open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            hamburgerMenu.classList.remove('open');
            menu.classList.remove('open');

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
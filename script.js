document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu > ul > li > a');
    const worksLink = document.querySelector('.menu > ul > li > a[href="#works"]');
    const submenu = document.querySelector('.submenu');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        menu.classList.toggle('open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#works') {
                e.preventDefault();
                submenu.classList.toggle('open');
            } else {
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                hamburgerMenu.classList.remove('open');
                menu.classList.remove('open');
                submenu.classList.remove('open');

                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const submenuLinks = document.querySelectorAll('.submenu a');
    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            hamburgerMenu.classList.remove('open');
            menu.classList.remove('open');
            submenu.classList.remove('open');

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const body = document.body;

    hamburgerMenu.addEventListener('click', () => {
        fetch('menu.html')
            .then(response => response.text())
            .then(html => {
                if (!document.querySelector('.menu')) {
                    body.insertAdjacentHTML('beforeend', html);
                    const menu = document.querySelector('.menu');
                    const style = document.createElement('link');
                    style.rel = 'stylesheet';
                    style.href = 'menu.css';
                    document.head.appendChild(style);

                    setTimeout(() => {
                        menu.classList.add('open');
                    }, 10);
                } else {
                    const menu = document.querySelector('.menu');
                    menu.classList.toggle('open');
                }
            });
    });
});
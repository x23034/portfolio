document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const body = document.body;

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');  // ハンバーガーメニューの状態を切り替え
        fetch('https://x23034.github.io/portfolio/menu.html')
            .then(response => response.text())
            .then(html => {
                if (!document.querySelector('.menu')) {
                    body.insertAdjacentHTML('beforeend', html);
                    const menu = document.querySelector('.menu');
                    const style = document.createElement('link');
                    style.rel = 'stylesheet';
                    style.href = 'https://x23034.github.io/portfolio/menu.css';
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
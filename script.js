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

            // ウィンドウの高さを取得
            const windowHeight = window.innerHeight;
            // ターゲット要素の位置を取得
            const targetRect = targetSection.getBoundingClientRect();
            // ターゲット要素の高さを取得
            const targetHeight = targetRect.height;
            
            // スクロール位置を計算
            let scrollPosition;
            if (targetHeight < windowHeight) {
                // ターゲット要素が画面より小さい場合、中央に配置
                scrollPosition = targetRect.top + window.pageYOffset - (windowHeight - targetHeight) / 2;
            } else {
                // ターゲット要素が画面より大きい場合、上端を画面上部に合わせる
                scrollPosition = targetRect.top + window.pageYOffset;
            }

            // スムーズスクロールを実行
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    });
});
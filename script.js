document.addEventListener('DOMContentLoaded', function() {
    // モバイルメニュー切り替え
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }
    
    // スムーススクロール
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // モバイルメニューが開いていたら閉じる
                if (mobileMenuToggle && mobileNav) {
                    mobileMenuToggle.classList.remove('active');
                    mobileNav.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // ヘッダーの高さ分調整
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // コンタクトフォーム送信時の処理
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームのバリデーションなど
            const formData = new FormData(this);
            
            // 通常はここでAjaxを使ってサーバーにデータを送信
            // この例ではシンプルな成功メッセージを表示
            alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
            this.reset();
        });
    }
});

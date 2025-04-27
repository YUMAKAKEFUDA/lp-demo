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
    
    // チャットボット機能
    const chatButton = document.getElementById('chatButton');
    const chatPopup = document.getElementById('chatPopup');
    const closeChat = document.getElementById('closeChat');
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    
    if (chatButton && chatPopup) {
        // チャットアイコンをクリックしたらポップアップを表示
        chatButton.addEventListener('click', () => {
            chatPopup.classList.toggle('active');
        });
    }
    
    if (closeChat && chatPopup) {
        // 閉じるボタンをクリックしたらポップアップを非表示
        closeChat.addEventListener('click', () => {
            chatPopup.classList.remove('active');
        });
    }
    
    if (sendMessage && messageInput && chatMessages) {
        // メッセージ送信処理
        function sendUserMessage() {
            const message = messageInput.value.trim();
            if (!message) return;
            
            // メッセージ処理
            displayMessage(message, 'user-message');
            messageInput.value = '';
            
            // 自動返信
            setTimeout(() => {
                displayMessage('ありがとうございます。スタッフが確認次第、ご返信いたします。', 'bot-message');
            }, 1000);
        }
        
        function displayMessage(text, className) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', className);
            messageElement.textContent = text;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        // 送信ボタンクリックでメッセージ送信
        sendMessage.addEventListener('click', sendUserMessage);
        
        // Enterキーでもメッセージを送信
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendUserMessage();
            }
        });
    }
    
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

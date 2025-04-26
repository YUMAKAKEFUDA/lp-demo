// チャットボット機能
const chatBot = document.getElementById('chatBot');
const chatPopup = document.getElementById('chatPopup');
const closeChat = document.getElementById('closeChat');
const messageInput = document.getElementById('messageInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');

// チャットアイコンをクリックしたらポップアップを表示
chatBot.addEventListener('click', () => {
    chatPopup.classList.toggle('active');
});

// 閉じるボタンをクリックしたらポップアップを非表示
closeChat.addEventListener('click', () => {
    chatPopup.classList.remove('active');
});

// メッセージ送信処理
function sendUserMessage() {
    try {
        const message = messageInput.value.trim();
        if (!message) return;
        
        // メッセージ処理
        displayMessage(message, 'user-message');
        messageInput.value = '';
        
        // 自動返信
        setTimeout(() => {
            displayMessage('ありがとうございます。スタッフが確認次第、ご返信いたします。', 'bot-message');
        }, 1000);
    } catch (error) {
        console.error('メッセージ送信エラー:', error);
    }
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
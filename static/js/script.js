const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message !== '') {
        addUserMessage(message);
        userInput.value = '';
    }
});

function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('user-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

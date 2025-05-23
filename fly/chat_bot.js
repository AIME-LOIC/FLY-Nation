function toggleChat() {
  const chat = document.getElementById('chat-box');
  chat.style.display = chat.style.display === 'none' ? 'flex' : 'none';
}

function handleKey(e) {
  if (e.key === 'Enter') {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message !== '') {
      const body = document.getElementById('chat-body');
      const userMsg = document.createElement('div');
      userMsg.textContent = "You: " + message;
      body.appendChild(userMsg);

      const botMsg = document.createElement('div');
      botMsg.textContent = "Bot: " + getBotReply(message);
      botMsg.style.color = 'green';
      body.appendChild(botMsg);

      input.value = '';
      body.scrollTop = body.scrollHeight;
    }
  }
}

function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('hello')) return "Hi! How can I help you with FlyNation today?";
  if (msg.includes('book')) return "You can book your flight using the Book page!";
  return "I'm here to help! Ask me anything about flights.";
}

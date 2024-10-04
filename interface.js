document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('messages');

    const botResponses = {
        "hello": "Hello! How can I assist you today?",
        "hi": "Hi there! What can I do for you?",
        "help": "sure pls tell me the problem .Sure, I'm here to help. What do you need assistance with?",
        "price of a thing": "Our pricing details can be found on the pricing page. Do you need more specific information?",
        "call":"our technical team will call u for more inforamtion",
        "ok":"okay please attend call when we reach you ",
        "sure":"okay thank YOU", 
        "bye": "Goodbye! Have a great day!",
        "default": "I'm not sure how to respond to that. Could you please clarify?"
    };

    function validateMessage(message) {
        return message.trim().length > 0; // Ensures message is not empty or just spaces
    }

    function createMessageElement(content, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = content;
        return messageElement;
    }

    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase(); // Convert to lowercase for case-insensitive matching
        return botResponses[userMessage] || botResponses["default"];
    }

    function sendMessage() {
        const messageText = messageInput.value;

        if (validateMessage(messageText)) {
            const userMessage = createMessageElement(messageText, 'user');
            messagesContainer.appendChild(userMessage);
            messageInput.value = ''; // Clear input field

            // Simulate a response from the support bot
            setTimeout(function() {
                const botReply = getBotResponse(messageText);
                const supportMessage = createMessageElement(botReply, 'support');
                messagesContainer.appendChild(supportMessage);
                messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the latest message
            }, 1000);

            messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the latest message
        }
    }

    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});

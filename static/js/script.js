//This is running for the frontend without any api fetch
///The api fetch is down below comments
function displayText() {
    const inputText = document.getElementById('input-text').value;
    const displayArea = document.getElementById('display-area');

    if (inputText.trim() === '') {
        return; // Don't add empty messages
    }

    // Create a new message element
    const newMessageElement = document.createElement('div');
    newMessageElement.textContent = inputText;
    newMessageElement.classList.add('message', 'fade-up-text', 'user-message');

    // Clear the input field
    document.getElementById('input-text').value = '';

    // Apply fade-in animation to the new message element
    setTimeout(function () {
        newMessageElement.style.opacity = 1;
    }, 100); // 0.1-second delay for immediate fade-in

    // Append the new message element to the display area
    displayArea.appendChild(newMessageElement);

    // Remove old user messages if there are more than 2
    const userMessages = document.querySelectorAll('.user-message');
    if (userMessages.length > 1) {
        displayArea.removeChild(userMessages[0]);
    }

    // Set a default message to appear after the user sends a message
    setTimeout(function () {
        const defaultTextElement = document.createElement('div');
        defaultTextElement.textContent = "Hahaha, now you're just messing with me! 🤣 You went from 'hi' to 'hi' to random letters to 'hello'! 🤪 Are you just seeing how far you can push my AI conversational skills? 😜";
        defaultTextElement.classList.add('message', 'fade-up-text', 'other-message');
        displayArea.appendChild(defaultTextElement);

        // Remove old other messages if there are more than 2
        const otherMessages = document.querySelectorAll('.other-message');
        if (otherMessages.length > 1) {
            displayArea.removeChild(otherMessages[0]);
        }

        setTimeout(function () {
            defaultTextElement.style.opacity = 1;
        }, 100); // 0.1-second delay for immediate fade-in of default message
    }, 1000); // 1-second delay after the user sends a message
}

///////////////////////////////////////////////////
/*
function displayText() {
    const inputText = document.getElementById('input-text').value;
    const displayArea = document.getElementById('display-area');

    if (inputText.trim() === '') {
        return; // Don't add empty messages
    }

    // Create a new message element for the user's input
    
    const userMessageElement = document.createElement('div');
    userMessageElement.textContent = inputText;
    userMessageElement.classList.add('message', 'fade-up-text', 'user-message');

    // Clear the input field
    document.getElementById('input-text').value = '';

    // Apply fade-in animation to the new user message element
    setTimeout(function () {
        userMessageElement.style.opacity = 1;
    }, 100); // 0.1-second delay for immediate fade-in

    // Append the user's message element to the display area
    displayArea.appendChild(userMessageElement);

    // Remove old user messages if there are more than 2
    const userMessages = document.querySelectorAll('.user-message');
    if (userMessages.length > 1) {
        displayArea.removeChild(userMessages[0]);
    }

    // Send the user's message to the server and handle the response
    fetch('/api/endpoint', { // Replace with your server's API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
    })
    .then(response => response.json())
    .then(data => {
        // Create a new message element for the server's response
        const serverMessageElement = document.createElement('div');
        serverMessageElement.textContent = data.response; // Assuming the server returns a "response" field
        serverMessageElement.classList.add('message', 'fade-up-text', 'other-message');
        
        // Append the server's response message element to the display area
        displayArea.appendChild(serverMessageElement);

        // Remove old other messages if there are more than 2
        const otherMessages = document.querySelectorAll('.other-message');
        if (otherMessages.length > 1) {
            displayArea.removeChild(otherMessages[0]);
        }

        // Apply fade-in animation to the new server response message element
        setTimeout(function () {
            serverMessageElement.style.opacity = 1;
        }, 100); // 0.1-second delay for immediate fade-in of server response message
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors from the API request here
    });
    
}
*/

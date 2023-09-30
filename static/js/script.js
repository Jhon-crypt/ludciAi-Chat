function displayText() {

    const inputText = document.getElementById('input-text').value;

    const displayArea = document.getElementById('display-area');



    if (inputText.trim() === '') {
        return; // Don't add empty messages
    }

    // Create a new message element
    const newMessageElement = document.querySelector('.user-message');
    newMessageElement.textContent = inputText;
    newMessageElement.classList.add('fade-in','flex', 'fade-up-text', 'user-message', 'justify-end', 'py-1', 'space-y-1', 'break-words', 'rounded-[10px]', 'bg-cream-600', 'p-3', 'ml-auto', 'w-fit', 'mb-3');

    // Clear the input field
    document.getElementById('input-text').value = '';

    // Apply fade-in animation to the new message element
    setTimeout(function () {
        newMessageElement.classList.add('fade-in');
    }, 0.1); // 0.1-second delay for immediate fade-in


    // Append the new message element to the display area
    displayArea.appendChild(newMessageElement);

    // Remove old user messages if there are more than 2
    const userMessages = document.querySelectorAll('.user-message');
    if (userMessages.length > 1) {
        userMessages[0].classList.add('fade-out');

        // Listen for the animation end event
        userMessages[0].addEventListener('animationend', function () {
            displayArea.removeChild(userMessages[0]);
        });
    }

    // Set a default message to appear after the user sends a message

    setTimeout(function () {
        const defaultTextElement = document.createElement('div');


        // Function to wrap every 6 words in a <p> tag
        function wrapWordsInPTags(text, wordsPerParagraph = 2) {
            // Split the text into words
            const words = text.split(/\s+/);

            // Initialize an empty array to store paragraphs
            const paragraphs = [];

            // Loop through the words and group them into paragraphs
            for (let i = 0; i < words.length; i += wordsPerParagraph) {
                const paragraphWords = words.slice(i, i + wordsPerParagraph);
                const paragraph = `<span>${paragraphWords.join(' ')}</span> `;
                paragraphs.push(paragraph);
            }

            // Join the paragraphs and wrap them in a container element (e.g., <div>)
            const wrappedParagraphs = `<div class="py-1 mb-4 last:mb-0">${paragraphs.join('')}</div>`;

            // Count the number of <span> elements generated
            const spanCount = (wrappedParagraphs.match(/<span>/g) || []).length;

            return { wrappedHTML: wrappedParagraphs, spanCount };
        }

        // Example usage
        const inputText = "Hahaha! 😆 Now you're just being silly. 😜 I know you're capable of more than just hi! 😝 Come on, let's chat about something a bit more substantial! 😄 I promise I'll be an excellent conversationalist! 😁";
        const { wrappedHTML, spanCount } = wrapWordsInPTags(inputText);
        console.log(wrappedHTML);
        console.log(spanCount)

        // Assuming you have the spanCount value from the previous code


        // Define the CSS animation properties
        const animationDuration = '0.9s';
        const animationDelayBase = '0.2s';
        const animationTimingFunction = 'cubic-bezier(0.11, 0, 0.5, 0)';
        const animationName = 'fade-in-word';

        // Loop through each <span> and apply the CSS animation
        for (let i = 0; i < spanCount; i++) {
            const animationDelay = `${parseFloat(animationDelayBase) * i}s`;
            const cssRule = `
            span:nth-child(${i + 1}) {
                animation: ${animationName} ${animationDuration} ${animationDelay} forwards ${animationTimingFunction};
            }`;

            // Create a <style> element and append it to the <head>
            const styleElement = document.createElement('style');
            styleElement.textContent = cssRule;
            document.head.appendChild(styleElement);
        }



        defaultTextElement.innerHTML = wrappedHTML;

        defaultTextElement.classList.add('other-message', 'sentence', 'mb-10');

        

        

        // Get all sentence elements
        const sentences = document.querySelectorAll('.ai-message');

        // Function to trigger the animation for each sentence
        function animateSentences() {
            sentences.forEach((sentence, index) => {
                // Apply a staggered delay to each sentence
                setTimeout(() => {
                    sentence.style.animationPlayState = 'running';
                }, index * 500); // Adjust the delay duration (in milliseconds) as needed
            });
        }

        animateSentences()


        setTimeout(function () {
            defaultTextElement.classList.add('fadeotherIn');
            
        },5); // 0.1-second delay for immediate fade-in of default message

        displayArea.appendChild(defaultTextElement);

        // Remove old other messages if there are more than 2
        const otherMessages = document.querySelectorAll('.other-message');
        if (otherMessages.length > 1) {
            otherMessages[0].classList.add('fade-out');

            otherMessages[0].addEventListener('animationend', function () {
                displayArea.removeChild(otherMessages[0]);
            });
            //displayArea.removeChild(otherMessages[0]);
        }

    }, 0.1); // 1-second delay after the user sends a message

}

const textarea = document.getElementById('input-text');
const sendButton = document.getElementById('sendButton');

sendButton.style.backgroundColor = '#F5EEDF';

// Event listener for changes in the textarea content
textarea.addEventListener('input', () => {
    // Check if the textarea content is empty
    if (textarea.value.trim() === '') {
        // Set the button's background color to the default Tailwind CSS color
        sendButton.style.backgroundColor = '#418A2F';
        sendButton.style.backgroundColor = '#F5EEDF';
    } else {
        // Change the button's background color to the hover Tailwind CSS color
        sendButton.style.backgroundColor = '#F5EEDF';
        sendButton.style.backgroundColor = '#418A2F';
    }
});

// Event listener for Enter key press within the textarea
textarea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent the default behavior (line break)
        displayText()
    }
});


function scrollToTarget() {
    const targetDiv = document.getElementById('scrollTarget');
    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
    }
}

// Call the function when the page is loaded
window.addEventListener('load', scrollToTarget);



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
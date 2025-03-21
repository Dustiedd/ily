// This script will handle the switching from "I love you" to the heart emoji

const textElement = document.getElementById('animatedText');

function animateText() {
    // Start with "I love you" being typed and then backspaced
    let isHeart = false;
    let iLoveYou = "I love you";
    let heart = "❤️";
    
    function typeAndBackspace(text, isHeart) {
        let index = 0;
        textElement.textContent = '';
        
        // Typing the text (simulating keypress)
        const typingInterval = setInterval(() => {
            textElement.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(typingInterval);
                // After typing, start backspacing
                setTimeout(() => {
                    const backspaceInterval = setInterval(() => {
                        textElement.textContent = textElement.textContent.slice(0, -1);
                        if (textElement.textContent.length === 0) {
                            clearInterval(backspaceInterval);
                            // Switch between "I love you" and "❤️"
                            if (isHeart) {
                                typeAndBackspace(heart, false); // Type the heart emoji
                            } else {
                                typeAndBackspace(iLoveYou, true); // Type "I love you"
                            }
                        }
                    }, 100); // Adjust backspace speed here
                }, 1000); // Adjust delay before backspace
            }
        }, 200); // Adjust typing speed here
    }

    // Start the animation with "I love you"
    typeAndBackspace(iLoveYou, true);
}

animateText();
setInterval(animateText, 10000); // Repeat animation every 5 seconds

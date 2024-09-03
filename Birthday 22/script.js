// Set your girlfriend's birthdate here
const birthDate = new Date('2002-09-06T00:00:00'); // Replace with her actual birth date

// Function to reveal content after button click
function revealContent() {
    // Hide the button
    document.querySelector('.reveal-button').style.display = 'none';

    // Show the content area with a fade-in effect
    const contentArea = document.getElementById('contentArea');
    contentArea.style.display = 'flex';
    contentArea.style.opacity = 0;
    let opacity = 0;

    const fadeInInterval = setInterval(() => {
        opacity += 0.05;
        contentArea.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
            // Show the individual content after fading in
            document.getElementById('textContainer').style.opacity = 1;
            document.querySelector('.count-container').style.opacity = 1;
        }
    }, 50);

    // Start the typing effect for emotional text
    const text = "Every moment with you is a treasure. I can’t imagine life without your smile, laugh, and love. You make every day brighter and more beautiful, filling my heart with joy and warmth. I’m so grateful for you and cherish every second we share. You make my world truly amazing.";
    const textElement = document.getElementById('emotionalText');
    typeWriter(text, textElement, 0);

    // Start updating life count
    updateLifeCount();
}

// Function for typing effect
function typeWriter(text, element, index) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(function() {
            typeWriter(text, element, index + 1);
        }, 30); // Adjust typing speed here (milliseconds per character)
    }
}

// Function to update life count in real-time
function updateLifeCount() {
    setInterval(() => {
        const now = new Date();
        const timeDiff = now - birthDate;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Update the counts every second
        document.getElementById('days').textContent = `${days} Days`;
        document.getElementById('hours').textContent = `${hours} Hours`;
        document.getElementById('minutes').textContent = `${minutes} Minutes`;
        document.getElementById('seconds').textContent = `${seconds} Seconds`;
    }, 1000); // Update every second
}

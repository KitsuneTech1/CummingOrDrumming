let images = [
    { src: "yoooo.webp", answer: "Drumming" },
    { src: "nooo.webp", answer: "Cumming" }
    // Add more images with corresponding answers here
];

let currentIndex = 0;

function loadImage() {
    const imageElement = document.getElementById('mainImage');
    imageElement.src = images[currentIndex].src;
    document.getElementById('result').textContent = '';
    document.getElementById('nextImage').style.display = 'none';
}

function makeGuess(choice) {
    const correctAnswer = images[currentIndex].answer;
    const resultContainer = document.getElementById('result');

    if (choice === correctAnswer) {
        resultContainer.textContent = `Correct! It was ${correctAnswer}.`;
        resultContainer.style.color = 'green';
    } else {
        resultContainer.textContent = `Wrong! It was ${correctAnswer}.`;
        resultContainer.style.color = 'red';
    }

    document.getElementById('nextImage').style.display = 'block';
}

function loadNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    loadImage();
}

// Load the first image when the page loads
window.onload = loadImage;

function makeGuess(choice) {
    // Placeholder logic for determining correct answer
    const correctAnswer = Math.random() < 0.5 ? 'Cumming' : 'Drumming';
    
    const resultContainer = document.getElementById('result');
    
    if (choice === correctAnswer) {
        resultContainer.textContent = `Correct! It was ${correctAnswer}.`;
        resultContainer.style.color = 'green';
    } else {
        resultContainer.textContent = `Wrong! It was ${correctAnswer}.`;
        resultContainer.style.color = 'red';
    }
}

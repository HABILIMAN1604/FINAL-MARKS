
function calculateScore() {
    var currentScore = parseInt(document.getElementById("currentScore").value);
    var desiredScore = parseInt(document.getElementById("desiredScore").value);
    var outputMessageElement = document.getElementById("outputMessage");

            // Check for valid input ranges
    if (isNaN(currentScore) || isNaN(desiredScore) || currentScore < 0 || currentScore > 60 || desiredScore < 0 || desiredScore > 100) {
        outputMessageElement.innerHTML = "<p class='error'>Please enter valid numbers within the specified ranges.</p>";
    return;
    }

    if (desiredScore <= currentScore) {
        outputMessageElement.innerHTML = "<p>Congratulations! You are already at or above your desired marks.</p>";
    } else {
        var requiredScore = ((desiredScore - currentScore) / 40) * 100;
            requiredScore = Math.max(requiredScore, 0); // Ensure the required score is not negative

        var outputMessage = `You must score at least ${requiredScore.toFixed(2)} over 100 in the final examination to achieve ${desiredScore}% total in your subject.`;

            outputMessageElement.innerHTML = outputMessage;
            }
}



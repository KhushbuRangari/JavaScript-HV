var score = 0;

function playRound() {
  var guessElement = document.getElementById('guess');
  var guess = guessElement.value;
  var randomNum = Math.floor(Math.random() * 2); 

  if (guess === "") {
    displayResult("Please select heads or tails.");
    return;
  }

 

  var result = "";
  if (randomNum === 0 && guess === "heads") {
    result = "You win! It's heads.";
    score++;
  } else if (randomNum === 1 && guess === "tails") {
    result = "You win! It's tails.";
    score++;
  } else {
    result = "You lose. Try again!";
  }

  displayResult(result);
  displayScore(score);
}

function displayResult(message) {
  var resultElement = document.querySelector('.result');
  resultElement.textContent = message;
}

function displayScore(score) {
  var scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

function resetGame() {
  score = 0;
  displayResult("");
  displayScore(score);
  document.getElementById('guess').value = "";
}

let currentQuestion = 0;
let score = 0;
let lives = 3;

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("question").innerText = "Selamat! Kamu telah menyelesaikan semua soal!";
    document.getElementById("answerInput").style.display = "none";
    document.querySelector("button").style.display = "none";
    return;
  }
  document.getElementById("question").innerText = questions[currentQuestion].q;
  document.getElementById("answerInput").value = "";
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestion].a.toLowerCase();
  if (userAnswer === correctAnswer) {
    score += 10;
    document.getElementById("result").innerText = "Benar!";
    confetti.start(1500);
    currentQuestion++;
    setTimeout(() => {
      updateStatus();
      showQuestion();
    }, 1500);
  } else {
    lives--;
    if (lives <= 0) {
      document.getElementById("question").innerText = "Game Over!";
      document.getElementById("answerInput").style.display = "none";
      document.querySelector("button").style.display = "none";
    } else {
      document.getElementById("result").innerText = "Salah! Coba lagi.";
    }
  }
  updateStatus();
}

function updateStatus() {
  document.getElementById("score").innerText = "Skor: " + score;
  document.getElementById("lives").innerText = "Sisa Nyawa: " + lives;
}

function restartGame() {
  currentQuestion = 0;
  score = 0;
  lives = 3;
  document.getElementById("answerInput").style.display = "inline-block";
  document.querySelector("button").style.display = "inline-block";
  updateStatus();
  showQuestion();
}

window.onload = () => {
  showQuestion();
  updateStatus();
};

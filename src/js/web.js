const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

const maxMinutes = 90;

const totalTime = maxMinutes * 60;

let currentTime = 0;
let timerInterval = null;
let isRunning = false;

function updateStartButtonLabel() {
  if (isRunning) {
    startButton.textContent = 'Pausar';
  } else {
    startButton.textContent = 'Iniciar';
  }
}

function toggleTimer() {
  if (!isRunning) {
    startTimer();
  } else {
    pauseTimer();
  }
}

// Função para iniciar o cronômetro
function startTimer() {
  if (timerInterval !== null) {
    return;
  }

  isRunning = true;
  updateStartButtonLabel();

  timerInterval = setInterval(() => {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;

    if (currentTime >= totalTime) {
      stopTimer();
      alert('Fim do tempo!');
    }

    currentTime++;
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  isRunning = false;
  updateStartButtonLabel();
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  currentTime = 0;
  timerElement.textContent = '00:00';
  isRunning = false;
  updateStartButtonLabel();
}

startButton.addEventListener('click', toggleTimer);

resetButton.addEventListener('click', resetTimer);
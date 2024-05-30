let startTime = 90; 

function fooTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

const timerElement = document.getElementById('timer');

function updateTimer() {
    timerElement.textContent = fooTime(startTime);
    startTime--;
    if (startTime < 0) {
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();

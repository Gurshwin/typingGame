const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const restartBtn = document.getElementById("restart");

let timer = 0;
let interval;
let quote = "Speed is the essence of war.";

function startGame() {
    inputEl.value = "";
    quoteEl.textContent = quote;
    timer = 0;
    timerEl.textContent = timer;
    wpmEl.textContent = 0;
  
    clearInterval(interval);
    interval = null;
  }
  inputEl.addEventListener("input", () => {
    const typed = inputEl.value;
  
    if (!interval) {
      interval = setInterval(() => {
        timer++;
        timerEl.textContent = timer;
      }, 1000);
    }
  
    if (typed === quote) {
      clearInterval(interval);
      const words = quote.split(" ").length;
      const wpm = Math.round((words / timer) * 60);
      wpmEl.textContent = wpm;
    }
  });
  restartBtn.addEventListener("click", startGame);

  startGame(); // Start when page loads
    
let currentInput = '';
let operator = '';
let resultShown = false;
let darkTheme = false;

function updateDisplay() {
  const display = document.getElementById('result');
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  resultShown = false;
  updateDisplay();
}

function appendToDisplay(value) {
  if (resultShown) {
    currentInput = '';
    resultShown = false;
  }
  currentInput += value;
  updateDisplay();
}

function calculateResult() {
  if (resultShown) return;

  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    resultShown = true;
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function toggleTheme() {
  const body = document.body;
  const calculator = document.querySelector('.calculator');
  const themeToggle = document.getElementById('theme-toggle');

  darkTheme = !darkTheme;

  if (darkTheme) {
    body.classList.add('dark-theme');
    themeToggle.textContent = 'Switch to Light Theme';
  } else {
    body.classList.remove('dark-theme');
    themeToggle.textContent = 'Switch to Dark Theme';
  }
}

// Initial theme setup
toggleTheme();

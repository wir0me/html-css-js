
// conversion

const userInput = document.querySelector('#user-input');
const resultContainer = document.querySelector('.to-unit input');

// const inputHandler = function(e) {
//   resultContainer.innerHTML = e.target.value;
// }

// userInput.addEventListener('input', inputHandler);

// ─────────────────────────────────────────────────────────────────────────────

const source = document.getElementById('source');
const result = document.getElementById('result');

const inputHandler = function(e) {
  result.innerHTML = e.target.value;
}

source.addEventListener('input', inputHandler);
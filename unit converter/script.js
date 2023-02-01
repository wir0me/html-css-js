// conversion values



// ─────────────────────────────────────────────────────────────────────────────

// conversion

const userInput = document.querySelector('input[type="number"]');
const resultContainer = document.querySelector('.to-unit input');

userInput.addEventListener('keyup', unitConvert);

// ─────────────────────────────────────────────────────────────────────────────

function unitConvert(e) {
  let freezingPointInF = 32;
  let result = (e.target.value * (9/5)) + freezingPointInF;
  resultContainer.value = result;
}

// ─────────────────────────────────────────────────────────────────────────────

// dropdown

const unitDropdown = document.getElementsByClassName('select-unit');
const dropdownOptions = document.getElementsByClassName('unit-select-options');
const dropdownFrom = document.getElementsByClassName('from')[0];
const dropdownTo = document.getElementsByClassName('to')[0];

for (let i = 0; i < dropdownOptions.length; i++) {
  unitDropdown[i].addEventListener('click', function() {
    if (i == 0) {
      dropdownFrom.style.display = 'contents';
      dropdownTo.style.display = 'none';

    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────


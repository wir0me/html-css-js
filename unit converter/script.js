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

// dropdown options

const fromSelectionBtn = document.querySelector('.from-selection');
const toSelectionBtn = document.querySelector('.to-selection');
const fromDropdown = document.querySelector('.from');
const toDropdown = document.querySelector('.to');

fromSelectionBtn.addEventListener('click', function(){
  fromDropdown.style.display = 'contents';
})

toSelectionBtn.addEventListener('click', function(){
  toDropdown.style.display = 'contents';
})


// dropdown select

const fromOptions = document.getElementsByClassName('from-options');
const toOptions = document.getElementsByClassName('to-options');
const selectFromUnit = document.querySelector('#select-from-unit');
const selectToUnit = document.querySelector('#select-to-unit');

for (fromOption of fromOptions) {
  fromOption.addEventListener('click', function(){
    selectFromUnit.innerText = this.textContent;
  })
}

for (toOption of toOptions) {
  toOption.addEventListener('click', function(){
    selectToUnit.innerText = this.textContent;
  })
}

// ─────────────────────────────────────────────────────────────────────────────

// Conversion container displayed

let fromConversion
let toConversion

const fromUnit = document.querySelector('.from-unit');
const toUnit = document.querySelector('.to-unit');



// Conversion unit displayed




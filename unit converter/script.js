// selection variables

let fromSelected;
let toSelected;

// ─────────────────────────────────────────────────────────────────────────────

// conversion values

// conversion

const userInput = document.querySelector("#user-input");
const resultContainer = document.querySelector(".to-unit-section input");

userInput.addEventListener("keyup", unitConvert);

// conversion functions

// TEMPERATURE

function unitConvert(e) {
  if (fromSelected == "Celsius" && toSelected == "Fahrenheit") {
    let result = e.target.value * (9 / 5) + 32;
    resultContainer.value = result;
  } else if (fromSelected == "Celsius" && toSelected == "Kelvin") {
    let result = Number(e.target.value) + 273.15;
    resultContainer.value = result;
  } else if (fromSelected == "Fahrenheit" && toSelected == "Celsius") {
    let result = (e.target.value - 32) / (9 / 5);
    resultContainer.value = result;
  } else if (fromSelected == "Fahrenheit" && toSelected == "Kelvin") {
    let result = (Number(e.target.value) + 459.67) * (5 / 9);
    resultContainer.value = result;
  } else if (fromSelected == "Kelvin" && toSelected == "Celsius") {
    let result = Number(e.target.value) - 273.15;
    resultContainer.value = result;
  } else if (fromSelected == "Kelvin" && toSelected == "Fahrenheit") {
    let result = e.target.value * (9 / 5) - 459.67;
    resultContainer.value = result;
  } else {
    resultContainer.value = e.target.value;
  }
}

// ─────────────────────────────────────────────────────────────────────────────

// dropdown options

const fromSelectionBtn = document.querySelector(".from-selection");
const toSelectionBtn = document.querySelector(".to-selection");
const fromDropdown = document.querySelector(".from");
const toDropdown = document.querySelector(".to");

fromSelectionBtn.addEventListener("click", function () {
  fromDropdown.style.display = "contents";
});

toSelectionBtn.addEventListener("click", function () {
  toDropdown.style.display = "contents";
});

// dropdown select

const fromOptions = document.getElementsByClassName("from-options");
const toOptions = document.getElementsByClassName("to-options");
var selectFromUnit = document.querySelector("#select-from-unit");
var selectToUnit = document.querySelector("#select-to-unit");

// conversion container variables

const conversionContainer = document.querySelector(".conversion-container");
var fromUnit = document.querySelector(".unit-from");
var toUnit = document.querySelector(".unit-to");

for (fromOption of fromOptions) {
  fromOption.addEventListener("click", function () {
    selectFromUnit.innerText = this.textContent;
    conversionContainer.style.display = "contents";
    fromUnit.innerText = this.textContent;
    fromSelected = this.textContent;
  });
}

for (toOption of toOptions) {
  toOption.addEventListener("click", function () {
    selectToUnit.innerText = this.textContent;
    conversionContainer.style.display = "contents";
    toUnit.innerText = this.textContent;
    toSelected = this.textContent;
  });

  toOption.addEventListener("click", function () {
    if (fromSelected == "Celsius" && toSelected == "Fahrenheit") {
      let result = userInput.value * (9 / 5) + 32;
      resultContainer.value = result;
    } else if (fromSelected == "Celsius" && toSelected == "Kelvin") {
      let result = Number(userInput.value) + 273.15;
      resultContainer.value = result;
    } else if (fromSelected == "Fahrenheit" && toSelected == "Celsius") {
      let result = (userInput.value - 32) / (9 / 5);
      resultContainer.value = result;
    } else if (fromSelected == "Fahrenheit" && toSelected == "Kelvin") {
      let result = (Number(userInput.value) + 459.67) * (5 / 9);
      resultContainer.value = result;
    } else if (fromSelected == "Kelvin" && toSelected == "Celsius") {
      let result = Number(userInput.value) - 273.15;
      resultContainer.value = result;
    } else if (fromSelected == "Kelvin" && toSelected == "Fahrenheit") {
      let result = userInput.value * (9 / 5) - 459.67;
      resultContainer.value = result;
    } else {
      resultContainer.value = userInput.value;
    }
  });
}

// reverse button

const reverseButton = document.querySelector(".reverse-unit");

reverseButton.addEventListener("click", () => {
  [fromSelected, toSelected] = [toSelected, fromSelected];
  [userInput.value, resultContainer.value] = [
    resultContainer.value,
    userInput.value,
  ];
  fromUnit.innerText = selectFromUnit.innerText = fromSelected;
  toUnit.innerText = selectToUnit.innerText = toSelected;
});

// ─────────────────────────────────────────────────────────────────────────────

// variables
const hexCodeChar = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let hexCodeList;
let hexCode
let red
let green
let blue
let i = 0

const generateButton = document.getElementById('generate-button');
const hexCodeContainer = document.getElementsByClassName('hex-code');
const hexCodeCount = document.querySelectorAll('.hex-code').length;

//rgb range
const redRange = document.getElementById("red-range");
const greenRange = document.getElementById("green-range");
const blueRange = document.getElementById("blue-range");

// rgb numbers
const redRGB = document.getElementById("redNum");
const greenRGB = document.getElementById("greenNum");
const blueRGB = document.getElementById("blueNum");

// lock and unlock colors
const lockToggle1 = document.getElementsByClassName("lock-button")[0];
let colorLocked1 = false;

const lockToggle2 = document.getElementsByClassName("lock-button")[1];
let colorLocked2 = false;

const lockToggle3 = document.getElementsByClassName("lock-button")[2];
let colorLocked3 = false;

const lockToggle4 = document.getElementsByClassName("lock-button")[3];
let colorLocked4 = false;

// FUNCTIONS
function generateHexCode() {
  hexCodeList = [];
  hexCode = "#"
  let n = 0;
  while (n < 4) {
    for (i = 0; i < 6; i++) {
      var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
      hexCode += char;
    }
    hexCodeList.push(hexCode);
    hexCode = "#";
    n++;
  }
  console.log(hexCodeList);
}

function convertHexCode(hex) {
  red = parseInt(hex.slice(1, 3), 16);
  green = parseInt(hex.slice(3, 5), 16);
  blue = parseInt(hex.slice(5, 7), 16);
}

function render(hexCount) {
  switch (hexCount) {
    case 1:
      hexCodeContainer[0].innerHTML = hexCodeList[0];
      document.documentElement.style.setProperty("--color1", hexCodeList[0]);

      //change range values
      redRange.value = red;
      greenRange.value = green;
      blueRange.value = blue;

      // change input number values
      redRGB.value = red;
      greenRGB.value = green;
      blueRGB.value = blue;

      break;
    case 4:
      if (colorLocked3 == false) {
        hexCodeContainer[2].innerHTML = hexCodeList[2];
        document.documentElement.style.setProperty("--color3", hexCodeList[2]);
      }
      if (colorLocked4 == false) {
        hexCodeContainer[3].innerHTML = hexCodeList[3];
        document.documentElement.style.setProperty("--color4", hexCodeList[3]);
      }

    case 2:
      if (colorLocked1 == false) {
        hexCodeContainer[0].innerHTML = hexCodeList[0];
        document.documentElement.style.setProperty("--color1", hexCodeList[0]);
      }
      if (colorLocked2 == false) {
        hexCodeContainer[1].innerHTML = hexCodeList[1];
        document.documentElement.style.setProperty("--color2", hexCodeList[1]);
      }
    }
}

// lock and unlock functions
function lockColor1() {
  if (colorLocked1 === true) {
    colorLocked1 = false;
    lockToggle1.style.color = 'var(--greyed)';
  } else {
    colorLocked1 = true;
    lockToggle1.style.color = 'var(--green)';
  }
}

function lockColor2() {
  if (colorLocked2 === true) {
    colorLocked2 = false;
    lockToggle2.style.color = 'var(--greyed)';
  } else {
    colorLocked2 = true;
    lockToggle2.style.color = 'var(--green)';
  }
}

function lockColor3() {
  if (colorLocked3 === true) {
    colorLocked3 = false;
    lockToggle3.style.color = 'var(--greyed)';
  } else {
    colorLocked3 = true;
    lockToggle3.style.color = 'var(--green)';
  }
}

function lockColor4() {
  if (colorLocked4 === true) {
    colorLocked4 = false;
    lockToggle4.style.color = 'var(--greyed)';
  } else {
    colorLocked4 = true;
    lockToggle4.style.color = 'var(--green)';
  }
}

// EVENT LISTENERS
generateButton.addEventListener('click', () => {
  

  if (hexCodeCount == 1) {
    generateHexCode();
    convertHexCode(hexCodeList[0]);
    render(hexCodeCount);
  } else {
    generateHexCode();
    render(hexCodeCount);
  }
});

lockToggle1.addEventListener("click", lockColor1);
lockToggle2.addEventListener("click", lockColor2);
lockToggle3.addEventListener("click", lockColor3);
lockToggle4.addEventListener("click", lockColor4);

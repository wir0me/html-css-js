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

let hexCodeList = [];
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

// FUNCTIONS
function generateHexCode() {
  hexCode = "#"
  hexCode2 = "#"
  hexCode3 = "#"
  hexCode4 = "#"
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        hexCode += char;
      }
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        hexCode2 += char;
      }
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        hexCode3 += char;
      }
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        hexCode4 += char;
      }
}

function convertHexCode(hex) {
  red = parseInt(hex.slice(1, 3), 16);
  green = parseInt(hex.slice(3, 5), 16);
  blue = parseInt(hex.slice(5, 7), 16);
}

function render(hexCount) {
  switch (hexCount) {
    case 1:
      hexCodeContainer[0].innerHTML = hexCode;
      document.documentElement.style.setProperty("--color1", hexCode);

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
      hexCodeContainer[2].innerHTML = hexCode3;
      document.documentElement.style.setProperty("--color3", hexCode3);
      hexCodeContainer[3].innerHTML = hexCode4;
      document.documentElement.style.setProperty("--color4", hexCode4);
    case 2:
      hexCodeContainer[0].innerHTML = hexCode;
      document.documentElement.style.setProperty("--color1", hexCode);
      hexCodeContainer[1].innerHTML = hexCode2;
      document.documentElement.style.setProperty("--color2", hexCode2);
  }
}

// EVENT LISTENERS
generateButton.addEventListener('click', () => {
  

  if (hexCodeCount == 1) {
    generateHexCode();
    convertHexCode(hexCode);
    render(hexCodeCount);
  } else {
    generateHexCode();
    render(hexCodeCount);
  }
});
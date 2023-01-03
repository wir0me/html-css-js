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

let hexCodeCount;

// single color
function generateHexCode() {
  var hexCode = "#";
  for (i = 0; i < 6; i++) {
    var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
    hexCode += char;
  }

  document.getElementById("hex-code").innerHTML = hexCode;
  document.documentElement.style.setProperty("--color1", hexCode);
}


// lock and unlock colors
const lockToggle1 = document.getElementsByClassName("lock-button")[0];
let colorLocked1 = false;

const lockToggle2 = document.getElementsByClassName("lock-button")[1];
let colorLocked2 = false;

const lockToggle3 = document.getElementsByClassName("lock-button")[2];
let colorLocked3 = false;

const lockToggle4 = document.getElementsByClassName("lock-button")[3];
let colorLocked4 = false;

if (hexCodeCount == 2) {
  lockToggle1.addEventListener("click", lockColor1);
function lockColor1() {
  if (colorLocked1 === true) {
    colorLocked1 = false;
    lockToggle1.style.color = 'var(--greyed)';
  } else {
    colorLocked1 = true;
    lockToggle1.style.color = 'var(--green)';
  }
}

lockToggle2.addEventListener("click", lockColor2);
function lockColor2() {
  if (colorLocked2 === true) {
    colorLocked2 = false;
    lockToggle2.style.color = 'var(--greyed)';
  } else {
    colorLocked2 = true;
    lockToggle2.style.color = 'var(--green)';
  }
}
} else if (hexCodeCount == 4) {
  lockToggle1.addEventListener("click", lockColor1);
function lockColor1() {
  if (colorLocked1 === true) {
    colorLocked1 = false;
    lockToggle1.style.color = 'var(--greyed)';
  } else {
    colorLocked1 = true;
    lockToggle1.style.color = 'var(--green)';
  }
}

lockToggle2.addEventListener("click", lockColor2);
function lockColor2() {
  if (colorLocked2 === true) {
    colorLocked2 = false;
    lockToggle2.style.color = 'var(--greyed)';
  } else {
    colorLocked2 = true;
    lockToggle2.style.color = 'var(--green)';
  }
}



lockToggle3.addEventListener("click", lockColor3);
function lockColor3() {
  if (colorLocked3 === true) {
    colorLocked3 = false;
    lockToggle3.style.color = 'var(--greyed)';
  } else {
    colorLocked3 = true;
    lockToggle3.style.color = 'var(--green)';
  }
}

lockToggle4.addEventListener("click", lockColor4);
function lockColor4() {
  if (colorLocked4 === true) {
    colorLocked4 = false;
    lockToggle4.style.color = 'var(--greyed)';
  } else {
    colorLocked4 = true;
    lockToggle4.style.color = 'var(--green)';
  }
}
}



// gradient/palette colors
const generateButton = document.getElementById("generate-button");
let firstHexCode
let secondHexCode

generateButton.addEventListener('click', generateHexCodes);
function generateHexCodes() {
  firstHexCode = "#";
  secondHexCode = "#";
  thirdHexCode = "#";
  fourthHexCode = "#";

  hexCodeCount = document.querySelectorAll(".color-container").length;

  if (hexCodeCount == 2) {
    if (colorLocked1 === false) {
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        firstHexCode += char;
      }
      document.getElementsByClassName("hex-code")[0].innerHTML = firstHexCode;
      document.documentElement.style.setProperty("--color1", firstHexCode);
    }
  
    if (colorLocked2 === false) {
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        secondHexCode += char;
      }
      document.getElementsByClassName("hex-code")[1].innerHTML = secondHexCode;
      document.documentElement.style.setProperty("--color2", secondHexCode);
    }
  } else if (hexCodeCount == 4) {
    if (colorLocked1 === false) {
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        firstHexCode += char;
      }
      document.getElementsByClassName("hex-code")[0].innerHTML = firstHexCode;
      document.documentElement.style.setProperty("--color1", firstHexCode);
    }
  
    if (colorLocked2 === false) {
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        secondHexCode += char;
      }
      document.getElementsByClassName("hex-code")[1].innerHTML = secondHexCode;
      document.documentElement.style.setProperty("--color2", secondHexCode);
    }
  
    if (colorLocked3 === false) {
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        thirdHexCode += char;
      }
      document.getElementsByClassName("hex-code")[2].innerHTML = thirdHexCode;
      document.documentElement.style.setProperty("--color3", thirdHexCode);
    }
  
    if (colorLocked4 === false) {
      for (i = 0; i < 6; i++) {
        var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
        fourthHexCode += char;
      }
      document.getElementsByClassName("hex-code")[3].innerHTML = fourthHexCode;
      document.documentElement.style.setProperty("--color4", fourthHexCode);
    }
  }

  
}


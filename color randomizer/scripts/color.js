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




// gradient colors
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener('click', generateHexCodes);
function generateHexCodes() {
  let firstHexCode = "#";
  let secondHexCode = "#";

  for (i = 0; i < 6; i++) {
    var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
    firstHexCode += char;
  }

  document.getElementsByClassName("hex-code")[0].innerHTML = firstHexCode;
  document.documentElement.style.setProperty("--gradient1", firstHexCode);

  for (i = 0; i < 6; i++) {
    var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
    secondHexCode += char;
  }

  document.getElementsByClassName("hex-code")[1].innerHTML = secondHexCode;
  document.documentElement.style.setProperty("--gradient2", secondHexCode);


}


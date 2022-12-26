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

function generateHexCode() {
  var hexCode = "#";
  for (i = 0; i < 6; i++) {
    var char = hexCodeChar[Math.floor(Math.random() * hexCodeChar.length)];
    hexCode += char;
  }

  document.getElementById("hex-code").innerHTML = hexCode;
  document.documentElement.style.setProperty("--color1", hexCode);
}

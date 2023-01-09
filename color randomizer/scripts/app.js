// light/dark mode

const modeSwitch = document.querySelector('#mode-switch');
let mode = 'light';

modeSwitch.addEventListener('click', switchMode);

function switchMode() {
  if (mode === 'light') {
    mode = 'dark';
    document.documentElement.style.setProperty('--main-color', '#191e2c');
    document.documentElement.style.setProperty('--secondary', '#ee3354');
    document.documentElement.style.setProperty('--tertiary', '#ee3354');
    document.documentElement.style.setProperty('--font-color1', '#fff');
    document.documentElement.style.setProperty('--background', '#0f1322');
    document.documentElement.style.setProperty('--logo-color','invert(86%) sepia(31%) saturate(5624%) hue-rotate(166deg) brightness(102%) contrast(101%)');
    document.documentElement.style.setProperty('--menu-color', 'invert(35%) sepia(66%) saturate(4422%) hue-rotate(330deg) brightness(94%) contrast(99%)');
  } else {
    mode = 'light';
    document.documentElement.style.setProperty('--main-color', '#ffff');
    document.documentElement.style.setProperty('--secondary', '#4ed2ff');
    document.documentElement.style.setProperty('--tertiary', '#e4e9f7');
    document.documentElement.style.setProperty('--font-color1', 'black');
    document.documentElement.style.setProperty('--background', '#f4f5f8');
    document.documentElement.style.setProperty('--logo-color','invert(35%) sepia(66%) saturate(4422%) hue-rotate(330deg) brightness(94%) contrast(99%)');
    document.documentElement.style.setProperty('--menu-color', 'invert(86%) sepia(31%) saturate(5624%) hue-rotate(166deg) brightness(102%) contrast(101%)');
  }
}
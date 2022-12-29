let count = 0;


function doMath(operation) {
  switch (operation) {
    case '+':
      count += 1;
      break;
    case '-':
      count -= 1;
      break;
  };
  render();
};

function doUserMath(operation) {
  let inputCount = Number(document.getElementById('inputCount').value);
  switch (operation) {
    case '+':
      count += inputCount;
      break;
    case '-':
      count -= inputCount;
      break;
  };

  render();
}

function resetCount() {
  count = 0;
  render();
};

function render() {
  document.getElementById("count").innerHTML = count;
  document.getElementById('inputCount').value = '';
}
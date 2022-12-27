let count = 0;

function addOne() {
  count += 1;
  render();
};

function resetCount() {
  count = 0;
  render();
};

function minusOne() {
  count -= 1;
  render();
}

function render() {
  document.getElementById("count").innerHTML = count;
};


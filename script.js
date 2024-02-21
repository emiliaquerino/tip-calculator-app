let billValue = 0;

document.getElementById('input1').addEventListener('input', function(event) {
  billValue = parseFloat(this.value);
});

document.getElementById('button5').addEventListener('click', function(event) {
  calculateSelectedTip(0.05);
});

document.getElementById('button10').addEventListener('click', function(event) {
  calculateSelectedTip(0.10);
});

document.getElementById('button15').addEventListener('click', function(event) {
  calculateSelectedTip(0.15);
});

document.getElementById('button25').addEventListener('click', function(event) {
  calculateSelectedTip(0.25);
});

document.getElementById('button50').addEventListener('click', function(event) {
  calculateSelectedTip(0.50);
});

document.querySelector('.tip-input').addEventListener('input', function(event) {
  calculateSelectedTip(parseFloat(this.value) / 100);
});

function calculateSelectedTip(percentage) {
  let percentageValue = billValue * percentage;
  console.log(percentageValue);
}

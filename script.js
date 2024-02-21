let billValue = 0;
let numberOfPeople = 0;
let total = 0;

document.getElementById("input1").addEventListener("input", function (event) {
  billValue = parseFloat(this.value);
});

document.getElementById("button5").addEventListener("click", function (event) {
  calculateSelectedTip(0.05);
});

document.getElementById("button10").addEventListener("click", function (event) {
  calculateSelectedTip(0.1);
});

document.getElementById("button15").addEventListener("click", function (event) {
  calculateSelectedTip(0.15);
});

document.getElementById("button25").addEventListener("click", function (event) {
  calculateSelectedTip(0.25);
});

document.getElementById("button50").addEventListener("click", function (event) {
  calculateSelectedTip(0.5);
});

document
  .querySelector(".tip-input")
  .addEventListener("input", function (event) {
    calculateSelectedTip(parseFloat(this.value) / 100);
  });

function calculateSelectedTip(percentage) {
  let percentageValue = billValue * percentage;
  let tipAmount = percentageValue / numberOfPeople;
  document.querySelector('.display-tip-amount').textContent = `$${tipAmount.toFixed(2)}`;
}

document.getElementById("input2").addEventListener("input", function (event) {
  numberOfPeople = parseFloat(this.value);
});

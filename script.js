document.addEventListener("DOMContentLoaded", function () {
  const billInput = document.getElementById("bill-value");
  const tipButtons = document.querySelectorAll(".tip-button");
  const customTipInput = document.querySelector(".custom-percentage");
  const numberOfPeopleInput = document.querySelector(".number-of-people");
  const displayTipAmount = document.querySelector(".display-tip-amount");
  const displayTotal = document.querySelector(".display-total");
  const resetButton = document.querySelector(".reset-button");

  let selectedTipButton = null;

  function calculateTipAndTotal() {
    const billAmount = parseFloat(billInput.value);
    const tipPercentage = customTipInput.value
      ? parseFloat(customTipInput.value)
      : selectedTipButton.dataset.percentage;
    const numberOfPeople = parseInt(numberOfPeopleInput.value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople)) {
      return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalPerPerson = (billAmount + tipAmount) / numberOfPeople;

    if (numberOfPeople === 0) {
      displayTipAmount.textContent = "$0.00";
      displayTotal.textContent = "$0.00";
      numberOfPeopleInput.style.border = "2px solid red";
      document.getElementById("number-of-people-error").textContent =
        "Number of people can't be zero";
      return;
    } else {
      numberOfPeopleInput.style.border = "";
      document.getElementById("number-of-people-error").textContent = "";
    }

    displayTipAmount.textContent = `$${(tipAmount / numberOfPeople).toFixed(
      2
    )}`;
    displayTotal.textContent = `$${totalPerPerson.toFixed(2)}`;
  }

  function resetCalculator() {
    billInput.value = "";
    customTipInput.value = "";
    numberOfPeopleInput.value = "";

    displayTipAmount.textContent = "$0.00";
    displayTotal.textContent = "$0.00";

    numberOfPeopleInput.style.border = "";

    selectedTipButton = null;

    document.getElementById("number-of-people-error").textContent = "";

    tipButtons.forEach(function (button) {
      button.classList.remove("clicked");
    });
  }

  tipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      tipButtons.forEach(function (btn) {
        btn.classList.remove("clicked");
      });
      this.classList.add("clicked");
      selectedTipButton = this;
      calculateTipAndTotal();
    });
  });

  customTipInput.addEventListener("input", calculateTipAndTotal);
  numberOfPeopleInput.addEventListener("input", calculateTipAndTotal);
  resetButton.addEventListener("click", resetCalculator);
});

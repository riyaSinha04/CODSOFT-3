document.addEventListener('DOMContentLoaded', function () {
  let displayValue = '';
  const input = document.querySelector('.input');

  function appendToDisplay(value) {
    displayValue += value;
    input.value = displayValue;
  }

  function calculate() {
    try {
      displayValue = eval(displayValue);
      input.value = displayValue;
      displayValue = '';
    } catch (error) {
      input.value = 'Error';
    }
  }

  document.querySelectorAll('.digit, .operator, .dot, .equal').forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent;
      if (buttonText === '=') {
        calculate();
      } else {
        appendToDisplay(buttonText);
      }
    });
  });
});

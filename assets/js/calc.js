var displayElement = document.getElementById('displayRow');
var value = 0, value2 = 0;
displayElement.innerHTML = 0;
var operator = '';

function storeOperator(op) {
  if (op !== '=') {
    operator = op;
    value2 = value;
    value = 0;
  }
}

function positiveNegative() {
  value = value * -1;
  value = limitNumberSize(value);
  displayElement.innerHTML = value.toString();
}

function clearCalc() {
  value = 0;
  displayElement.innerHTML = value.toString();
  operator = '';
}

function compute() {
  if (operator === '+') {
    value = value2 + value;
  } else if (operator === '-') {
    value = value2 - value;
  } else if (operator === 'x') {
    value = value2 * value;
  } else if (operator === '/') {
    value = value2 / value;
  } else if (operator === '%') {
    value = value2 * (value / 100);
  }
  operator = '';
  value = limitNumberSize(value);
  displayElement.innerHTML = value.toString();
}

function pressDecimalPoint() {
  if (Number.isInteger(value)) {
    valueString = value.toString();
    valueString = `${valueString}.`;
    value = parseFloat(valueString).toFixed(1);
  }
  displayElement.innerHTML = valueString;
}

function pressNumber(buttonValue) {
  valueString = value.toString();
  if (valueString === '0') {
    valueString = buttonValue.toString();
    value = buttonValue;
  } else {
    if (Number.isInteger(value)) {
      valueString = valueString + buttonValue.toString();
      value = parseInt(valueString);
    } else {
      var decimalToString = value.toString();
      value = parseFloat(value);
      var decimalPlace = decimalToString.indexOf('.');
      var decimalCount = decimalToString.length - decimalPlace - 1;
      if (decimalCount === 1 && decimalToString[decimalToString.length - 1] === '0') {
        var newDecimalValue = buttonValue / (10 ** decimalCount);
      } else {
        var newDecimalValue = buttonValue / (10 ** (decimalCount + 1));
      }
      value = value + newDecimalValue;
      valueString = value.toString();
    }
  }
  value = limitNumberSize(value);
  displayElement.innerHTML = valueString;
}

function limitNumberSize(number) {
  var numberString = number.toString();
  if (numberString.length > 10) {
    numberString = numberString.slice(0, 10);
    number = parseFloat(numberString);
  }
  return number;
}

function calculatePercentage() {
  // Convert the current value to a percentage by multiplying it by 0.01
  value *= 0.01;
  // Update the display with the new value
  displayElement.innerHTML = value.toString();
}

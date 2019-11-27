/* eslint-disable no-param-reassign */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne) {
    numberOne = Big(numberOne);
  }
  if (numberTwo) {
    numberTwo = Big(numberTwo);
  }

  switch (operation) {
  case '+':
    return numberOne.plus(numberTwo).toString();
  case '-':
    return numberOne.minus(numberTwo).toString();
  case '*':
    return numberOne.times(numberTwo).toString();
  case '÷':
    if (numberTwo === '0')
      alert('Not a valid number');
    else
      return numberOne.div(numberTwo).toString();
    break;
  case '%':
    return numberOne.div(100).toString();
  default:
    alert('Operation Not Found');
  }
};

export default operate;


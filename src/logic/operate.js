import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = new Big(numberOne);
  const two = new Big(numberTwo);
  let total;

  switch (operation) {
  case '÷':
    total = Number(one.div(two).toString());
    break;
  case '*':
    total = Number(one.times(two).toString());
    break;
  case '-':
    total = Number(one.minus(two).toString());
    break;
  case '+':
    total = Number(one.plus(two).toString());
    break;
  case '%':
    total = Number(one.mod(two).toString());
    break;
  default:
    alert('Operation Not Found');
    break;
  }
  return total;
};

export default operate;


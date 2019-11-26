/* eslint-disable no-param-reassign */
import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {

  switch (buttonName) {
  case '+/-':
    if (next === '') {
      total = (total * -1).toString();
    }
    else {
      next = (next * -1).toString();
    }
    return { total, next };

  case 'AC':
    total = '';
    next = '';
    operation = '';
    return { total, next, operation };

  case '%':
    if (!next) {
      total = operate(total, null, buttonName);
      return { total };
    }
    next = operate(next, null, buttonName);
    return { next };

  case '.':
    if (!next) {
      if (!total.includes('.')) {
        total += '.';
        return { total };
      }
    }
    else {
      if (!next.includes('.')) {
        next += '.';
        return { next };
      }
    }
    break;
  case '=':
    if (operation && total && next) {
      total = operate(total, next, operation);
      next = '';
      operation = '';
    }
    return { total, next, operation };
  case '+':
  case '-':
  case '*':
  case '÷':
    total = total === 'INFINITY' ? '0' : total;
    if (operation && total && next) {
      total = operate(total, next, operation);
      next = '';
      operation = buttonName;
    }
    else {
      if (!total) {
        total = next;
      }
      operation = buttonName;
      next = '';
    }
    return { total, next, operation };
  default:
    if (!operation && total) {
      total = '';
    }
    if (!next) {
      next = buttonName;
    }
    else {
      next += buttonName;
    }
    return { total, next };
  }
};

export default calculate;

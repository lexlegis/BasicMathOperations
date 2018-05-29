const validateOperand = (operand) => {
  if (typeof(operand) === "undefined" || operand === null)
    return false;
  return true;
}

function Operation() {

}

Operation.add = (operand1, operand2) => {
  if (!validateOperand(operand1) || !validateOperand(operand2))
    return NaN;
  return operand1 + operand2;
}
Operation.add.operationSymbol = '+';

Operation.subtract = (operand1, operand2) => {
  if (!validateOperand(operand1) || !validateOperand(operand2))
    return NaN;
  return operand1 - operand2;
}
Operation.subtract.operationSymbol = '-';

Operation.multiply = (operand1, operand2) => {
  if (!validateOperand(operand1) || !validateOperand(operand2))
    return NaN;
  return operand1 * operand2;
}
Operation.multiply.operationSymbol = '*';

Operation.divide = (operand1, operand2) => {
  if (!validateOperand(operand1) || !validateOperand(operand2) || operand2 === 0)
    return NaN;
  return operand1 / operand2;
}
Operation.divide.operationSymbol = '/';

module.exports = Operation;
Problem = function (operand1, operand2, operation) {
  var operand1 = operand1;
  var operand2 = operand2;
  var operation = operation;
  var result;

  return {
    calculateResult: () => {
      console.log("operation type: " + typeof (operation));
      if (typeof operation == 'function')
        result = operation(operand1, operand2);
      else
        console.error("Operation is not a function!");
    },
    getOperand1: () => {
      return operand1
    },
    getOperand2: () => {
      return operand2
    },
    getOperation: () => {
      return operation;
    },
    getResult: () => {
      return result;
    }
  }
}

module.exports = Problem;
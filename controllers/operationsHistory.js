const OperationHistory = require("../models/operationHistory")

OperationsHistory = (function() {
  const operations = [new OperationHistory("+"), 
                    new OperationHistory("-"),
                    new OperationHistory("*"),
                    new OperationHistory("/")];
  return {
    recordAnswer: (isAnswerCorrect, operation) => {
      let successPercentage;
      for (let i = 0; i < operations.length; i++) {
        if (operations[i].getOperation() === operation) {
          operations[i].recordAnswer(isAnswerCorrect);
          successPercentage = operations[i].calculateSuccessPercentage();
          break;
        }
      }
      return successPercentage;
    }
  }
})();

module.exports = OperationsHistory;
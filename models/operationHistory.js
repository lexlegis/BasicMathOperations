OperationHistory = function (operation) {
  var operation = operation;
  var correctAnswersCount = 0;
  var wrongAnswersCount = 0;

  return {
    recordAnswer: (isAnswerCorrect) => {
      if (isAnswerCorrect) 
        correctAnswersCount++;
      else
        wrongAnswersCount++;
    },
    getOperation: () => {
      return operation;
    },
    getCorrectAnswersCount: () => {
      return correctAnswersCount;
    },
    getWrongAnswersCount: () => {
      return wrongAnswersCount;
    },
    calculateSuccessPercentage: () => {
      let total = correctAnswersCount + wrongAnswersCount;
      if (total === 0)
        return 0;
      return correctAnswersCount * 100 / total;
    }
  }
}

module.exports = OperationHistory;
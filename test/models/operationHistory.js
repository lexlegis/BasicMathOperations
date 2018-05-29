var expect = require("chai").expect;
const OperationHistory = require("../../models/operationHistory");
const Operation = require("../../models/operation");

describe("Operation history recording", function() {
  it("Creates an Operation History object for a particular operation", function() {
    let operationHistory = new OperationHistory(Operation.add);
    expect(operationHistory.getOperation()).to.equal(Operation.add);
    expect(operationHistory.getOperation()).to.not.equal(Operation.subtract);
  });
  it("Records correct answer", function() {
    let operationHistory = new OperationHistory(Operation.add);
    correctAnswersCount = operationHistory.getCorrectAnswersCount();
    wrongAnswersCount = operationHistory.getWrongAnswersCount();
    operationHistory.recordAnswer(true);
    expect(operationHistory.getCorrectAnswersCount()).to.equal(correctAnswersCount + 1);
    expect(operationHistory.getWrongAnswersCount()).to.equal(wrongAnswersCount);
  });
  it("Records wrong answer", function() {
    let operationHistory = new OperationHistory(Operation.add);
    correctAnswersCount = operationHistory.getCorrectAnswersCount();
    wrongAnswersCount = operationHistory.getWrongAnswersCount();
    operationHistory.recordAnswer(false);
    expect(operationHistory.getCorrectAnswersCount()).to.equal(correctAnswersCount);
    expect(operationHistory.getWrongAnswersCount()).to.equal(wrongAnswersCount + 1);
  });
  it("Calculates success percent", function() {
    let operationHistory = new OperationHistory(Operation.add);
    expect(operationHistory.calculateSuccessPercentage()).to.equal(0);
    operationHistory.recordAnswer(true);
    expect(operationHistory.calculateSuccessPercentage()).to.equal(100);
    operationHistory.recordAnswer(false);
    expect(operationHistory.calculateSuccessPercentage()).to.equal(50);
    operationHistory.recordAnswer(false);
    operationHistory.recordAnswer(false);
    expect(operationHistory.calculateSuccessPercentage()).to.equal(25);
  });
});
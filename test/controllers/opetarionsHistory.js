var expect = require("chai").expect;
const OperationsHistory = require("../../controllers/operationsHistory")

describe("Operation history controller", function() {
  it("Records answer", function() {
    let successPercentage = OperationsHistory.recordAnswer(true,"+");
    expect(successPercentage).to.equal(100);
    successPercentage = OperationsHistory.recordAnswer(false,"+");
    expect(successPercentage).to.equal(50);
    successPercentage = OperationsHistory.recordAnswer(true,"");
    expect(successPercentage).to.equal(undefined);
  });
});
const expect = require("chai").expect;
const Problems = require("../../controllers/problems");

describe("Problems controller", function() {
  it("Generates problem", function() {
    let problem = Problems.generateProblem();
    expect(typeof problem.getOperand1()).to.equal("number");
    expect(typeof problem.getOperand2()).to.equal("number");
    expect(typeof problem.getOperation()).to.equal("function");
    expect(typeof problem.getResult()).to.equal("number");
    expect(problem.getOperation()(problem.getOperand1(), problem.getOperand2())).to.equal(problem.getResult());
  });
});
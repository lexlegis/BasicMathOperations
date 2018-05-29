var expect = require("chai").expect;
const Problem = require("../../models/problem");
const Operation = require("../../models/operation");

describe("Dealing with Problem", function() {
  it("Calculates the result for a problem", function() {
    let problem = new Problem(22, -11, Operation.add);
    problem.calculateResult();
    expect(problem.getResult()).to.equal(11);
  });
});
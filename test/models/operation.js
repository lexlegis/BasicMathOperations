var expect = require("chai").expect;
const Operation = require("../../models/operation");

describe("Basic mathematics operations", function() {
  it("Adds two whole numbers", function() {
    expect(Operation.add(-22, 11)).to.equal(-11);
  });
  it("Subtracts two whole numbers", function() {
    expect(Operation.subtract(-22, 11)).to.equal(-33);
  });
  it("Multiplies two whole numbers", function() {
    expect(Operation.multiply(-22, 11)).to.equal(-242);
  });
  it("Divides two whole numbers", function() {
    expect(Operation.divide(-22, 11)).to.equal(-2);
  });
});
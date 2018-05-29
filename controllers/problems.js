const Problem = require("../models/problem");
const Operation = require("../models/operation");

const wholeNumbersRange = 100;
const fractionsRange = 10;
const chancesToGetFraction = 0.25;
const operationArray = [Operation.add, Operation.subtract, Operation.multiply, Operation.divide];

const Problems = {
  generateProblem: () => {
    let problem;
    let firstOperand;
    let secondOperand;
    let firstNumerator;
    let firstDenominator;
    let secondNumerator;
    let secondDenominator;
    let operation;

    // pick operation
    operation = operationArray[Math.floor(Math.random() * 4)];
    
    secondOperand = Math.round(Math.random() * wholeNumbersRange) * Math.pow(-1, Math.round(Math.random()));
    if(operation === Operation.divide) {
        // make sure no devision by 0
        if(secondOperand == 0) {
            secondOperand = (Math.round(Math.random() * wholeNumbersRange) + 1) * Math.pow(-1, Math.round(Math.random()));
        }
        // make sure devision result is a whole number
        firstOperand = secondOperand * Math.round(Math.random() * wholeNumbersRange) * Math.pow(-1, Math.round(Math.random()));
    } else {
        firstOperand = Math.round(Math.random() * wholeNumbersRange) * Math.pow(-1, Math.round(Math.random()));
    }
    
    problem = new Problem(firstOperand, secondOperand, operation);
    problem.calculateResult();
  
    return problem;
  }
}

module.exports = Problems;
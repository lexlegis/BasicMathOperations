const express = require('express');
const Problems = require('../controllers/problems');
const OperationsHistory = require('../controllers/operationsHistory');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect("/index");
});

router.get('/index', (req, res) => {
  res.render("index");
});

router.get('/generate-problem', (req, res) => {
  let problem = Problems.generateProblem();
  problem.oper = problem.getOperation().operationSymbol;
  res.send({operand1: problem.getOperand1(), 
            operand2: problem.getOperand2(), 
            operation: problem.getOperation().operationSymbol, 
            result: problem.getResult()});
});

router.post('/record-answer', (req, res) => {
  const isAnswerCorrect = req.body.isAnswerCorrect === "true" ? true : false;
  const operation = req.body.operation;
  let percentage = OperationsHistory.recordAnswer(isAnswerCorrect, operation);
  res.send({success: true, percentage: percentage});
});

module.exports = router;
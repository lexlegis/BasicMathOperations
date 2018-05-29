let operation;
let result;

function generateProblem() {
  $.get('/generate-problem', (data) => {
    console.log("data: " + JSON.stringify(data))
    document.getElementById("operand1").innerHTML = data.operand1;
    document.getElementById("operator").innerHTML = data.operation;
    document.getElementById("operand2").innerHTML = data.operand2;
    result = data.result;
    operation = data.operation;

    document.getElementById("result").value = "";
    document.getElementById("statistics-info").style.display = "none";
    document.getElementById("checkAnswer").disabled = false;
    document.getElementById("result").style.backgroundColor = "white";
    document.getElementById("result").focus();
  });
}

function checkAnswer() {
    let parsedResult = document.getElementById("result").value;
    let isAnswerCorrect = false;
    if(parseInt(parsedResult) === result) {
        isAnswerCorrect = true;
    }

    $.post("/record-answer", {isAnswerCorrect, operation}, (res) => {
      document.getElementById("checkAnswer").disabled = true;
      document.getElementById("result").style.backgroundColor = isAnswerCorrect ? "#62a6a5" : "#c98972";

      console.log("res: " + JSON.stringify(res));
      document.getElementById("statistics-percentage").innerHTML = Math.round(res.percentage);
      document.getElementById("statistics-info").style.display = "block";
    });
    // history.push({"problem": problemString, "answer": isAnswerCorrect});
    // updateHistory();
    
}

function updateHistory() {
    let counter = 0;
    for(i = 0; i < history.length; i++) {
        if(history[i].answer) {
            counter++;
        }
    }
    document.getElementById("history").innerHTML = counter + "/" + history.length;
}
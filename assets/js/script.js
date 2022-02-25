// Wait for DOM to finish loading before running game
//Get the buttons of the game and add event listeners using...

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition")
})
/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed 
 */
function runGame(gameType) {
    //Created the 2 random numbers
    let num1 = Math.floor(Math.random() * 25) + 1
    let num2 = Math.floor(Math.random() * 25) + 1

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } 
    else if(gameType ==="multiply"){
    displayMultiplyQuestion(num1, num2)
    }
    else if(gameType === "subtract") {
    displaySubtractQuestion(num1, num2)
    }

    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect) {
        alert(`${userAnswer} IS the correct answer!`)
        incrementScore()
    }
    else {
        alert(`${userAnswer} is the incorrect answer, The right answer was ${calculatedAnswer}`)
        incrementScore()
    }

    runGame(calculatedAnswer[1])
}

/**
 * Gets the operand(2 numbers to calculate) and then operator(add, subtract or divde etc)
 * directly from the DOM and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    }
    else if(operator === "x") {
        return[operand1 * operand2, "multiply"];
    }
    else if(operator === "-") {
        return[operand1 - operand2, "subtract"];
    }
    else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM and adds 1 if correct
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current amount of times the user has got the wrong answer and adds 1 for 
 * each mistake
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

// ADD THE 3 QUESTIONS - 

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+"
} 

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-"
} 

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x"
}
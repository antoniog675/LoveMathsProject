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
    }
    else {
        alert(`${userAnswer} is the incorrect answer, The right answer was ${calculatedAnswer}`)
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
        return [operand1 + operand2, "addition"]
    }
    else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// ADD THE 3 QUESTIONS - 

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+"
} 

function displaySubtractQuestion() {

} 

function displayMultiplyQuestion() {

}
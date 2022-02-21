// Wait for DOM to finish loading before running game
//Get the buttons of the game and add event listeners using...

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit")
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// ADD THE 3 QUESTIONS - 

function displayAdditionQuestion() {

} 

function displaySubtractQuestion() {

} 

function displayMultiplyQuestion() {

}
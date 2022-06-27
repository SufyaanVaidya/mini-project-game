const timeLeft = document.querySelector("#timer")
const wordInput = document.querySelector("#word-container")
const scoreInput = document.querySelector("#score-container")


const startGame = document.querySelector("#button-container")
startGame.addEventListener("click", function() {
    startGame.setAttribute("style", "display: none")
    wordInput.style.visibility = "visible"
    displayUnderscore()
    countdown()
});

var time = 60;
var intervalID;
var answers;
var currentWord;

function displayUnderscore() {
 answers = ["_ _ _ _ _", "russell", "zula", "lola"]
 let 
 for (let i = 0; i < answers.length; i++) {
   
 }

}
function countdown() {
    intervalID = setInterval(function name() {
    time--; 
    timeLeft.textContent = time;
      if (time < 1) {
        endGame()
    } 
    }, 1000);
}

function endGame() {
    clearInterval(intervalID);
    scoreInput.style.visibility = "visible"
}



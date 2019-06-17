function start() {
    //This function removes the starting button and brins out the buttons for the player to choose.
    firstDiv = document.getElementById("first-game-div");
    startDiv = document.getElementById("start-button-div");
    firstDiv.classList.remove("d-none");
    firstDiv.classList.add("d-flex");
    startDiv.classList.add("d-none");
    startDiv.classList.remove('d-flex');
}

function go() {
    // this function brings the start button into play as soon as the user makes their choice.
    goButton = document.getElementById("second-game-div");
    goButton.classList.remove("d-none");
    goButton.classList.add("d-flex");

}

function setvar(x) {
    // sets the user choice, depending on the button the user clicks
    userChoice = x;
}

function delayedGo() {
    setTimeout(rockPaperScissors(), 2000);
}

function rockPaperScissors(i) {
    var winText = document.getElementById("end-text");
    var winDiv = document.getElementById("end-div")
    var computerDiv = document.getElementById("computer-choice");
    // shows the text letting the player know who won
    winDiv.classList.remove("d-none");
    winDiv.classList.add("d-flex");
    // takes a random number between 1 and 3
    var computerChoice = Math.floor(Math.random() * 3) + 1;
    var choices = ["nothing", "rock", "paper", "scissors"];
    computerDiv.insertAdjacentHTML("beforeend", "The computer chose " + choices[computerChoice])
        // sets the computer choice from an array of choices for display.
    if (computerChoice === 1) {

    }
    if (userChoice === 1) {
        if (computerChoice === 2) {
            winText.innerText("The winner is: the computer!");
        } else if (computerChoice === 1) {
            winText.innerText("The winner is: No one! It's a Tie!");
        } else {
            winText.innerText("The winner is: you!");
        }
    } else if (userChoice === 2) {
        if (computerChoice === 3) {
            winText.innerText("The winner is: the computer!");
        } else if (computerChoice === 2) {
            winText.innerText("The winner is: No one! It's a Tie!");
        } else {
            winText.innerText("The winner is: you!");
        }
    } else if (userChoice === 3) {
        if (computerChoice === 1) {
            winText.innerText("The winner is: the computer!");
        } else if (computerChoice === 3) {
            winText.innerText("The winner is: No one! It's a Tie!");
        } else {
            winText.innerText("The winner is: you!");
        }
    }
}
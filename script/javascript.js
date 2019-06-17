function start() {
    //This function removes the starting button and brins out the buttons for the player to choose.
    firstDiv = document.getElementById("first-game-div");
    startDiv = document.getElementById("start-button-div");
    firstDiv.classList.remove("d-none");
    firstDiv.classList.add("d-flex");
    startDiv.classList.add("d-none");
    startDiv.classList.remove('d-flex');
    goButton = document.getElementById("second-game-div");
    goButton.classList.remove("d-none");
    goButton.classList.add("d-flex");
}

function go() {
    // this function brings the start button into play as soon as the user makes their choice.


}

function delayedGo() {
    setTimeout(rockPaperScissors(), 2000);
}

function rockPaperScissors() {
    Choice = document.getElementById("userInput").value;
    userChoice = Choice.toLowerCase();
    var winText = document.getElementById("end-text");
    var winDiv = document.getElementById("end-div")
    var computerDiv = document.getElementById("computer-choice");
    // shows the text letting the player know who won
    winDiv.classList.remove("d-none");
    winDiv.classList.add("d-flex");
    // takes a random number between 1 and 3
    var computerChoice = Math.floor(Math.random() * 3) + 1;
    var choices = ["nothing", "rock", "paper", "scissors"];
    computerDiv.innerText = "The computer chose " + choices[computerChoice];
    // sets the computer choice from an array of choices for display. 
    if ((userChoice != "rock") && (userChoice != "paper") && (userChoice != "scissors")) {
        winText.innerText = "Please enter 'Rock', 'paper' or 'scissors'";
    } else {
        if (userChoice === "rock") {
            if (computerChoice === 2) {
                winText.innerText = "The winner is: the computer!";
            } else if (computerChoice === 1) {
                winText.innerText = "The winner is: No one! It's a Tie!";
            } else {
                winText.innerText = "The winner is: you!";
            }
        } else if (userChoice === "paper") {
            if (computerChoice === 3) {
                winText.innerText = "The winner is: the computer!";
            } else if (computerChoice === 2) {
                winText.innerText = "The winner is: No one! It's a Tie!";
            } else {
                winText.innerText = "The winner is: you!";
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === 1) {
                winText.innerText = "The winner is: the computer!";
            } else if (computerChoice === 3) {
                winText.innerText = "The winner is: No one! It's a Tie!";
            } else {
                winText.innerText = "The winner is: you!";
            }
        }
    }
}
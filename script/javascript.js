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
    goButton = document.getElementById("second-game-div");
    goButton.classList.remove("d-none");
    goButton.classList.add("d-flex");

}

function setvar(x) {
    userChoice = x;
}

function rockPaperScissors(i) {
    var winText = document.getElementById("end-text");
    var winDiv = document.getElementById("end-div")
    var computerDiv = document.getElementById("computer-choice");
    winDiv.classList.remove("d-none");
    winDiv.classList.add("d-flex");
    console.log(userChoice);
    var computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {

    }

    console.log(computerChoice);
    if (userChoice === 1) {
        if (computerChoice === 2) {
            winText.insertAdjacentText("beforeend", " the computer!");
        } else if (computerChoice === 1) {
            winText.insertAdjacentText("beforeend", " No one! It's a Tie!");
        } else {
            winText.insertAdjacentText("beforeend", " you!");
        }
    } else if (userChoice === 2) {
        if (computerChoice === 3) {
            winText.insertAdjacentText("beforeend", " the computer!");
        } else if (computerChoice === 2) {
            winText.insertAdjacentText("beforeend", " No one! It's a Tie!");
        } else {
            winText.insertAdjacentText("beforeend", " you!");
        }
    } else if (userChoice === 3) {
        if (computerChoice === 1) {
            winText.insertAdjacentText("beforeend", " the computer!");
        } else if (computerChoice === 3) {
            winText.insertAdjacentText("beforeend", " No one! It's a Tie!");
        } else {
            winText.insertAdjacentText("beforeend", " you!");
        }
    }
}
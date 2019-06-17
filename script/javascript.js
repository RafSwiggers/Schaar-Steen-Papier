function start() {
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

function rockpaperscissors(i) {
    console.log(userChoice);
}
function start() {
    firstDiv = document.getElementById("first-game-div");
    startDiv = document.getElementById("start-button-div");
    firstDiv.classList.remove("d-none");
    firstDiv.classList.add("d-flex");
    startDiv.classList.add("d-none");
    startDiv.classList.remove('d-flex');

    console.log(firstDiv.classList);
}

function go() {
    goButton = document.getElementById("second-game-div");

}
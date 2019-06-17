function start() {
    console.log("works")
    firstDiv = document.getElementById("first-game-div");
    firstDiv.classList.remove("d-none");
    firstDiv.classList.add("d-flex")
    console.log(firstDiv.classList);
}
window.addEventListener("load", function() {
    // Check if this is a manual refresh (not first page load)
    if (performance.navigation.type === 1) {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        setDice(randomNumber1, randomNumber2);
    }
});

// Function to set dice images and determine winner
function setDice(randomNumber1, randomNumber2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
}

// Event listener for button click to roll dice
document.querySelector("button").addEventListener("click", function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber1, randomNumber2);
});

window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Function to play the sound when the Honey image is clicked
function playSound() {
    const badgerSound = new Audio('../../audio/angrybadger.mp3');

    badgerSound.play();

}

// Wait for the DOM to fully load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Get the image by its ID
    const image = document.getElementById('honeyPotImage');

    // Add an event listener to the image
    image.addEventListener('click', playSound);
});

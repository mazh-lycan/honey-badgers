
// IMAGE SLIDER
const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > *');
const imageLength = imageItems.length;
const perView = 3;
let totalScroll = 0;
const delay = 2000;

imageWrapper.style.setProperty('--per-view', perView);

// Clone all images and append them to the end
imageItems.forEach(item => {
    let clone = item.cloneNode(true);
    clone.style.margin = '0';  // Ensure no margin/padding is carried over
    imageWrapper.appendChild(clone);
});

// Keep the last badger appearing before new cycle
for(let i = 0; i < perView; i++) {
    imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
  }

let autoScroll = setInterval(scrolling, delay);

function scrolling() {

    totalScroll++;

    const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + parseFloat(getComputedStyle(imageWrapper).gap);
    imageWrapper.style.transition = '.3s'; 

    // Correct the translateX syntax
    imageWrapper.style.transform = `translateX(-${totalScroll * widthEl}px)`;

    if (totalScroll === imageLength) {
        setTimeout(() => {
            // Reset the scroll position and remove the transition
            imageWrapper.style.transition = 'none';
            imageWrapper.style.transform = 'translateX(0)';
            totalScroll = 0;

            // Restore transition property after a tiny delay
            setTimeout(() => {
                imageWrapper.style.transition = '.3s';
            }, 10); // Small delay to re-enable transition
        }, 300); // Match the transition duration
    }
}

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

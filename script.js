// JavaScript (script.js)
window.onload = function() {
    var thumbnails = document.getElementsByClassName('thumbnail');
    var mainImage = document.getElementById('mainImage');
    var imageTitle = document.getElementById('imageTitle');
    var cycleToggleButton = document.getElementById('cycleToggleButton');
    var currentIndex = 0;
    var interval;

    // Set main image and title to first thumbnail
    mainImage.src = thumbnails[currentIndex].src;
    imageTitle.textContent = "Image " + (currentIndex + 1);

    // Change image and title when thumbnail is clicked
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function() {
            mainImage.src = this.src;
            // Update current index
            for (var j = 0; j < thumbnails.length; j++) {
                if (thumbnails[j].src === this.src) {
                    currentIndex = j;
                    break;
                }
            }
            imageTitle.textContent = "Image " + (currentIndex + 1);
        });
    }

    // Start/stop cycling when cycle toggle button is clicked
    cycleToggleButton.addEventListener('click', function() {
        if (interval) {
            clearInterval(interval);
            interval = null;
            cycleToggleButton.textContent = "Start Cycling";
        } else {
            interval = setInterval(function() {
                currentIndex = (currentIndex + 1) % thumbnails.length;
                mainImage.src = thumbnails[currentIndex].src;
                imageTitle.textContent = "Image " + (currentIndex + 1);
            }, 3000);
            cycleToggleButton.textContent = "Stop Cycling";
        }
    });
}
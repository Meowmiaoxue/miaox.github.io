document.addEventListener("DOMContentLoaded", () => {
    // Select all images inside .gallery
    const images = document.querySelectorAll(".gallery .img img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);

    // Create close button
    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    lightbox.appendChild(closeButton);

    // Create navigation arrows
    const prevButton = document.createElement("div");
    prevButton.classList.add("prev");
    prevButton.innerHTML = "&#10094;"; // Left arrow
    lightbox.appendChild(prevButton);

    const nextButton = document.createElement("div");
    nextButton.classList.add("next");
    nextButton.innerHTML = "&#10095;"; // Right arrow
    lightbox.appendChild(nextButton);

    let currentIndex = 0; // Stores the index of the currently opened image

    // Function to open Lightbox
    function openLightbox(index) {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = images[currentIndex].src;
    }

    // Function to close Lightbox
    function closeLightbox() {
        lightbox.style.display = "none";
    }

    // Function to change image (left/right)
    function changeImage(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = images.length - 1; // Loop to last image
        } else if (currentIndex >= images.length) {
            currentIndex = 0; // Loop to first image
        }

        lightboxImg.src = images[currentIndex].src;
    }

    // Add click event listeners to all images
    images.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
    });

    // Close Lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target === closeButton) {
            closeLightbox();
        }
    });

    // Add click event for navigation arrows
    prevButton.addEventListener("click", () => changeImage(-1));
    nextButton.addEventListener("click", () => changeImage(1));

    // Keyboard navigation support
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            changeImage(-1);
        } else if (e.key === "ArrowRight") {
            changeImage(1);
        } else if (e.key === "Escape") {
            closeLightbox();
        }
    });
});

// JavaScript for aligning .description with the bottom of .gallery
window.addEventListener("scroll", () => {
    const description = document.querySelector(".description");
    const gallery = document.querySelector(".gallery");

    const galleryBottom = gallery.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    // Adjust .description's position
    if (galleryBottom <= viewportHeight) {
        description.style.position = "absolute";
        description.style.bottom = "0";
        description.style.top = "auto";
    } else {
        description.style.position = "sticky";
        description.style.top = "20px";
        description.style.bottom = "auto";
    }
});
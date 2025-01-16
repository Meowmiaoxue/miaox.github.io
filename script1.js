// JavaScript 实现放大镜大图功能
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".img img");
    const overlay = document.createElement("div");
    overlay.classList.add("zoom-overlay");
    document.body.appendChild(overlay);

    const zoomedImage = document.createElement("img");
    overlay.appendChild(zoomedImage);

    // 点击图片显示放大镜
    images.forEach((img) => {
        img.addEventListener("click", () => {
            zoomedImage.src = img.src;
            overlay.style.display = "flex";
        });
    });

    // 点击放大镜关闭
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});

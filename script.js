function updateTime() {
    const date = new Date();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    document.getElementById('timeHere').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000); // Update every second
updateTime(); 
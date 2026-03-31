function updateWatch() {
    const now = new Date();
    
    // Format Time
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('time').innerText = `${hours}:${minutes}`;
    
    // Format Date
    const options = { month: 'short', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString('en-US', options).toUpperCase();
}

// Update every second
setInterval(updateWatch, 1000);
updateWatch(); // Run immediately
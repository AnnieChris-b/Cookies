function displayCookies() {
    const cookies = document.cookie.split("; ");
    const displayDiv = document.getElementById("userInfo");
    displayDiv.innerHTML = "<h2>Your Registration Info:</h2>";

    console.log("Cookies Read:", document.cookie); // Debug log

    cookies.forEach(cookie => {
        if (cookie.includes("=")) {
            const [name, value] = cookie.split("=");
            if (name && value) {
                displayDiv.innerHTML += `<p><strong>${decodeURIComponent(name)}</strong>: ${decodeURIComponent(value)}</p>`;
            }
        }
    });
}

window.onload = displayCookies;

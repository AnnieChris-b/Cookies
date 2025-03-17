function saveAndRedirect() {
    const formFields = ["username", "password", "passwordVerify", "firstName", "lastName", "email", "phoneNumber"];
    formFields.forEach(field => {
        const value = document.getElementById(field).value.trim();
        if (value) {
            document.cookie = `${field}=${encodeURIComponent(value)}; path=/`;
        }
    });

    const newsletter = document.querySelector('input[name="newsletter"]:checked');
    if (newsletter) {
        document.cookie = `newsletter=${newsletter.value}; path=/`;
    }

    console.log("Cookies Saved:", document.cookie); // Debug log

    window.location.href = "confirm.html";
    return false;
}

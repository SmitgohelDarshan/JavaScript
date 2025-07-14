const dobField = document.getElementById("dob");
const today = new Date().toISOString().split("T")[0];
dobField.max = today;

function validateForm() {
    
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;

    if (username === "") {
        alert("Username is required.");
        return false;
    }
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }   
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (e.g., example@domain.com).");
        return false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number (e.g., 1234567890).");
        return false;
    }

    if (dob === "") {
        alert("Date of Birth is required.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
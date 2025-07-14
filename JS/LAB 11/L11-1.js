//date validation is crazy!
const dateField = document.getElementById("dob");
const today = new Date().toISOString().split("T")[0];
dateField.max = today;

function checkValidation() {
    const namefield = document.getElementById("FullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById('mobile').value.trim().toString();
    const address = document.getElementById('address').value.trim();
    const nationality = document.getElementById('nationality').value.trim();
    const dob = document.getElementById("dob").value;
    const genderMale = document.querySelector('input[name="gender"]:checked');
    const degree = document.getElementById('degree').value;

    if (namefield === "") { 
        alert("Enter Name!");
        return false;
    }

    else if (namefield.length < 3) {
        alert("Name must be at least 3 characters");
        return false;
    }

    if (email === "") {
        alert("Enter Email!");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (e.g., example@domain.com).");
        return false;
    }

    if (mobile === "") {
        alert("Enter The Mobile Number!");
        return false;
    }

    else if (mobile.length < 10) {
        alert("Enter 10 digits mobile number!");
        return false;
    }

    else if(isNaN(mobile)){
        alert("Enter Valid Mobile Number!");
        return false;
    }
    
    else if(mobile.length > 10){
        alert("Mobile Number can't be greater than 10 digits");
        return false;
    }

    if (address === "") {
        alert("Enter the address!");
        return false;
    }

    if (nationality === "") {
        alert("Enter nationality!");
        return false;
    }

    if(dob === ""){
        alert("Enter dob!");
        return false;
    }

    if (!genderMale) {
        alert("Please select your gender.");
        return false;
    }

    if(degree === "select"){ //crazy!
        alert("Select your degree!");
        return false;
    }

    return true;
}

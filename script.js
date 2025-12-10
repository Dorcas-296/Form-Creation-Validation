form.addEventListener("DOMContentLoaded" function() {
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
feedbackDiv.innerHTML = messages.join("<br");

form.addEventListener("submit" function(event)) {
    event.preventDefault();

    //Initialize validation variable
    let isValid = true;
    let message = [];
    
    //validation for username
const usernameInput = document.getElementById("Username");
const usernameError = document.getElementById("usernameError");
if (usernameInput.value.trim.length <3) {
    isValid = false;
    message.push("username must be at least three characters long.");
}

//validation for email
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push("Email must contain both '@' and '.' characters.");
}

//validation for password
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
if (passwordInput.value.length <8) {
    isValid = false;
    message.push("password must conatain at least 8 length");
}

//make feedback div visible
feedbackDiv.style.Display = "block";

if (isValid) {
    feedbackDiv.textContent = "Registration Successful!";
    feedbackDiv.style.color = "#dc3545";
} else {
    feedbackDiv.innerHTML = messages.join(<br>");
    feedbackDiv.style.color
}
}
})
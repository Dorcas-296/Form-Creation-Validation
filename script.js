document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    //Initialize validation variable
    let isValid = true;
    let messages = [];
    
    //validation for username
const usernameInput = document.getElementById("username");
if (usernameInput.value.trim().length <3) {
    isValid = false;
    messages.push("Username must be at least three characters long.");
}

//validation for email
const emailInput = document.getElementById("email");
if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
    isValid = false;
    messages.push("Email must contain both '@' and '.' characters.");
}

//validation for password
const passwordInput = document.getElementById("password");
if (passwordInput.value.length <8) {
    isValid = false;
    messages.push("Password must contain at least 8 length");
}

//make feedback div visible
feedbackDiv.style.display = "block";

if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
} else {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
}
});
});
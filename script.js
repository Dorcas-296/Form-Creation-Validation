document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    //Retrieve and trim user input
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    //Initialize validation variable
    let isValid = true;
    let messages = [];
    
    //validation for username
if (username.length <3) {
    isValid = false;
    messages.push("Username must be at least three characters long.");
}

//validation for email
if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push("Email must contain both '@' and '.' characters.");
}

//validation for password
if (password.length <8) {
    isValid = false;
    messages.push("Password must contain at least 8 length");
}

//Display feedback
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
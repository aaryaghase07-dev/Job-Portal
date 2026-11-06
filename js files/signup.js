let signupForm = document.querySelector("#signupForm");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

let errorMsg = document.querySelector(".error-msg");
let successMsg = document.querySelector(".success-msg");


signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    // Clear previous error
    errorMsg.innerText = "";
    confirmPassword.classList.remove("input-error");

    // Check password matching
    if (password.value !== confirmPassword.value) {

        errorMsg.innerText = "Passwords do not match!";
        confirmPassword.classList.add("input-error");

        return;
    }

    // Show success message
    successMsg.classList.add("show");

    // Reset form
    signupForm.reset();

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);

});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateUserName();
  validateEmailAddress();
  validatePasswordError();
  validateConfirmPassword();
});

var userNameError = document.getElementById("user-error-message");
function validateUserName() {
  if (userInput.value === "" || userInput.value.length < 3) {
    userNameError.style.display = "block";
    userInput.style.border = "1px solid red";
  } else {
    userNameError.style.display = "none";
    userInput.style.border = "1px solid green";
  }
}

var emailAddressError = document.getElementById("email-error-message");
function validateEmailAddress() {
  let email = emailInput.value;
  var re = /\S+@\S+\.\S+/;
  let isEmailValid = re.test(email);

  if (isEmailValid === false) {
    emailAddressError.style.display = "block";
    emailInput.style.border = "1px solid red";
  } else {
    emailAddressError.style.display = "none";
    emailInput.style.border = "1px solid green";
  }
}

var passwordError = document.getElementById("password-error-message");
function validatePasswordError() {
  if (passwordInput.value.length <= 6 || passwordInput.value.length == "") {
    passwordError.style.display = "block";
    passwordInput.style.border = "1px solid red";
  } else {
    passwordError.style.display = "none";
    passwordInput.style.border = "1px solid green";
  }
}

var confirmPasswordError = document.getElementById("confirm-error-message");
function validateConfirmPassword() {
  if (confirmInput.value.length <= 6 || confirmInput.value.length == "") {
    confirmPasswordError.style.display = "block";
    confirmInput.style.border = "1px solid red";
  } else if (passwordInput.value != confirmInput.value) {
    confirmPasswordError.style.display = "block";
    confirmPasswordError.innerHTML = "password do not match";
    confirmInput.style.border = "1px solid red";
  } else {
    confirmPasswordError.style.display = "none";
    confirmInput.style.border = "1px solid green";
  }
}

var container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
var form = document.createElement("form");
form.classList.add("form-sample");

container.appendChild(form);

var heading = document.createElement("h1");
heading.innerHTML = "Register with us";
form.appendChild(heading);

var breakline = document.createElement("br");
form.appendChild(breakline);

//----USERNAME----
var userDiv = document.createElement("div");
userDiv.classList.add("label");
form.appendChild(userDiv);

var userLabel = document.createElement("label");
userLabel.innerHTML = "Username";
userDiv.appendChild(userLabel);

var breakline = document.createElement("br");
userDiv.appendChild(breakline);

var userInput = document.createElement("input");
userInput.classList.add("input-box");
userInput.setAttribute("type", "text");
userInput.setAttribute("id", "username");
userInput.placeholder = "Enter username";
userDiv.appendChild(userInput);

var errorDiv = document.createElement("div");
errorDiv.classList.add("error-message");
errorDiv.id = "user-error-message";
errorDiv.innerHTML = "username must be atleast 3 characters";
userDiv.appendChild(errorDiv);

var breakline = document.createElement("br");
userDiv.appendChild(breakline);
var breakline = document.createElement("br");
userDiv.appendChild(breakline);

//---EMAIL ADDRESS---

var emailDiv = document.createElement("div");
emailDiv.classList.add("label");
form.appendChild(emailDiv);

var emailLabel = document.createElement("label");
emailLabel.classList.add("email");
emailLabel.innerHTML = "Email";
emailDiv.appendChild(emailLabel);

var breakline = document.createElement("br");
emailDiv.appendChild(breakline);

var emailInput = document.createElement("input");
emailInput.classList.add("input-box");
emailInput.setAttribute("type", "text");
emailInput.setAttribute("id", "email-address");
emailInput.placeholder = "Enter email";
emailDiv.appendChild(emailInput);

var errorDiv = document.createElement("div");
errorDiv.classList.add("error-message");
errorDiv.id = "email-error-message";
errorDiv.innerHTML = "valid email is required";
emailDiv.appendChild(errorDiv);

var breakline = document.createElement("br");
emailDiv.appendChild(breakline);
var breakline = document.createElement("br");
emailDiv.appendChild(breakline);

//---PASSWORD---

var passwordDiv = document.createElement("div");
passwordDiv.classList.add("label");
form.appendChild(passwordDiv);

var passwordLabel = document.createElement("label");
passwordLabel.classList.add("password");
passwordLabel.innerHTML = "Password";
passwordDiv.appendChild(passwordLabel);

var breakline = document.createElement("br");
passwordDiv.appendChild(breakline);

var passwordInput = document.createElement("input");
passwordInput.classList.add("input-box");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.placeholder = "Enter password";
passwordDiv.appendChild(passwordInput);

var errorDiv = document.createElement("div");
errorDiv.classList.add("error-message");
errorDiv.id = "password-error-message";
errorDiv.innerHTML = "valid email is required";
passwordDiv.appendChild(errorDiv);

var breakline = document.createElement("br");
passwordDiv.appendChild(breakline);

var breakline = document.createElement("br");
passwordDiv.appendChild(breakline);

//----CONFIRM PASSWORD---

var confirmDiv = document.createElement("div");
confirmDiv.classList.add("label");
form.appendChild(confirmDiv);

var confirmLabel = document.createElement("label");
confirmLabel.classList.add("confirm-password");
confirmLabel.innerHTML = "Confirm password";
confirmDiv.appendChild(confirmLabel);

var breakline = document.createElement("br");
confirmDiv.appendChild(breakline);

var confirmInput = document.createElement("input");
confirmInput.classList.add("input-box");
confirmInput.setAttribute("type", "password");
confirmInput.setAttribute("id", "password");
confirmInput.placeholder = "Enter password again";
confirmDiv.appendChild(confirmInput);

var errorDiv = document.createElement("div");
errorDiv.classList.add("error-message");
errorDiv.id = "confirm-error-message";
errorDiv.innerHTML = "password2 is required";
confirmDiv.appendChild(errorDiv);

var breakline = document.createElement("br");
confirmDiv.appendChild(breakline);
var breakline = document.createElement("br");
confirmDiv.appendChild(breakline);

//---Submit---

var submitelement = document.createElement("input");
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("id", "submit");
submitelement.setAttribute("value", "Submit");
form.appendChild(submitelement);

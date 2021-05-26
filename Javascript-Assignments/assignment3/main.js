function showPassword() {
  var inputPass = document.getElementById("password");
  var statusPass = document.getElementById("eyeicon");
  if (inputPass.type == "password") {
    inputPass.type = "text";
    statusPass.className = "fa fa-eye";
  } else {
    inputPass.type = "password";
    statusPass.className = "fa fa-eye-slash";
  }
}

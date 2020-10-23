function checkName(){
  var name = document.getElementById("fname");
  var check = document.getElementById("check");
  var regExpName = /^[A-Z][a-z]{2,19}\s[A-Z][a-z]{3,19}$/;

  if (regExpName != (name.value)){
    check.setCustomValidity("shdihd");
  } else {
    check.setCustomValidity=('');
  }						
}














var email = document.getElementById("email")
  , confirmemail = document.getElementById("confirmemail");

function validateEmail(){
  if(email.value != confirmemail.value) {
    confirmemail.setCustomValidity("Emails Don't Match");
  } else {
    confirmemail.setCustomValidity('');
  }
}

email.onchange = validateEmail;
confirmemail.onkeyup = validateEmail;


var password = document.getElementById("password")
  , confirmpassword = document.getElementById("confirmpassword");

function validatePassword(){
  if(password.value != confirmpassword.value) {
    confirmpassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmpassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmpassword.onkeyup = validatePassword;




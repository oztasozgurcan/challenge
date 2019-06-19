function validate(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var isEmailValid, isPasswordValid = false;

    function emailValidated(){
        if(email.match('\w+@\w+\.com')) {
            isEmailValid = true;
        } else {
            isEmailValid = false;
        }
    }
    emailValidated();

    function passwordValidated(){
        if(!password.match('')) {
            isPasswordValid = true;
        } else {
            isPasswordValid = false;
        }
    }
    passwordValidated();

    if(isEmailValid && isPasswordValid){
        document.getElementById('submit-input').disabled = false;
    } else {
        document.getElementById('submit-input').disabled = true;
    }

}
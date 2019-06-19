const login_form = document.getElementById('login-form');
const login_email = document.getElementById('email-input');
const login_password = document.getElementById('password-input');
const login_submit_button = document.getElementById('submit-input');
var isValidPassword;
var isValidEmail;

if (login_email && login_password) {
    login_email.addEventListener('keyup', function (event) {
        isValidEmail = login_email.checkValidity();
        isValidPassword = login_password.checkValidity();

        if (isValidEmail && isValidPassword) {
            login_submit_button.disabled = false;
        } else {
            login_submit_button.disabled = true;
        }
    });
}

if (login_submit_button) {
    login_submit_button.addEventListener('click', function (event) {
        login_form.submit();
    });
}


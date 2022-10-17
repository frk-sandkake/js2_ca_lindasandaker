import {USER_SIGNUP_URL} from './settings/api';
import {checkLength, emailValid, matchPasswords} from './utils/validation';
import {setError, setSuccess} from './utils/messages'

const signupForm = document.getElementById('signupForm');
const userName = document.getElementById('userName');
const email = document.getElementById('emailSignup');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let isUserName = false;
  if (checkLength(userName.value, 2)) {
    setSuccess(userName);
    isUserName = true;
  } else {
    setError(userName, 'Choose your username');
  }

  let isEmail = false;
  if (checkLength(email.value, 1)) {
    setSuccess(email);
    isEmail = true;
  } else {
    setError(email, 'Remember the email!');
  }

  let isEmailValid = false;
  if (checkLength(email.value, 1) && emailValid(email.value) === true ) {
    setSuccess(email);
    isEmailValid = true;
  } else if (checkLength(email.value, 1) && emailValid(email.value) !== true ) {
    setError(email, 'Noroff emails only!');
  }

  let isPassword = false;
  if (checkLength(password.value, 8)) {
    setSuccess(password);
    isPassword = true;
  } else {
    setError(password, 'Minimum 8 character!');
  }

  let isPasswordConfirm = false;
  if (checkLength(confirmPassword.value, 8)) {
    setSuccess(confirmPassword);
    isPasswordConfirm = true;
  } else {
    setError(confirmPassword, 'Remember to confirm password!');
  }

  let isPasswordsMatch = false;
  isPasswordsMatch = matchPasswords(password.value, confirmPassword.value);
  if (isPasswordsMatch) {
    setSuccess(confirmPassword);
    isPasswordsMatch = true;
  } else {
    setError(confirmPassword, "Sorry, passwords doesn't match");
  }

  let isFormValid = isUserName && isEmail && isEmailValid
    && isPassword && isPasswordConfirm && isPasswordsMatch;

  if (isFormValid) {
    console.log('Validation succeeded!!');
    const userData = {
      "name": userName.value,
      "email": email.value,
      "password": password.value
    }

    const USER_REGISTRATION_URL_ENDPOINT = USER_SIGNUP_URL;

    (async function userSignUp() {
      try {
        const response = await fetch(USER_REGISTRATION_URL_ENDPOINT, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
          location.replace("/login.html")
        } else {
          console.log(`Post request failed ${data.message}`);
        }

      } catch (err) {
        console.log("Error: ", err.message);
      }
    })();
  } else {
    console.log('Validation failed..');
  }
});

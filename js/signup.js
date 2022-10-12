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
    console.log('More then 1 character');
    setError(userName, 'Choose your username');
  }

  let isEmail = false;
  if (checkLength(email.value, 1)) {
    setSuccess(email);
    isEmail = true;
  } else {
    console.log('Please enter email');
    setError(email, 'Remember the email!');
  }

  let isEmailValid = false;
  if (checkLength(email.value, 1) && emailValid(email.value) === true ) {
    setSuccess(email);
    isEmailValid = true;
  } else if (checkLength(email.value, 1) && emailValid(email.value) !== true ) {
    console.log('Please enter only Noroff email');
    setError(email, 'Noroff emails only!');
  }

  let isPassword = false;
  if (checkLength(password.value, 8)) {
    setSuccess(password);
    isPassword = true;
  } else {
    console.log('password must be at least 8 character');
    setError(password, 'Minimum 8 character!');
  }

  let isPasswordConfirm = false;
  if (checkLength(confirmPassword.value, 8)) {
    setSuccess(confirmPassword);
    isPasswordConfirm = true;
  } else {
    console.log('confirm password must be at least 8 character');
    setError(confirmPassword, 'Remember to confirm password!');
  }

  let isPasswordsMatch = false;
  isPasswordsMatch = matchPasswords(password.value, confirmPassword.value);
  if (isPasswordsMatch) {
    setSuccess(confirmPassword);
    isPasswordsMatch = true;
  } else {
    console.log("passwords don't match");
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
          console.log('Post request successful!');
          location.replace("/")
        } else {
          console.log(`Post request failed ${data.message}`);
        }

      } catch (e) {
        console.log("Error: ", e.message);
      }
    })();
  } else {
    console.log('Validation failed..');
  }
});

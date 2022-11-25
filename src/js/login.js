import { USER_LOGIN_URL } from './settings/api';
import { checkLength, emailValid } from './utils/validation';
import { setError, setSuccess, generateErrorMessage } from './utils/messages';
import { saveUserToStorage, saveToken } from './utils/storage';
import { userLogIn } from './utils/login-user';

const loginForm = document.getElementById('loginForm');
const email = document.getElementById('emailLogin');
const password = document.getElementById('password');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isEmail = false;
    if (checkLength(email.value, 1)) {
      setSuccess(email);
      isEmail = true;
    } else {
      setError(email, 'Remember the email!');
    }

    let isEmailValid = false;
    if (checkLength(email.value, 1) && emailValid(email.value) === true) {
      setSuccess(email);
      isEmailValid = true;
    } else if (checkLength(email.value, 1) && emailValid(email.value) !== true) {
      setError(email, 'Noroff emails only!');
    }

    let isPassword = false;
    if (checkLength(password.value, 8)) {
      setSuccess(password);
      isPassword = true;
    } else {
      setError(password, 'Minimum 8 character!');
    }

    const isFormValid = isEmail && isEmailValid && isPassword;

    if (isFormValid) {
      const userData = {
        email: email.value,
        password: password.value,
      };
      const USER_LOGIN_URL_ENDPOINT = `${USER_LOGIN_URL}`;
      userLogIn(userData, USER_LOGIN_URL_ENDPOINT)
        .then((logInUserData) => {
          saveToken(logInUserData.accessToken);
          saveUserToStorage(logInUserData.userToSave);
          location.href = '../index.html';
        }).catch((errMessage) => {
          generateErrorMessage(loginForm, `catchError: ${errMessage}`);
        });
    } else {
      generateErrorMessage(loginForm, 'Did you forget something? :)');
    }
  });
}

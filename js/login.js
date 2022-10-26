import { USER_LOGIN_URL } from "./settings/api";
import { checkLength, emailValid } from "./utils/validation";
import { setError, setSuccess } from "./utils/messages";
import { saveUserToStorage, saveToken } from "./utils/storage";

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("emailLogin");
const password = document.getElementById("password");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isEmail = false;
    if (checkLength(email.value, 1)) {
      setSuccess(email);
      isEmail = true;
    } else {
      setError(email, "Remember the email!");
    }

    let isEmailValid = false;
    if (checkLength(email.value, 1) && emailValid(email.value) === true) {
      setSuccess(email);
      isEmailValid = true;
    } else if (
      checkLength(email.value, 1) &&
      emailValid(email.value) !== true
    ) {
      setError(email, "Noroff emails only!");
    }

    let isPassword = false;
    if (checkLength(password.value, 8)) {
      setSuccess(password);
      isPassword = true;
    } else {
      setError(password, "Minimum 8 character!");
    }

    let isFormValid = isEmail && isEmailValid && isPassword;

    if (isFormValid) {
      const userData = {
        email: email.value,
        password: password.value,
      };
      const USER_LOGIN_URL_ENDPOINT = `${USER_LOGIN_URL}`;

      (async function userLogIn() {
        const response = await fetch(USER_LOGIN_URL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          const data = await response.json();
          const { accessToken, name, email } = data;

          saveToken(accessToken);

          const userToSave = {
            name: name,
            email: email,
          };
          saveUserToStorage(userToSave);
          location.href = "/";
        } else {
          const err = await response.json();
          const message = `Sorry, ${err} `;
          console.log(`Post request failed ${err.message}`);
          throw new Error(message);
        }
      })().catch((err) => {
        console.log("Error: ", err.message);
      });
    } else {
      console.log("Validation failed..");
    }
  });
}

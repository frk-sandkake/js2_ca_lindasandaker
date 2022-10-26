export const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorMessage = inputControl.querySelector("[data-input-error-message]");

  errorMessage.innerHTML = message;
  errorMessage.classList.remove("hidden");
};

export const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const successDisplay = inputControl.querySelector(
    "[data-input-error-message]"
  );

  successDisplay.innerHTML = "";
  successDisplay.classList.add("hidden");
};

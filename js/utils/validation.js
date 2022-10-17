function checkLength(value, len) {
  return value.trim().length >= len;
}

function emailValid(email) {
  const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;
  return !!email.match(regEx);
}

function matchPasswords(password, confirmPassword) {
  if (!password) {
    return false;
  }
  if (!confirmPassword) {
    return false;
  }
  return password === confirmPassword;
}

export {checkLength, emailValid, matchPasswords}

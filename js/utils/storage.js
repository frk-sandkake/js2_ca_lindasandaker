const tokenKey = "token";
const userKey = "user";

function saveToken(token) {
  console.log("token: ", token);
  console.log("tokenKey: ", tokenKey);
  saveDataToStorage(tokenKey, token);
}

function getToken() {
  const value = localStorage.getItem(tokenKey);
  if (value) {
    return JSON.parse(value);
  } else {
    return null
  }
}

function saveUserToStorage(user) {
  saveDataToStorage(userKey, user);
}

function getUserNameStorage() {
  const user = getDataFromStorage(userKey);
  if (userKey) {
    return user.name
  } else {
    return null
  }
}

function saveDataToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getDataFromStorage(key) {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return []
  }
}

function clearDataFromStorage() {
  localStorage.clear();
}

export { saveToken, getToken, saveUserToStorage,
  getUserNameStorage, clearDataFromStorage}

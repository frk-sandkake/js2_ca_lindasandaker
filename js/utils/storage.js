const tokenKey = 'token';
const userKey = 'user';

function saveDataToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function saveToken(token) {
    saveDataToStorage(tokenKey, token);
}

function getToken() {
    const value = localStorage.getItem(tokenKey);
    if (value) {
        return JSON.parse(value);
    }
    return null;
}

function saveUserToStorage(user) {
    saveDataToStorage(userKey, user);
}

function getDataFromStorage(key) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return [];
}

function getUserNameStorage() {
    const user = getDataFromStorage(userKey);
    if (userKey) {
        return user.name;
    }
    return null;
}

function clearDataFromStorage() {
    localStorage.clear();
}

export { saveToken, getToken, saveUserToStorage, getUserNameStorage, clearDataFromStorage };

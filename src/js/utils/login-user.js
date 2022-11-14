async function userLogIn(userData, USER_LOGIN_URL_ENDPOINT) {
    const response = await fetch(USER_LOGIN_URL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const jsonResponse = await response.json();
    if (jsonResponse.accessToken) {

        const userToSave = {
            name: jsonResponse.name,
            email: jsonResponse.email
        };

        const logInUserData = {
            userToSave,
            accessToken: jsonResponse.accessToken
        };
        return logInUserData;

    } else {
        const errMessage = `I'm sorry but ${jsonResponse.errors[0].message}`;
        throw Error(errMessage);
    }
}

export { userLogIn }
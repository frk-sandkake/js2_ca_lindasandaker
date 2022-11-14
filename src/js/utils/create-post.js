async function createPost(token, postData, apiPostUrl) {
    const response = await fetch(apiPostUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
    });
    const postJSON = await response.json();
    if (postJSON.id) {
        return postJSON;
    } else {
        throw Error(`I'm sorry but ${postJSON.errors[0].message}`);
    }
}

export { createPost }
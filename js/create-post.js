import { CREATE_POST_URL } from './settings/api';
import { getToken } from './utils/storage';
import { checkLength } from './utils/validation';
import { generateErrorMessage, setError, setSuccess } from './utils/messages';

const createPostForm = document.getElementById('createPostForm');
const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postContent');

createPostForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isPostTitle = false;
    if (checkLength(postTitle.value, 1)) {
        setSuccess(postTitle);
        isPostTitle = true;
    } else {
        setError(postTitle, 'Please add an title');
    }

    let isPostContent = false;
    if (checkLength(postContent.value, 5)) {
        setSuccess(postContent);
        isPostContent = true;
    } else {
        setError(postContent, "Don't forget your message");
    }

    const isPostValid = isPostTitle && isPostContent;
    if (isPostValid) {
        const postData = {
            title: postTitle.value,
            body: postContent.value,
        };
        const accessToken = getToken();

        (async function createPost() {
            const response = await fetch(CREATE_POST_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(postData),
            });

            const postJSON = await response.json();

            if (response.ok) {
                window.reload();
            } else {
                generateErrorMessage(createPostForm, `I'm sorry but ${postJSON.errors[0].message}`);
                throw new Error(`I'm sorry but ${postJSON.errors[0].message}`);
            }
        })().catch((err) => {
            generateErrorMessage(createPostForm, `${err}`);
        });
    } else {
        generateErrorMessage(createPostForm, 'Did you forget something? :)');
    }
});

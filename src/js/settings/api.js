import { getUserNameStorage } from '../utils/storage';

const userName = getUserNameStorage();

const API_URL_BASE = 'https://nf-api.onrender.com/';

/* AUTH */
const USER_SIGNUP_URL = `${API_URL_BASE}api/v1/social/auth/register`;
const USER_LOGIN_URL = `${API_URL_BASE}api/v1/social/auth/login`;

/* POSTS */
const CREATE_POST_URL = `${API_URL_BASE}api/v1/social/posts`;
const EDIT_POST_URL = `${API_URL_BASE}api/v1/social/posts`;
const DELETE_POST_URL = `${API_URL_BASE}api/v1/social/posts`;
const GET_POSTS_URL = `${API_URL_BASE}api/v1/social/posts`;
const SORT_DESC_POSTS_URL = `${API_URL_BASE}api/v1/social/posts?sort=created&sortOrder=desc`;
const SORT_ASC_POSTS_URL = `${API_URL_BASE}api/v1/social/posts?sort=created&sortOrder=asc`;
const GET_POST_ID_URL = `${API_URL_BASE}api/v1/social/posts`;
// const GET_USER_PROFILE_URL = API_URL_BASE + `api/v1/social/profiles/${userName}`;
const GET_USER_POSTS_URL = `${API_URL_BASE}api/v1/social/profiles/${userName}?_posts=true`;

export {
    API_URL_BASE,
    USER_SIGNUP_URL,
    USER_LOGIN_URL,
    CREATE_POST_URL,
    EDIT_POST_URL,
    DELETE_POST_URL,
    GET_POSTS_URL,
    SORT_DESC_POSTS_URL,
    SORT_ASC_POSTS_URL,
    GET_POST_ID_URL,
    // GET_USER_PROFILE_URL,
    GET_USER_POSTS_URL,
};

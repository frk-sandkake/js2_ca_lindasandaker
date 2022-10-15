import {getUserNameStorage} from "../utils/storage"
const userName = getUserNameStorage();


const API_URL_BASE = 'https://nf-api.onrender.com/'

/* AUTH */
const USER_SIGNUP_URL = API_URL_BASE + 'api/v1/social/auth/register'
const USER_LOGIN_URL = API_URL_BASE + 'api/v1/social/auth/login'

/* POSTS */
const CREATE_POST_URL = API_URL_BASE + 'api/v1/social/posts'
const GET_POSTS_URL = API_URL_BASE + 'api/v1/social/posts'
const GET_PROFILE_URL = API_URL_BASE + `api/v1/social/profiles/${userName}`


export {
  API_URL_BASE,
  USER_SIGNUP_URL,
  USER_LOGIN_URL,
  CREATE_POST_URL,
  GET_POSTS_URL,
  GET_PROFILE_URL
}
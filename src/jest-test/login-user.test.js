import {expect, jest, test} from '@jest/globals';
import { userLogIn } from "../js/utils/login-user";

const MOK_USER_DATA = {
    email: '',
    password: ''
};

const MOK_API_URL = '';

const MOK_RESPONSE = {
    'name': 'linsan',
    'email': 'linsan@noroff.no',
    'banner': null,
    'avatar': null,
    'accessToken': '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMyLCJuYW1lIjoibGluc2FuIiwiZW1haWwiOiJsaW5zYW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2ODQzNzMzN30.4F36qkQpszBhgy6O7w-1HuX3UIPLGvd61cYluQi1ePA"',
}

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOK_RESPONSE)
}));

beforeEach(() => {
    fetch.mockClear();
});

test('log in user with credentials', async () => {
    const response = await userLogIn(MOK_USER_DATA, MOK_API_URL);
    const userAccessToken = response.accessToken;
    expect(userAccessToken).not.toBeUndefined();
})
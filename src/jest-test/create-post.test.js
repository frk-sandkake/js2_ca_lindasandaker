import { expect, jest, test } from '@jest/globals';
import { createPost } from '../js/utils/create-post';

const MOK_TOKEN = '';

const MOK_POST_DATA = {
  title: 'Test title for jest',
  body: 'Test body for jest',
};

const MOK_API_URL = '';

const MOK_RESPONSE = {
  id: 473,
};

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOK_RESPONSE),
}));

beforeEach(() => {
  fetch.mockClear();
});

it('create post function', async () => {
  const response = await createPost(MOK_TOKEN, MOK_POST_DATA, MOK_API_URL);
  const createdPostId = response.id;
  expect(createdPostId).not.toBeUndefined();
  console.log('Post id: ', createdPostId);
});

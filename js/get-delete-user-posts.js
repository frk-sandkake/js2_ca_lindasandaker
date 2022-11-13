import moment from 'moment';
import { GET_USER_POSTS_URL, DELETE_POST_URL } from './settings/api';
import { getToken } from './utils/storage';
import { generateErrorMessage } from './utils/messages';

const accessToken = getToken();
if (!accessToken) {
  location.href = '/login.html';
}

const myPostItems = document.getElementById('myPostItems');
const deleteUserPostBtn = document.getElementsByClassName('delete-post-btn');

async function getMyPosts() {
  const response = await fetch(GET_USER_POSTS_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const userJSON = await response.json();

  if (response.ok) {
    const { posts } = userJSON;

    if (!posts.length) {
      generateErrorMessage(myPostItems, 'Sorry, no posts found..');
    } else {
      const htmlPostsFeed = posts
          .map((post) => {
            const {
              id, owner, title, body, created,
            } = post;
            const createdWhen = moment(created).fromNow();

            return `
                 <li class="m-4 col-span-1 p-4 border-fuchsia-700 border-2 border-b-4 rounded shadow focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600">
                    <div class="grid grid-cols-5">
                        <div role="img" class="col-span-5 ">
                            <img src="./uploads/avatar2.jpg" class="m-2 inline-block rounded-full w-[2rem] h-[2rem]" alt="Avatar">
                            <span role="presentation" class="font-semibold text-orange-50">
                                ${owner}
                            </span>
                        </div>                 
                        <a href="#" class="col-span-4">
                            <h3 class="pl-4 capitalize text-2xl font-serif text-cyan-300 hover:text-cyan-900">
                                ${title}
                            </h3>
                        </a>            
                        <time datetime="2021-01-27T16:35" class="col-span-1 text-xs text-neutral-300 whitespace-nowrap">
                              ${createdWhen}
                        </time>
                        <p class="my-2 p-4 bg-orange-50 rounded-md font-medium col-span-5">
                            ${body}
                        </p>
                        <button data-id="${id}" class="delete-post-btn col-span-3 mt-2 mb-4 pt-1 pb-2 rounded-md shadow-lg text-lg font-semibold text-cyan-300 bg-teal-900 hover:bg-cyan-800">
                            Delete
                        </button>
                        <a href="/edit-post.html?post_id=${id}" class="col-span-2 text-center mt-2 mb-4 pt-1 pb-2 text-lg font-semibold text-cyan-300 hover:text-cyan-900">
                            Edit
                        </a>
                        </div>
                      <div role="none" class="py-4 lg:col-span-2 text-center">
                        <p data-input-general-message class="text-2xl text-orange-100"></p>
                     </div>
                  </li>
              `;
          })
          .join('');
      myPostItems.insertAdjacentHTML('beforeend', htmlPostsFeed);
    }
  } else {
    generateErrorMessage(myPostItems, `I'm sorry but ${userJSON.errors[0].message}`);
  }
}

function deleteUserPostBtnEvent() {
  const allDeleteBtns = deleteUserPostBtn.length;

  for (let i = 0; i < allDeleteBtns; i++) {
    deleteUserPostBtn[i].addEventListener('click', () => {
      const postId = deleteUserPostBtn[i].getAttribute('data-id');
      deletePostByIdHandler(postId);
    });
  }
}

function deletePostByIdHandler(id) {
  const deletePostById = async () => {
    try {
      const response = await fetch(`${DELETE_POST_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status === 200) {
        window.reload();
        getMyPosts().then(() => {
          deleteUserPostBtnEvent();
        });
      } else {
        const err = await response.json();
        generateErrorMessage(myPostItems, `I'm sorry but ${err.errors[0].message}`);
      }
    } catch (err) {
      generateErrorMessage(myPostItems, `catchError: ${err.message}`);
    }
  };
  deletePostById().then(() => {});
}

getMyPosts().then(() => {
  deleteUserPostBtnEvent();
});

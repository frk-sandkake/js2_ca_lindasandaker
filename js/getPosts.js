import moment from "moment";
import {GET_POSTS_URL} from './settings/api'
import {getToken} from './utils/storage'

const accessToken = getToken();
/*
if(!accessToken) {
  location.href = '/login.html'
}
*/

const allPostItems = document.getElementById('allPostItems');


(async function getAllPosts() {
  const response = await fetch(GET_POSTS_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })
  if (response.ok) {
      const posts = await response.json();
      let now = moment(new Date());

      if (!posts.length) {
          console.log('No posts found');
      } else {
          const htmlPostsFeed = posts.map((post) => {
              const {id, title, body, created} = post;
              const createdXDaysAgo = now.diff(created, 'days')

              return (`
                 <li class="relative p-4 bg-orange-50 rounded focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600 hover:bg-orange-100">
                    <div role="none" class="flex justify-between space-x-3">
                        <a href="#" class="flex-1 min-w-0 focus:outline-none">
                            <span class="absolute inset-0" aria-hidden="true"></span>
                            <h3 class="text-lg truncate capitalize">${id} ${title}</h3>
                        </a>
                        <time datetime="2021-01-27T16:35" class="flex-shrink-0 text-sm text-gray-700 whitespace-nowrap">
                          ${createdXDaysAgo} ago
                        </time>
                    </div>
                    <p class="my-2 font-medium">${body}</p>
                  </li>
              `)
          }).join('');
          allPostItems.insertAdjacentHTML('beforeend', htmlPostsFeed);
      }

  } else {
      const err = await response.json();
      const message = `Sorry, ${err}`;
      throw new Error(message);
  }

})().catch(err => {
  console.log('Sorry, could not get posts..');
  console.log(err);
});
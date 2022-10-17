import moment from "moment";
import {GET_POSTS_URL} from './settings/api'
import {getToken} from './utils/storage'

const accessToken = getToken();
if(!accessToken) {
  location.href = '/login.html'
}

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
                  <li class="m-4 col-span-1 p-4 border-fuchsia-700 border-2 border-b-4 rounded shadow focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600">
                    <div class="grid grid-cols-6 pb-4">
                        <div role="img" class="col-span-6 py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span role="presentation" class="font-semibold text-orange-50">
                                Users_Name_Here
                            </span>
                        </div>                 
                        <a href="/single-post.html?post_id=${id}" class="col-span-5">
                            <h3 class="pl-4 capitalize text-2xl font-serif text-cyan-300 hover:text-cyan-900">
                                ${title}
                            </h3>
                        </a>            
                        <time datetime="2021-01-27T16:35" class="col-span-1 text-xs text-neutral-300 whitespace-nowrap">
                              ${createdXDaysAgo} days ago
                        </time>
                        <p class="my-2 p-4 bg-orange-50 rounded-md font-medium col-span-6">
                            ${body}
                        </p>
                    </div>
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

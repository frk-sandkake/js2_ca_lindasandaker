import { GET_POST_ID_URL } from "./settings/api";
import { getToken } from "./utils/storage";
import moment from 'moment'

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const postId = searchParam.get("post_id");
const accessToken = getToken();
const singlePostView = document.getElementById("postDetails");

async function getPostById() {
  const response = await fetch(`${GET_POST_ID_URL}/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  const { id, title, body, created, updated } = data;
  const createdWhen = moment(created).fromNow();
  const updatedWhen = moment(updated).fromNow();

  singlePostView.innerHTML = `
        <div class="p-4 grid grid-cols-6 border-fuchsia-700 border-2 border-b-4 rounded shadow">
             <div role="img" class="col-span-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span role="presentation" class="font-semibold text-orange-50">
                      Users_Name_Here
                  </span>
                  </div>             
                  <div class="col-span-4">
                      <h3 class="pl-4 capitalize text-2xl font-serif text-cyan-300">
                          ${title}
                      </h3>
                  </div>
                   <p class="my-2 p-4 bg-orange-50 rounded-md font-medium col-span-5">
                      ${body}
                  </p>   
                  <span class="col-span-1">ID: ${id}</span>         
                  <time datetime="2021-01-27T16:35" class="col-span-2 text-xs text-neutral-300 whitespace-nowrap">
                        ${createdWhen}
                  </time>
                  <time datetime="2021-01-27T16:35" class="col-span-2 text-xs text-neutral-300 whitespace-nowrap">
                        ${updatedWhen}
                  </time>
                       
          </div>
  `;
}

getPostById();

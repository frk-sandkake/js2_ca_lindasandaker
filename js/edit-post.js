import { EDIT_POST_URL, GET_POST_ID_URL } from "./settings/api";
import { getToken } from "./utils/storage";
import { checkLength } from "./utils/validation";
import { setError, setSuccess } from "./utils/messages";

const accessToken = getToken();

const editPostForm = document.getElementById("editPostForm");
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const postId = searchParam.get("post_id");

async function getPostById() {
  const response = await fetch(`${GET_POST_ID_URL}/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    const { id, title, body, created, updated } = data;
    console.log(id, created, updated);
    postTitle.value = title;
    postContent.value = body;
  } else {
    const err = await response.json();
    throw err.message;
  }
}

getPostById().catch((err) => {
  console.log(err);
});

editPostForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isPostTitle = false;
  if (checkLength(postTitle.value, 1)) {
    setSuccess(postTitle);
    isPostTitle = true;
  } else {
    setError(postTitle, "Please add an title");
  }

  let isPostContent = false;
  if (checkLength(postContent.value, 5)) {
    setSuccess(postContent);
    isPostContent = true;
  } else {
    setError(postContent, "Don't forget your message");
  }

  let isPostValid = isPostTitle && isPostContent;
  if (isPostValid) {
    const postData = {
      title: postTitle.value,
      body: postContent.value,
    };

    (async function editPost_PUT() {
      const response = await fetch(`${EDIT_POST_URL}/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        location.href = `../profile.html?post_id=${postId}`;
      } else {
        const err = await response.json();
        const message = `I'm sorry but ${err}`;
        throw new Error(message);
      }
      editPost_PUT.reset();
    })().catch((err) => {
      console.log("error: ", err);
    });
  } else {
    console.log("Validation failed");
  }
});

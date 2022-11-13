const { resolve } = require("path");

export default {
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        signup: resolve(__dirname, "signup.html"),
        login: resolve(__dirname, "login.html"),
        profile: resolve(__dirname, "profile.html"),
        singlePost: resolve(__dirname, "single-post.html"),
        editPost: resolve(__dirname, "edit-post.html"),
      },
    },
  },
};


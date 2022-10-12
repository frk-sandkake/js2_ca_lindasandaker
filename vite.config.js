const {resolve} = require('path');

export default {
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        signup: resolve(__dirname, 'signup.html')
      },
    },
  },
};

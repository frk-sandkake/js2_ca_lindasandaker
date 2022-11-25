const { resolve } = require('path');

export default {
    root: resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'src/index.html'),
                signup: resolve(__dirname, 'src/signup.html'),
                login: resolve(__dirname, 'src/login.html'),
                profile: resolve(__dirname, 'src/profile.html'),
                singlePost: resolve(__dirname, 'src/single-post.html'),
                editPost: resolve(__dirname, 'src/edit-post.html'),
            },
        },
        outDir: '../dist',
    },
    resolve: {
        alias: {},
    },
    server: {
        port: 8080,
        hot: true,
    }
};

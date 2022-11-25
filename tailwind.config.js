module.exports = {
    content: ['./src/*.{html,js}', './src/js/*.js', './src/js/**/*.js'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};

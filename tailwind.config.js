module.exports = {
    content: ['./*.{html,js}', './js/*.js', './js/**/*.js'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};

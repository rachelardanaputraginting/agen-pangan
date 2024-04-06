/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: '#84cc16',
            black: '#334155',
            white: '#ffffff',
            red: '#f43f5e',
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};

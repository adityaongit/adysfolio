/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Gabarito", "ui-sans-serif", "system-ui"],
            },
            colors: {
                "dark-browser-bar": "#202125",
                "dark-browser-tab": "#35363A",
            },
        },
    },
    plugins: [],
};

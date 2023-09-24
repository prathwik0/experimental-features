/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'], // or 'media' or 'false'
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: false
	}
};

import themes from 'daisyui/src/theming/themes';
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: { themes: [{ light: { ...themes.retro } }, { dark: { ...themes.dim } }] }
};

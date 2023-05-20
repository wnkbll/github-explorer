/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"github-main": "#0d1117",
				"github-border": "#20252c"
			}
		},
	},
	plugins: [],
};

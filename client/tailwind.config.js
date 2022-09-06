/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#614BF2',
				primary2: '#705CF2',
				primary3: '#9080F2',
				primary4: '#ADA2F2',
				offwhite: '#F2F2F2',
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"sfa-orange": "#e9380f",
				"sfa-orange-600": "#ED5F3E",
				"sfa-orange-500": "#F2876F",
				"sfa-orange-400": "#F6AF9F",
				"sfa-orange-300": "#FBD7CF",
				"sfa-orange-200": "#FDEAE6",
				"sfa-orange-100": "#FFFAF9",
				"sfa-blue": "#142c3a",
				"sfa-blue-600": "#415560",
				"sfa-blue-500": "#728088",
				"sfa-blue-400": "#A1AAB0",
				"sfa-blue-300": "#D0D4D7",
				"sfa-blue-200": "#E7E9EB",
				"sfa-blue-100": "#F9FAFA",
			},
			fontFamily: {
				display: ["adobe-garamond-pro", "sans-serif"],
			},
		},
	},
	plugins: [],
};

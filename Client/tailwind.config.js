/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				mediumgreen: {
					800: "#B0C4B1",
				},
				parrotgreen: {
					// 800: "#f7e1d7",
					800: "#dde5b6",
				},
				lightpurple: {
					800: "#f0dbf4",
				},
			},
		},
	},
	plugins: [
		// ...
		require("@tailwindcss/forms"),
	],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#0a0a0a",
				light: "#ffffff",
				accent: "#00ffcc",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				mono: ["Space Mono", "monospace"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
	darkMode: "class",
};

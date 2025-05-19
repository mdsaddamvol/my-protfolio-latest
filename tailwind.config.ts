import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			dark: "#0a0a0a",
			light: "#ffffff",
			accent: "#00ffcc",
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			mono: ["Space Mono", "monospace"],
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;

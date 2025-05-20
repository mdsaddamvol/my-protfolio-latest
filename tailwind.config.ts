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
			accent: {
				DEFAULT: "#00ffcc",
				50: "#e0f7f6",
				100: "#b3efea",
				200: "#80e6dd",
				300: "#4ddcd1",
				400: "#26d4c7",
				500: "#00ffcc",
				600: "#00cc99",
				700: "#009966",
				800: "#006633",
				900: "#003319",
			},
			background: "var(--background)",
			foreground: "var(--foreground)",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			transitionDuration: {
				400: "400ms",
				600: "600ms",
			},
			transitionTimingFunction: {
				"ease-in-out-custom": "cubic-bezier(0.4, 0, 0.2, 1)",
			},
			animation: {
				"fade-in": "fadeIn 0.8s ease-in forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			boxShadow: {
				"accent-glow": "0 0 8px 2px rgba(0, 255, 204, 0.6)",
				"soft-xl": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
			},
		},
		fontFamily: {
			sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
			mono: ["Space Mono", "ui-monospace", "SFMono-Regular", "monospace"],
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;

"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitch() {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	// Check localStorage or prefers-color-scheme on mount
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;

		const shouldEnableDark =
			savedTheme === "dark" || (!savedTheme && prefersDark);

		if (shouldEnableDark) {
			document.documentElement.classList.add("dark");
			setDarkMode(true);
		}
	}, []);

	const toggleTheme = () => {
		if (darkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
		setDarkMode(!darkMode);
	};

	return (
		<button
			onClick={toggleTheme}
			className='p-2 rounded-full bg-gray-700 text-blue-400 hover:bg-gray-600 transition duration-300 focus:outline-none'
			aria-label='Toggle Dark Mode'
		>
			{darkMode ? (
				<FaSun className='text-yellow-300' size={20} />
			) : (
				<FaMoon size={20} />
			)}
		</button>
	);
}

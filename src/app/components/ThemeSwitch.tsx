"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitch() {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
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
			className='p-2 rounded-full bg-gray-700 text-accent hover:bg-gray-600 transition'
			aria-label='Toggle Dark Mode'
		>
			{darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
		</button>
	);
}

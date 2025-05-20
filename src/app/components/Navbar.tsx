"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("about");

	const sections = ["about", "skills", "projects", "services", "contact"];

	const scrollToSection = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: string
	) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	// Effect to track scroll and update active section
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust threshold here

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Initial check in case user refreshes mid-page
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className='fixed top-0 left-0 w-full h-16 z-50 backdrop-blur-md bg-black/30 dark:bg-dark/50 border-b border-gray-700'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo / Name */}
					<div className='flex-shrink-0'>
						<Link
							href='/'
							className='text-xl font-bold text-white hover:text-accent transition-colors duration-400 ease-in-out-custom'
						>
							MD SADDAM HOSEN
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-8'>
						{sections.map((section) => (
							<a
								key={section}
								href={`#${section}`}
								onClick={(e) => scrollToSection(e, section)}
								className={`cursor-pointer px-2 py-1 rounded transition duration-400 ease-in-out-custom ${
									activeSection === section
										? "text-accent shadow-accent-glow"
										: "text-gray-300 hover:text-accent hover:shadow-accent-glow"
								}`}
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</a>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<div className='flex items-center gap-4'>
						<ThemeSwitch />
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='md:hidden p-2 rounded focus:outline-none 
                         transition-transform duration-400 ease-in-out-custom
                         hover:scale-110 hover:shadow-accent-glow'
							aria-label='Toggle menu'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6 text-white'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								{isMenuOpen ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<nav className='md:hidden py-4 flex flex-col space-y-2 bg-gray-800 rounded-md shadow-lg'>
						{sections.map((section) => (
							<a
								key={section}
								href={`#${section}`}
								onClick={(e) => {
									scrollToSection(e, section);
									setIsMenuOpen(false);
								}}
								className={`py-2 px-4 block rounded transition duration-400 ease-in-out-custom ${
									activeSection === section
										? "text-accent shadow-accent-glow"
										: "text-gray-300 hover:text-accent hover:shadow-accent-glow"
								}`}
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</a>
						))}
					</nav>
				)}
			</div>
		</header>
	);
}

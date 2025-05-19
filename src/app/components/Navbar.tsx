"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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

	return (
		<header className='fixed top-0 left-0 w-full h-15 z-50 backdrop-blur-md bg-black/30 dark:bg-gray-900 dark:bg-dark/50 border-b border-gray-700'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo / Name */}
					<div className='flex-shrink-0'>
						<Link href='/' className='text-xl font-bold text-white'>
							MD SADDAM HOSEN
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-8'>
						<a
							href='#about'
							onClick={(e) => scrollToSection(e, "about")}
							className='text-gray-300 hover:text-accent transition cursor-pointer'
						>
							About
						</a>
						<a
							href='#skills'
							onClick={(e) => scrollToSection(e, "skills")}
							className='text-gray-300 hover:text-accent transition cursor-pointer'
						>
							Skills
						</a>
						<a
							href='#projects'
							onClick={(e) => scrollToSection(e, "projects")}
							className='text-gray-300 hover:text-accent transition cursor-pointer'
						>
							Projects
						</a>
						<a
							href='#services'
							onClick={(e) => scrollToSection(e, "services")}
							className='text-gray-300 hover:text-accent transition cursor-pointer'
						>
							Services
						</a>
						<a
							href='#contact'
							onClick={(e) => scrollToSection(e, "contact")}
							className='text-gray-300 hover:text-accent transition cursor-pointer'
						>
							Contact
						</a>
					</nav>

					{/* Mobile Menu Button */}
					<div className='flex items-center gap-4'>
						<ThemeSwitch />
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='md:hidden p-2 rounded focus:outline-none'
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
					<nav className='md:hidden py-4 flex flex-col space-y-2'>
						<a
							href='#about'
							onClick={(e) => {
								scrollToSection(e, "about");
								setIsMenuOpen(false);
							}}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							About
						</a>
						<a
							href='#skills'
							onClick={(e) => {
								scrollToSection(e, "skills");
								setIsMenuOpen(false);
							}}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							Skills
						</a>
						<a
							href='#projects'
							onClick={(e) => {
								scrollToSection(e, "projects");
								setIsMenuOpen(false);
							}}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							Projects
						</a>
						<a
							href='#services'
							onClick={(e) => {
								scrollToSection(e, "services");
								setIsMenuOpen(false);
							}}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							Services
						</a>
						<a
							href='#contact'
							onClick={(e) => {
								scrollToSection(e, "contact");
								setIsMenuOpen(false);
							}}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							Contact
						</a>
					</nav>
				)}
			</div>
		</header>
	);
}

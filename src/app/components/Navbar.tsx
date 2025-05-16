"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className='sticky top-0 z-50 backdrop-blur-md bg-black/30 dark:bg-gray-900/50 border-b border-gray-700'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex-shrink-0'>
						<Link href='/' className='text-xl font-bold text-white'>
							MD SADDAM HOSEN
						</Link>
					</div>

					<nav className='hidden md:flex space-x-8'>
						<Link
							href='#about'
							className='text-gray-300 hover:text-accent transition'
						>
							About
						</Link>
						<Link
							href='#skills'
							className='text-gray-300 hover:text-accent transition'
						>
							Skills
						</Link>
						<Link
							href='#projects'
							className='text-gray-300 hover:text-accent transition'
						>
							Projects
						</Link>
						<Link
							href='#services'
							className='text-gray-300 hover:text-accent transition'
						>
							Services
						</Link>
						<Link
							href='#contact'
							className='text-gray-300 hover:text-accent transition'
						>
							Contact
						</Link>
					</nav>

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

				{isMenuOpen && (
					<nav className='md:hidden py-4 flex flex-col space-y-2'>
						<Link
							href='#about'
							onClick={() => setIsMenuOpen(false)}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							About
						</Link>
						<Link
							href='#skills'
							onClick={() => setIsMenuOpen(false)}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							Skills
						</Link>
						<Link
							href='#projects'
							onClick={() => setIsMenuOpen(false)}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							Projects
						</Link>
						<Link
							href='#services'
							onClick={() => setIsMenuOpen(false)}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							Services
						</Link>
						<Link
							href='#contact'
							onClick={() => setIsMenuOpen(false)}
							className='text-gray-300 hover:text-accent py-2 px-4 block'
						>
							Contact
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className='text-center py-20 px-4 md:px-8'
		>
			<div className='max-w-3xl mx-auto'>
				<h1 className='text-4xl md:text-6xl font-bold mb-4'>MD SADDAM HOSEN</h1>
				<p className='text-xl md:text-2xl text-gray-300 mb-8'>
					Full-Stack Web Developer
				</p>
				<p className='text-lg text-gray-400 mb-10 max-w-2xl mx-auto'>
					Turning ideas into fast, scalable websites using React, Next.js &
					MERN. Let’s build something great together.
				</p>

				<div className='flex flex-wrap justify-center gap-4'>
					<Link
						href='#contact'
						className='bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition'
					>
						Hire Me
					</Link>
					<a
						href='/mdsaddamhosen-resume.pdf'
						download
						className='border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition'
					>
						Download Resume
					</a>
					<Link
						href='https://github.com/mdsaddamvol '
						target='_blank'
						className='border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition'
					>
						View GitHub
					</Link>
				</div>

				<motion.div
					initial={{ y: 10 }}
					animate={{ y: [10, -10, 10] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className='mt-12'
				>
					<span className='inline-block text-sm text-gray-500'>
						Scroll down
					</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-6 h-6 mx-auto animate-bounce text-gray-400'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 14l-7 7m0 0l-7-7m7 7V3'
						/>
					</svg>
				</motion.div>
			</div>

			<div className='mt-12'>
				<Image
					src='/profilepic.jpg'
					alt='MD Saddam Hosen'
					width={200}
					height={200}
					className='rounded-full border-4 border-accent mx-auto shadow-xl'
				/>
			</div>
		</motion.section>
	);
}

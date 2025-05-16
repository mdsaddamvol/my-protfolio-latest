"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className='text-center py-20 px-4 md:px-8'
		>
			<div className='max-w-4xl mx-auto'>
				<div className='relative inline-block mt-10'>
					<Image
						src='/profilepic.jpg'
						alt='MD Saddam Hosen'
						width={200}
						height={200}
						className='rounded-full border-4 border-accent shadow-xl object-cover'
					/>
					<div className='absolute inset-0 rounded-full border-2 border-accent opacity-30 blur-sm'></div>
				</div>
				<h1 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-accent text-transparent bg-clip-text'>
					MD SADDAM HOSEN
				</h1>
				<p className='text-xl md:text-2xl text-gray-300 mb-6'>
					Full-Stack Web Developer | Top-Rated Freelancer
				</p>
				<p className='text-lg text-gray-400 mb-10 max-w-2xl mx-auto'>
					Building fast, scalable websites using React.js, Next.js, Node.js,
					Express.js, and MongoDB. Let’s bring your idea to life with clean code
					and seamless user experience.
				</p>

				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					<Link
						href='#contact'
						className='bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105'
					>
						Hire Me
					</Link>
					<a
						href='/mdsaddamhosen-resume.pdf'
						download
						className='border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition transform hover:scale-105'
					>
						Download Resume
					</a>
					<Link
						href='https://github.com/mdsaddamvol '
						target='_blank'
						className='border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition transform hover:scale-105'
					>
						View GitHub
					</Link>
				</div>
			</div>
		</motion.section>
	);
}

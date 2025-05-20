"use client";

import { motion } from "framer-motion";

export default function About() {
	return (
		<section
			id='about'
			className='py-20 px-4 md:px-8 bg-gray-900 dark:bg-dark text-white'
		>
			<div className='max-w-5xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='text-3xl md:text-4xl font-bold mb-12 text-center text-white'
				>
					My Story
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
					{/* Left - Story */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<p className='text-lg text-gray-300 leading-relaxed mb-6'>
							I didn’t start out as a developer — I started by fixing things.
							Back in college, friends would come to me when their laptops
							froze, apps wouldn't load, or code refused to run. I loved
							figuring out what went wrong — and making it right.
						</p>
						<p className='text-lg text-gray-300 leading-relaxed mb-6'>
							That curiosity led me into web development. I wanted to understand
							how everything worked — from the frontend buttons users click to
							the backend systems that power them.
						</p>
						<p className='text-lg text-gray-300 leading-relaxed'>
							Today, I’m a{" "}
							<strong className='text-white'>full-stack developer</strong> who
							builds clean, responsive websites for startups, agencies, and
							entrepreneurs around the world. Whether it's an{" "}
							<strong className='text-white'>eCommerce platform</strong>,{" "}
							<strong className='text-white'>social app</strong>,{" "}
							<strong className='text-white'>blog</strong>, or{" "}
							<strong className='text-white'>LMS</strong>, I deliver clean code,
							seamless UX, and results that exceed expectations.
						</p>
					</motion.div>

					{/* Right - Quick Info */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className='bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-accent-glow border border-gray-600'
					>
						<h3 className='text-xl font-semibold mb-5 text-accent'>
							Quick Info
						</h3>
						<ul className='space-y-3 text-gray-300 text-base leading-relaxed'>
							<li>
								<strong className='text-white'>Email:</strong>{" "}
								mdsaddamvoltas@gmail.com
							</li>
							<li>
								<strong className='text-white'>Phone:</strong> +880 1402866937
							</li>
							<li>
								<strong className='text-white'>Location:</strong> Tangail,
								Bangladesh
							</li>
							<li>
								<strong className='text-white'>Languages:</strong> Bangla
								(Native), English (Professional)
							</li>
							<li>
								<strong className='text-white'>Freelance:</strong> Available
							</li>
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

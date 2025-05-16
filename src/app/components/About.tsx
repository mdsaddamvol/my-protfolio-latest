"use client";

import { motion } from "framer-motion";

export default function About() {
	return (
		<motion.section
			id='about'
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className='py-20 px-4 md:px-8 bg-gray-800 dark:bg-dark'
		>
			<div className='max-w-5xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>
					My Story
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
					<div>
						<p className='text-lg text-gray-300 leading-relaxed'>
							I didn’t start out as a developer — I started by fixing things.
							Back in college, friends would come to me when their laptops
							froze, apps wouldn't load, or code refused to run. I loved
							figuring out what went wrong — and making it right.
						</p>
						<p className='text-lg text-gray-300 leading-relaxed mt-4'>
							That curiosity led me into web development. I wanted to understand
							how everything worked — from the frontend buttons users click to
							the backend systems that power them.
						</p>
						<p className='text-lg text-gray-300 leading-relaxed mt-4'>
							Today, I’m a <strong>full-stack developer</strong> who builds
							clean, responsive websites for startups, agencies, and
							entrepreneurs around the world. Whether it's an{" "}
							<strong>eCommerce platform</strong>, <strong>social app</strong>,{" "}
							<strong>blog</strong>, or <strong>LMS</strong>, I deliver clean
							code, seamless UX, and results that exceed expectations.
						</p>
					</div>

					<div className='bg-gray-700 p-6 rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-4 text-accent'>
							Quick Info
						</h3>
						<ul className='space-y-3 text-gray-300'>
							<li>
								<strong>Email:</strong> mdsaddamvoltas@gmail.com
							</li>
							<li>
								<strong>Phone:</strong> +880 1402866937
							</li>
							<li>
								<strong>Location:</strong> Tangail, Bangladesh
							</li>
							<li>
								<strong>Languages:</strong> Bangla (Native), English
								(Professional)
							</li>
							<li>
								<strong>Freelance:</strong> Available
							</li>
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

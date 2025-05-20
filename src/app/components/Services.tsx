"use client";

import {
	FaCode,
	FaServer,
	FaSearch,
	FaBug,
	FaCloudUploadAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
	{
		title: "Web Development",
		desc: "From concept to deployment, I build custom websites and applications using modern tools like React, Next.js, and MERN stack — tailored to your needs.",
		icon: <FaCode className='text-3xl text-accent' />,
	},
	{
		title: "API Development",
		desc: "Design secure, scalable RESTful APIs and integrate authentication, database models, and third-party services.",
		icon: <FaServer className='text-3xl text-accent' />,
	},
	{
		title: "SEO Optimization",
		desc: "With Next.js SSR/SSG, I ensure your site ranks well, loads fast, and offers a smooth experience across devices.",
		icon: <FaSearch className='text-3xl text-accent' />,
	},
	{
		title: "Bug Fixing & Code Review",
		desc: "Stuck with a tricky bug or inherited messy code? I’ll debug, refactor, and optimize your project so it runs smoothly again.",
		icon: <FaBug className='text-3xl text-accent' />,
	},
	{
		title: "Deployment & DevOps",
		desc: "I handle full deployment pipelines — from local dev setup to production-ready hosting on platforms like Vercel, Netlify, or AWS.",
		icon: <FaCloudUploadAlt className='text-3xl text-accent' />,
	},
];

export default function Services() {
	return (
		<section
			id='services'
			className='py-20 px-4 md:px-8 bg-gray-900 dark:bg-dark text-white'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='text-3xl md:text-4xl font-bold mb-12 text-center'
				>
					How I Can Help You
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							whileHover={{ scale: 1.03 }}
							className='bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-700 shadow-accent-glow transition-all'
						>
							<div className='mb-4'>{service.icon}</div>
							<h3 className='text-xl font-semibold mb-2 text-accent'>
								{service.title}
							</h3>
							<p className='text-gray-300 leading-relaxed'>{service.desc}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

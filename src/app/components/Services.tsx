"use client";

import {
	FaCode,
	FaServer,
	FaSearch,
	FaBug,
	FaCloudUploadAlt,
} from "react-icons/fa";

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
			className='py-20 px-4 md:px-8 bg-gray-900 text-white'
		>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-white'>
					How I Can Help You
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300'
						>
							<div className='mb-4'>{service.icon}</div>
							<h3 className='text-xl font-semibold mb-2 text-accent'>
								{service.title}
							</h3>
							<p className='text-gray-300 leading-relaxed'>{service.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

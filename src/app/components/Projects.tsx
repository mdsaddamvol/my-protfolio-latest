"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

interface ProjectProps {
	title: string;
	description: string;
	imageUrl: string;
	demo?: string;
}

const projects = [
	{
		title: "Collection of mini-websites featuring the top beauticians in town.",
		description:
			"CoverClap serves as a curated collection of mini-websites featuring the top beauticians in town they provide an equal opportunity for all verified entrepreneurs to showcase their businesses on the platform while taking advantage of features that allow them to interact with customers and seamlessly process bookings.",
		demo: "https://coverclap.com/",
		imageUrl: "/projects/project1.png",
	},
	{
		title: "Blog for a Healthcare Organization",
		description:
			"The project involved transitioning from a slow WordPress-only site that required a CDN for caching. We replaced the front-end with Next.js, improving performance and user experience. WordPress continues to serve as the database and admin panel. This combination of Next.js for the front-end and WordPress as the backend created a fast, scalable solution, eliminating caching issues and enhancing the site's overall performance.",
		demo: "https://morefertile.com/",
		imageUrl: "/projects/project2.png",
	},
	{
		title: "E-Commerce Website",
		description:
			"This eCommerce platform was built for a mechanical machine store, focusing on performance, scalability, and cost optimization. The storefront and admin panel were developed using Next.js (15), ensuring a fast, SEO-friendly experience. A custom Express.js server powers the backend, handling API requests and database operations efficiently. With 95+ scores in SEO, performance, and accessibility, it delivers smooth navigation, quick load times, and a cost-effective, scalable solution for selling mechanical machines online. 🚀",
		demo: "https://multivisionbd.com/",
		imageUrl: "/projects/project3.png",
	},
	{
		title: "E-Commerce Website for Pave motors",
		description:
			"Pave Motors is a Brooklyn-based company specializing in premium electric motorbikes designed for urban and off-road mobility. Their flagship models, the Pave BK and Pave BK(U), combine sleek design with advanced technology to offer efficient, eco-friendly transportation solutions.",
		demo: "https://www.pavemotors.com/",
		imageUrl: "/projects/project4.png",
	},
	{
		title: "E-Commerce Website for a Clothing Brand",
		description:
			"This eCommerce platform was built for a clothing store, focusing on performance, scalability, and cost optimization. The storefront and admin panel were developed using Next.js (15), ensuring a fast, SEO-friendly experience. A custom Express.js server powers the backend, handling API requests and database operations efficiently. With 95+ scores in SEO, performance, and accessibility, it delivers smooth navigation, quick load times, and a cost-effective, scalable solution for selling mechanical machines online. 🚀",
		demo: "https://udyanwear.com/",
		imageUrl: "/projects/project5.png",
	},
	{
		title: "Multi Vendor E-Commerce Website",
		description:
			"Welcome to our classic women's clothing store, where we believe that timeless style never goes out of fashion. Our collection features classic pieces that are both stylish and versatile, perfect for building a wardrobe that will last for years.",
		demo: "https://xioncart.com/",
		imageUrl: "/projects/project6.png",
	},
];

export default function Projects() {
	return (
		<section
			id='projects'
			className='relative py-20 px-4 md:px-8 bg-gray-800 dark:bg-dark text-white'
		>
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className='text-3xl md:text-4xl font-bold mb-12 text-center'
			>
				Some Things I&apos;ve Built
			</motion.h2>

			<div className='flex flex-wrap justify-center gap-8'>
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
	);
}

function ProjectCard({ title, description, demo, imageUrl }: ProjectProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className='w-full md:w-[46%] bg-gray-700 border border-accent flex flex-col md:flex-row gap-6 p-6 rounded-xl shadow-md hover:shadow-lg transition-all'
		>
			<div className='relative w-full md:w-1/2 aspect-video overflow-hidden rounded-lg group'>
				<Image
					src={imageUrl}
					alt={title}
					fill
					className='object-cover transition-transform group-hover:scale-105'
				/>
			</div>

			<div className='w-full md:w-1/2 flex flex-col justify-between'>
				<div>
					<h3 className='text-xl font-semibold mb-2'>{title}</h3>
					<p className='text-gray-300 text-sm'>{description}</p>
				</div>

				{demo && (
					<a href={demo} target='_blank' rel='noopener noreferrer'>
						<button className='mt-4 w-full border border-accent text-accent py-2 rounded-md hover:bg-accent hover:text-dark transition'>
							Live Demo
						</button>
					</a>
				)}
			</div>
		</motion.div>
	);
}

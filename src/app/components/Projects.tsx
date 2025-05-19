"use client";

import Image from "next/image";

interface ProjectProps {
	title: string;
	description: string;
	imageUrl: string;
	demo?: string;
	github?: string | null;
}

const projects = [
	{
		title: "Collection of mini-websites featuring the top beauticians in town.",
		description:
			"CoverClap serves as a curated collection of mini-websites featuring the top beauticians in town they provide an equal opportunity for all verified entrepreneurs to showcase their businesses on the platform while taking advantage of features that allow them to interact with customers and seamlessly process bookings.",
		demo: "https://coverclap.com/",
		github: "https://github.com/mdsaddamvol/CoverClap",
		imageUrl: "/projects/project1.png",
	},
	{
		title: "Blog for a Healthcare Organization",
		description:
			"The project involved transitioning from a slow WordPress-only site that required a CDN for caching. We replaced the front-end with Next.js, improving performance and user experience. WordPress continues to serve as the database and admin panel. This combination of Next.js for the front-end and WordPress as the backend created a fast, scalable solution, eliminating caching issues and enhancing the site's overall performance.",
		demo: "https://morefertile.com/",
		github: "https://github.com/mdsaddamvol/morefertile.git",
		imageUrl: "/projects/project2.png",
	},
	{
		title: "E-Commerce Website",
		description:
			"This eCommerce platform was built for a mechanical machine store, focusing on performance, scalability, and cost optimization. The storefront and admin panel were developed using Next.js (15), ensuring a fast, SEO-friendly experience. A custom Express.js server powers the backend, handling API requests and database operations efficiently. With 95+ scores in SEO, performance, and accessibility, it delivers smooth navigation, quick load times, and a cost-effective, scalable solution for selling mechanical machines online. 🚀",
		demo: "https://multivisionbd.com/",
		github: "https://github.com/mdsaddamvol/multivision-ecom",
		imageUrl: "/projects/project3.png", // ← Your local image path
	},
	{
		title: "E-Commerce Website for Pave motors",
		description:
			"Pave Motors is a Brooklyn-based company specializing in premium electric motorbikes designed for urban and off-road mobility. Their flagship models, the Pave BK and Pave BK(U), combine sleek design with advanced technology to offer efficient, eco-friendly transportation solutions.",
		demo: "https://www.pavemotors.com/",
		github: null,
		imageUrl: "/projects/project4.png", // ← Your local image path
	},
	{
		title: "E-Commerce Website for a Clothing Brand",
		description:
			"This eCommerce platform was built for a clothing store, focusing on performance, scalability, and cost optimization. The storefront and admin panel were developed using Next.js (15), ensuring a fast, SEO-friendly experience. A custom Express.js server powers the backend, handling API requests and database operations efficiently. With 95+ scores in SEO, performance, and accessibility, it delivers smooth navigation, quick load times, and a cost-effective, scalable solution for selling mechanical machines online. 🚀",
		demo: "https://udyanwear.com/",
		github: null,
		imageUrl: "/projects/project5.png", // ← Your local image path
	},
	{
		title: "Multi Vendor E-Commerce Website",
		description:
			"Welcome to our classic women's clothing store, where we believe that timeless style never goes out of fashion. Our collection features classic pieces that are both stylish and versatile, perfect for building a wardrobe that will last for years.",
		demo: "https://xioncart.com/",
		github: "https://github.com/Xion-Cart/xion-cart-frontend",
		imageUrl: "/projects/project6.png", // ← Your local image path
	},
];

import { useRef } from "react";

export default function Projects() {
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<section
			id='projects'
			className='relative h-screen px-4 md:px-8 bg-gray-800 dark:bg-dark'
			style={{ overflow: "hidden" }} // prevent the section itself from scrolling
		>
			<div className='max-w-6xl mx-auto flex flex-col h-full py-20'>
				<h2 className='text-3xl md:text-4xl font-bold mb-6 text-center shrink-0'>
					Some Things I&apos;ve Built
				</h2>

				{/* Scrollable project container */}
				<div
					className='grid grid-cols-1  gap-8 overflow-y-auto'
					style={{ flexGrow: 1 }}
				>
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
					<div style={{ height: "50px" }}></div>
				</div>
			</div>
		</section>
	);
}

function ProjectCard({
	title,
	description,
	demo,
	github,
	imageUrl,
}: ProjectProps) {
	return (
		<div className='bg-gray-700  flex gap-6 p-6 rounded-lg shadow-md hover:shadow-xl transition'>
			<div className='aspect-square w-1/3 overflow-hidden rounded-lg mb-4 relative group'>
				<Image
					src={imageUrl}
					alt={title}
					fill
					className='object-cover transition-transform group-hover:scale-105'
				/>
			</div>
			<div className='w-2/3 flex flex-col '>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<p className='text-gray-300 mb-4'>{description}</p>
				<div className='flex space-x-4'>
					{demo && (
						<a
							href={demo}
							target='_blank'
							className='text-accent hover:underline'
						>
							Live Demo
						</a>
					)}
					{github ? (
						<a
							href={github}
							target='_blank'
							className='text-accent hover:underline'
						>
							Source Code
						</a>
					) : (
						<div>Privete Repo</div>
					)}
				</div>
			</div>
		</div>
	);
}

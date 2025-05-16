"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectProps {
	title: string;
	description: string;
	demo?: string;
	github?: string;
}

const projects = [
	{
		title: "E-Commerce Platform",
		description:
			"A fully functional e-commerce platform built with MERN stack.",
		demo: "#",
		github: "#",
	},
	{
		title: "Social Media App",
		description: "Real-time social networking app with chat functionality.",
		demo: "#",
		github: "#",
	},
	{
		title: "Task Manager",
		description: "A productivity tool for managing tasks and projects.",
		demo: "#",
		github: "#",
	},
];

export default function Projects() {
	return (
		<motion.section
			id='projects'
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className='py-20 px-4 md:px-8 bg-gray-800 dark:bg-dark'
		>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
					Some Things I've Built
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</div>
		</motion.section>
	);
}

function ProjectCard({ title, description, demo, github }: ProjectProps) {
	return (
		<div className='bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition'>
			<div className='aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center'>
				<span className='text-gray-500'>[Project Image]</span>
			</div>
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
				{github && (
					<a
						href={github}
						target='_blank'
						className='text-accent hover:underline'
					>
						Source Code
					</a>
				)}
			</div>
		</div>
	);
}

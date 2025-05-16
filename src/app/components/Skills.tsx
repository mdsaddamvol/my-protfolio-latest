"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";

const skills = [
	{
		category: "Frontend",
		icon: <FaReact className='inline-block mr-2' />,
		items: [
			"React.js",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Redux",
			"Zustand",
		],
	},
	{
		category: "Backend",
		icon: <FaNodeJs className='inline-block mr-2' />,
		items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Authentication"],
	},
	{
		category: "Databases",
		icon: <FaDatabase className='inline-block mr-2' />,
		items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
	},
	{
		category: "Tools & DevOps",
		icon: <FaTools className='inline-block mr-2' />,
		items: ["Git", "GitHub", "Docker", "Nginx", "Bash", "Webpack"],
	},
];

export default function Skills() {
	return (
		<motion.section
			id='skills'
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className='py-20 px-4 md:px-8'
		>
			<div className='max-w-5xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
					Skills
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{skills.map((group, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.02 }}
							className='bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition'
						>
							<h3 className='text-xl font-semibold mb-4 flex items-center text-accent'>
								{group.icon}
								{group.category}
							</h3>
							<ul className='flex flex-wrap gap-2'>
								{group.items.map((skill, i) => (
									<li
										key={i}
										className='bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-accent hover:text-black transition'
									>
										{skill}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}

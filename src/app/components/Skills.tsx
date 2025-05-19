"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiMongodb, SiPostgresql, SiRedis, SiFirebase } from "react-icons/si";

// Skill Category Interface
interface SkillCategory {
	category: string;
	icon: JSX.Element;
	items: string[];
}

// Skills Data from Your CV
const skills: SkillCategory[] = [
	{
		category: "Frontend",
		icon: <FaReact className='inline-block mr-2 text-accent' />,
		items: [
			"JavaScript",
			"React.js",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Styled Components",
			"Redux",
			"Zustand",
			"Axios",
			"Apollo Client",
			"GraphQL",
		],
	},
	{
		category: "Backend",
		icon: <FaNodeJs className='inline-block mr-2 text-accent' />,
		items: [
			"Node.js",
			"Express.js",
			"REST APIs",
			"Authentication",
			"Server Setup",
		],
	},
	{
		category: "Databases",
		icon: <SiMongodb className='inline-block mr-2 text-accent' />,
		items: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "SQL", "Mongoose"],
	},
	{
		category: "Tools & DevOps",
		icon: <FaTools className='inline-block mr-2 text-accent' />,
		items: [
			"Git",
			"GitHub",
			"GitLab",
			"Bitbucket",
			"Docker Compose",
			"Nginx",
			"Bash Scripting",
		],
	},
];

export default function Skills() {
	return (
		<section className='py-20 px-4 md:px-8 bg-gray-900 dark:bg-dark'>
			<div className='max-w-5xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className='text-3xl md:text-4xl font-bold mb-12 text-center text-white'
				>
					Skills
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{skills.map((group, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.02 }}
							className='bg-gray-800 dark:bg-dark p-6 rounded-lg shadow-md hover:shadow-xl transition-all'
						>
							<h3 className='text-xl font-semibold mb-4 flex items-center text-accent'>
								{group.icon}
								{group.category}
							</h3>
							<ul className='flex flex-wrap gap-2'>
								{group.items.map((skill, i) => (
									<li
										key={i}
										className='bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-accent hover:text-black transition-all cursor-default'
									>
										{skill}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

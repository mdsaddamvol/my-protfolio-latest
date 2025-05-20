"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaTools } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

interface SkillCategory {
	category: string;
	icon: JSX.Element;
	items: string[];
}

const skills: SkillCategory[] = [
	{
		category: "Frontend",
		icon: (
			<FaReact className='inline-block mr-2 text-accent' aria-hidden='true' />
		),
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
		icon: (
			<FaNodeJs className='inline-block mr-2 text-accent' aria-hidden='true' />
		),
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
		icon: (
			<SiMongodb className='inline-block mr-2 text-accent' aria-hidden='true' />
		),
		items: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "SQL", "Mongoose"],
	},
	{
		category: "Tools & DevOps",
		icon: (
			<FaTools className='inline-block mr-2 text-accent' aria-hidden='true' />
		),
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
		<section
			id='skills'
			className='py-20 px-4 md:px-8 bg-gray-900 dark:bg-dark'
			aria-label='Skills section'
		>
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
							tabIndex={-1}
							className='bg-gray-800 dark:bg-dark p-6 rounded-lg shadow-md hover:shadow-xl transition-all'
							aria-labelledby={`skill-category-${index}`}
						>
							<h3
								id={`skill-category-${index}`}
								className='text-xl font-semibold mb-4 flex items-center text-accent'
							>
								{group.icon}
								<span>{group.category}</span>
							</h3>
							<ul className='flex flex-wrap gap-2'>
								{group.items.map((skill, i) => (
									<li
										key={i}
										tabIndex={0}
										className='bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-accent hover:text-dark focus:outline-none focus:bg-accent focus:text-dark transition-all cursor-default'
										aria-label={`Skill: ${skill}`}
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

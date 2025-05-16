"use client";

import Image from "next/image";

export default function ResumePage() {
	return (
		<div className='bg-light text-dark min-h-screen p-8 max-w-4xl mx-auto font-sans'>
			{/* Header with Image */}
			<header className='flex flex-col md:flex-row items-center gap-6 mb-8 border-b border-gray-200 pb-6'>
				<div className='w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500 relative'>
					<Image
						src='/profilepic.jpg'
						alt='MD Saddam Hosen'
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, 32px'
					/>
				</div>
				<div className='text-center md:text-left'>
					<h1 className='text-3xl font-bold'>MD SADDAM HOSEN</h1>
					<p className='text-blue-600 text-lg'>Full-Stack Web Developer</p>
				</div>
			</header>

			{/* Contact Info */}
			<section className='mb-6'>
				<div className='flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-700'>
					<span>📧 mdsaddamvoltas@gmail.com</span>
					<span>📞 01402866937</span>
					<span>📍 Tangail, Bangladesh</span>
					<span>
						🌐{" "}
						<a
							href='https://github.com/mdsaddamvol '
							target='_blank'
							className='text-blue-600 hover:underline'
						>
							GitHub
						</a>
					</span>
					<span>
						🔗{" "}
						<a
							href='https://linkedin.com/in/md-saddam-hosen-ssrgeek/ '
							target='_blank'
							className='text-blue-600 hover:underline'
						>
							LinkedIn
						</a>
					</span>
				</div>
			</section>

			{/* Languages & Interests */}
			<section className='mb-6'>
				<h2 className='text-xl font-semibold mb-2 text-blue-600'>LANGUAGES</h2>
				<p className='text-gray-700'>
					Bangla: Native | English: Professional Proficiency
				</p>
			</section>

			<section className='mb-6'>
				<h2 className='text-xl font-semibold mb-2 text-blue-600'>INTERESTS</h2>
				<p className='text-gray-700'>Machine Learning · Web3 · Flutter</p>
			</section>

			{/* About Me */}
			<section className='mb-6'>
				<h2 className='text-xl font-semibold mb-2 text-blue-600'>ABOUT ME</h2>
				<p className='text-gray-700 leading-relaxed'>
					I am MD SADDAM HOSEN, a full-stack web developer. I build fast and
					responsive websites. I am an expert in making eCommerce, blog, social,
					business, booking, personal, and LMS websites. I use React.js for the
					front-end and Node.js with Express.js for the back-end server or REST
					API. As a database, I can use both SQL and NoSQL databases like
					Postgres, MongoDB, Firebase, Redis, etc. I use Next.js(13+) to achieve
					the best SEO for any React app that depends on web searches for
					traffic. I am good at learning new things and solving bugs.
				</p>
			</section>

			{/* Skills */}
			<section className='mb-6'>
				<h2 className='text-xl font-semibold mb-2 text-blue-600'>SKILLS</h2>
				<ul className='space-y-2 text-gray-700'>
					<li>
						<strong>Front-End Development:</strong> JavaScript, React.js, Redux,
						Zustand, Next.js, TypeScript, Tailwind, Styled-Components, Axios,
						Apollo-client, GraphQL
					</li>
					<li>
						<strong>Back-End Development:</strong> Express.js, Node.js
					</li>
					<li>
						<strong>Databases:</strong> SQL, MongoDB, Firebase
					</li>
					<li>
						<strong>Tools & Technologies:</strong> Docker Compose, Nginx, Bash,
						Git, GitHub, GitLab, Bitbucket
					</li>
				</ul>
			</section>

			{/* Work Experience */}
			<section className='mb-6'>
				<h2 className='text-xl font-semibold mb-2 text-blue-600'>
					WORK EXPERIENCE
				</h2>
				<div className='text-gray-700'>
					<h3 className='font-medium'>Freelance Full-Stack Web Developer</h3>
					<p className='text-sm text-gray-500'>Upwork – Feb 2021 – Present</p>
					<ul className='list-disc list-inside mt-2 space-y-1'>
						<li>
							Top-rated freelancer with a 100% job success score and all 5-star
							ratings.
						</li>
						<li>
							Built full-stack applications using MERN stack (MongoDB,
							Express.js, React.js, Node.js).
						</li>
						<li>
							Developed custom websites including eCommerce, blogs, social
							platforms, LMS, business sites, and booking systems.
						</li>
						<li>
							Created SEO-optimized websites using Next.js App Router and
							SSR/SSG capabilities.
						</li>
						<li>
							Integrated payment gateways, third-party APIs, and real-time
							features.
						</li>
						<li>
							Used Docker and DevOps practices for deployment and environment
							management.
						</li>
					</ul>
				</div>
			</section>

			{/* Education */}
			<section className='mb-6'>
				<h2 className='text-xl font-semibold mb-2 text-blue-600'>EDUCATION</h2>
				<div className='text-gray-700'>
					<h3 className='font-medium'>Diploma in Electrical Engineering</h3>
					<p className='text-sm text-gray-500'>
						Madhupur Engineering College – Jan 2015 – Dec 2018
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className='mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500'>
				<p>Downloaded from my portfolio — https://yourportfolio.vercel.app </p>
			</footer>
		</div>
	);
}

"use client";

import { motion } from "framer-motion";

export default function Contact() {
	return (
		<motion.section
			id='contact'
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			className='py-20 px-4 md:px-8 bg-gray-800 dark:bg-dark'
		>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
					Let’s Work Together
				</h2>

				<p className='text-lg text-gray-300 mb-8 text-center'>
					Whether you have a question, a feature request, or a new idea — I’d
					love to hear from you.
				</p>

				<form className='space-y-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<input
							type='text'
							placeholder='Your Name'
							className='bg-gray-700 text-dark border px-4 py-3 rounded outline-none'
							required
						/>
						<input
							type='email'
							placeholder='Your Email'
							className='bg-gray-700 text-dark border px-4 py-3 rounded outline-none'
							required
						/>
					</div>
					<textarea
						placeholder='Your Message'
						rows={5}
						className='w-full bg-gray-700 text-dark border px-4 py-3 rounded outline-none'
						required
					></textarea>
					<button
						type='submit'
						className='bg-accent text-black px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition'
					>
						Send Message
					</button>
				</form>

				<div className='mt-12 flex flex-wrap justify-center gap-6 text-gray-400'>
					<a
						href='mailto:mdsaddamvoltas@gmail.com'
						className='hover:text-accent transition'
					>
						📧 mdsaddamvoltas@gmail.com
					</a>
					<a
						href='https://wa.me/+8801402866937'
						target='_blank'
						className='hover:text-accent transition'
					>
						📱 WhatsApp
					</a>
					<a
						href='https://linkedin.com/in/md-saddam-hosen-ssrgeek/'
						target='_blank'
						className='hover:text-accent transition'
					>
						🔗 LinkedIn
					</a>
					<a
						href='https://github.com/mdsaddamvol'
						target='_blank'
						className='hover:text-accent transition'
					>
						💻 GitHub
					</a>
				</div>
			</div>
		</motion.section>
	);
}

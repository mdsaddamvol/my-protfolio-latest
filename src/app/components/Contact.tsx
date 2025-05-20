"use client";

export default function Contact() {
	return (
		<section id='contact' className='py-20 px-4 md:px-8 bg-gray-800 text-white'>
			<div className='max-w-3xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-6 text-center'>
					Let’s Work Together
				</h2>

				<p className='text-lg text-gray-300 mb-10 text-center'>
					Whether you have a question, a feature request, or a new idea — I’d
					love to hear from you.
				</p>

				<form className='space-y-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<input
							type='text'
							placeholder='Your Name'
							aria-label='Your Name'
							className='bg-gray-700 text-white border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:ring-2 text-dark focus:ring-accent transition'
							required
						/>
						<input
							type='email'
							placeholder='Your Email'
							aria-label='Your Email'
							className='bg-gray-700 text-white border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:ring-2 text-dark focus:ring-accent transition'
							required
						/>
					</div>
					<textarea
						placeholder='Your Message'
						aria-label='Your Message'
						rows={5}
						className='w-full bg-gray-700 text-white border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:ring-2 text-dark focus:ring-accent transition'
						required
					></textarea>
					<button
						type='submit'
						className='bg-accent text-dark px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition w-full md:w-auto'
					>
						Send Message
					</button>
				</form>

				<div className='mt-12 flex flex-wrap justify-center gap-6 text-gray-400 text-sm sm:text-base'>
					<a
						href='mailto:mdsaddamvoltas@gmail.com'
						className='hover:text-accent transition'
						aria-label='Email'
					>
						📧 mdsaddamvoltas@gmail.com
					</a>
					<a
						href='https://wa.me/+8801402866937'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-accent transition'
						aria-label='WhatsApp'
					>
						📱 WhatsApp
					</a>
					<a
						href='https://linkedin.com/in/md-saddam-hosen-ssrgeek/'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-accent transition'
						aria-label='LinkedIn'
					>
						🔗 LinkedIn
					</a>
					<a
						href='https://github.com/mdsaddamvol'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-accent transition'
						aria-label='GitHub'
					>
						💻 GitHub
					</a>
				</div>
			</div>
		</section>
	);
}

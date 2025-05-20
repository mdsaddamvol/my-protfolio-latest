"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ResumeDownload from "./ResumeDownload";

export default function Hero() {
	return (
		<section
			id='hero'
			className='relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 bg-background text-foreground'
		>
			{/* Background glow */}
			<div className='absolute inset-0 -z-10 bg-gradient-radial from-accent/10 via-transparent to-transparent' />

			{/* Avatar */}
			<div className='mb-6'>
				<Image
					src='/profilepic.jpg'
					alt='MD Saddam Hosen'
					width={120}
					height={120}
					className='rounded-full shadow-accent-glow animate-fade-in'
				/>
			</div>

			{/* Name and Title */}
			<h1 className='text-4xl sm:text-5xl font-bold tracking-tight animate-fade-in text-white drop-shadow-lg'>
				MD Saddam Hosen
			</h1>
			<p className='mt-4 text-lg sm:text-xl max-w-xl mx-auto text-gray-300 animate-fade-in'>
				Full-stack web developer, turning ideas into fast, scalable, and
				stunning web experiences.
			</p>

			{/* Call to Action Buttons */}
			<div className='mt-8 flex flex-wrap gap-4 justify-center animate-fade-in'>
				<Link
					href='#contact'
					className='px-6 py-3 bg-accent text-dark font-medium rounded-lg shadow-accent-glow hover:bg-accent/90 transition duration-400 ease-in-out-custom'
				>
					Let’s Work Together
				</Link>
				<Link
					href='#projects'
					className='px-6 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent hover:text-dark transition duration-400 ease-in-out-custom'
				>
					View Projects
				</Link>
				<ResumeDownload />
			</div>
		</section>
	);
}

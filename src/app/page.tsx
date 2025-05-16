"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Components
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	useEffect(() => {
		const panels = gsap.utils.toArray(".panel");

		gsap.to(panels, {
			xPercent: -100 * (panels.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: ".trigger-wrapper", // ← Trigger on wrapper
				pin: true,
				scrub: 1,
				start: "top top",
				snap: 1 / (panels.length - 1),
				end: () => {
					const container = document.querySelector<HTMLElement>(".container");
					return (
						"+=" + (container ? container.offsetWidth : window.innerWidth * 5)
					);
				},
			},
		});
	}, []);

	return (
		<>
			{/* Navbar */}
			<Navbar />

			{/* Horizontal Scroll Container */}
			<div className='trigger-wrapper w-full h-screen'>
				<div className='container flex h-screen w-max'>
					<section className='firstContainer panel flex flex-col items-center justify-center h-screen bg-black text-white'>
						<Hero />
					</section>
					<section className='panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gray-900 p-8 text-center'>
						<About />
					</section>
					<section className='panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gray-800 p-8 text-center'>
						<Skills />
					</section>
					<section className='panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gray-900 p-8 text-center'>
						<Projects />
					</section>
					<section className='panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gray-800 p-8 text-center'>
						<Services />
					</section>
					<section className='lastContainer panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gray-900 p-8 text-center'>
						<Contact />
					</section>
				</div>
			</div>
		</>
	);
}

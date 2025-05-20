"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />

			<Hero />
			<About />
			<Skills />
			<Projects />
			<Services />
			<Contact />
		</>
	);
}

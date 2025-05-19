"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const sections = [
	{ id: "hero", Component: Hero },
	{ id: "about", Component: About },
	{ id: "skills", Component: Skills },
	{ id: "projects", Component: Projects },
	{ id: "services", Component: Services },
	{ id: "contact", Component: Contact },
];

export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState<"up" | "down">("down");
	const isScrollingRef = useRef(false);
	const touchStartY = useRef(0);

	const throttle = (callback: () => void) => {
		if (isScrollingRef.current) return;
		isScrollingRef.current = true;
		callback();
		setTimeout(() => {
			isScrollingRef.current = false;
		}, 800);
	};

	const scrollUp = () => {
		if (currentIndex > 0) {
			setDirection("up");
			setCurrentIndex((i) => i - 1);
		}
	};

	const scrollDown = () => {
		if (currentIndex < sections.length - 1) {
			setDirection("down");
			setCurrentIndex((i) => i + 1);
		}
	};

	// Mouse wheel
	useEffect(() => {
		const onWheel = (e: WheelEvent) => {
			if (sections[currentIndex]?.id === "projects") {
				const el = document.querySelector("#projects .grid") as HTMLElement;

				if (el) {
					const scrollTop = el.scrollTop;
					const scrollHeight = el.scrollHeight;
					const clientHeight = el.clientHeight;

					const isAtTop = scrollTop <= 0;
					const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

					if (
						(direction === "down" && isAtBottom) ||
						(direction === "up" && isAtTop)
					) {
						// Allow section scroll
						if (direction === "down") scrollDown();
						else scrollUp();
					}
				}
			} else {
				e.preventDefault();
				console.log("ed", e.deltaY);

				throttle(() => {
					if (e.deltaY > 0) scrollDown();
					else scrollUp();
				});
			}
		};
		window.addEventListener("wheel", onWheel, { passive: false });
		return () => window.removeEventListener("wheel", onWheel);
	}, [currentIndex]);

	// Keyboard
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowDown") throttle(scrollDown);
			if (e.key === "ArrowUp") throttle(scrollUp);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [currentIndex]);

	// Touch
	useEffect(() => {
		const onTouchStart = (e: TouchEvent) => {
			touchStartY.current = e.touches[0].clientY;
		};
		const onTouchEnd = (e: TouchEvent) => {
			const delta = touchStartY.current - e.changedTouches[0].clientY;

			if (Math.abs(delta) > 50) {
				const scrollDirection = delta > 0 ? "down" : "up";

				if (sections[currentIndex]?.id === "projects") {
					const el = document.querySelector(
						`[data-section-id="projects"]`
					) as HTMLElement;
					if (!el) return;

					const isAtTop = el.scrollTop <= 0 && scrollDirection === "up";
					const isAtBottom =
						el.scrollHeight - el.scrollTop <= el.clientHeight + 1 &&
						scrollDirection === "down";

					if (isAtTop || isAtBottom) {
						el.scrollBy({
							top: scrollDirection === "down" ? 9999 : -9999,
							left: 0,
							behavior: "smooth",
						});

						setTimeout(() => {
							const stillAtTop = el.scrollTop <= 0;
							const stillAtBottom =
								el.scrollHeight - el.scrollTop <= el.clientHeight + 1;

							if (
								(scrollDirection === "down" && stillAtBottom) ||
								(scrollDirection === "up" && stillAtTop)
							) {
								throttle(() => {
									if (scrollDirection === "down") scrollDown();
									else scrollUp();
								});
							}
						}, 400); // Allow scroll to finish
					}
				} else {
					throttle(() => {
						if (scrollDirection === "down") scrollDown();
						else scrollUp();
					});
				}
			}
		};

		window.addEventListener("touchstart", onTouchStart);
		window.addEventListener("touchend", onTouchEnd);
		return () => {
			window.removeEventListener("touchstart", onTouchStart);
			window.removeEventListener("touchend", onTouchEnd);
		};
	}, [currentIndex]);

	return (
		<>
			<Navbar />
			<div className='relative h-screen w-screen overflow-hidden bg-black'>
				{sections.map(({ id, Component }, index) => {
					const isActive = index === currentIndex;

					return (
						<motion.div
							key={id}
							className='absolute inset-0 top-10 w-full h-full'
							initial={false}
							animate={
								isActive
									? {
											x: 0,
											opacity: 1,
											zIndex: 10 + index,
									  }
									: {
											x:
												index < currentIndex
													? 0 // keep showing previous ones under
													: "100%", // move next ones offscreen
											opacity: index < currentIndex ? 1 : 0,
											zIndex: 10 + index,
									  }
							}
							transition={{
								duration: 0.6,
								ease: "easeInOut",
							}}
							style={{ pointerEvents: isActive ? "auto" : "none" }}
						>
							<div className='h-screen w-screen'>
								<Component />
							</div>
						</motion.div>
					);
				})}
			</div>
		</>
	);
}

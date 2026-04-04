import { useEffect } from "react";
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
	useEffect(() => {
		// Select all main sections and the portfolio wrapper
		const sections = document.querySelectorAll(
			"section[id], div[id='projects']"
		);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Update the URL hash without reloading or adding to browser history
						window.history.replaceState(null, null, `#${entry.target.id}`);
					}
				});
			},
			{ rootMargin: "-50% 0px -49% 0px" } // Triggers exactly when the section hits the middle of the screen
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<div>
			<section id="homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="about">
				<About />
			</section>
			<div id="projects">
				<Portfolio />
			</div>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
};

export default App;

import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
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

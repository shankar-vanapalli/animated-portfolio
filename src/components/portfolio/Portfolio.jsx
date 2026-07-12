import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";

// Add your real projects here when ready
const items = [
	{
		id: 1,
		title: "Kanya Raasi",
		desc: "AI Health & Nutrition Coach — A RAG-powered AI chatbot for personalized weight loss, nutrition, and fitness advice. Combines a local vector store (health PDFs) with live web search for grounded, accurate responses. Features streaming token-by-token responses, 30-turn conversation memory, multi-session sidebar, and domain guardrails.",
		img: "/kanya-raasi.png",
		link: "https://kanya-raasi.onrender.com",
	},
];

const Single = ({ item }) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
	return (
		<section className="single">
			<div className="container">
				<div className="wrapper">
					<div className="imgContainer" ref={ref}>
						<img src={item.img} alt={item.title} />
					</div>
					<motion.div className="textContainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button onClick={() => window.open(item.link, "_blank")}>
							See Demo
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});
	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1>Best Works</h1>
				<motion.div style={{ scaleX }} className="progressBar"></motion.div>
			</div>
			{items.length === 0 ? (
				<motion.div
					className="comingSoon"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<span className="comingSoonIcon">🚀</span>
					<h2>Projects Coming Soon</h2>
					<p>I'm currently working on some exciting things. Check back later!</p>
				</motion.div>
			) : (
				items.map((item) => <Single key={item.id} item={item} />)
			)}
		</div>
	);
};

export default Portfolio;

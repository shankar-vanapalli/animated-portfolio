import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";

const items = [
	{
		id: 1,
		title: "E-Commerce Platform",
		img: "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
		desc: "A full-scale e-commerce web application built with React.js, Next.js, and MongoDB. Features include user authentication, a dynamic shopping cart, secure payment gateway integrations, and an intuitive admin dashboard for inventory management.",
		link: "https://github.com",
	},
	{
		id: 2,
		title: "Real-Time Chat App",
		img: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
		desc: "A responsive, real-time messaging application leveraging Socket.io and React. Offers private messaging, group chats, read receipts, and online status indicators with a sleek, modern UI driven by Framer Motion animations.",
		link: "https://github.com",
	},
	{
		id: 3,
		title: "Task Management SaaS",
		img: "https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
		desc: "A productivity tool that helps teams organize workflows. Built with Java Spring Boot backend and React frontend. Includes drag-and-drop Kanban boards, role-based access control, and detailed analytics tracking.",
		link: "https://github.com",
	},
	{
		id: 4,
		title: "Financial Dashboard",
		img: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
		desc: "An enterprise-grade financial metrics dashboard displaying real-time data through interactive charts. Optimized for performance and massive datasets using advanced React performance patterns and D3.js data visualizations.",
		link: "https://github.com",
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
			{items?.map((item) => {
				return <Single key={item.id} item={item} />;
			})}
		</div>
	);
};

export default Portfolio;

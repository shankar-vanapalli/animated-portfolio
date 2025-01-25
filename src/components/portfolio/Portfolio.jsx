import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";

const items = [
	{
		id: 1,
		title: "React App",
		img: "https://images.pexels.com/photos/28768323/pexels-photo-28768323/free-photo-of-silhouette-of-a-person-running-on-the-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt beatae nobis minima adipisci officiis eius pariatur dolor animi? Amet quas voluptates ducimus aliquid numquam optio hic provident necessitatibus dolores!",
	},
	{
		id: 2,
		title: "Next Js App",
		img: "https://images.pexels.com/photos/30158619/pexels-photo-30158619/free-photo-of-bosphorus-cruise-at-sunset-with-ortakoy-mosque.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt beatae nobis minima adipisci officiis eius pariatur dolor animi? Amet quas voluptates ducimus aliquid numquam optio hic provident necessitatibus dolores!",
	},
	{
		id: 3,
		title: "JS App",
		img: "https://images.pexels.com/photos/30167947/pexels-photo-30167947/free-photo-of-charming-window-in-aix-en-provence-architecture.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt beatae nobis minima adipisci officiis eius pariatur dolor animi? Amet quas voluptates ducimus aliquid numquam optio hic provident necessitatibus dolores!",
	},
	{
		id: 4,
		title: "Java App",
		img: "https://images.pexels.com/photos/30075407/pexels-photo-30075407/free-photo-of-scenic-view-of-nyhavn-harbor-in-winter-light.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt beatae nobis minima adipisci officiis eius pariatur dolor animi? Amet quas voluptates ducimus aliquid numquam optio hic provident necessitatibus dolores!",
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
						<img src={item.img} alt="" />
					</div>
					<motion.div className="textContainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button>See Demo</button>
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

import { motion } from "framer-motion";
import "./about.scss";

const About = () => {
	const skills = [
		"React.js",
		"JavaScript",
		"LLM",
		"Java",
		"Next.js",
		"MongoDB",
		"Git",
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const titleVariants = {
		hidden: { y: -50 },
		visible: { y: 0 },
	};

	const chipVariants = {
		hidden: { scale: 0 },
		visible: (index) => ({
			scale: 1,
			transition: { duration: 0.5, delay: index * 0.1 }, // Delay based on index
		}),
	};

	return (
		<motion.div
			className="about"
			initial="hidden"
			whileInView="visible"
			variants={containerVariants}
		>
			<motion.div
				className="titleContainer"
				initial="hidden"
				whileInView="visible"
				variants={titleVariants}
				transition={{ duration: 1, type: "spring", stiffness: 120 }}
			>
				<div className="title">
					<motion.h1 whileHover={{ color: "#f39c12" }}>
						About Me{" "}
						<motion.b whileHover={{ color: "white" }}>?</motion.b>
					</motion.h1>
				</div>
			</motion.div>
			<motion.div
				className="aboutContainer"
				initial="hidden"
				whileInView="visible"
				variants={containerVariants}
				transition={{ duration: 1, delay: 0.3 }}
			>
				<div className="aboutText">
					<p>
						Passionate Software Engineer with <b>3+ years</b> of
						experience specializing in full-stack development using
						<b> React.js</b>, <b>Node.js</b>, <b>Java</b>, and modern
						cloud technologies to build scalable and high-performance web
						applications.
					</p>
				</div>
			</motion.div>
			<motion.div
				className="chipsContainer"
				initial="hidden"
				whileInView="visible"
				variants={containerVariants}
				transition={{ duration: 1, delay: 0.5 }}
			>
				{skills?.map((skill, index) => (
					<motion.div
						className="chip"
						key={index}
						custom={index}
						variants={chipVariants}
						initial="hidden"
						whileInView="visible"
						whileHover={{
							scale: 1.1,
							y: -10,
							backgroundColor: "#f39c12",
						}}
					>
						{skill}
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default About;

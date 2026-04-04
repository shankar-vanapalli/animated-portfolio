import "./hero.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVariants}>
						BHAVANI SHANKAR VANAPALLI
					</motion.h2>
					<motion.h1 variants={textVariants}>
						<Typewriter
							options={{
								strings: [
									"Frontend Developer",
									"Full-Stack Engineer",
									"React.js Specialist",
									"UI/UX Enthusiast",
								],
								autoStart: true,
								loop: true,
								wrapperClassName: "typewriter-text",
								cursorClassName: "typewriter-cursor",
							}}
						/>
					</motion.h1>
					<motion.div variants={textVariants} className="buttons">
						<motion.a href="#projects" variants={textVariants}>
							See My Work
						</motion.a>
						<motion.a href="#contact" variants={textVariants}>
							Contact Me
						</motion.a>
					</motion.div>
					<motion.img
						src={`${import.meta.env.BASE_URL}scroll.png`}
						variants={textVariants}
						animate="scrollButton"
						alt="Scroll"
					/>
				</motion.div>
				<div className="imgContainer">
					<img src={`${import.meta.env.BASE_URL}hero.png`} alt="Hero" />
				</div>
			</div>
		</div>
	);
};

export default Hero;

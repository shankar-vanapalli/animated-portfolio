import { motion } from "framer-motion";

const variants = {
	open: {
		transition: { staggerChildren: 0.1 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};
const Links = () => {
	const items = ["Homepage", "About", "Projects", "Contact"];
	return (
		<motion.div className="links" variants={variants}>
			{items.map((item, index) => (
				<motion.a
					href={`#${item.toLowerCase()}`}
					variants={itemVariants}
					key={index}
					whileTap={{ scale: 0.8 }}
					whileHover={{ scale: 1.2 }}
				>
					{item}
				</motion.a>
			))}
		</motion.div>
	);
};

export default Links;

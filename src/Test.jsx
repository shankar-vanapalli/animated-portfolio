import { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
	const [open, setOpen] = useState(false);
	const variants = {
		visible: (i) => ({
			opacity: 1,
			x: 100,
			transition: { delay: i * 0.5 },
		}),
		hidden: { opacity: 0 },
	};

	const items = ["item1", "item2", "item3", "item4"];

	return (
		<div className="container">
			<motion.ul initial="hidden" animate="visible" variants={variants}>
				{items?.map((item, index) => (
					<motion.li variants={variants} key={index} custom={index}>
						{item}
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

export default Test;

import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
	return (
		<div className="navbar">
			{/* Sidebar */}
			<Sidebar />
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Bhavani Shankar Vanapalli
				</motion.span>
				<div className="social">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={`${import.meta.env.BASE_URL}facebook.png`} alt="Facebook" />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={`${import.meta.env.BASE_URL}instagram.png`} alt="Instagram" />
					</a>
					<a
						href="https://youtube.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={`${import.meta.env.BASE_URL}youtube.png`} alt="YouTube" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

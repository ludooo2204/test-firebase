import React from "react";
import "../index.css";
const liens = ["Mes Créations", "Qui suis-je ?", "Contactez-moi"];

const Navbar = () => {
	return (
		<nav style={styles.navbar}>
			<ol style={styles.ol}>
				{liens.map((text) => (
					<li style={styles.text}>{text}</li>
				))}
			</ol>
		</nav>
	);
};

export default Navbar;

const styles = {
	navbar: {
		backgroundColor: "#F0C8A3",
		height: "50px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	ol: {
		display: "flex",
		width: "50%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		listStyleType: "none",
	},
	text: {
		color: "#684529",
		fontFamily: "Pacifico",
		textDecoration: "none",
		fontSize: 30,
	},
};

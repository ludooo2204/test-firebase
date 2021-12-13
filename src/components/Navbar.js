import React from "react";
import '../index.css'
const liens = ["Créations", "Qui suis-je ?", "Contactez-moi"];

const Navbar = () => {
	return <nav style={styles.navbar}>
        <li style={styles.text}>toto</li>
    </nav>;
};

export default Navbar;

const styles = {
	navbar: {
		backgroundColor: "#F0C8A3",
		height: "100px",
	},
	text: { 
        color: "#684529" ,
        fontFamily:"Pacifico",
        textDecoration:"none",
        fontSize:50}
};

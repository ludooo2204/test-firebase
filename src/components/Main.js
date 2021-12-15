import React from "react";
import styles from "./Main.module.css";
const Main = () => {
	return (
		<div className={styles.tout}>
			<main className={styles.main}></main>
			<div className={styles.fleurLeft}></div>
			<div className={styles.fleurRight}></div>
		</div>
	);
};

export default Main;
// const styles = {
// 	main: {
// background: 'url(./image/1.jpg) no-repeat 100%',
// height: 1000,

// 	},

// };

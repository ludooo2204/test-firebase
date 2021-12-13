import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Card = () => {
	return (
			<div style={{ background: "#19191920", width: "30%", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Carousel useKeyboardArrows={true} emulateTouch={true}>
					<img src={`image/1.jpg`}  alt={"title"} />
					<img src={`image/2.jpg`}  alt={"title"} />
					<img src={`image/3.jpg`}  alt={"title"} />
					<img src={`image/4.jpg`}  alt={"title"} />
					<img src={`image/5.jpg`}  alt={"title"} />
					
				</Carousel>
			</div>
	);
};

export default Card;

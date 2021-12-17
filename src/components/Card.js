import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./Main.module.css";
import image1 from "../image/1.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";

const Card = () => {
	let settings = { 
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<div className={styles.cardContainer}>
			{/* <img src={image1} /> */}
			

			<Slider {...settings}>	
					<img src={image1}  className={styles.cardImage}/>
					<img src={image2}  className={styles.cardImage}/>
					<img src={image3}  className={styles.cardImage}/>
			
			</Slider>
		</div>
	);
};

export default Card;

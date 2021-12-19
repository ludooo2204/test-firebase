import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Main.module.css";
import image1 from "../image/1.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";
let images = [image1, image2, image3];

const Card = () => {


	const toggleModalImage =()=>{
		
	}
	const settings = {
		// customPaging: function(i) {
		// 	return (
		// 	  <a>
		// 		<img src={images[i]} className={styles.thumbnail}/>
		// 	  </a>
		// 	);
		//   },
		dots: true,
		dotsClass: "slick-dots ",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className={styles.cardContainer}>
			{/* <img src={image1} /> */}

			<Slider  {...settings}>
				<div className={styles.divCardContainer}>
					<img src={image1} onClick={()=>toggleModalImage()} className={styles.cardImage} />
				</div>
				<div className={styles.divCardContainer}>
					<img src={image2} className={styles.cardImage} />
				</div>
				<div className={styles.divCardContainer}>
					<img src={image3} className={styles.cardImage} />
				</div>
			</Slider>
			<div className={styles.legende}>
				<div className={styles.priceTag}>35€</div>
				<h3 className={styles.title}>Boite à thé</h3>
				<p> maginfique boite à thés avec 16 compartiments. Piece unique !</p>
			</div>
		</div>
	);
};

export default Card;

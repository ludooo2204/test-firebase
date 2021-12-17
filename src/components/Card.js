import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import image1 from "../image/1.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";

const Card = () => {
	let settings = { dots: true };
	return (
		<div style={{ padding:40,background:"blue" }}>
			{/* <img src={image1} /> */}
			

			<Slider {...settings}>
				<div>
					<img src={image1} />
				</div>
				<div>
					<img src={image2} />
				</div>
				<div>
					<img src={image3} />
				</div>
				<div>
					<img src={image4} />
				</div>
			</Slider>
			<img src={image2} />
		</div>
	);
};

export default Card;

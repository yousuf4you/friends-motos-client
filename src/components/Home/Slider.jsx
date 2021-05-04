import React from "react";
import ImageGallery from "react-image-gallery";
import className from "classname";
import "react-image-gallery/styles/css/image-gallery.css";

import img1 from "../../assets/slider-img/slide1.jpg";
import img2 from "../../assets/slider-img/slide2.jpg";
import img3 from "../../assets/slider-img/slide3.jpg";
import img4 from "../../assets/slider-img/slide4.jpg";
import img5 from "../../assets/slider-img/slide5.jpg";
import img6 from "../../assets/slider-img/slide6.jpg";

import useStyles from "./slider-styles";

const images = [
	{
		original: img1,
	},
	{
		original: img2,
	},
	{
		original: img3,
	},
	{
		original: img4,
	},
	{
		original: img5,
	},
	{
		original: img6,
	},
];

const Slider = () => {
	const classes = useStyles();
	return (
		<ImageGallery
			items={images}
			showThumbnails={false}
			className={classes.root}
			autoPlay={true}
			showFullscreenButton={false}
			showBullets={true}
			showIndex={true}
			slideDuration={1000}
		/>
	);
};

export default Slider;

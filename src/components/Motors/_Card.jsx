import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SlideshowIcon from "@material-ui/icons/Slideshow";

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
	actionButtons: { justifyContent: "space-between" },
}));

const _Card = ({ name, price, discount, cc, desc, img, sellCount, brake }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						TVS
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={name}
				subheader={`The Bike ${brake} & ${cc}cc`}
			/>
			<CardMedia className={classes.media} image={img} title='Paella dish' />
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{desc}
				</Typography>
			</CardContent>
			<CardActions disableSpacing className={classes.actionButtons}>
				<IconButton aria-label='add to favorites'>
					<SlideshowIcon />
				</IconButton>
				<Typography
					variant='h4'
					style={{ fontSize: "18px", color: "#F9A124" }}>
					{price} &#x9f3;
				</Typography>
				<Typography
					variant='span'
					aria-label='share'
					style={{ fontSize: "15px", margin: "10px", color: "#f50057" }}>
					{sellCount} Sells
				</Typography>
			</CardActions>
		</Card>
	);
};

export default _Card;

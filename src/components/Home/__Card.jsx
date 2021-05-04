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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";

import logo from "../../assets/image/logo_back.png";

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	logo: {
		width: "40px",
	},
}));

function __Card({ img, name, price }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe'>
						<img src={logo} alt='logo' className={classes.logo} />
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={name}
				subheader={price}
			/>
			<CardMedia className={classes.media} image={img} title='Paella dish' />
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					This impressive paella is a perfect party dish and a fun meal to
					cook together with your guests. Add 1 cup of frozen peas along
					with the mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<VisibilityIcon color='textSecondary' />
				</IconButton>
				<IconButton aria-label='share'>
					<ShoppingCartIcon color='textPrimary' />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default __Card;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
	titleContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	infoContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		margin: "0 10px",
	},
});

export default function MediaCard({
	name,
	price,
	discount,
	desc,
	soldCount,
	model,
	color,
	img,
}) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={img} />
				<CardContent>
					<div className={classes.titleContainer}>
						<Typography gutterBottom variant='h6'>
							{name}
						</Typography>
						<Typography variant='h6' color='secondary'>
							{price} &#2547;
						</Typography>
					</div>
					<Typography variant='body2' color='textSecondary' component='p'>
						{desc}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.infoContainer}>
				<Typography variant='p' color='primary'>
					{model}
				</Typography>
				<Typography variant='p' color='textSecondary'>
					{color}
				</Typography>
				<Typography variant='p' color='secondary'>
					{soldCount} SOLD
				</Typography>
			</CardActions>
		</Card>
	);
}

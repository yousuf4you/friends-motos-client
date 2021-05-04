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
});

function MostSellCard({ name, img }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt='Contemplative Reptile'
					height='140'
					image={img}
					title='Contemplative Reptile'
				/>
				<CardContent>
					<Typography gutterBottom variant='h6' component='h4'>
						{name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'>
					6 Time
				</Button>
				<Button size='small' color='primary'>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}

export default MostSellCard;

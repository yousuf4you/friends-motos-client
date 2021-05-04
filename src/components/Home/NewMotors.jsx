import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

import useStyles from "./new-motors";
import Card from "./__Card";

import motors1 from "../../assets/new-motors/1.jpg";
import motors2 from "../../assets/new-motors/2.jpg";
import motors3 from "../../assets/new-motors/3.jpg";
import motors4 from "../../assets/new-motors/4.jpg";
import motors5 from "../../assets/new-motors/5.webp";
import motors6 from "../../assets/new-motors/6.jpg";
import motors7 from "../../assets/new-motors/7.jpg";
import motors8 from "../../assets/new-motors/1.jpg";

const NewMotors = () => {
	const classes = useStyles();
	return (
		<>
			<Container className={classes.root}>
				<div className={classes.title}>
					<Typography variant='h3' component='h4' color='secondary'>
						New Arrived Motors
					</Typography>
					<Link to='/motors'>More...</Link>
				</div>
				<div className={classes.allMotors}>
					<Grid container spacing={3} alignContent='center'>
						<Grid item xs={3}>
							<Card
								img={motors1}
								name={"Motors Name"}
								price={"1,20,000 TK"}
							/>
						</Grid>
						<Grid item xs={3}>
							<Card
								img={motors2}
								name={"Motors Name"}
								price={"1,20,000 TK"}
							/>
						</Grid>
						<Grid item xs={3}>
							<Card
								img={motors3}
								name={"Motors Name"}
								price={"1,20,000 TK"}
							/>
						</Grid>
						<Grid item xs={3}>
							<Card
								img={motors4}
								name={"Motors Name"}
								price={"1,20,000 TK"}
							/>
						</Grid>
						<Grid item xs={3}>
							<Card
								img={motors5}
								name={"Motors Name"}
								price={"1,20,000 TK"}
							/>
						</Grid>
						<Grid item xs={3}>
							<Card
								img={motors6}
								name={"Motors Name"}
								price={"1,20,000 TK"}
							/>
						</Grid>
						<Grid item xs={3}>
							<Card
								img={motors7}
								name={"Motors Name"}
								price={"1,20,000 TK"}
							/>
						</Grid>
						<Grid item xs={3}>
							<Card
								img={motors8}
								name={"Motors Name"}
								price={"1,20,000 TK"}
							/>
						</Grid>
					</Grid>
				</div>
			</Container>
			<Container>
				<hr color='secondary' />
			</Container>
		</>
	);
};

export default NewMotors;

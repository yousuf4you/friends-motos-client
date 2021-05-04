import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import useStyles from "./most-sell";
import Card from "./__MostSellCard";

const MostSell = () => {
	const classes = useStyles();

	return (
		<>
			<Container className={classes.root}>
				<Typography variant='h2' color='secondary'>
					Most Sells
				</Typography>
				<Grid container spacing={4} justify='center'>
					<Grid item xs={3}>
						<Card
							name={"Motors Name With Model"}
							img={
								"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							name={"Motors Name With Model"}
							img={
								"https://images.unsplash.com/photo-1435244837924-21c508f9db25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							name={"Motors Name With Model"}
							img={
								"https://images.unsplash.com/photo-1552306062-29a5560e1c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							name={"Motors Name With Model"}
							img={
								"https://images.unsplash.com/photo-1580341289255-5b47c98a59dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							name={"Motors Name With Model"}
							img={
								"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							name={"Motors Name With Model"}
							img={
								"https://images.unsplash.com/photo-1558979159-2b18a4070a87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							name={"Motors Name With Model"}
							img={
								"https://images.unsplash.com/photo-1552155634-312b6355173b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1309&q=80"
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							name={"Motors Name With Model"}
							img={
								"https://images.unsplash.com/photo-1558974804-2c2b396b60df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80"
							}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default MostSell;

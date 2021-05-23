import React from "react";
import {
	Container,
	Typography,
	Grid,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	Button,
} from "@material-ui/core";

import FindInPageIcon from "@material-ui/icons/FindInPage";
import useStyles from "./component-styles";
import Card from "./_Card";

const Components = () => {
	const classes = useStyles();

	return (
		<Container disableGutters>
			<div className={classes.header}>
				<Typography
					variant='h4'
					align='left'
					color='secondary'
					gutterBottom
					paragraph
					className={classes.headerTitle}>
					Some Text about your motorcycle store list.
				</Typography>
				<Typography
					component='p'
					align='left'
					color='textSecondary'
					gutterBottom
					paragraph
					className={classes.headerDesc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
					ducimus quisquam nesciunt beatae nam odio cum minus. Aperiam
					eligendi, consequatur nesciunt quaerat beatae reiciendis ullam a,
					illum recusandae explicabo quo? Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Repellat ducimus quisquam nesciunt
					beatae nam odio cum minus. Aperiam eligendi, quo?
				</Typography>
			</div>
			<div className={classes.motorsActions}>
				<Grid container spacing={4} justify='center'>
					<Grid item xs={3}>
						<Button
							fullWidth
							variant='contained'
							color='primary'
							size='large'
							className={classes.button}>
							Add A Component
						</Button>
					</Grid>
					<Grid item xs={9}>
						<FormControl variant='outlined' fullWidth>
							<InputLabel htmlFor='outlined-adornment-password'>
								Search a motorcycle on the page
							</InputLabel>
							<OutlinedInput
								id='outlined-adornment-password'
								endAdornment={
									<InputAdornment position='end'>
										<FindInPageIcon color='textSecondary' />
									</InputAdornment>
								}
								labelWidth={240}
							/>
						</FormControl>
					</Grid>
				</Grid>
			</div>
			<Grid container spacing={2} justify='center'>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1510872893374-80379d91fc92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1614728987460-28d23edb1366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1562615202-0b3035d14b6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/4/madebyvadim.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1614086138082-8f9f4bed81e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1606914998137-d9b33982be02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1520500374161-c2f4f955fda5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1603841533901-7e17ffe0290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1617307327024-14c0a02125fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1515787766711-f9de50ca9023?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1618762098304-38e6b03db348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
				<Grid item xs={3}>
					<Card
						name='Short Name'
						price={530}
						soldCount={4}
						model='RTX44M'
						color='whitesmoke'
						discount={null}
						img='https://images.unsplash.com/photo-1618761979759-949464b5da07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80'
						desc='Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica'
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Components;

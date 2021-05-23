import React from "react";
import {
	Container,
	Grid,
	Typography,
	FormControl,
	Input,
	InputLabel,
	InputAdornment,
	TextField,
	OutlinedInput,
	Button,
} from "@material-ui/core";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ClassName from "classname";

import Card from "./_Card";
import useStyles from "./motors-styles";

const Motors = () => {
	const classes = useStyles();

	return (
		<Container>
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
							Add A Motorcycle
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
			<Grid container justify='center' spacing={3}>
				<Grid item xs={4}>
					<Card
						name='Motors Name With Model'
						price='1,37,774'
						discount='10%'
						cc='120'
						sellCount={6}
						brake='Dual Disk'
						img='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						desc='This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along
						with the mussels, if you like.'
					/>
				</Grid>
				<Grid item xs={4}>
					<Card
						name='Motors Name With Model'
						price='1,37,774'
						discount='10%'
						cc='120'
						sellCount={6}
						brake='Dual Disk'
						img='https://images.unsplash.com/photo-1552306062-29a5560e1c31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						desc='This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along
						with the mussels, if you like.'
					/>
				</Grid>
				<Grid item xs={4}>
					<Card
						name='Motors Name With Model'
						price='1,37,774'
						discount='10%'
						cc='120'
						sellCount={6}
						brake='Dual Disk'
						img='https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
						desc='This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along
						with the mussels, if you like.'
					/>
				</Grid>
				<Grid item xs={4}>
					<Card
						name='Motors Name With Model'
						price='1,37,774'
						discount='10%'
						cc='120'
						sellCount={6}
						brake='Dual Disk'
						img='https://images.unsplash.com/photo-1580341289255-5b47c98a59dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						desc='This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along
						with the mussels, if you like.'
					/>
				</Grid>
				<Grid item xs={4}>
					<Card
						name='Motors Name With Model'
						price='1,37,774'
						discount='10%'
						cc='120'
						sellCount={6}
						brake='Dual Disk'
						img='https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						desc='This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along
						with the mussels, if you like.'
					/>
				</Grid>
				<Grid item xs={4}>
					<Card
						name='Motors Name With Model'
						price='1,37,774'
						discount='10%'
						cc='120'
						sellCount={6}
						brake='Dual Disk'
						img='https://images.unsplash.com/photo-1545623703-583dd2364bbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						desc='This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along
						with the mussels, if you like.'
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Motors;

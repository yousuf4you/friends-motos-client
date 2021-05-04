import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

import useStyles from "./short-intro";
import groupPhoto from "../../assets/image/photo-session.jpg";
import groupePhoto2 from "../../assets/image/photo-session2.jpg";
import shop from "../../assets/image/shop.jpg";

const NewSells = () => {
	const classes = useStyles();

	return (
		<>
			<Container className={classes.root}>
				<Typography variant='h2' color='textSecondary'>
					Short Intro
				</Typography>
				<div className={classes.mainContent}>
					<div className={classes.leftSide}>
						<Box
							boxShadow={3}
							className={classes.upperPart}
							borderRadius={3}>
							<img src={groupPhoto} alt='shop' />
						</Box>
						<Box
							boxShadow={3}
							className={classes.middlePart}
							borderRadius={3}>
							<img src={groupePhoto2} alt='shop' />
						</Box>
						<Box
							boxShadow={3}
							className={classes.bottomPart}
							borderRadius={3}>
							<img src={shop} alt='shop' />
						</Box>
					</div>
					<div className={classes.rightSide}>
						<Box
							boxShadow={3}
							className={classes.rightUpperPart}
							borderRadius={3}>
							<img
								src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
								alt='img'
							/>
						</Box>
						<Box
							boxShadow={3}
							className={classes.rightBottomPart}
							borderRadius={3}>
							<img
								src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
								alt='img'
							/>
						</Box>
					</div>
				</div>
			</Container>
			<Container>
				<hr color='secondary' />
			</Container>
		</>
	);
};

export default NewSells;

import React from "react";
import { Box, Container } from "@material-ui/core";
import Motors from "@material-ui/icons/LocalMall";
import Parts from "@material-ui/icons/Build";
import Servicing from "@material-ui/icons/BeachAccess";
import ClassName from "classname";

import useStyles from "./landing-styles";
import Signin from "./Login";
import logo from "../../assets/img/logo.svg";
import brandLogo from "../../assets/img/tvs-logo.svg";

const Landing = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container
				className={classes.container}
				boxShadow={3}
				component='div'
				borderRadius='borderRadius'>
				<Box
					boxShadow={3}
					className={classes.shadow}
					borderRadius='borderRadius'>
					<div className={classes.infoWrapper}>
						<div className={classes.infoContent}>
							<header className={classes.infoHeader}>
								<div className={classes.brandLogo}>
									<img src={brandLogo} alt='brand logo' />
								</div>
								<div className={classes.divider} />
								<div className={classes.logo}>
									<img src={logo} alt='main logo' />
								</div>
							</header>
							<div className={classes.information}>
								<div className={classes.contentDiv}>
									<Motors fontSize='large' color='white-500' />
									<div className={classes.informationContent}></div>
								</div>
								<div className={classes.contentDiv}>
									<Parts fontSize='large' />
									<div className={classes.informationContent}></div>
								</div>
								<div className={classes.contentDiv}>
									<Servicing fontSize='large' />
									<div className={classes.informationContent}></div>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.loginWrapper}>
						<Signin /> {/* This is login component */}
					</div>
				</Box>
			</Container>
		</div>
	);
};

export default Landing;

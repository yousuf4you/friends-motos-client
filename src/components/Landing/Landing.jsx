import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import Motors from "@material-ui/icons/LocalMall";
import Parts from "@material-ui/icons/Build";
import Servicing from "@material-ui/icons/BeachAccess";

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
							<p
								className='text-shadow'
								style={{
									textAlign: "center",
									marginBottom: "24px",
									fontWeight: "bold",
									fontSize: "1.1rem",
									color: "#f1f1f1",
									letterSpacing: "4px",
									fontFamily: "arial black",
								}}>
								AUTHORIZED REPRESENTATIVE OF <br /> TVS BRAND
							</p>
							<div className={classes.information}>
								<div className={classes.contentDiv}>
									<div className={classes.iconDiv}>
										<Motors className={classes.icon} />
									</div>
									<div className={classes.informationContent}>
										{/* TODO: this line to be modified */}
										<Typography variant='h6'>
											All Authorized Motors of TVS Brand
										</Typography>
										<Typography variant='p' component='p'>
											{/* TODO: this line to be modified */}
											Lorem ipsum dolor sit amet consectetur
											adipisicing elit. Culpa nisi aspernatur quis
											incidunt optio tenetur nemo at.
										</Typography>
									</div>
								</div>
								<div className={classes.contentDiv}>
									<div className={classes.iconDiv}>
										<Parts className={classes.icon} />
									</div>
									<div className={classes.informationContent}>
										{/* TODO: this line to be modified */}
										<Typography variant='h6'>
											All Genuine Authorized Parts
										</Typography>
										{/* TODO: this line to be modified */}
										<Typography variant='p' component='p'>
											Lorem ipsum dolor sit amet consectetur
											adipisicing elit. Culpa nisi aspernatur quis
											incidunt optio tenetur nemo at.
										</Typography>
									</div>
								</div>
								<div className={classes.contentDiv}>
									<div className={classes.iconDiv}>
										<Servicing className={classes.icon} />
									</div>
									<div className={classes.informationContent}>
										{/* TODO: this line to be modified */}
										<Typography variant='h6'>
											We Provide Servicing and Warranty
										</Typography>
										{/* TODO: this line to be modified */}
										<Typography variant='p' component='p'>
											Lorem ipsum dolor sit amet consectetur
											adipisicing elit. Culpa nisi aspernatur quis
											incidunt optio tenetur nemo at.
										</Typography>
									</div>
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

import React from "react";
import {
	Avatar,
	Toolbar,
	AppBar,
	IconButton,
	Badge,
	makeStyles,
	Typography,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/DashboardTwoTone";
import SportsMotorsportsIcon from "@material-ui/icons/SportsMotorsportsTwoTone";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BuildIcon from "@material-ui/icons/BuildTwoTone";
import StoreIcon from "@material-ui/icons/StoreTwoTone";
import CancelScheduleSendTwoToneIcon from "@material-ui/icons/CancelScheduleSendTwoTone";
import { Switch, useRouteMatch, Route, Link } from "react-router-dom";

import logo from "./assets/img/logo.svg";
import brandLogo from "./assets/img/tvs-logo.svg";
import avatar from "./assets/img/avatar.jpg";
import Component from "./components/Components/Components";
import Dashboard from "./components/Dashboard/Dashboard";
import Motors from "./components/Motors/Motors";
import Sells from "./components/Sells/Sells";
import Servicing from "./components/Servicing/Servicing";

const useStyles = makeStyles(theme => ({
	appBar: {
		minHeight: "86px",
	},
	displayFlex: {
		height: "86px !important",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logo: {
		width: "180px",
	},
	logoContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
	},
	// menu
	menuContainer: {
		// height: "100%",
	},
	menuList: {
		listStyle: "none",
		"& li": {
			display: "inline-block",
			cursor: "pointer",
			marginRight: theme.spacing(5),
			"& svg": {
				fontSize: theme.spacing(3.5),
			},
		},
	},
	menuIconDiv: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		"& a svg": {
			marginBottom: theme.spacing(0.6),
		},
		"& a p": {
			fontFamily: "Chela One",
			letterSpacing: "2px",
		},
	},
	iconDivider: {
		width: "3px",
		height: "50%",
		backgroundColor: theme.palette.info.contrastText,
		marginRight: theme.spacing(3),
		marginLeft: theme.spacing(3),
		borderRadius: theme.spacing(1),
	},
	avatar: {
		width: theme.spacing(5.5),
		height: theme.spacing(5.5),
	},
	leftIcon: {
		"& svg": {
			color: "#fff",
			fontSize: theme.spacing(3.5),
			textAlign: "center",
		},
	},
}));

const Store = () => {
	const classes = useStyles();
	const { path, url } = useRouteMatch();

	return (
		<>
			<AppBar position='sticky' className={classes.appBar}>
				<Toolbar className={classes.displayFlex}>
					{/* TODO:  logo*/}
					<div className={classes.logoContainer}>
						<img
							src={brandLogo}
							alt='brand logo'
							className={classes.logo}
						/>
						<div className={classes.iconDivider} />
						<img src={logo} alt='main logo' className={classes.logo} />
					</div>
					{/* TODO: menu items */}
					<div className={classes.menuContainer}>
						<ul className={classes.menuList}>
							<li>
								<div className={classes.menuIconDiv}>
									<Link to={`${url}/dashboard`}>
										<DashboardIcon />
										<Typography>DASHBOARD</Typography>
									</Link>
								</div>
							</li>
							<li>
								<div className={classes.menuIconDiv}>
									<Link to={`${url}/motors`}>
										<SportsMotorsportsIcon />
										<Typography fontFamily='Chela One'>
											MOTORS
										</Typography>
									</Link>
								</div>
							</li>
							<li>
								<div className={classes.menuIconDiv}>
									<Link to={`${url}/components`}>
										<CancelScheduleSendTwoToneIcon />
										<Typography>COMPONENTS</Typography>
									</Link>
								</div>
							</li>
							<li>
								<div className={classes.menuIconDiv}>
									<Link to={`${url}/servicing`}>
										<BuildIcon />
										<Typography>SERVICING</Typography>
									</Link>
								</div>
							</li>
							<li>
								<div className={classes.menuIconDiv}>
									<Link to={`${url}/sells`}>
										<StoreIcon />
										<Typography>SELLS</Typography>
									</Link>
								</div>
							</li>
						</ul>
					</div>
					{/* TODO: icon for personal */}
					<div className={classes.buttonGroup}>
						<IconButton>
							<Badge
								badgeContent={9}
								color='secondary'
								className={classes.leftIcon}>
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton>
							<Badge
								badgeContent={5}
								color='error'
								className={classes.leftIcon}>
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton>
							<Avatar
								alt={"Admin Name"}
								src={avatar}
								className={classes.avatar}
							/>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{/* TODO: switch functionality */}
			<Switch>
				<Route exact path={`${path}/dashboard`}>
					<Dashboard />
				</Route>
				<Route exact path={`${path}/motors`}>
					<Motors />
				</Route>
				<Route exact path={`${path}/components`}>
					<Component />
				</Route>
				<Route exact path={`${path}/sells`}>
					<Sells />
				</Route>
				<Route exact path={`${path}/servicing`}>
					<Servicing />
				</Route>
			</Switch>
		</>
	);
};

export default Store;

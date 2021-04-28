import React from "react";
import { Link } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link as DomLink,
} from "react-router-dom";

import useStyles from "./appbarStyles";
import logo from "../../assets/image/tvs-motor-logo.svg";
import Home from "../Home";
import Motors from "../Motors";
import Parts from "../Parts";
import Servicing from "../Servicing";
import Sells from "../Sells";

const NavBar = () => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Router>
			<div className={classes.grow}>
				<AppBar
					position='sticky'
					color='secondary'
					className={classes.appBar}>
					<Toolbar className={classes.appBar}>
						<div>
							<Link to='/'>
								<img
									src={logo}
									alt='tvs motors logo'
									className={classes.logo}
								/>
							</Link>
						</div>
						<div className={classes.grow} />

						<div>
							<ul className={classes.list}>
								<li className={classes.anchor}>
									<DomLink to='/'>Home</DomLink>
								</li>
								<li className={classes.anchor}>
									<DomLink to='/motors'>Motors</DomLink>
								</li>
								<li className={classes.anchor}>
									<DomLink to='/parts'>Parts</DomLink>
								</li>
								<li className={classes.anchor}>
									<DomLink to='/servicing'>Servicing</DomLink>
								</li>
								<li className={classes.anchor}>
									<DomLink to='sells'>Sells</DomLink>
								</li>
							</ul>

							{/* FIXME: to be removed */}
						</div>

						{/* Search input */}
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder='Search…'
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ "aria-label": "search" }}
							/>
						</div>

						{/* TODO: after this line the options are only for authentication */}

						<MenuItem>
							<IconButton aria-label='show 4 new mails' color='inherit'>
								<Badge badgeContent={4} color='primary'>
									<MailIcon />
								</Badge>
							</IconButton>
						</MenuItem>
						<MenuItem>
							<IconButton
								aria-label='show 11 new notifications'
								color='inherit'>
								<Badge badgeContent={11} color='primary'>
									<NotificationsIcon />
								</Badge>
							</IconButton>
						</MenuItem>

						<MenuItem>
							<IconButton
								aria-label='show 11 new notifications'
								color='inherit'>
								<Badge badgeContent={3} color='primary'>
									<ShoppingBasketIcon />
								</Badge>
							</IconButton>
						</MenuItem>

						<div>
							<IconButton
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'>
								<AccountCircle />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={open}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
			</div>
			{/* TODO: This is browser component */}
			<Switch>
				<Route exact path='/sells'>
					<Sells />
				</Route>
				<Route exact path='/servicing'>
					<Servicing />
				</Route>
				<Route exact path='/parts'>
					<Parts />
				</Route>
				<Route exact path='/motors'>
					<Motors />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default NavBar;

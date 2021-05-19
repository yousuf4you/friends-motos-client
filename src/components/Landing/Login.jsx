import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
	FiFacebook,
	FiTwitter,
	FiYoutube,
	FiMail,
	FiPhone,
} from "react-icons/fi";
import ClassName from "classname";

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	avatarHeader: {
		fontWeight: "bold",
		textAlign: "left",
		"& > span": {
			color: theme.palette.secondary.main,
		},
	},
	border: {
		width: "80px",
		height: "4px",
		background: theme.palette.primary.main,
		marginTop: theme.spacing(0.8),
		marginBottom: theme.spacing(3),
	},
	header: {
		width: "100%",
	},
	only: {
		color: theme.palette.secondary,
	},
	footer: {
		width: "100%",
		height: "auto",
		textAlign: "center",
		marginBottom: theme.spacing(4),
	},
	footerHeader: {
		fontFamily: "Pattaya",
		marginBottom: theme.spacing(1),
	},
	icon: {
		display: "inline-block",
		padding: "10px",
		borderRadius: "50% 20% / 10% 40%;",
		margin: "10px",
		border: "1px solid #0000003b",
		cursor: "pointer",
		transition: "all .5s",
		"& > svg": {
			color: "gray",
			width: "1.2em",
			height: "1.2em",
		},
	},
}));

// !NOTE: footer component
function Copyright({ main, footerHeader, icon }) {
	return (
		<div className={main}>
			<Typography
				variant='h6'
				component='h6'
				color='secondary'
				className={footerHeader}>
				Contact with us vie
			</Typography>
			<div>
				<div>
					<div className={ClassName(icon, "facebook")}>
						<FiFacebook />
					</div>
					<div className={ClassName(icon, "twitter")}>
						<FiTwitter />
					</div>
					<div className={ClassName(icon, "youtube")}>
						<FiYoutube />
					</div>
					<div className={ClassName(icon, "mail")}>
						<FiMail />
					</div>
					<div className={ClassName(icon, "phone")}>
						<FiPhone />
					</div>
				</div>
			</div>
		</div>
	);
}

export default function SignIn() {
	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<div className={classes.header}>
					<Typography
						component='h1'
						variant='h5'
						className={classes.avatarHeader}>
						<span className={classes.only}>Only</span> Login in as <br />
						<span>Authorized Person</span>
					</Typography>
					<div className={classes.border} />
				</div>
				<form className={classes.form} noValidate method='post'>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}>
						Log In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href='#' variant='body2'>
								Forgot password?
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright
					main={classes.footer}
					footerHeader={classes.footerHeader}
					iconDiv={classes.iconDiv}
					iconContainer={classes.iconContainer}
					icon={classes.icon}
				/>
				<Typography variant='body2' color='textSecondary' align='center'>
					{"Copyright © "}
					<Link
						color='inherit'
						href='https://facebook.com/yousuf4you'
						target='_blank'>
						YOUSUF
					</Link>{" "}
					{new Date().getFullYear()}
					{"."}
				</Typography>
			</Box>
		</Container>
	);
}

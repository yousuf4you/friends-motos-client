import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		background: "#F3FAFB",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	circle: {
		width: "700px",
		height: "700px",
		background: "#e3e8f3",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "50% 20% / 10% 40%;",
	},
	center: {
		width: "420px",
		height: "420px",
		background: "#F3FAFB",
		boxShadow: theme.shadows[2],
		borderRadius: theme.spacing(0.4),
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "40px 40px",
		textAlign: "center",
		"& h1": {
			fontWeight: "bold",
			marginBottom: theme.spacing(3),
		},
		"& h5": {
			fontWeight: "bold",
			marginBottom: theme.spacing(2),
		},
		"& p": {
			color: theme.palette.grey[500],
			textAlign: "center",
			marginBottom: theme.spacing(2),
		},
	},
	button: {
		width: "150px",
		margin: "0 auto",
	},
}));

const Error404 = ({ height }) => {
	const classes = useStyles();

	return (
		<div
			className={classes.root}
			style={{ height: `calc(100vh - ${height}px)` }}>
			<div className={classes.circle}>
				<div className={classes.center}>
					<Typography variant='h1'>4o4</Typography>
					<Typography variant='h5' fontWeight='bold'>
						Page not found
					</Typography>
					<Typography>
						The link you clicked may be broken or the page may have been
						removed or renamed.
					</Typography>
					<Link style={{ textDecoration: "none" }} to='/store/dashboard'>
						<Button
							className={classes.button}
							variant='contained'
							color='secondary'
							startIcon={<KeyboardBackspaceIcon />}>
							Go Back
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Error404;

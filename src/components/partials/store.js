import { makeStyles } from "@material-ui/core";

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

		"& a": {
			display: "grid",
			width: "100%",
			height: "100%",
			justifyContent: "center",
			"&:focus": {
				textDecoration: "none",
			},
		},
		"& a svg": {
			marginBottom: theme.spacing(0.6),
			color: "#eee",
		},
		"& a p": {
			fontFamily: "Chela One",
			letterSpacing: "2px",
			color: "#eee",
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

export default useStyles;

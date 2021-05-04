import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(4),
	},
	title: {
		width: "100%",
		height: "50px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		"& h4": {
			fontFamily: "Krona One",
			fontSize: "26px",
		},
		"& a": {
			textDecoration: "none",
			fontSize: "18px",
			color: "red",
			fontFamily: "cursive",
			transition: "all .3s",
			"&:hover": {
				textDecoration: "underline",
			},
		},
	},
	allMotors: {
		marginTop: theme.spacing(2),
	},
}));

export default useStyles;

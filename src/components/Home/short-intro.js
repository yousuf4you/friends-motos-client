import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		height: "50rem",
		marginTop: theme.spacing(3.5),
		marginBottom: theme.spacing(4),
		"& h2": {
			fontFamily: "Krona One",
			fontSize: "20px",
			marginBottom: theme.spacing(1.5),
		},
	},
	mainContent: {
		width: "100%",
		height: "100%",
		display: "flex",
	},
	leftSide: {
		width: "50%",
		height: "calc(100% - 50px)",
		marginRight: "20px",
	},
	rightSide: {
		width: "50%",
		height: "calc(100% - 50px)",
	},
	upperPart: {
		width: "100%",
		height: "33%",
		marginBottom: "10px",
	},
	middlePart: {
		width: "100%",
		height: "33%",
		marginBottom: "10px",
	},
	bottomPart: {
		width: "100%",
		height: "33%",
	},
	rightUpperPart: {
		width: "100%",
		height: "50%",
		marginBottom: "13px",
	},
	rightBottomPart: {
		width: "100%",
		height: "50%",
	},
}));

export default useStyles;

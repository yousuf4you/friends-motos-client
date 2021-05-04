import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		height: "180px",
		width: "100%",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		color: "whitesmoke",
		marginTop: "15px",

		"& div": {
			textAlign: "center",
			width: "300px",
			fontSize: "1.2rem",
			fontFamily: "Goblin One",
		},
	},
}));

export default useStyles;

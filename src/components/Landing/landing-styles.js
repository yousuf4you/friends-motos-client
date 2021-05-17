import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		height: "100vh",
		minHeight: "100vh",
		minWidth: "100%",
		maxHeight: "100vh",
		maxWidth: "100%",
		background: "linear-gradient(to left, #0040a9, #0051EB)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		height: "75%",
	},
	shadow: {
		width: "100%",
		height: "100%",
		background: "linear-gradient(to left, #0040a9, #0051EB)",
		display: "flex",
		overflow: "hidden",
	},
	infoWrapper: {
		width: "60%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	infoContent: {
		width: "90%",
		height: "90%",
		display: "flex",
		flexDirection: "column",
	},
	infoHeader: {
		width: "100%",
		height: "20%",
		// background: "white",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: theme.spacing(3),
	},
	brandLogo: {
		width: "45%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"& > img": {
			width: "15rem",
		},
	},
	divider: {
		width: "4px",
		height: "45%",
		background: "#fff",
		transform: "rotate(20deg)",
		borderRadius: "5px",
	},
	logo: {
		width: "45%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"& > img": {
			width: "15rem",
		},
	},
	information: {
		width: "75%",
		height: "90%",
		margin: "0 auto",
		display: "flex",
		flexWrap: "wrap",
		alignContent: "space-between",
	},
	contentDiv: {
		width: "100%",
		height: "25%",
		background: "#fff", // to be removed
	},
	loginWrapper: {
		width: "40%",
		height: "100%",
		background: "whitesmoke",
		overflow: "hidden",
	},
}));

export default useStyles;

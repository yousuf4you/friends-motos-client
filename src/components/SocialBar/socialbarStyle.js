import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: "#272C34",
		width: "100%",
		height: "35px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "#2F93E0",
	},
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	link: {
		textDecoration: "none",
		color: "inherit",
	},
	spacingHR: {
		"& a": {
			marginRight: theme.spacing(0.8),
			fontSize: "1px !important",
		},
	},
	fb: { color: "#0B84EE" },
	msg: { color: "#0084ff" },
	tw: { color: "#55acee" },
	ig: { color: "#e4405f" },
	yt: { color: "#cd201f" },
	mail: { color: "#ff0084" },
	map: { color: "#FFFC00" },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: "rgba(245, 0, 87)",
		width: "100%",
		height: "30px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#2F93E0",
		position: "relative",
	},
	container: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		width: "90%",
		marginLeft: "0 auto",
		position: "absolute",
		zIndex: 1,
	},
	toolbar2: {
		width: "100%",
		background: "rgba(0, 0, 0,.25)",
		position: "absolute",
		zIndex: 0,
	},

	link: {
		textDecoration: "none",
		color: "whitesmoke",
		fontSize: "14.5px",
		opacity: ".7",
		margin: "0 15px 0 15px",
	},
	linkSeparator: {
		color: "whitesmoke",
		opacity: ".7",
	},
	linkHover: {
		transition: "all .7s",
		"&:hover": {
			opacity: 1,
		},
	},

	spacingHR: {
		marginTop: "3px",
		"& a": {
			marginRight: theme.spacing(1),
		},
	},
	fb: { transition: "all .3s", "&:hover": { color: "#0B84EE" } },
	tw: { transition: "all .3s", "&:hover": { color: "#55acee" } },
	msg: { transition: "all .3s", "&:hover": { color: "#0084ff" } },
	ig: { transition: "all .3s", "&:hover": { color: "#22a6b3" } },
	yt: { transition: "all .3s", "&:hover": { color: "#cd201f" } },
	mail: { transition: "all .3s", "&:hover": { color: "#4cd137" } },

	sIcon: {
		width: "16px",
		color: "whitesmoke",
		opacity: ".7",
	},
}));

export default useStyles;

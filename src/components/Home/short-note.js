import { makeStyles } from "@material-ui/core";

import img from "../../assets/image/shop.jpg";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		height: "25rem",
		background: `url(${img})`,
		backgroundPosition: "center",
		backgroundSize: "100% 100%",
		backgroundAttachment: "fixed",
		marginTop: theme.spacing(4),
		zIndex: 0,
	},
	bg: {
		width: "100%",
		height: "100%",
		background: "radial-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .9))",
		backgroundAttachment: "fixed",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		width: "65%",
		height: "75%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		// background: "rgba(244, 44, 55, 0.53)",
		width: "80%",
		height: "100%",
		position: "relative",
		border: "7px solid #2979ff",
	},

	avatar: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		position: "absolute",
		top: "26%",
		left: "-77px",
		padding: "7px",
		background: "#2979ff",
	},
	textDiv: {
		position: "absolute",
		width: "80%",
		top: "75px",
		right: "35px",
	},
	text: {
		fontSize: "30px",
		fontFamily: "Itim",
		color: "whitesmoke",
		fontWeight: 300,
		lineHeight: "35px",
		textAlign: "center",
	},
	intro: {
		color: "#00e676 !important",
		fontFamily: "Arial Black",
		textIndent: "70px",
		marginTop: theme.spacing(1.5),
		"& span": {
			fontFamily: "Itim !important",
			fontStyle: "italic",
			color: "#fff",
		},
	},
}));

export default useStyles;

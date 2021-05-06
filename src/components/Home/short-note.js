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
		width: "50%",
		height: "60%",
		background: "gray",
	},
}));

export default useStyles;

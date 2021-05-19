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
		// marginBottom: theme.spacing(3),
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
		alignContent: "space-around",
	},
	contentDiv: {
		width: "100%",
		height: "23%",
		background: "rgba(0, 0, 0, .2)",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "15px",
		borderRadius: "4px",
		boxShadow:
			"rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
	},
	iconDiv: {
		padding: "10px 13px",
		background: "rgba(255, 255, 255, .1)",
		marginRight: theme.spacing(3),
		borderRadius: "7px",
	},
	icon: {
		// padding: "20px",
		color: "rgba(255, 255, 255, .6)",
		fontSize: "2.8rem",
	},
	informationContent: {
		overflow: "hidden",
		"& > h6": {
			color: "#dedede",
			fontWeight: "450",
			fontSize: "19px",
			fontFamily: "Pattaya",
		},
		"& > p": {
			color: "#fff9",
			fontFamily: "Josefin Sans",
		},
	},
	loginWrapper: {
		width: "40%",
		height: "100%",
		background: "whitesmoke",
		overflow: "hidden",
	},
}));

export default useStyles;

/*
	text-align: center;
   margin-bottom: 24px;
   color: #;
   font-size: 1.3rem;
   font-family: 'Josefin Sans';
   font-weight: 600;
   letter-spacing: 4px;
*/

import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	appBar: {
		height: "75px",
	},
	logo: {
		width: "250px",
	},
	list: {
		listStyle: "none",
	},
	anchor: {
		fontSize: "17px",
		cursor: "pointer",
		display: "inline-block",
		marginRight: "40px",
		textTransform: "uppercase",
		fontWeight: "bold",

		"& a": {
			textDecoration: "none",
			color: "whitesmoke",
		},
	},
	//  Search input
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.4),
		marginRight: theme.spacing(5),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.5),
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

export default useStyles;

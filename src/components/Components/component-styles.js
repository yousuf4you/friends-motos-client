import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	header: {
		marginTop: theme.spacing(8),
	},
	headerTitle: {
		textTransform: "capitalize",
		fontFamily: "Abril Fatface",
	},
	headerDesc: {
		letterSpacing: "4px",
		marginBottom: theme.spacing(6),
	},
	motorsActions: {
		marginBottom: theme.spacing(4),
	},
	button: {
		height: "56px",
	},
}));

export default useStyles;

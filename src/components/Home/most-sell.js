import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
		"& h2": {
			fontFamily: "Krona One",
			fontSize: "20px",
			marginBottom: theme.spacing(1.5),
		},
	},
}));

export default useStyles;

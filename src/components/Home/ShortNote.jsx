import React from "react";

import useStyles from "./short-note";

const ShortNote = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.bg}>
				<div className={classes.container}></div>
			</div>
		</div>
	);
};

export default ShortNote;

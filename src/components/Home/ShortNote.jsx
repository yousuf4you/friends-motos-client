import { Avatar, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./short-note";
import img from "../../assets/image/shortnote.jpg";

const ShortNote = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.bg}>
				<div className={classes.container}>
					<div className={classes.content}>
						<Avatar
							src={img}
							className={classes.avatar}
							variant='rounded'
						/>
						<div className={classes.textDiv}>
							<Typography className={classes.text}>
								“ Make a type specimen book. only five centuries, but
								also the leap into electronic typesetting, remaining
								essentially unchanged. It was make a type specimenfive
								centuries... ”
							</Typography>
							<Typography className={classes.intro} variant='h5'>
								MD. Yousuf Ahamad <span>(St, Head Engineer)</span>
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShortNote;

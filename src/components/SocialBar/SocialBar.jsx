import React from "react";
import { Container, Typography, Link } from "@material-ui/core";

import { SiGooglemaps } from "react-icons/si";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import MailIcon from "@material-ui/icons/Mail";

import useStyles from "./socialbarStyle";

const SocialBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth='lg' className={classes.container}>
				<Typography component='h6'>
					<Link
						// TODO: The link must be replaced by the google map link
						href='https://google.com'
						className={classes.link}
						target='_blank'
						rel='noreferrer'>
						<SiGooglemaps className={classes.map} /> Shymnagar, Satkhira
					</Link>
				</Typography>
				<div className={classes.spacingHR}>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<FacebookIcon className={classes.fb} />
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<QuestionAnswerIcon className={classes.msg} />
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<TwitterIcon className={classes.tw} />
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<InstagramIcon className={classes.ig} />
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<YouTubeIcon className={classes.yt} />
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<MailIcon className={classes.mail} />
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default SocialBar;

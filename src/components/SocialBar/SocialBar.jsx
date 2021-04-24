import React from "react";
import { Toolbar, Typography, Link } from "@material-ui/core";
import className from "classname";

import { SiGooglemaps } from "react-icons/si";
import { GiReturnArrow, GiCash } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";
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
			<Toolbar className={classes.container}>
				<Typography component='h6' className={classes.linksWrapper}>
					<Link
						// TODO: The link must be replaced by the google map link
						className={className(classes.link, classes.linkHover)}
						target='_blank'
						rel='noreferrer'>
						<FaPhone className={classes.map} /> 01918780770
					</Link>
					<span className={classes.linkSeparator}>|</span>
					<Link
						// TODO: The link must be replaced by the google map link
						href='https://google.com'
						className={className(classes.link, classes.linkHover)}
						target='_blank'
						rel='noreferrer'>
						<SiGooglemaps className={classes.map} /> Shymnagar, Satkhira
					</Link>
					<span className={classes.linkSeparator}>|</span>
					<Link
						// TODO: The link must be replaced by the google map link
						href='https://google.com'
						className={className(classes.link, classes.linkHover)}
						target='_blank'
						rel='noreferrer'>
						<GiCash className={classes.map} /> Installment Policy
					</Link>
					<span className={classes.linkSeparator}>|</span>
					<Link
						// TODO: The link must be replaced by the google map link
						href='https://google.com'
						className={className(classes.link, classes.linkHover)}
						target='_blank'
						rel='noreferrer'>
						<GiReturnArrow className={classes.map} /> Warranty Policy
					</Link>
				</Typography>
				<div className={classes.spacingHR}>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<FacebookIcon
							className={className(classes.sIcon, classes.fb)}
						/>
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<QuestionAnswerIcon
							className={className(classes.sIcon, classes.msg)}
						/>
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<TwitterIcon
							className={className(classes.sIcon, classes.tw)}
						/>
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<InstagramIcon
							className={className(classes.sIcon, classes.ig)}
						/>
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<YouTubeIcon
							className={className(classes.sIcon, classes.yt)}
						/>
					</Link>
					<Link href='https://facebook.com/yousuf4you' target='_blank'>
						<MailIcon
							className={className(classes.sIcon, classes.mail)}
						/>
					</Link>
				</div>
			</Toolbar>
			<Toolbar className={classes.toolbar2} />
		</div>
	);
};

export default SocialBar;

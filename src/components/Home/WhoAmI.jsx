import React from "react";
import className from "classname";
import AssistantPhotoIcon from "@material-ui/icons/AssistantPhoto";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi";
import useStyles from "./who-am-i";

const WhoAmI = () => {
	const classes = useStyles();
	return (
		<div className={className(classes.root, "who-am-i")}>
			<div>
				<AssistantPhotoIcon fontSize='large' />
				<p>We Provide 100% Original Product.</p>
			</div>
			<div>
				<EnhancedEncryptionIcon fontSize='large' />
				<p>We Provide Free Service Warranty.</p>
			</div>
			<div>
				<SettingsInputHdmiIcon fontSize='large' />
				<p>100% TVS Brand Authentication Dealer</p>
			</div>
			<div>
				<SettingsApplicationsIcon fontSize='large' />
				<p>TVS Brand Servicing and Genuine Parts</p>
			</div>
		</div>
	);
};

export default WhoAmI;

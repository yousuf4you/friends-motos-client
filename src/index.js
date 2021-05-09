import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "@material-ui/core";

import App from "./App";

ReactDom.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

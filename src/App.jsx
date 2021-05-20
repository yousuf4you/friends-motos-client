import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Store from "./Store";

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/store'>
						<Store />
					</Route>
					<Route exact path='/'>
						<Landing />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;

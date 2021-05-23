import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Error404 from "./components/partials/_404";
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
					<Route to='*'>
						<Error404 height={0} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;

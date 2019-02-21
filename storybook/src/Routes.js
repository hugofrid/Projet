import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Admin from './containers/Admin';
import NotFound from "./containers/NotFound"

export default class Routes extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="RouteComp">
				<Switch>
        			<Route path="/" exact component={Home} />
      				<Route path="/admin" exact component={Admin} />
      				
      			</Switch>
			</div>
		);
	}
}

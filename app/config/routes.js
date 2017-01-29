import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';



class Routes extends Component {
	render() {
		return(
			<Router history={hashHistory}>
				<Route path="/" component={Main}>
					<Route path="profile/:username" component={Profile}></Route>
					<IndexRoute component={Home}></IndexRoute>
				</Route>
			</Router>
		)
	}
}

export default Routes;
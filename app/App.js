import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Routes from './config/routes';



ReactDOM.render(
	<Routes />,
	document.getElementById('app')
);
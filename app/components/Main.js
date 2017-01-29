import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchGithub from './SearchGithub';

const Main = ({history, children}) => {
	return (
	   <div className="main-container">
		  <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGithub history={history} />
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
	)
}
export default Main;



/*
class Main extends Component {
	render() {
		return (
 		   <div className="main-container">
    		  <nav className="navbar navbar-default" role="navigation">
            <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
              <SearchGithub history={this.props.history} />
            </div>
          </nav>
          <div className="container">
            {this.props.children}
          </div>
        </div>
		)
	}
}*/
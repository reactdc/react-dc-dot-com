import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Twitter from './twitter';

const App = (props) => {
	return (
		<div>
			<header className="rdc-header">
				<h1>React DC</h1>
			</header>
			<ul className="rdc-menu">
				<li><Link to="/about">About Us</Link></li>
				<li><Link to="/resources">Resources</Link></li>
				<li><Link to="/doesn't exist">This Should 404</Link></li>
			</ul>
			<Twitter />
			{props.children}
		</div>
	);
}


const About = (props) => <div className="rdc-content"><h2>About Us</h2></div>;

const Resources = (props) => <div className="rdc-content"><h2>Resources</h2></div>;

const FourOhFour = (pops) => <div className="rdc-content"><h2>404</h2></div>;

ReactDOM.render((
	<Router>
		<Route path="/" component={App}>
			<Route path="about" component={About}/>
			<Route path="resources" component={Resources}/>
			<Route path="*" component={FourOhFour}/>
		</Route>
	</Router>
), document.getElementById("app"));

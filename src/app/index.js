import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Twitter from './twitter';

const App = (props) => {
	return (
		<div>
			<header>
				<h1>React DC</h1>
			</header>
			<ul>
				<li><Link to="/about">About Us</Link></li>
				<li><Link to="/resources">Resources</Link></li>
				<li><Link to="/doesn't exist">This Should 404</Link></li>
			</ul>
			<Twitter />
			{props.children}
		</div>
	);
}


const About = (props) => <div>About Us</div>;

const Resources = (props) => <div>Resources</div>;

const FourOhFour = (pops) => <div>404</div>;

ReactDOM.render((
	<Router>
		<Route path="/" component={App}>
			<Route path="about" component={About}/>
			<Route path="resources" component={Resources}/>
			<Route path="*" component={FourOhFour}/>
		</Route>
	</Router>
), document.getElementById("app"));

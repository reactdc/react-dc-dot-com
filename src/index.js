import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

class App extends React.Component {
	render() {
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
				{this.props.children}
			</div>
		)
	}
}

class About extends React.Component {
	render() {
		return (
			<div>
				About Us
			</div>
		)
	}
}

class Resources extends React.Component {
	render() {
		return (
			<div>
				Resources
			</div>
		)
	}
}

class FourOhFour extends React.Component {
	render() {
		return (
			<div>
				404
			</div>
		)
	}
}

ReactDOM.render(<div>Hello world!</div>, document.getElementById("app"));


ReactDOM.render((
	<Router>
		<Route path="/" component={App}>
			<Route path="about" component={About}/>
			<Route path="resources" component={Resources}/>
			<Route path="*" component={FourOhFour}/>
		</Route>
	</Router>
), document.getElementById("app"));

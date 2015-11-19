import './app.less';

import { Link } from "react-router";
import Twitter from "../twitter";
import { AppBar, FlatButton, IconMenu, MenuItem, IconButton } from "material-ui";

export default function App(props) {
	return (
		<div>
			<AppBar title="React DC"/> 
			<ul className="rdc-menu">
				<li><Link to="/about">About Us</Link></li>
				<li><Link to="/resources">Resources</Link></li>
				<li><Link to="/submit-a-talk">Submit A Talk</Link></li>
				<li><Link to="/doesn't exist">This Should 404</Link></li>
			</ul>
			<Twitter />
			<div className="rdc-content">
				{ props.children }
			</div>
		</div>
	);
}

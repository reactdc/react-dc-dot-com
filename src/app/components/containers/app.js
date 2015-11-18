import { Link } from "react-router";
import Twitter from "../twitter";

export default function App(props) {
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
			<div className="rdc-content">
				{ props.children }
			</div>
		</div>
	);
}

import { Router, Route } from 'react-router';
import { App, About, Resources, Http404 } from "./components/containers";

const routes = (
	<Router>
		<Route path="/" component={ App }>
			<Route path="about" component={ About }/>
			<Route path="resources" component={ Resources }/>
			<Route path="*" component={ Http404 }/>
		</Route>
	</Router>
);

ReactDOM.render(routes, document.getElementById("app"));

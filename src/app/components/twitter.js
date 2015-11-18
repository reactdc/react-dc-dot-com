import request from 'superagent';
import { connect } from "react-redux";
import { fetchTweets } from "../actions";

class Twitter extends React.Component {
	componentDidMount(){
		this.props.dispatch(fetchTweets());
	}
	render(){
		let tweets = this.props.tweets.map(function(tweet){
			return (
				<div
					key={ tweet.id }
					className="rdc-tweet">
					{ tweet.text }
				</div>
			);
		});
		return <div className="rdc-tweets"><h3>@React_DC</h3>{tweets}</div>
	}
}

export default connect(state => ({
	tweets: state.tweets
}))(Twitter);

import request from "superagent";
import { RECEIVED_TWEETS } from "../constants";

export function fetchTweets() {
	return dispatch => {
		request
			.get('/api/v1.0/tweets')
			.end((err, res)=>{
				if (err || res.status !== 200) {
					return console.error(err || res.status);
				}
				dispatch({
					type: RECEIVED_TWEETS,
					tweets: res.body
				});
			});
	};
}

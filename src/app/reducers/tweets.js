import { RECEIVED_TWEETS } from "../constants";

const initialState = [];
const actionsMap = {
	[RECEIVED_TWEETS]: (state, action) => action.tweets
};

export default function tweets(state = initialState, action) {
	const fn = actionsMap[action.type];
	if (!fn) {
		return state;
	}
	return fn(state, action);
}

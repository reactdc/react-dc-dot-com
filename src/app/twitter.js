import request from 'superagent';
import React from 'react';

export default class Twitter extends React.Component {

	constructor(props){
		super(props)
		this.state = {tweets: []}
	}
 	componentDidMount(){
 		request
		  .get('/api/v1.0/tweets')
		  .end((err, res)=>{
		  	this.setState({tweets: res.body});
		  });
 	}
 	render(){
 		let tweets = this.state.tweets.map(function(tweet){
 			return <div>{tweet.text}</div>
 		});
 		return <div>{tweets}</div>
 	}
 }
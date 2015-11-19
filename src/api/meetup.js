import request from 'superagent'
import React from 'react'

class MeetupEvent extends React.Component {

	componentDidMount(){
		request
			.get('')
			.end((err, res) => {
				this.setState({
					events: res. //whatever it is
				});
			});
 	}
 	render(){
 		
 	}
};

module.export(MeetupEvent, "MeetupEvent");
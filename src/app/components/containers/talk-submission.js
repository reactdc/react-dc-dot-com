import {
	TextField,
	RadioButton,
	RadioButtonGroup
} from "material-ui";

export default class TalkSubmission extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			github: "",
			twitter: "",
			website: "",
			talkType: "",
			title: "",
			description: "",
			prerequisites: "",
			requirements: ""
		} 
	}
	render() {
		const fields = [
			{ key: "first name", value: this.state.firstName},
			{ key: "last name", value: this.state.lastName},
			{ key: "email", value: this.state.email},
			{ key: "github", value: this.state.github},
			{ key: "twitter", value: this.state.twitter},
			{ key: "website", value: this.state.website},
			{ key: "title", value: this.state.title},
			{ key: "description", value: this.state.description, multiLine: true, rows: 15 },
			{ key: "prerequisites", value: this.state.prerequisites, multiLine: true, rows: 5 },
			{ key: "requirements", value: this.state.requirements, multiLine: true, rows: 5 }
		];

		const textFields = fields.map((field) => {
			return (
				<TextField
					hintText={field.key}
					value={field.value}
				/>
			)
		});

		return (
			<div className="rdc-talk-submission-form">
				<h2>Submit A Talk Proposal</h2>
				{textFields}
			</div>
		);
	}
}

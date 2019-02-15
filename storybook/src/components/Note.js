import React from 'react';
import '../containers/Notes.css'

export default class note extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="note">
				<div className="top">
					<p className="titleNote">{this.props.title}</p>
					<button onClick={this.props.onClick}><img src={require("../icons/delete-button.png")} alt="delete"/></button>
				</div>
				<p className="textNote">{this.props.note}</p>
				<p className="dateNote">{this.props.date}</p>
			</div>
		);
	}
}

import React from 'react';
import './VisualNumber.css'

export default class VisualNumber extends React.Component {
	constructor(props) {
		super(props);
	
	}

	render() {
		return (
			<div className="VisualNumber">	
			<img src={this.props.logo} />
				<div>
					<p className="title">{this.props.title}</p> 
					<p className="quantity">{this.props.quantity}</p>					
				</div>
					

			</div>
		);
	}
}


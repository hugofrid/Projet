import React from 'react';
import VisualNumber from '../components/VisualNumber'
import './NumberList.css'

export default class NumberList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (

			<div className="numbers">
				{this.props.numbers.map((number) =>
					<VisualNumber logo={number.logo} quantity={number.quantity} title={number.title} />
				)}
			</div>
		);
	}
}



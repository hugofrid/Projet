import React from 'react';
import VisualNumber from '../components/VisualNumber'
import './NumberList.css'

export default class NumberList extends React.Component {
	

	render() {
		return (

			<div className="numbers">
				{this.props.numbers.map((number, id) =>
					<VisualNumber key={id} logo={number.logo} quantity={number.quantity} title={number.title} />
				)}
			</div>
		);
	}
}



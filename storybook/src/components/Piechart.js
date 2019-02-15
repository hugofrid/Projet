import React from 'react';
import ReactDOM from 'react-dom';
import {PieChart, Pie, Legend, Tooltip,Sector}  from 'recharts'

export default class Piechart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data01: this.props.data.data01,
			data02: this.props.data.data02,
		}
	}

	render() {
		return (
			<div>
				<PieChart width={730} height={550}>
  					<Pie data={this.state.data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label  />
  					<Pie data={this.state.data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={90} outerRadius={120} fill="#82ca9d" label />
					<Tooltip/>
					
				</PieChart>
			</div>
		);
	}
}


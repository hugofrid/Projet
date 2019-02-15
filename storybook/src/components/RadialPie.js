
import React from 'react';
import ReactDOM from 'react-dom';
import {RadialBarChart, RadialBar, Legend, Tooltip} from 'recharts'

 const style = {
  	top: 0,
  	right: 0,
  	lineHeight: '24px'
  };

export default class RadialPie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data:this.props.data,
		}
	}

	render() {
		return (
			<div>
				<h2>Followers</h2>
				<RadialBarChart startAngle={180} endAngle={0} width={500} height={200} cx={170} cy={170} innerRadius="30%" outerRadius="90%" barSize={15} data={this.state.data} >
       					 <RadialBar minAngle={15}  background clockWise={true} dataKey='Followers' label={{ fill: '#666', position: 'insideStart' }}/>
       					<Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' WrapperStyle={style} />
       					
        		</RadialBarChart>
			</div>
		);
	}
}



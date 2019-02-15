import React from 'react';
import ReactDOM from 'react-dom';
import {Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis} from 'recharts';




export default class Radarchart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
		}
	}
	render()
	{
		return(
			<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={this.state.data}>
    	      <PolarGrid />
        	  <PolarAngleAxis dataKey="subject" />
          	<PolarRadiusAxis/>
          	<Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
			)
	}

}





                   


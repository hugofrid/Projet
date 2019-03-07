import React from 'react';
import './Home.css'
import Weather from '../components/Weather'
import ListOfTDL from '../containers/ListOfTDL'
import Timer from '../components/Timer'
import Piechart from '../components/Piechart'
import RadialPie from '../components/RadialPie'
import NumberList from '../containers/NumberList'
import Radarchart from '../components/Radarchart'
import {Container, Col, Row} from 'reactstrap';





const numbers=[{logo:require("../icons/number.png"), title:"amis Facebook", quantity:"5400"},
{logo:require("../icons/computer.png"), title:"Followers Twitter", quantity:"43400"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan FEMININE", quantity:"203030"}
]





export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="home">
				<Row>
					<Col xs= "3">
						<Timer />
					</Col>
					<Col xs="7">
						<NumberList className="col-8" numbers={numbers}/>
					</Col>
					 <Col xs="2" >
         				<Weather/>
        			</Col>
					<Col xs="12">
						<NumberList className="col-8" numbers={numbers}/>
					</Col>
				</Row>



			</div>
		);
	}
}

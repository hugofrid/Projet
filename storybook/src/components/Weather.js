import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Col, Row} from 'reactstrap';
import './Weather.css';
import axios from 'axios';


function getLocation() 
{
  	return axios.get("https://ipapi.co/json/");
}

function getWeather(city)
{
	let Api_Key="b06bde5f45de9eebd1858f7aa68dae8a";
	return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&APPID="+ Api_Key);
}





export default class Weather extends React.Component {

	constructor(props) {
		super(props);
		this.state = 
		{
			
			temperature: undefined,
 			city: this.props.city,
  			country: undefined,
  			humidity: undefined,
  			description: undefined,
  			error: undefined,
  			icon: undefined ,
		}
	}




componentDidMount() { 
    let _this = this;
    
    getLocation().then(function(result) { 
        let _city = result.data.city;
        let _country =result.data.country;
      
        getWeather(_city).then(function(result) {

          _this.setState({
          	temperature:result.data.main.temp,
          	city:_city,
          	country: _country,
            icon: require("../icons/" + result.data.weather[0].icon + ".png"),
            
          })

        });
    }).catch(
      
      _this.setState({
        city: 'Cannot get location.',
        temp: null,
        icon: require("../icons/loading.png"),
      })
      
    );
  }


	render() {

			

  
		return (

			<div className="weather">
				
				<p className="city">{this.state.city},<small> {this.state.country}</small></p>
				<div className="info">
					<p className="temp">{this.state.temperature} &#176;C</p>
					<div className="tempIcon">
						<img src={this.state.icon}/>
					</div>
				</div>
			</div>
		);
	}
}

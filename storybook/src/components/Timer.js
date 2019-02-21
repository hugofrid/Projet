import React from 'react';
import Clock from 'react-live-clock';
import './Timer.css';

export default class Timer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="clock">
				<Clock className="hour" format={'HH:mm:ss'} ticking={true}  />
				<Clock className="day" format={'ddd DD  MMM'} ticking={true}  />
			</div>
		);
	}
}

import React from 'react';
import './ToDo.css';


export default class ToDo extends React.Component {

	constructor(props) {
		super(props);
		
	}

	

	render() {
		return (
			<div className="Todo">
				<label className="container"  >
						<p className="thgtodo">{this.props.todo}</p>
						<input type="checkbox" checked={this.props.checked} onChange={this.props.toggleCB} />
  						<span className="checkmark"></span>
				</label>
				<button onClick={() => this.props.deleteTodo(this.props.todo)}><img src={require("../icons/delete-button.png")} alt="delete"/></button>
				
			</div>
		);
	}
}

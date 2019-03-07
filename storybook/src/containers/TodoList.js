import React from 'react';
import ToDo from '../components/ToDo';
import './TodoList.css';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newTodo:"",
		}

	}

editNewTodo(event)
	{
		this.setState({newTodo: event.target.value})
	}

	deleteTodo = (todo) => {
		
		this.props.deleteTodo(todo, this.props.TodoListName);
	}

	addTodo = () =>
	{
		if(this.state.newTodo!="")
		{
			this.props.addTodo(this.state.newTodo , this.props.TodoListName);
			this.setState({newTodo:""});

		}
	}

	pressEnter(e)
	{
		if(e.key=='Enter')
		{
			this.props.addTodo(this.state.newTodo , this.props.TodoListName);
			this.setState({newTodo:""});
		}
	}

	render() {
		return (
			<div className="TodoList">
				<div className="topPart">
					<p className="ToDoListTitle">{this.props.TodoListName}</p> <button onClick={this.props.deleteClick}><img src={require("../icons/delete-button.png")} alt="delete"/></button>
				</div>
				<div className="newToDo">
					<textarea className="new" type="textarea" placeholder="Todo..." value={this.state.newTodo} onChange={this.editNewTodo.bind(this)} onKeyUp={this.pressEnter.bind(this)}/>
					<button onClick={this.addTodo}>Add !</button> 
				</div>		
				<div className="Todos">

					{this.props.todos.map((todo, id) =>
						 <ToDo key={id} todo={todo.ToDo} checked={todo.checked} deleteTodo={this.deleteTodo} toggleCB={() => this.props.toggleCB(todo, this.props.TodoListName)}/>
					)}

				</div>
			

			</div>
		);
	}
}

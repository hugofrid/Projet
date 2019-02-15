import React from 'react';
import ToDo from '../components/ToDo';
import './TodoList.css';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TodoListName:this.props.TodoListName,
			todos:this.props.todos,
			newTodo:"",
		}

	}

addTodo()
	{
		if(this.state.newTodo!="")
		{
			let nwTodos = this.state.todos
			let Add = {ToDo:this.state.newTodo,}
			nwTodos.unshift(Add);
			this.setState({todos:nwTodos, newTodo:""})
		}
	}

editNewTodo(event)
	{
		this.setState({newTodo: event.target.value})
	}

deleteTodo(i)
	{

		let newTodos = this.state.todos;
		newTodos.splice(this.state.todos.indexOf(i),1)
		this.setState({Todos:newTodos})


	}


	render() {
		return (
			<div className="TodoList">
				<p className="ToDoListTitle">{this.props.TodoListName}</p>

				<div className="newToDo">
					<textarea className="new" type="textarea" placeholder="Todo..." value={this.state.newTodo} onChange={this.editNewTodo.bind(this)}/>
					<button onClick={() => this.addTodo()}>Add !</button> 
				</div>		
				<div className="Todos">

					{this.state.todos.map((todo) =>
						 <ToDo todo={todo.ToDo} onClick={() => this.deleteTodo(todo)}/>
					)}

				</div>
			

			</div>
		);
	}
}

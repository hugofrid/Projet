import React from 'react';
import TodoList from '../containers/TodoList';
import "./ListOfTDL.css"

export default class ListOfTDL extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newTitle:"",
			lists:[
				{title:"important",list:[{ToDo:'manger chez mamie',checked:false},{ToDo:'acheter des pattes',checked:true}]},
				{title:"pas trop",list:[{ToDo:'acheter pain',checked:false},{ToDo:'manger 1 legume cru',checked:true}] }
			],
		}
		}
	
	editNewTitle(event)
	{
		this.setState({newTitle: event.target.value});
	}

	AddList()
	{
		if(this.state.newTitle!=="")
		{
			let nwTitle = this.state.newTitle;
			let Add = {title:nwTitle,list:[]};
			let nwList = [...this.state.lists,Add];
			this.setState({ newTitle:"", lists:nwList});
		}
	}

	deleteList(i)
	{	
		let nwList = this.state.lists;
		const mynewList = nwList.filter(list => list!=i)  
		this.setState({lists: mynewList});
	}

	deleteTodo = (todo, todolisttitle) =>
	{

		let nwlists = this.state.lists;
		let nwlist = this.state.lists.filter(list => list.title===todolisttitle);
		let listwithtodo = [...nwlist[0].list];
		let listremove = listwithtodo.filter(list => list.ToDo !== todo);
		nwlists[this.state.lists.indexOf(nwlist[0])].list=listremove;
		this.setState({lists:nwlists});
	}

	addTodo = (todo, todolisttitle) =>
	{
		

	
			let newtodo = {ToDo:todo, checked:false};
			let nwlists = this.state.lists;
			let nwlist = this.state.lists.filter(list => list.title===todolisttitle);
			let listwithtodo = [newtodo,...nwlist[0].list];
			nwlists[this.state.lists.indexOf(nwlist[0])].list=listwithtodo;
			this.setState({lists:nwlists});

		
	}

	toggleCB = (todo, todolisttitle) =>
	{
		let nwlists = this.state.lists;
		let nwlist = this.state.lists.filter(list => list.title===todolisttitle);	
		let listwithtodo = [...nwlist[0].list];
		let todototoggle = listwithtodo.filter(td => td ===todo);
		todototoggle[0].checked = !todototoggle[0].checked;
		nwlists[this.state.lists.indexOf(nwlist[0])].list=listwithtodo;
		this.setState({lists:nwlists});
		
	}
	pressEnter(e)
	{
		if(e.key=='Enter')
		{
			if(this.state.newTitle!=="")
			{
				let nwTitle = this.state.newTitle;
				let Add = {title:nwTitle,list:[]};
				let nwList = [...this.state.lists,Add];
				this.setState({ newTitle:"", lists:nwList});
			}
		}
	}

	render() {
		return (
			<div className="ListOfTDL">
			<div className="list">
			
			{this.state.lists.map((thelist, id) => 
	
						 <TodoList key={id} TodoListName={thelist.title} todos={thelist.list} deleteClick={() => this.deleteList(thelist)} deleteTodo={this.deleteTodo}  addTodo={this.addTodo} toggleCB={this.toggleCB}/>
					)
			}
			
				<div className="new">
				<button className="addButton" onClick={() => this.AddList()}><img src={require("../icons/add.png")} alt="AddList"/></button>
				<input className="newTitle" type="text" placeholder="New list title..." value={this.state.newTitle} onChange={this.editNewTitle.bind(this)}  onKeyUp={this.pressEnter.bind(this)}/>
			</div>
			
			</div>

			
			</div>
		);
	}
}



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
		if(this.state.newTitle!="")
		{
			
			let nwTitle = this.state.newTitle;
			let Add = {title:nwTitle,list:[]}

			
			let nwList = [...this.state.lists,Add];

			this.setState({ newTitle:"", lists:nwList})


		}
	}

	deleteList(i)
	{	console.log(this.state.lists, this.state.lists.length);
		let nwList = this.state.lists;
		
		//delete nwList[nwList.indexOf(i)];    //cela incrementera la taille du tableau, mais si on utilise splice, le fait d'utiliser des state dans TodoList.js fera que la liste ne changera pas..
		const mynewList = nwList.filter(list => list!=i)  // cette ligne enleve bien du tableau mais les elements restes dans  la liste 
		console.log(nwList, nwList.length, mynewList);
		this.setState({lists: mynewList});
	}

	deleteTodo = (todo, todolisttitle) =>
	{


		/*
		console.log("in listof");
		let nwList = this.state.lists;
		let listIndex = nwList.indexOf(todolisttitle);
		let listWhereDelete = nwList.filter(list => list.title==todolisttitle);
		listWhereDelete.splice(indexOf(todo),1);
		
		nwLists[listIndex] = listWhereDelete;

		this.setState({lists: nwList});
		*/
		
	}

	addTodo = (todo, todolisttitle) =>
	{
		

	
			let newtodo = {ToDo:todo, checked:false};
			let nwlists = this.state.lists;
			let nwlist = this.state.lists.filter(list => list.title==todolisttitle);
			
			let listwithtodo = [newtodo,...nwlist[0].list];

			nwlists[this.state.lists.indexOf(nwlist[0])].list=listwithtodo;

			
			this.setState({lists:nwlists});

		
	}

	toggleCB()
	{
		console.log("toggleCB")
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
				<input className="newTitle" type="text" placeholder="New list title..." value={this.state.newTitle} onChange={this.editNewTitle.bind(this)}/>
			</div>
			
			</div>

			
			</div>
		);
	}
}



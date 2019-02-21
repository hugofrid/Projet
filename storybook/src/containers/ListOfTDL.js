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
			let nwList = this.state.lists;
			let nwTitle = this.state.newTitle;
			console.log(nwTitle)
			let Add = {title:nwTitle,list:[]}
			nwList.push(Add);
			this.setState({ newTitle:"", lists:nwList})
		}
	}

	deleteList(i)
	{	console.log(this.state.lists + " et " + this.state.lists.length);
		let nwList = this.state.lists;
		
		delete nwList[nwList.indexOf(i)];    //cela incrementera la taille du tableau, mais si on utilise splice, le fait d'utiliser des state dans TodoList.js fera que la liste ne changera pas..
		//nwList = nwList.filter(list => list!=i)   cette ligne enleve bien du tableau mais les elements restes dans  la liste 
		console.log(nwList + " et aussi " + nwList.length);
		this.setState({lists:nwList});
	}

	render() {
		return (
			<div className="ListOfTDL">
			<div className="list">
			{this.state.lists.map((thelist) =>
						 <TodoList TodoListName={thelist.title} todos={thelist.list} deleteClick={() => this.deleteList(thelist)} />
					)}
			
				<div className="new">
				<button className="addButton" onClick={() => this.AddList()}><img src={require("../icons/add.png")} alt="AddList"/></button>
				<input className="newTitle" type="text" placeholder="New list title..." value={this.state.newTitle} onChange={this.editNewTitle.bind(this)}/>
			</div>
			
			</div>

			
			</div>
		);
	}
}



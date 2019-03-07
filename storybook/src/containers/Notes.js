import React from 'react';
import Note from '../components/Note'
import "./Notes.css"

export default class notes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes:[
						{title:'ho1', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},],
			newTitle:"",
			newNote:"",
			
		}
	}

	

	addNote()
	{
		if((this.state.newTitle!="")&&(this.state.newNotes!=""))
		{
			let date = new Date();
			let ladate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
			let nwNotes = this.state.notes
			let nwNote = {
				title:this.state.newTitle,
				note:this.state.newNote,
				date:ladate,
			}
			nwNotes.unshift(nwNote);
			this.setState({notes:nwNotes, newTitle:"",newNote:""})
		}
		
	}

	editNewTitle(event)
	{
		this.setState({newTitle: event.target.value})
	}

	editNewNote(event)
	{
		this.setState({newNote: event.target.value})
	}

	deleteNote(i)
	{
		let newNotes = this.state.notes;
		newNotes.splice(this.state.notes.indexOf(i),1)
		this.setState({notes:newNotes})
	}

	noteEnter(e)
	{
		if(e.key=='Enter')
		{
			if((this.state.newTitle!="")&&(this.state.newNotes!=""))
			{
				let date = new Date();
				let ladate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
				let nwNotes = this.state.notes
				let nwNote = {
					title:this.state.newTitle,
					note:this.state.newNote,
					date:ladate,
				}
				nwNotes.unshift(nwNote);
				this.setState({notes:nwNotes, newTitle:"",newNote:""})
			}
		}
	}

	

	render() {
		return (
			<div className="mesNotes">

				<div className="newNote">
					<input className="title" type="text" placeholder="Title..." value={this.state.newTitle} onChange={this.editNewTitle.bind(this)} />
					<textarea className="laNote" type="textarea" placeholder="note..." value={this.state.newNote} onChange={this.editNewNote.bind(this)} onKeyUp={this.noteEnter.bind(this)}/>
					<button onClick={() => this.addNote()}>Post !</button> 
				</div>		

				<div className="notes">
					{this.state.notes.map((lanote, id) =>
						 <Note  key={id} title={lanote.title} note={lanote.note} date={lanote.date} onClick={() => this.deleteNote(lanote)}/>
					)}
				</div>
			

			</div>
		);
	}
}

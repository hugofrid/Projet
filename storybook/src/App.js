import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Routes from './Routes'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App container row">
      
      <aside className="col-2">
        <nav >
          <ol className="justify-content-arownd">
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/Admin">Admin</Link></ul>
          </ol>
        </nav>
      </aside>
    
      <main className="col">
        <Routes />
      </main>
   
        <footer className="row">
        </footer>
      
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import {Container, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import Routes from './Routes'
import './App.css';



class App extends Component {
  render() {
    return (


      <Row className="App">
      <Col xs="2">
      <aside >
        <nav >
          <ol className="justify-content-arownd">
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/Admin">Admin</Link></ul>
          </ol>
        </nav>
      </aside>
      </Col>
    
      <Col xs="10">
          <main >
            <Routes />
          </main>

      </Col>

      </Row>


    
    );
  }
}

export default App;

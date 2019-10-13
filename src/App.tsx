import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand href="#">Jobs Portal</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;

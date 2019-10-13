import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Jumbotron,
  Button
} from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light">
          <Navbar.Brand href="#">Jobs Portal</Navbar.Brand>
          <Navbar.Toggle area-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#">
                For Job Posters
              </Nav.Link>
              <Nav.Link href="#">
                For Job Seekers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Container>
        <Jumbotron className="jumbotron">
          <Container>
                <h1 className="jumbotron__title">Are you looking for your dream job?</h1>
                <h2 className="jumbotron__sub-title">We can help you with that!</h2>
                <Button className="jumbotron__action" variant="primary" size="lg">Search a job</Button>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;

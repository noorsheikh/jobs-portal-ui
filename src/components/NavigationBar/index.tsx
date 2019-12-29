import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand='lg' className="navbar bg-primary">
            <Container>
                <Navbar.Brand className="navbar__logo" as={NavLink} to='/'>Jobs Portal</Navbar.Brand>
                <Navbar.Toggle area-controls='responsive-navbar-nav' />
                <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
                    <Nav>
                    <Nav.Link as={NavLink} to='/jobs-posters' exact>
                        For Job Posters
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/jobs-seekers' exact>
                        For Job Seekers
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;

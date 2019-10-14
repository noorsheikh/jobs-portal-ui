import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand='lg'>
            <Navbar.Brand as={NavLink} to='/'>Jobs Portal</Navbar.Brand>
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
        </Navbar>
    )
}

export default NavigationBar;

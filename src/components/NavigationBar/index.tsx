import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
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
    )
}

export default NavigationBar;

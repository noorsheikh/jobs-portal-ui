import React, { Fragment } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

type Props = {
    firstName: string;
    lastName: string;
    isLoggedIn: boolean;
    logout: Function;
}

const NavigationBar: React.FC<Props> = ({firstName, lastName, isLoggedIn, logout}: Props) => {
    return (
        <Navbar collapseOnSelect expand='lg' className="navbar">
            <Container>
                <Navbar.Brand className="navbar__logo" as={NavLink} to='/'>jobs portal</Navbar.Brand>
                <Navbar.Toggle area-controls='responsive-navbar-nav' />
                <Navbar.Collapse className='navbar__auth-nav justify-content-end' id='responsive-navbar-nav'>
                    <Nav>
                        {isLoggedIn || isLoggedIn ? (
                            <Fragment>
                                Welcome
                                <Nav.Link as={NavLink} className='navbar__auth-nav--item' to='/' exact>
                                    {firstName || isLoggedIn} {lastName || lastName}
                                </Nav.Link>
                                <Nav.Link as={Button} className='navbar__auth-nav--item' onClick={logout}>
                                    Logout
                                </Nav.Link>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Nav.Link as={NavLink} className='navbar__auth-nav--item' to='/sign-in' exact>
                                    Sign In
                                </Nav.Link>
                                <Nav.Link as={NavLink} className='navbar__auth-nav--item' to='/jobs-posters' exact>
                                    For Employers
                                </Nav.Link>
                            </Fragment>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;

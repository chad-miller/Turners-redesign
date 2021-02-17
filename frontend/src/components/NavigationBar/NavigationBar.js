import React from 'react';
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the React app
const NavigationBar = () => {
  const NavbarFont = {
    fontFamily: 'Oswald, sans-serif',
    letterSpacing: '3px',
  };

  const LetterSpacing = {
    letterSpacing: '2rem',
    textAlign: 'center',
  };

  return (
    <header>
      <Navbar style={NavbarFont} bg="transparent" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown variant="dark" title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-dark">
              <b>MAKE A CLAIM</b>
            </Button>{' '}
          </Nav>
          <Navbar.Brand className="mr-auto" href="turners">
            <img
              src="/static/turners-logo.png"
              width="auto"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <p style={LetterSpacing}>AUTOMOTIVE</p>
          </Navbar.Brand>
        </Navbar.Collapse>
        <Nav.Link href="#link">CONTACT</Nav.Link>
        <Nav.Link href="#link">LOGIN</Nav.Link>
      </Navbar>
    </header>
  );
};

export default NavigationBar;

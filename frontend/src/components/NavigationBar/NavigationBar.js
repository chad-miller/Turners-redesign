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

  const BlackText = {
    color: 'black',
  };

  const MenuButton = {
    color: 'white',
    background: '#292F33',
  };

  const MakeAClaimButton = {
    borderRadius: 'none',
  };

  return (
    <header>
      <Navbar style={NavbarFont} bg="transparent" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              variant="Secondary"
              title="MENU"
              id="basic-nav-dropdown"
            >
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
            <Button
              style={{ borderRadius: '0 0.2rem 0.2rem 0' }}
              variant="outline-dark"
            >
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
        <Nav.Link style={BlackText} href="#link">
          CONTACT
        </Nav.Link>
        <span> | </span>
        <Nav.Link style={BlackText} href="#link">
          LOGIN
        </Nav.Link>
        <img
          src="/static/img@2x.png"
          width="auto"
          height="30"
          className="d-inline-block align-top"
          alt="login-image"
        />
      </Navbar>
    </header>
  );
};

export default NavigationBar;

import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Define the React app
const App = () => {

  return (
    <header>
      <Navbar bg="transparent" expand="md" fixed="top">
          <Navbar.Brand href="#home">
            <img
              src="/static/turners-logo.png"
              width="auto"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </header>
  )
}
// Mount the app to the mount point.
const root = document.getElementById('app')
ReactDOM.render(<App />, root)

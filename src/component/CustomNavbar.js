import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  FormControl,
  NavDropdown,
  Form
} from "react-bootstrap";
import {NavLink } from "react-router-dom";


export default class CustomNavbar extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand to="/">NEWS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/link">Link</NavLink>
              <NavDropdown title="Section" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Business">Business</NavDropdown.Item>
                <NavDropdown.Item href="/World">
                World
                </NavDropdown.Item>
                <NavDropdown.Item href="/Arts">
                Arts
                </NavDropdown.Item>
                <NavDropdown.Item href="/Opinion">
                Opinion
                </NavDropdown.Item>
                <NavDropdown.Item href="/U.S">
                U.S
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        
    );
  }
}

import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  FormControl,
  NavDropdown,
  Form
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'

export default class CustomNavbar extends Component {
  state = {
    word: null
  };
  myChangeHandler = event => {
    console.log("val", event.target.value);

    this.setState({ word: event.target.value });
    //pass this state to app state

    //  this.props.SearchHandler(event.target.value);
    /////////////this code is for search//////////////
    //////////////////////////////////////////////////
    // this.props.SearchHandler(event.target.value);//
  };

  Search = () => {

    console.log(this.state.word);
    if(this.state.word==null){
      Swal.fire({
        position: 'top-end',
        icon: null,
        title: 'Type Something First',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.props.SearchHandler(this.state.word);
    }
    
  };

  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand to="/">
          <h1>NEWS</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavDropdown title="Source" id="basic-nav-dropdown">
              <NavDropdown.Item href="/wsj">Wall Street Journal</NavDropdown.Item>
              <NavDropdown.Item href="/NewYorkTimes">New York Times</NavDropdown.Item>
              <NavDropdown.Item href="/Engadget">Engadget</NavDropdown.Item>
              
            </NavDropdown>
            
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Business">Business</NavDropdown.Item>
              <NavDropdown.Item href="/Technology">Technology</NavDropdown.Item>
              <NavDropdown.Item href="/Arts">Arts</NavDropdown.Item>
              <NavDropdown.Item href="/Opinion">Opinion</NavDropdown.Item>
              <NavDropdown.Item href="/U.S">U.S</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              onChange={this.myChangeHandler}
              type="text"
              placeholder="Search"
              className="mr-sm-2 search"
              name="search"
            />
            {/* <NavLink to={`/SearchResults/${this.props.word}`}  > */}
            <Button
              onClick={this.Search}
              name="search"
              variant="outline-success"
            >
              Search
            </Button>
            {/* </NavLink> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

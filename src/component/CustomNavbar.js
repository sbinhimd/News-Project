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
import axios from 'axios'
import SearchResults from './SearchResults'


export default class CustomNavbar extends Component {
  

  // SearchHandler = (e)=>{
  //   e.preventDefault()
    
  //   this.props.response.setState({word :e.target.value })
    //  let currentObj = this
   
    // var text = e.target.elements.search.value
    // console.log("text before set:", text);
    // currentObj.setState({
    //   word:text
      
    // })
    // console.log("text after set:", text);
    

  // }

  render() {

    console.log('the response',this.props);
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
         
          <Navbar.Brand to="/"><h1>NEWS</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
            <Form inline >
              <FormControl
              onChange={this.props.SearchHandler}
                type="text"
                placeholder="Search"
                className="mr-sm-2 search"
                name="search"   
              />
              <NavLink to={`/SearchResults/${this.props.word}`}  ><Button onClick={()=>console.log(this.props.word)} type="submit" variant="outline-success">Search</Button></NavLink>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        
    );
  }
}

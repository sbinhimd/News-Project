import React, { Component } from 'react'
import {Button,Card} from "react-bootstrap";
import {NavLink } from "react-router-dom";

export default class NewsCard extends Component {
     
    render() {
        return (
       
     
  <Card md="auto" style={{ width: '30rem' }}>
  <NavLink to={`/details/${this.props.id}`}>    
  <Card.Img variant="top" src={this.props.image} />
  </NavLink> 
  <NavLink to={`/details/${this.props.id}`}> 
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.abstract}
    </Card.Text>
    {/* <Button href={this.props.url} variant="primary">Read More</Button> */}
    {/* <Button variant="primary">Read More</Button> */}
  </Card.Body>
  </NavLink>
</Card>


        )
    }
}

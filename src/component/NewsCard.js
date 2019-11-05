import React, { Component } from 'react'
import {Button,Card} from "react-bootstrap";
import {NavLink } from "react-router-dom";

export default class NewsCard extends Component {
     
    render() {
        return (
       
            
  <Card md="auto" style={{ width: '30rem' }}>
  <Card.Img variant="top" src={this.props.image} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.abstract}
    </Card.Text>
    {/* <Button href={this.props.url} variant="primary">Read More</Button> */}
    <NavLink to={`/details/${this.props.id}`}><Button variant="primary">Read More</Button></NavLink> 
  </Card.Body>
</Card>


        )
    }
}

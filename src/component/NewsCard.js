import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

export default class NewsCard extends Component {
  render() {
    return (
      
      <Card className="hov" md="auto" style={{ width: "30rem" }}>
        <NavLink to={`/details/${this.props.id}`}>
          <Card.Img  variant="top" src={this.props.image} />
        </NavLink>
        <NavLink style={{textDecoration:'none',color:'black',textShadow: '0.5px 0.5px rgb(9, 9, 73)'}} to={`/details/${this.props.id}`}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text  style={{textAlign:'justify'}}>{this.props.abstract}</Card.Text>
          </Card.Body>
        </NavLink>
      </Card>
     
    );
  }
}

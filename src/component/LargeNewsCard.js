import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class LargeNewsCard extends Component {
  render() {
    let img =
      this.props.response == null
        ? []
        : this.props.response.data.articles.map((value, index) => {
            return value.urlToImage;
          });

    let title =
      this.props.response == null
        ? []
        : this.props.response.data.articles.map((value, index) => {
            return value.title;
          });

    let abstract =
      this.props.response == null
        ? []
        : this.props.response.data.articles.map((value, index) => {
            return value.abstract;
          });
    let url =
      this.props.response == null
        ? []
        : this.props.response.data.articles.map((value, index) => {
            return value.url;
          });

    return (
      <Carousel className="mb-4" interval="3000">
        <Carousel.Item>
          <NavLink to={`/details/0`}>
            <img
              className="d-block w-100"
              src={img[0]}
              alt="First slide"
              height="650px"
            />
            <Carousel.Caption>
              <h3>{title[0]}</h3>
              <p>{abstract[0]}</p>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>

        <Carousel.Item>
          <NavLink to={`/details/1`}>
            <img
              className="d-block w-100"
              src={img[1]}
              alt="Third slide"
              height="650px"
            />

            <Carousel.Caption>
              <h3>{title[1]}</h3>
              <p>{abstract[1]}</p>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>

        <Carousel.Item>
          <NavLink to={`/details/5`}>
            <img
              className="d-block w-100"
              src={img[5]}
              alt="Third slide"
              height="650px"
            />

            <Carousel.Caption>
              <h3>{title[5]}</h3>
              <p>{abstract[5]}</p>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>
      </Carousel>
    );
  }
}

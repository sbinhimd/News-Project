import React, { Component } from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import axios from "axios";

export default class Business extends Component {
  state = {
    response: null
  };

  componentDidMount() {
    let currentObj = this;
    var word = this.props.match.params.word;
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&pageSize=35&category=business&apiKey=7a1908d04c2740e7924b15b67514f428"
      )
      .then(function(response) {
        // handle success
        console.log("click");
        currentObj.setState({
          response: response
          //  word:"new"
        });
        // redirect was here
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    var word = this.props.match.params.word;

    console.log("Word in results = ", word);

    let obj =
      this.state.response == null
        ? []
        : this.state.response.data.articles.map((value, index) => {
            return (
              <NewsCard
                title={value.title}
                key={index}
                id={index}
                abstract={value.description}
                image={value.urlToImage}
                url={value.url}
              />
            );
          });

    return (
      <div>
        <h2>{` Search Results for Business Category `}</h2>
        <div className="grid">{obj}</div>
      </div>
    );
  }
}

import React, { Component } from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import LargeNewsCard from "./LargeNewsCard";

export default class Home extends Component {
  render() {
    console.log(this.props.response);

    let obj =
      this.props.response == null
        ? []
        : this.props.response.data.articles.map((value, index) => {
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
        <LargeNewsCard response={this.props.response} />
        <h2>Top Headlines</h2>
        <div className="grid" >{obj}</div>
      </div>
    );
  }
}

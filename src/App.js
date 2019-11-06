import React, { Component } from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomNavbar from "./component/CustomNavbar";
import NotFound from "./component/NotFound";
import Home from "./component/Home";
import axios from "axios";
import NewsDetails from "./component/NewsDetails";
import SearchResults from "./component/SearchResults";
import Business from "./component/Business";
import Technology from "./component/Technology";
import WallStreetJournal from "./component/WallStreetJournal";
import NewYorkTimes from "./component/NewYorkTimes";






export default class App extends Component {
  state = {
    response: null,
    responseSearch: null,
    word: "apple"
  };
  componentDidMount() {
    let currentObj = this;
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=7a1908d04c2740e7924b15b67514f428"
      )
      .then(function(response) {
        // handle success

        currentObj.setState({ response });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  //axios 2
  SearchHandler = childData => {
    let currentObj = this;
    //problem
    this.setState({ word: childData });
    console.log("child", childData);
    console.log("final", this.state.word);
    window.location.href = `/SearchResults/${childData}`;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <CustomNavbar
            SearchHandler={this.SearchHandler}
            word={this.state.word}
            state={this.state}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} response={this.state.response} />
              )}
            />
            {/* <Route path="/about" component={About} /> */}
            <Route
              path="/details/:id"
              render={props => (
                <NewsDetails {...props} response={this.state.response} />
              )}
            />
            {/* <Route path="/Gallery/:name" component={GalleryList} />  */}
            <Route
              path="/SearchResults/:word"
              render={props => (
                <SearchResults
                  {...props}
                  key={props.match.params.word}
                  response={this.state.responseSearch}
                />
              )}
            />
            <Route
              path="/Business"
              render={props => (
                <Business
                  {...props}
                />
              )}
            />

<Route
              path="/Technology"
              render={props => (
                <Technology
                  {...props}
                />
              )}
            />

<Route
              path="/wsj"
              render={props => (
                <WallStreetJournal
                  {...props}
                />
              )}
            />

<Route
              path="/NewYorkTimes"
              render={props => (
                <NewYorkTimes
                  {...props}
                />
              )}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

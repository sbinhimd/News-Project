import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomNavbar from './component/CustomNavbar';
import NotFound from './component/NotFound';
import Home from './component/Home';
import axios from 'axios'
import NewsDetails from './component/NewsDetails';
import SearchResults from './component/SearchResults';





export default class App extends Component {
  state= {
    response:null,
    responseSearch:null,
    word:"default"
 };
componentDidMount() {
    
    let currentObj = this
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7a1908d04c2740e7924b15b67514f428')
  .then(function (response) {
    // handle success
    
     currentObj.setState({response})
     
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    
  })
}
//axios 2
SearchHandler=(e)=>{
  axios.get(`https://newsapi.org/v2/everything?q=${this.state.word}&apiKey=7a1908d04c2740e7924b15b67514f428`)
  .then(function (response) {
    // handle success
    var text = e.target.elements.search.value
     this.setState({
       responseSearch:response,
       word:text
    
    })
     console.log("you will see results", this.state.responseSearch);
     
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    
  })

}
   
  render() {
    return (
      <div className="App">
    <Router>
      <CustomNavbar SearchHandler={this.SearchHandler()} word={this.state.word} />
      <Switch>
          <Route exact path="/" render={(props) => <Home {...props} response={this.state.response} />} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/details/:id" render={(props) => <NewsDetails {...props} response={this.state.response} />} />
          {/* <Route path="/Gallery/:name" component={GalleryList} />  */}
          <Route path="/SearchResults/:word" render={(props) => <SearchResults {...props} response={this.state.responseSearch} />}/>
          <Route path="*" component={NotFound} />
          
        </Switch>
      </Router>
    </div>
    )
  }
}


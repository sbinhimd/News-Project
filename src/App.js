import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomNavbar from './component/CustomNavbar';
import NotFound from './component/NotFound';
import Home from './component/Home';
import axios from 'axios'




export default class App extends Component {
  
  
  render() {
    return (
      <div className="App">
    <Router>
      <CustomNavbar />
    
      <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Gallery/:name" component={GalleryList} />  */}
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
    )
  }
}


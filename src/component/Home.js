import React, { Component } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios'
import '../App.css'
import LargeNewsCard from './LargeNewsCard'


export default class Home extends Component {
  state= {
    response:null
 };
componentDidMount() {
    
    let currentObj = this
    axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=N8ptVHWKlcRDAhcHHytrX0MrTUoyCn1V')
  .then(function (response) {
    // handle success
    
     currentObj.setState({response})
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
    
    render() {
// var createCards = this.state.response.data.results.map(()=>{
//    return <NewsCard response={this.props.state.response}/>
    
//  });
console.log(this.state.response);

let obj =this.state.response == null ? [] : this.state.response.data.results.map((value)=>{

   return <NewsCard  title={value.title} section={value.section} views={value.views} key={value.id} abstract={value.abstract}  image={value.media[0]['media-metadata'][2].url} url={value.url} />
    
})

        return (
            <div>
            <LargeNewsCard/>
            <div className="grid">
            
              {obj} 
              
            </div>
            </div>
        )
    }
}

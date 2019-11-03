import React, { Component } from 'react'
import {Carousel} from "react-bootstrap";
import axios from 'axios'

export default class LargeNewsCard extends Component {
    state= {
        response:null
     };
    componentDidMount() {
        
        let currentObj = this
        axios.get('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=N8ptVHWKlcRDAhcHHytrX0MrTUoyCn1V')
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
       
        let img =this.state.response == null ? [] : this.state.response.data.results.map((value,index)=>{
            
                return value.media[0]['media-metadata'][2].url
         })

         let title =this.state.response == null ? [] : this.state.response.data.results.map((value,index)=>{
            
            return value.title
     })

     let abstract =this.state.response == null ? [] : this.state.response.data.results.map((value,index)=>{
            
        return value.abstract
 })
         
         
     
        return (
            <Carousel className="mb-4">
  <Carousel.Item>
 
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
  </Carousel.Item>
  <Carousel.Item>
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
  </Carousel.Item>
  <Carousel.Item>
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
  </Carousel.Item>
</Carousel>
        )
    }
}








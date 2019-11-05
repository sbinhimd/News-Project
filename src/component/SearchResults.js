import React, { Component } from 'react'
import NewsCard from './NewsCard'

export default class SearchResults extends Component {
   
    render() {
         var word = this.props.match.params.word
         console.log("parms",word);
         
        let obj =this.props.response == null ? [] : this.props.response.data.articles.map((value,index)=>{

            return <NewsCard  title={value.title} key={index} id={index} abstract={value.description}  image={value.urlToImage} url={value.url} />
             
         })
        return (
            <div>
           <h2>{` Search Results for ${word} `}</h2>
              {obj}  
            </div>
        )
    }
}

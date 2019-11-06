import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
var ind = null;
export default class NewsDetails extends Component {
  render() {
    if (this.props.response !== null) {
      console.log(this.props.response);
      var id = this.props.match.params.id;
      let obj =
        this.props.response == null
          ? []
          : this.props.response.data.articles.map((value, index) => {
              if (id == index) {
                ind = index;
                return value;
              }
            });
      console.log("here", obj);
      var title = <Card.Title>{obj[ind].title}</Card.Title>;
      var text = <Card.Text> {obj[ind].content}</Card.Text>;
      var img = (
        <Card.Img height={600} variant="top" src={obj[ind].urlToImage} />
      );
      var read = (
        <a href={obj[ind].url}>
          <Button variant="primary">Read from Source</Button>
        </a>
        
      );

      // var back = (
      //   <a href={obj[ind].url}>
      //     <Button variant="primary">Back</Button>
      //   </a>
        
      // );
    }

    return (
      <Card style={{ width: "100%", margin: "auto" }}>
        {img}
        <Card.Body>
          {/* <Card.Title>Title</Card.Title> */}
          {title}
          {text}
          {read}
        </Card.Body>
      </Card>
    );
  }
}

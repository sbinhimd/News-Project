import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'

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
      
      var alert=() =>{ 
        let timerInterval
        Swal.fire({
          title: 'Redirect',
          html: 'Redirect in <b></b> milliseconds.',
          timer: 2000,
          onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              Swal.getContent().querySelector('b')
                .textContent = Swal.getTimerLeft()
            }, 100)
          },
          onClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.timer
          ) {
            console.log('I was closed by the timer')
            window.location.href = `${obj[ind].url}`;
          }
        })
    }
      var read = (
       
          <Button onClick={alert} className="button1" variant="primary">Read from Source</Button>
      );

      
      var back = (
        <NavLink to={`/`}>
          <Button className="button1" variant="primary">Back</Button>
        </NavLink>
        
      );
    }

    return (
      <Card style={{ width: "100%", margin: "auto" }}>
        {img}
        <Card.Body>
          {/* <Card.Title>Title</Card.Title> */}
          {title}
          {text}
          {read}
          
          <div>
          <br/>
          {back}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

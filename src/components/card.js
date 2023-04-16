import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './card.css';

class Card extends React.Component {

  render() {
    return (
      <div className="card-main">
          <div className="card-left">
            <div className="card-img">
              <img src={this.props.card.img} alt="Image of tarot card selected"/>
            </div>
            <div className="carddetails-carousel">
              <p>In one word: {this.props.card.oneword}</p>
              <p>If it was a city: {this.props.card.city}</p>
              <p>If it was a colour: {this.props.card.colour}</p>
              <p>If it was a Astrology sign: {this.props.card.starsign}</p>
            </div>
          </div>
          <div className="card-right">
            <div className="card-title">
              <h2>{this.props.card.name}</h2>
            </div>
            <div className="card-blurb">
              <p>{this.props.card.description}</p>
            </div>
          </div>
        <div className="card-recos">
        <h3>You might be interested in...</h3>
          <li>{this.props.card.productrec1}</li>
          <li>{this.props.card.productrec2}</li>
          <li>{this.props.card.productrec3}</li>
        </div>
      </div>
    )
  }
}


export default Card;

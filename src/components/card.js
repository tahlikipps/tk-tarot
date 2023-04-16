import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './card.css';

class Card extends React.Component {

  render() {
    return (
      <div className="card-main">
        <div className="card-img">
          <img src={this.props.card.img} alt={this.props.card.alt} />
          <p>In one word: {this.props.card.oneword}</p>
        </div>
        <div className="card-text">
          <div className="card-title">
          <h2>{this.props.card.name}</h2>
          </div>
          <div className="card-blurb">
            <p>{this.props.card.description}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Card;

import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './card.css';

//const card =
  //{
  //type: "major",
  //name_short: "ar17",
  //name: "The Star",
  //value: "17",
  //value_int: 17,
  //meaning_up: "Loss, theft, privation, abandonment; another reading says-hope and bright prospects,",
  //meaning_rev: "Arrogance, haughtiness, impotence."
//}


class Card extends React.Component {

  render() {
    return (
      <div className="card-main">
        <div className="card-img">
          <img src={this.props.card.img} />
          <p>{this.props.card.oneword}</p>
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
//}

export default Card;

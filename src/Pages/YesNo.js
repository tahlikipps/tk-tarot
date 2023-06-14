import React, { Component } from "react";
import "./YesNo.css";
import Flipper from "../components/Flipper";
import Button from "../components/button";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class YesNo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      cardVisible: false,
      flipperVisible: false,
      buttonVisible: true,
    };
  }

  selectCard = async (event) => {
    this.setState({
      flipperVisible: true,
      buttonVisible: false,
    });
    await delay(6000);
    const url =
      "https://raw.githubusercontent.com/tahlikipps/tahlikipps.github.io/main/data.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.cards);
        let randCard = Math.floor(Math.random() * 78);

        console.log(data.cards[`${randCard}`]);
        this.setState({
          card: data.cards[`${randCard}`],
          cardVisible: true,
          flipperVisible: false,
        });
      });
  };

  render() {
    return (
      <div>
        <div className="main">
          {this.state.buttonVisible && (
            <div className="title">
              <h2>Yes or No</h2>
            </div>
          )}
          {this.state.buttonVisible && (
            <div className="blurb">
              <p>
                Think of a question that needs a Yes or No response, then click
                the button below
              </p>
            </div>
          )}
          {this.state.buttonVisible && (
            <div className="CTA-btn" onClick={this.selectCard}>
              <Button />
            </div>
          )}
          {this.state.flipperVisible && (
            <div className="flipper">
              <Flipper />
            </div>
          )}
          {this.state.cardVisible && (
            <div className="yesorno">
              <img src={this.state.card.img} alt="Selected tarot card" />
              <p>
                <strong>{this.state.card.name}</strong>
              </p>
              <p>This card says:</p>
              <h2>{this.state.card.YesNoMaybe}</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default YesNo;

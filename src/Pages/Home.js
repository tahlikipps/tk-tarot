import React, { Component } from 'react';
import './Home.css';
import Ball from '../components/ball';
import Card from '../components/card';
import Spinner from "../components/Spinner";
import Button from "../components/button";

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      cardVisible: false,
      ballVisible: true,
      spinnerVisible: false,
      buttonVisible: true,
    };
  }



  selectCard = async event => {
    this.setState({
      spinnerVisible: true,
      ballVisible: false,
      buttonVisible: false,
    })
    await delay(1000);
    const url = "https://raw.githubusercontent.com/tahlikipps/tahlikipps.github.io/main/data.json"
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.cards)
      let randCard = Math.floor(Math.random() * 78)

      //console.log(data.cards[`${randCard}`]);
      this.setState({
        card: data.cards[`${randCard}`],
        cardVisible: true,
        spinnerVisible: false,
      });
    });
  }

  render () {
    return (
        <div>
          <div className="main">
              {this.state.ballVisible ? <Ball /> : null}
              {this.state.spinnerVisible ? <Spinner /> : null}
            <div className="card">
              {this.state.cardVisible ? <Card {...this.state} /> : null}
            </div>
            <div className="CTA-btn" onClick={this.selectCard}>
              {this.state.buttonVisible ? <Button  /> : null}
            </div>
          </div>
        </div>
    );
  }
}

export default Home;

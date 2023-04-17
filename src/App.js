import React, { Component } from "react";
import './App.css';
import Header from './components/header';
import Ball from './components/ball';
import Card from './components/card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      cardVisible: false,
      ballVisible: true,
    };
  }


  //handleClick = (event) => {
    //this.props.selectCard(event.target.value);
    //this.setState({
      //cardVisble: true,
      //ballVisible: false,
    //})
  //}

  selectCard = () => {
    const url = "https://raw.githubusercontent.com/tahlikipps/tahlikipps.github.io/main/data.json"
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      //console.log(data)
      let randCard = Math.floor(Math.random() * 78)

      console.log(data.cards[`${randCard}`]);
      this.setState({
        card: data.cards[`${randCard}`],
        cardVisible: true,
        ballVisible: false
      });
    });
  }

  render () {
    return (
      <div className= "app">
        <div className="header">
           <Header />
        </div>
        <div className="main"
            showBall={this.selectCard}>
            {this.state.ballVisible ? <Ball /> : null}
          <div className="card"
            showCard={this.selectCard}>
            {this.state.cardVisible ? <Card {...this.state} /> : null}
          </div>
          <div className="CTA-btn-yellow" onClick={this.selectCard}><p>Get a reading</p></div>
        </div>
        <div className=""></div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import './App.css';
import Header from './components/header';
import Ball from './components/ball';
import Card from './components/card';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      card: [],
      cardVisible: false,
      ballVisible: true,
    };
  }


  handleClick = (event) => {
    this.props.selectCard(event.target.value);
    this.setState({
      cardVisble: true,
      ballVisible: false,
    })
  }

  selectCard = () => {
    const url = "https://raw.githubusercontent.com/tahlikipps/tahlikipps.github.io/main/api-data/Data/data.json?token=GHSAT0AAAAAACBLYQMYHZCOVZTMX7GABGKEZB35IXQ"
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      let randCard = Math.floor(Math.random() * 78)
      console.log(data.cards[`${randCard}`]);
      this.setState({card: data.cards[`${randCard}`]});
    });
  }

  render () {
    return (
      <div className= "app">
        <div className="header">
           <Header />
        </div>
        <div className="main">
          <Ball
            showBall={this.handleClick}
          />
            {this.state.ballVisible ? <Ball /> : null}
          <div className="card">
            <Card {...this.state} />
          </div>
          <span className="CTA-btn-yellow" onClick={this.selectCard}><p>Get a reading</p></span>
        </div>
        <div className=""></div>
      </div>
    );
  }
}

export default App;

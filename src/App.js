import React, { Component } from "react";
import './App.css';
import Header from './components/header';
import Card from './components/card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
    };
  }


  handleClick = (event) => {
    this.props.selectCard(event.target.value);
  }

  selectCard = () => {
    const url = "https://raw.githubusercontent.com/tahlikipps/tahlikipps.github.io/main/api-data/Data/data.json?token=GHSAT0AAAAAACBLYQMZWMYGSP6ZOLVTDKRWZB33PQQ"
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
            <div className="pending-ball">
              <img src={`${process.env.PUBLIC_URL}/assets/logo-lg.png`} className="App-logo" alt="spinning crystal ball"/>
            </div>
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

import React, { Component } from 'react';
import './AllCards.css';
//import SearchBar from '../components/searchbar';

class AllCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblecards: [],
    };

  }

  componentDidMount = () => {
    const url = "https://raw.githubusercontent.com/tahlikipps/tahlikipps.github.io/main/data.json"
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      let array = Object.values(data.cards)
      this.setState({
        visiblecards: array,
      });
    });
  }


  render () {
    return (
      <div>
        <div className="main">
            <div className="title">
              <h2>All Cards</h2>
            </div>
            <div className="searchbar">
            </div>
            <div className="visiblecards-container">
              <ul className="cardlist">

                {this.state.visiblecards.map(card => {
                  return (
                    <a href="/">
                      <li>
                        <div className="listed-card" key={card.key}>
                          <img src={card.img} alt="{Tarot card selected}"/>
                          <div className="listed-card-details">
                            <h2>{card.name}</h2>
                            <p>This card in one word: {card.oneword}</p>
                          </div>
                        </div>
                      </li>
                    </a>
                  )
                })}
              </ul>
            </div>
        </div>
      </div>
      );
    };
}

 export default AllCards;

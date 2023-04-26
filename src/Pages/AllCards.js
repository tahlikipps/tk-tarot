import React, { Component } from 'react';
import './AllCards.css';
import SearchBar from '../components/searchbar';

class AllCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visiblecards: [],
    };

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
          <div className="visiblecards">

          </div>
      </div>
      </div>
      );
    };
}

 export default AllCards;

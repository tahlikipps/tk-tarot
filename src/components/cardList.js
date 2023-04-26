import React from 'react';
import Card from './card.js'


const CardList = (props) => {


  render() {
    return (
      <div className="card-list">
        {props.card.map((card) => {
          return card.name
          })
        }
      </div>
    );
  };
}

export default CardList;

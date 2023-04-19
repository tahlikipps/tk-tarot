import React from 'react';
import './menu.css';

class Menu extends React.Component {


  render() {
    return (
    <div className="menu">
      <div className="menu-container">
        <ul className="menu-list">
          <li>
            <a className="menu-item" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="menu-item" href="/YesNo">
              Seeking a Yes or No?
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              All cards
            </a>
          </li>
          <li>
            <a className="menu-item" href="/About">
              About
            </a>
          </li>
        </ul>
      </div>
  </div>
  )};
}

export default Menu;

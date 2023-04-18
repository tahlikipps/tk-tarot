import React from 'react';

class Menu extends React.Component {


  render() {
    return (
    <div className="Menu">
      <ul>
        <li>
          <a className="menu-item" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="menu-item" href="/">
            Seeking a Yes or No?
          </a>
        </li>
        <li>
          <a className="menu-item" href="/">
            No3
          </a>
        </li>
        <li>
          <a className="menu-item" href="/">
            About TEEKAY Tarot
          </a>
        </li>
      </ul>
  </div>
  )};
}

export default Menu;

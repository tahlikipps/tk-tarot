import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.css';

class Header extends React.Component {


  render() {
    return (
      <div className="header-main">
          <img className="tk-tarot-logo-header" src={`${process.env.PUBLIC_URL}/assets/tk-tarot-logo-header.png`} alt="logo" />
            <span><FontAwesomeIcon className="menu-icon" icon={faBars} />
            </span>
      </div>
  )}
}

export default Header;

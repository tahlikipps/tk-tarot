import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import './header.css';
import Menu from "./menu";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerVisible: true,
      menuVisible: false,
      crossVisible: false,
    };
  }

  showMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible,
      burgerVisible: !prevState.burgerVisible,
      crossVisible: !prevState.crossVisible,
    }));
  }

  render() {
    return (
      <div>
        <div className="header-main">
            <img className="tk-tarot-logo-header" src={`${process.env.PUBLIC_URL}/assets/tk-tarot-logo-header.png`} alt="logo" />

              {this.state.burgerVisible ? <FontAwesomeIcon className="menu-icon" icon={faBars} onClick={this.showMenu} /> : null}
              {this.state.crossVisible ? <FontAwesomeIcon className="menu-icon" icon={faXmark} onClick={this.showMenu} /> : null}


        </div>
        {this.state.menuVisible ? <Menu  /> : null}
      </div>
    )}
  }


export default Header;

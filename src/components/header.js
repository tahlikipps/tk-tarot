import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './header.css';
import Menu from "./menu";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    };
  }

  showMenu = () => {
    this.setState({
      menuVisible: true,
    })
  }

  render() {
    return (
      <div className="header-main">
          <img className="tk-tarot-logo-header" src={`${process.env.PUBLIC_URL}/assets/tk-tarot-logo-header.png`} alt="logo" />
          <span><FontAwesomeIcon className="menu-icon" icon={faBars} onClick={this.showMenu} />
          {this.state.menuVisible ? <Menu  /> : null}
          </span>
      </div>
    )}
  }


export default Header;

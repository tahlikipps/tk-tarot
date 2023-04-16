import React from "react";
import './ball.css';


class Ball extends React.Component {

  render() {


    return (
      <div>
        <div className="pending-ball" onClick= {() => this.props.showBall}>
          <img src={`${process.env.PUBLIC_URL}/assets/logo-lg.png`} className="App-logo" alt="spinning crystal ball"/>
        </div>
      </div>
      )
    }
  }
export default Ball;

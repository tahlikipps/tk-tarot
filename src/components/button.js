import React from "react";
import './button.css';


class Button extends React.Component {

  render() {


    return (
      <div>
          <div className="CTA-btn-yellow" onClick={this.selectCard}><p><strong>Get a reading</strong></p>
          </div>
      </div>
      )
    }
  }
export default Button;

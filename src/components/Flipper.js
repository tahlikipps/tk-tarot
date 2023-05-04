import React from "react";
import "./flipper.css";

export default function Flipper() {
  return (
    <div>
      <div id="loading-flipper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg" alt="The fool" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg" alt="The magician" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg" alt="The high priestess"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/RWS_Tarot_03_Empress.jpg/220px-RWS_Tarot_03_Empress.jpg" alt="The empress"/>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Chat.scss";

import PolygonIcon from "../../assets/poly.png";
import ChatIcon from "../../assets/chat.png";
import TelegramIcon from "../../assets/telegram-icon.png";
import WhatsappIcon from "../../assets/whatsapp-icon.png";

const Chat = () => {
  // state variables for toggling the two elements
  const [isLinksVisible, setIsLinksVisible] = useState(null);

  // function to toggle the visibility of the two elements
  function toggleElements() {
    setIsLinksVisible(!isLinksVisible);
  }
  return (
    <div className="text-black bottom-bar">
      <div
        className={`relative flex items-center justify-center w-32 h-32 fixed-element ${isLinksVisible ? "visible" : ""}`}
        onClick={toggleElements}
      >
        <img className="absolute w-28 poly-icon" src={PolygonIcon} alt="polygon-icon" />
        <img className="absolute w-16" src={ChatIcon} alt="chat-icon" />
      </div>

      <a href="">
        <img
          src={TelegramIcon}
          alt="telegram-icon"
          className={`element-one w-32 ${isLinksVisible ? "visible" : ""}`}
          onAnimationEnd={() => setIsLinksVisible(!isLinksVisible)}
        />
      </a>

      <a href="">
        <img
          src={WhatsappIcon}
          alt="whatsapp-icon"
          className={`element-two w-[104px] ${isLinksVisible ? "visible" : ""}`}
          onAnimationEnd={() => setIsLinksVisible(!isLinksVisible)}
        />
      </a>
    </div>
  );
};

export default Chat;

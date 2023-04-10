import React, { useState } from "react";
import "./Chat.scss";

import ChatIcon from "../../assets/chat-icon.png";
import TelegramIcon from "../../assets/telegram-icon.png";
import WhatsappIcon from "../../assets/whatsapp-icon.png";

const Chat = () => {
  // state variables for toggling the two elements
  const [isElementOneVisible, setIsElementOneVisible] = useState(false);
  const [isElementTwoVisible, setIsElementTwoVisible] = useState(false);

  // function to toggle the visibility of the two elements
  function toggleElements() {
    setIsElementOneVisible(!isElementOneVisible);
    setIsElementTwoVisible(!isElementTwoVisible);
  }
  return (
    <div className="bottom-bar text-black">
      <img src={ChatIcon} className="fixed-element w-32" onClick={toggleElements} />

      <a href="">
        <img
          src={TelegramIcon}
          className={`element-one w-32 ${isElementOneVisible ? "visible" : ""}`}
          onAnimationEnd={() => setIsElementOneVisible(!isElementOneVisible)}
        />
      </a>

      <a href="">
        <img
          src={WhatsappIcon}
          className={`element-two w-[104px] ${isElementTwoVisible ? "visible" : ""}`}
          onAnimationEnd={() => setIsElementTwoVisible(!isElementTwoVisible)}
        />
      </a>
    </div>
  );
};

export default Chat;

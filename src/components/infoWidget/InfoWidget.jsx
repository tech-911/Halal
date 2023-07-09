import React from "react";
import "./infoWidget.scss";
const InfoWidget = ({ Icon, text, img }) => {
  return (
    <div className="infowid_wrapper">
      {Icon ? Icon : ""}
      {img ? <img src={img} alt="icon" className="infowid_img_icon" /> : ""}

      <p className="infowid_text">{text}</p>
    </div>
  );
};

export default InfoWidget;

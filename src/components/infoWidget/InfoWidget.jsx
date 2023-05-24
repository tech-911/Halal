import React from "react";
import "./infoWidget.scss";
const InfoWidget = ({ Icon, text }) => {
  return (
    <div className="infowid_wrapper">
      {Icon ? Icon : ""}
      <p className="infowid_text">{text}</p>
    </div>
  );
};

export default InfoWidget;

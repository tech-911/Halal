import React from "react";
import "./ready.scss";
import Google from "../../assets/svg/google-sm.svg";
import Apple from "../../assets/svg/apple-sm.svg";
import ready_right from "../../assets/png/ready_right.png";
const Ready = () => {
  return (
    <div className="ready_wrapper">
      <div className="ready_left">
        <h1 className="ready_title">Ready to find your Muslim partner?</h1>
        <p className="ready_body">
          "Find your Muslim soulmate with our dedicated halal matchmaking app!"
        </p>
        <div className="ready_download_wrap">
          <img
            className="ready_google"
            draggable="false"
            src={Google}
            alt="google"
          />
          <img
            className="ready_apple"
            draggable="false"
            src={Apple}
            alt="Apple"
          />
        </div>
      </div>
      <img src={ready_right} alt="Ready" className="ready_right" />
    </div>
  );
};

export default Ready;

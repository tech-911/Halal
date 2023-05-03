import React from "react";
import "./phoneButton.scss";
import { BsFillChatLeftTextFill } from "react-icons/bs";
const PhonenumberButton = ({ option }) => {
  const phoneSignin = () => {
    console.log("phoneSignin");
  };
  const phoneSignup = () => {
    console.log("phoneSignup");
  };
  return (
    <div className="phone_wrapper">
      <button
        className="phone_button"
        onClick={option === "signin" ? phoneSignin : phoneSignup}
      >
        <BsFillChatLeftTextFill className="phone_icon" />
        {option === "signin" && "Sign in with Phone number"}
        {option === "signup" && "Signup with Phone number"}
      </button>
    </div>
  );
};

export default PhonenumberButton;

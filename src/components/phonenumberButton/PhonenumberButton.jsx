import React from "react";
import "./phoneButton.scss";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { phoneModalAction } from "../../redux/slices/phoneModalSlice";
import { authModalAction } from "../../redux/slices/authModalSlice";
const PhonenumberButton = ({ option, border }) => {
  const dispatch = useDispatch();
  const phoneSignin = () => {
    dispatch(
      authModalAction({
        method: "signin",
        open: 0,
      })
    );
    dispatch(
      phoneModalAction({
        method: "signin",
        isOpen: 1,
      })
    );
  };
  const phoneSignup = () => {
    dispatch(
      authModalAction({
        method: "signup",
        open: 0,
      })
    );
    dispatch(
      phoneModalAction({
        method: "signup",
        isOpen: 1,
      })
    );
  };
  return (
    <div className="phone_wrapper">
      <button
        className={`phone_button ${border ? "phone_border" : ""}`}
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

import React, { useEffect, useRef, useState } from "react";
import "./landing.scss";
import Header from "../../components/header/Header";
import OurStory from "../../components/ourStory/OurStory";
import Ready from "../../components/ready/Ready";
import loadingBackground from "../../assets/png/mobileLoading.png";
import loadingIcon from "../../assets/svg/LoadingIcon.svg";
import { useNavigate } from "react-router-dom";
import PopupAuth from "../../components/popupAuth/PopupAuth";
import { useSelector } from "react-redux";
import PhoneNumber from "../../components/phoneNumber/PhoneNumber";
import OTPComponent from "../../components/OTP/OTP";

const Landing = () => {
  const [timeoutid, setTimeOutId] = useState(0);
  const [timeoutid1, setTimeOutId1] = useState(0);
  const iconref = useRef(null);
  const navigate = useNavigate();
  const { open } = useSelector((state) => state.authModalSlice);
  const { isOpen } = useSelector((state) => state.phoneModalSlice);
  const { otpOpen } = useSelector((state) => state.otpModalSlice);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth <= 664) {
        setTimeOutId(
          window.setTimeout(() => {
            iconref.current.style.top = "-200px";
          }, 4000)
        );
        setTimeOutId1(
          window.setTimeout(() => {
            navigate("/signup");
          }, 8000)
        );
        iconref.current.style.top = "300px";
        iconref.current.style.animation = "bounce .4s 8 alternate";
      }
    };
    handleSize();
    return () => {
      window.clearTimeout(timeoutid);
      window.clearTimeout(timeoutid1);
    };
  }, []);
  return (
    <div className="Landing_wrapper">
      <Header />
      <OurStory />
      <Ready />
      {open ? <PopupAuth /> : ""}
      {isOpen ? <PhoneNumber /> : ""}
      {otpOpen ? <OTPComponent /> : ""}
      <div className="Landing_loading">
        <img
          className="loading_background"
          src={loadingBackground}
          alt="loadingBackground "
        />
        <img
          ref={iconref}
          className="loading_Icon"
          src={loadingIcon}
          alt="loadingIcon"
        />
      </div>
    </div>
  );
};

export default Landing;

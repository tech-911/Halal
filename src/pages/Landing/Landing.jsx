import React, { useEffect, useRef, useState } from "react";
import "./landing.scss";
import Header from "../../components/header/Header";
import OurStory from "../../components/ourStory/OurStory";
import Ready from "../../components/ready/Ready";
import loadingBackground from "../../assets/png/mobileLoading.png";
import loadingIcon from "../../assets/svg/LoadingIcon.svg";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const [timeoutid, setTimeOutId] = useState(0);
  const [timeoutid1, setTimeOutId1] = useState(0);
  const iconref = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (window.innerWidth <= 664) {
      setTimeOutId(
        window.setTimeout(() => {
          iconref.current.style.top = "-200px";
        }, 4000)
      );
      setTimeOutId1(
        window.setTimeout(() => {
          navigate("/auth");
        }, 6000)
      );
      iconref.current.style.top = "300px";
      iconref.current.style.animation = "bounce .4s 8 alternate";
    }
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

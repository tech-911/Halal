import React from "react";
import "./landing.scss";
import Header from "../../components/header/Header";
import OurStory from "../../components/ourStory/OurStory";
import Ready from "../../components/ready/Ready";
import loadingBackground from "../../assets/png/mobileLoading.png";
import loadingIcon from "../../assets/svg/LoadingIcon.svg";
const Landing = () => {
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
          className="loading_Icon"
          src={loadingIcon}
          alt="loadingIcon"
        />
      </div>
    </div>
  );
};

export default Landing;

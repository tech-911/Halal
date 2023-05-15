import React from "react";
import "./header.scss";
import Slider from "react-slick";
import Nav from "../nav/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero1 from "../../assets/png/headerCarousel/Hero1.png";
import Hero2 from "../../assets/png/headerCarousel/Hero2.png";
import Hero3 from "../../assets/png/headerCarousel/Hero3.png";
import Section2 from "../../assets/png/section2home.png";
import Google from "../../assets/svg/google.svg";
import Apple from "../../assets/svg/apple.svg";
import { useDispatch } from "react-redux";
import { authModalAction } from "../../redux/slices/authModalSlice";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const dispatch = useDispatch();
  return (
    <div className="header_wrapper">
      <Slider className="header_carousel" {...settings}>
        <img src={Hero1} alt="hero1" />
        <img src={Hero2} alt="hero2" />
        <img src={Hero3} alt="hero3" />
      </Slider>
      <div className="header_nav">
        <Nav />
      </div>
      <div className="header_section2">
        <img src={Section2} alt="section2" />
      </div>
      <h1 className="header_section3">Connecting Muslims Worldwide</h1>
      <div className="header_section4">
        <h1 className="header_download_title">Download App</h1>
        <div className="header_download_wrap">
          <img
            className="header_google"
            draggable="false"
            src={Google}
            alt="google"
          />
          <img
            className="header_apple"
            draggable="false"
            src={Apple}
            alt="Apple"
          />
        </div>
        <button
          onClick={() => {
            dispatch(authModalAction({ method: "signup", open: 1 }));
          }}
          className="header_create_account"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Header;

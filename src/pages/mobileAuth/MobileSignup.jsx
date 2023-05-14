import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mobileSignup.scss";
import back1 from "../../assets/png/mobile_login_carousel/1.png";
import back2 from "../../assets/png/mobile_login_carousel/2.png";
import back3 from "../../assets/png/mobile_login_carousel/3.png";
import back4 from "../../assets/png/mobile_login_carousel/4.png";
import back5 from "../../assets/png/mobile_login_carousel/5.png";
import back6 from "../../assets/png/mobile_login_carousel/6.png";
import headerResImage from "../../assets/png/header_image_auth_res.png";
import GoogleButton from "../../components/googleButton/GoogleButton";
import FacebookButton from "../../components/facebookButton/FacebookButton";
import PhonenumberButton from "../../components/phonenumberButton/PhonenumberButton";
import { Link, useNavigate } from "react-router-dom";
import { cloudinary } from "../../BaseUrls/base";
const MobileSignup = () => {
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
  const navigate = useNavigate();
  return (
    <div className="mobauth_wrap">
      <Slider className="mobauth_carousel" {...settings}>
        <img
          className="mobauth_carItems"
          src={`${cloudinary}/3_iffi1d.png`}
          alt="back1"
        />
        <img
          className="mobauth_carItems"
          src={`${cloudinary}/6_updn7v.png`}
          alt="back2"
        />
        <img
          className="mobauth_carItems"
          src={`${cloudinary}/4_m5hioz.png`}
          alt="back3"
        />
        <img
          className="mobauth_carItems"
          src={`${cloudinary}/1_r9s2xv.png`}
          alt="back4"
        />
        <img
          className="mobauth_carItems"
          src={`${cloudinary}/2_awthix.png`}
          alt="back5"
        />
        <img
          className="mobauth_carItems"
          src={`${cloudinary}/5_k3vzxj.png`}
          alt="back6"
        />
      </Slider>
      <div className="mobauth_header_image">
        <img
          onClick={() => {
            navigate("/");
          }}
          src={headerResImage}
          alt="headerResImage"
        />
      </div>
      <div className="mobauth_authmethods">
        <GoogleButton option={"signup"} />
        <FacebookButton option={"signup"} />
        <PhonenumberButton option="signup" />
      </div>
      <div className="mobauth_terms">
        <p className="mobauth_terms_listings">
          "By signing in, you accept our <Link to="/">terms of service</Link>{" "}
          and understand our data handling practices outlined in our{" "}
          <Link to="/">Privacy Policy</Link> and{" "}
          <Link to="/">Cookie Policy</Link>."
        </p>
        <p className="mobauth_check_exist">
          Already have an account? <Link to="/signin">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default MobileSignup;

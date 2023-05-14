import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mobileSignin.scss";
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
import { Navigate } from "react-router-dom";
const MobileSignin = () => {
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
    <div className="mobsignin_wrap">
      <Slider className="mobsignin_carousel" {...settings}>
        <img
          className="mobsignin_carItems"
          src={`${cloudinary}/3_iffi1d.png`}
          alt="back1"
        />
        <img
          className="mobsignin_carItems"
          src={`${cloudinary}/6_updn7v.png`}
          alt="back2"
        />
        <img
          className="mobsignin_carItems"
          src={`${cloudinary}/4_m5hioz.png`}
          alt="back3"
        />
        <img
          className="mobsignin_carItems"
          src={`${cloudinary}/1_r9s2xv.png`}
          alt="back4"
        />
        <img
          className="mobsignin_carItems"
          src={`${cloudinary}/2_awthix.png`}
          alt="back5"
        />
        <img
          className="mobsignin_carItems"
          src={`${cloudinary}/5_k3vzxj.png`}
          alt="back6"
        />
      </Slider>
      <div className="mobsignin_header_image">
        <img
          onClick={() => {
            navigate("/");
          }}
          src={headerResImage}
          alt="headerResImage"
        />
      </div>
      <div className="mobsignin_authmethods">
        <GoogleButton option={"signin"} />
        <FacebookButton option={"signin"} />
        <PhonenumberButton option="signin" />
      </div>
      <div className="mobsignin_terms">
        <p className="mobsignin_terms_listings">
          "By signing in, you accept our <Link to="/">terms of service</Link>{" "}
          and understand our data handling practices outlined in our{" "}
          <Link to="/">Privacy Policy</Link> and{" "}
          <Link to="/">Cookie Policy</Link>."
        </p>
        <p className="mobsignin_check_exist">
          Dont have an account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default MobileSignin;

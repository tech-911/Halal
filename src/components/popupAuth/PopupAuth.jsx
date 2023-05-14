import React from "react";
import "./popupAuth.scss";
import GoogleButton from "../googleButton/GoogleButton";
import FacebookButton from "../facebookButton/FacebookButton";
import PhonenumberButton from "../phonenumberButton/PhonenumberButton";
import { CgCloseO } from "react-icons/cg";
import { Link } from "react-router-dom";
import Google from "../../assets/svg/google-sm.svg";
import Apple from "../../assets/svg/apple-sm.svg";
const PopupAuth = ({ type, open, setOpen }) => {
  return (
    <div className="popauth_wrapper">
      <div className="popauth_pop">
        <CgCloseO
          onClick={() => {
            setOpen(0);
          }}
          className="popauth_close"
        />
        <h1 className="popauth_headtext">Create account</h1>
        <p className="popauth_terms_listings">
          "By signing in, you accept our <Link to="/">terms of service</Link>{" "}
          and understand our data handling practices outlined in our{" "}
          <Link to="/">Privacy Policy</Link> and{" "}
          <Link to="/">Cookie Policy</Link>."
        </p>

        <div className="popauth_method">
          <GoogleButton option={type} />
          <FacebookButton option={type} border={1} />
          <PhonenumberButton option={type} border={1} />
        </div>
        <div className="popauth_bottom_border"></div>
        <h1 className="popauth_download_text">Download our app now!</h1>
        <div className="popauth_download_wrap">
          <img
            className="popauth_google"
            draggable="false"
            src={Google}
            alt="google"
          />
          <img
            className="popauth_apple"
            draggable="false"
            src={Apple}
            alt="Apple"
          />
        </div>
      </div>
    </div>
  );
};

export default PopupAuth;

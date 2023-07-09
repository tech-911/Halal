import React, { useRef } from "react";
import "./popupAuth.scss";
import GoogleButton from "../googleButton/GoogleButton";
import FacebookButton from "../facebookButton/FacebookButton";
import PhonenumberButton from "../phonenumberButton/PhonenumberButton";
import { CgCloseO } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/svg/google-sm.svg";
import Apple from "../../assets/svg/apple-sm.svg";
import { useDispatch, useSelector } from "react-redux";
import { authModalAction } from "../../redux/slices/authModalSlice";
import mobileAuthHeadImg from "../../assets/png/mobileAuthHead.png";
const PopupAuth = () => {
  const dispatch = useDispatch();
  const { method } = useSelector((state) => state.authModalSlice);
  const targetRef = useRef(null);
  const handleBodyClose = (e) => {
    if (e.target === targetRef.current) {
      dispatch(authModalAction({ method: "signup", open: 0 }));
    } else {
      return;
    }
  };
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        handleBodyClose(e);
      }}
      className="popauth_wrapper"
      ref={targetRef}
    >
      <div className="popauth_pop">
        <CgCloseO
          onClick={() => {
            dispatch(authModalAction({ method: "signup", open: 0 }));
          }}
          className="popauth_close"
        />
        
        <img
          onClick={() => {
            navigate("/");
          }}
          className="popauth_image_head"
          src={mobileAuthHeadImg}
          alt="mobile_auth_head"
        />
        <h1 className="popauth_headtext">
          {method === "signin" ? "Login" : "Create account"}
        </h1>
        <p className="popauth_terms_listings">
          "By signing in, you accept our <Link to="/">terms of service</Link>{" "}
          and understand our data handling practices outlined in our{" "}
          <Link to="/">Privacy Policy</Link> and{" "}
          <Link to="/">Cookie Policy</Link>."
        </p>

        <div className="popauth_method">
          <GoogleButton option={method} />
          <FacebookButton option={method} border={1} />
          <PhonenumberButton option={method} border={1} />
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

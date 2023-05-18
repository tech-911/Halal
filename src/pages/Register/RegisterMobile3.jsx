import React, { useRef, useState } from "react";
import "./registerMobile3.scss";
import { authModalAction } from "../../redux/slices/authModalSlice";
import { useNavigate } from "react-router-dom";
import PhotoInput from "../../components/photoInput/PhotoInput";
import { SlArrowLeft } from "react-icons/sl";
import mobileAuthHeadImg from "../../assets/png/mobileAuthHead.png";
import { useDispatch, useSelector } from "react-redux";
import { otpModalAction } from "../../redux/slices/otpModalSlice";
import { termsModalAction } from "../../redux/slices/termsModalSlice";
import { phoneModalAction } from "../../redux/slices/phoneModalSlice";
const RegisterMobile3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBack = () => {
    dispatch(termsModalAction({ termsOpen: 1 }));
    navigate(-1);
  };

  return (
    <div className="regmob3_wrapper">
      <SlArrowLeft
        className="regmob3_back"
        onClick={() => {
          handleBack();
        }}
      />
      <img
        className="regmob3_image_head"
        src={mobileAuthHeadImg}
        alt="mobile_auth_head"
      />
      <div className="regmob3_body">
        <div className="reg_photos_wrap">
          <PhotoInput />
        </div>
        <div className="regmob3_button_wrap_mobile">
          <button className={`regmob3_button_mobile`}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterMobile3;

import React, { useRef, useState } from "react";
import "./registerMobile2.scss";
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { authModalAction } from "../../redux/slices/authModalSlice";
import { useNavigate } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import mobileAuthHeadImg from "../../assets/png/mobileAuthHead.png";
import { useDispatch, useSelector } from "react-redux";
import { otpModalAction } from "../../redux/slices/otpModalSlice";
import { termsModalAction } from "../../redux/slices/termsModalSlice";
import { phoneModalAction } from "../../redux/slices/phoneModalSlice";
const RegisterMobile2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBack = () => {
    dispatch(termsModalAction({ termsOpen: 1 }));
    navigate(-1);
  };

  return (
    <div className="regmob2_wrapper">
      <SlArrowLeft
        className="regmob2_back"
        onClick={() => {
          handleBack();
        }}
      />
      <img
        className="regmob2_image_head"
        src={mobileAuthHeadImg}
        alt="mobile_auth_head"
      />
      <div className="regmob2_body">
        <div className="regmob2_sub_body">
          <div className="regmob2_left">
            <div className="regmob2_input_location_wrap">
              <label className="regmob2_location_label" htmlFor="location">
                Location
              </label>
              <input
                placeholder="Kano, Nigeria"
                type="text"
                id="location"
                className="regmob2_location_input"
              />
            </div>
            <div className="regmob2_input_profession_wrap">
              <label className="regmob2_profession_label" htmlFor="profession">
                Profession
              </label>
              <input
                placeholder="Product Manager"
                type="text"
                id="profession"
                className="regmob2_profession_input"
              />
            </div>
            <div className="regmob2_input_email_wrap">
              <label className="regmob2_email_label" htmlFor="email">
                Your Email
              </label>
              <input
                placeholder="Email"
                type="email"
                id="email"
                className="regmob2_email_input"
              />
              <MdEmail className="regmob2_email_icon" />
            </div>
            <div className="regmob2_input_phone_wrap">
              <label className="regmob2_phone_label" htmlFor="phone">
                Your Phone Number
              </label>
              <input
                placeholder="+234"
                type="number"
                id="phone"
                className="regmob2_phone_input"
              />
              <MdOutlinePhoneAndroid className="regmob2_phone_icon" />
            </div>
          </div>
        </div>

        <div className="regmob2_button_wrap_mobile">
          <button
            onClick={() => navigate("/register3")}
            className={`regmob2_button_mobile`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterMobile2;

import React, { useRef, useState } from "react";
import "./register.scss";
import Nav from "../../components/nav/Nav";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { authModalAction } from "../../redux/slices/authModalSlice";
import { useNavigate } from "react-router-dom";
import PhotoInput from "../../components/photoInput/PhotoInput";
import { SlArrowLeft } from "react-icons/sl";
import mobileAuthHeadImg from "../../assets/png/mobileAuthHead.png";
import { useDispatch, useSelector } from "react-redux";
import { otpModalAction } from "../../redux/slices/otpModalSlice";
import { termsModalAction } from "../../redux/slices/termsModalSlice";
import { phoneModalAction } from "../../redux/slices/phoneModalSlice";
const Register = () => {
  const maleRef = useRef(null);
  const femaleRef = useRef(null);
  const [genderState, setGenderState] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(authModalAction({ method: "signin", open: 1 }));
    navigate("/");
  };
  const handleGender = (gender) => {
    setGenderState((state) => !state);
    if (gender === "male") {
      if (genderState) {
        maleRef.current.style.color = "white";
        maleRef.current.style.background = "#ff0020";
        maleRef.current.style.border = "none";
      } else {
        maleRef.current.style.color = "#696969";
        maleRef.current.style.background = "unset";
        maleRef.current.style.border = "2px solid #b4b4b4";
      }
    } else if (gender === "female") {
      if (genderState) {
        femaleRef.current.style.color = "white";
        femaleRef.current.style.background = "#ff0020";
        femaleRef.current.style.border = "none";
      } else {
        femaleRef.current.style.color = "#696969";
        femaleRef.current.style.background = "unset";
        femaleRef.current.style.border = "2px solid #b4b4b4";
      }
    }
  };
  const handleBack = () => {
    dispatch(termsModalAction({ termsOpen: 1 }));
    navigate("/");
  };
  console.log(genderState);
  return (
    <div className="reg_wrapper">
      <div className="reg_nav">
        <Nav border={true} theme={"black"} />
      </div>
      <SlArrowLeft
        className="reg_back"
        onClick={() => {
          handleBack();
        }}
      />
      <img
        className="reg_image_head"
        src={mobileAuthHeadImg}
        alt="mobile_auth_head"
      />
      <div className="reg_body">
        <h1 className="reg_head">CREATE ACCOUNT</h1>
        <div className="reg_sub_body">
          <div className="reg_left">
            <div className="reg_input_name_wrap">
              <label className="reg_name_label" htmlFor="name">
                What is your name?
              </label>
              <input
                placeholder="Full Name"
                type="text"
                id="name"
                className="reg_name_input"
              />
              <FaUser className="reg_name_icon" />
            </div>
            <div className="reg_input_dob_wrap">
              <label className="reg_dob_label" htmlFor="dob">
                Date of Birth
              </label>
              <input
                placeholder="Date of birth"
                type="text"
                id="dob"
                className="reg_dob_input"
              />
              <MdEmail className="reg_dob_icon" />
            </div>
            <div className="reg_input_gender_wrap">
              <label className="reg_gender_label" htmlFor="gender">
                Your gender
              </label>
              <div className="reg_gender_wrap" id="gender">
                <button
                  onClick={() => handleGender("male")}
                  ref={maleRef}
                  className="reg_male"
                >
                  Male
                </button>
                <button
                  onClick={() => handleGender("female")}
                  ref={femaleRef}
                  className="reg_female"
                >
                  Female
                </button>
              </div>
            </div>
            <div className="reg_input_height_wrap">
              <label className="reg_height_label" htmlFor="height">
                Height
              </label>
              <input
                placeholder="155cm (5’1”)"
                type="text"
                id="height"
                className="reg_height_input"
              />
            </div>
            <div className="reg_input_marstatus_wrap">
              <label className="reg_marstatus_label" htmlFor="marstatus">
                Marital status
              </label>
              <input
                placeholder="Never married"
                type="text"
                id="marstatus"
                className="reg_marstatus_input"
              />
            </div>
            <div className="reg_input_location_wrap">
              <label className="reg_location_label" htmlFor="location">
                Location
              </label>
              <input
                placeholder="Kano, Nigeria"
                type="text"
                id="location"
                className="reg_location_input"
              />
            </div>
            <div className="reg_input_profession_wrap">
              <label className="reg_profession_label" htmlFor="profession">
                Profession
              </label>
              <input
                placeholder="Product Manager"
                type="text"
                id="profession"
                className="reg_profession_input"
              />
            </div>
          </div>
          <div className="reg_right">
            <div className="reg_photos_wrap">
              <PhotoInput />
            </div>
            <div className="reg_input_email_wrap">
              <label className="reg_email_label" htmlFor="email">
                Your Email
              </label>
              <input
                placeholder="Email"
                type="email"
                id="email"
                className="reg_email_input"
              />
              <MdEmail className="reg_email_icon" />
            </div>
            <div className="reg_input_phone_wrap">
              <label className="reg_phone_label" htmlFor="phone">
                Your Phone Number
              </label>
              <input
                placeholder="+234"
                type="number"
                id="phone"
                className="reg_phone_input"
              />
              <MdOutlinePhoneAndroid className="reg_phone_icon" />
            </div>
          </div>
        </div>
        <div className="reg_button_wrap">
          <button className={`reg_button`}>I Agree</button>
        </div>
        <div className="reg_button_wrap_mobile">
          <button
            onClick={() => navigate("/register2")}
            className={`reg_button_mobile`}
          >
            Next
          </button>
        </div>
        <p className="reg_login">
          Already have an account?{" "}
          <span onClick={() => handleLogin()}>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Register;

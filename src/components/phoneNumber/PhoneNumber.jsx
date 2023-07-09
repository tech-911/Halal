import React, { useRef, useState } from "react";
import "./phoneNumber.scss";
import { CgCloseO } from "react-icons/cg";
import { SlArrowLeft } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { otpModalAction } from "../../redux/slices/otpModalSlice";
import mobileAuthHeadImg from "../../assets/png/mobileAuthHead.png";
import { countriesData } from "../../data/countryCode";
import { phoneModalAction } from "../../redux/slices/phoneModalSlice";
import { useNavigate } from "react-router-dom";
const PhoneNumber = () => {
  const dispatch = useDispatch();
  const { method, isOpen } = useSelector((state) => state.phoneModalSlice);
  const [country, setCountry] = useState("NG");
  const targetRef = useRef(null);
  const handleBodyClose = (e) => {
    if (e.target === targetRef.current) {
      dispatch(phoneModalAction({ method: "signup", open: 0 }));
    } else {
      return;
    }
  };
  const handleOtp = () => {
    dispatch(phoneModalAction({ method: "signup", open: 0 }));
    dispatch(otpModalAction({ otpOpen: 1 }));
  };
  const navigate = useNavigate();
  return (
    <div
      className="phoneno_wrapper"
      onClick={(e) => {
        handleBodyClose(e);
      }}
      ref={targetRef}
    >
      <div className="phoneno_pop">
        <CgCloseO
          className="phoneno_close"
          onClick={() => {
            dispatch(phoneModalAction({ method: "signup", open: 0 }));
          }}
        />
        <SlArrowLeft
          className="phoneno_back"
          onClick={() => {
            dispatch(phoneModalAction({ method: "signup", open: 0 }));
          }}
        />
        <img
          className="phoneno_image_head"
          src={mobileAuthHeadImg}
          alt="mobile_auth_head"
        />
        <h1 className="phoneno_headtext">Enter Your Mobile Number</h1>
        <div className="phoneno_number_wrap">
          <select
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            defaultValue={"NG"}
            className="phoneno_select1"
          >
            {countriesData.map(({ code }, id) => {
              return (
                <option key={id} value={code}>
                  {code}
                </option>
              );
            })}
          </select>
          <div className="phoneno_input2_wrap">
            <div className="phoneno_country_code">
              {countriesData.filter((value) => value.code === country)[0].phone}
            </div>
            <input
              type="tel"
              // pattern="^\+?\d{10,14}$"
              required
              className="phoneno_phonenumber_input"
            />
          </div>
        </div>
        <p className="phoneno_instr">
          When you select "Continue," a verification code will be sent to your
          phone via text message. Note that standard text messaging rates may
          apply. Your verified phone number can then be used to log in.
        </p>
        <button onClick={handleOtp} className={`phoneno_button`}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default PhoneNumber;

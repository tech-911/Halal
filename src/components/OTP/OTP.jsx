import React, { useRef, useState } from "react";
import "./otp.scss";
import { CgCloseO } from "react-icons/cg";
import { SlArrowLeft } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { otpModalAction } from "../../redux/slices/otpModalSlice";
import { termsModalAction } from "../../redux/slices/termsModalSlice";
import { phoneModalAction } from "../../redux/slices/phoneModalSlice";
import mobileAuthHeadImg from "../../assets/png/mobileAuthHead.png";
import { useNavigate } from "react-router-dom";
const OTP = () => {
  const dispatch = useDispatch();
  const { otpOpen } = useSelector((state) => state.otpModalSlice);
  const { method, isOpen } = useSelector((state) => state.phoneModalSlice);
  const [phoneNumber, setPhoneNumber] = useState("");
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(""));
  console.log(otp);
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      // Only allow numbers
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to the next input field
    if (index < 5 && value) {
      const nextInput = event.target.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text/plain");
    if (pasteData.length === 6 && !isNaN(pasteData)) {
      setOtp(pasteData.split(""));
    }
  };
  const handleBodyClose = (e) => {
    if (e.target === targetRef.current) {
      dispatch(otpModalAction({ otpOpen: 0 }));
    } else {
      return;
    }
  };

  const handleUpdateContact = () => {
    dispatch(otpModalAction({ otpOpen: 0 }));
    dispatch(phoneModalAction({ method: method, isOpen: 1 }));
  };
  const handleAgreement = () => {
    dispatch(otpModalAction({ otpOpen: 0 }));
    dispatch(termsModalAction({ termsOpen: 1 }));
  };

  return (
    <div
      className="otp_wrapper"
      onClick={(e) => {
        handleBodyClose(e);
      }}
      ref={targetRef}
    >
      <div className="otp_pop">
        <CgCloseO
          className="otp_close"
          onClick={() => {
            dispatch(otpModalAction({ otpOpen: 0 }));
          }}
        />
        <SlArrowLeft
          className="otp_back"
          onClick={() => {
            dispatch(otpModalAction({ otpOpen: 0 }));
          }}
        />
        <img
          className="otp_image_head"
          src={mobileAuthHeadImg}
          alt="mobile_auth_head"
        />
        <h1 className="otp_headtext">Enter Your Code</h1>
        <div className="otp_instr_wrap">
          <p className="otp_instr">{` Enter the Code Sent To ${phoneNumber}`}</p>
          <p className="otp_resend">RESEND</p>
        </div>
        <div className="otp_input_wrap">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onPaste={handlePaste}
              className="otp_input"
            />
          ))}
        </div>
        <p onClick={handleUpdateContact} className="otp_contact_update">
          Update Contact Info
        </p>
        <button onClick={handleAgreement} className={`otp_button`}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default OTP;

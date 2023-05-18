import React, { useRef, useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { SlArrowLeft } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { otpModalAction } from "../../redux/slices/otpModalSlice";
import { termsModalAction } from "../../redux/slices/termsModalSlice";
import mobileAuthHeadImg from "../../assets/png/mobileAuthHead.png";
import "./terms.scss";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const dispatch = useDispatch();
  const { otpOpen } = useSelector((state) => state.otpModalSlice);
  const { method, isOpen } = useSelector((state) => state.phoneModalSlice);
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const handleBodyClose = (e) => {
    if (e.target === targetRef.current) {
      dispatch(termsModalAction({ termsOpen: 0 }));
    } else {
      return;
    }
  };
  const handleRegister = () => {
    dispatch(termsModalAction({ termsOpen: 0 }));
    navigate("/register");
  };
  return (
    <div
      className="terms_wrapper"
      onClick={(e) => {
        handleBodyClose(e);
      }}
      ref={targetRef}
    >
      <div className="terms_pop">
        <CgCloseO
          className="terms_close"
          onClick={() => {
            dispatch(termsModalAction({ termsOpen: 0 }));
          }}
        />
        <SlArrowLeft
          className="terms_back"
          onClick={() => {
            dispatch(termsModalAction({ termsOpen: 0 }));
          }}
        />
        <img
          className="terms_image_head"
          src={mobileAuthHeadImg}
          alt="mobile_auth_head"
        />
        <h1 className="terms_headtext">Welcome Message/Agreement</h1>

        <div className="terms_items_wrap">
          <p className="terms_intro">
            Welcome to Halal Matchmaking! We are excited to have you join our
            community of like-minded individuals looking for meaningful
            connections. By using our app, you agree to the following terms:
          </p>
          <p className="terms_item1">
            1. Use of real age, pictures, and bio when creating your profile.
          </p>
          <p className="terms_item2">
            2. Respect for the privacy of other users and refraining from
            sharing any personal information until you feel comfortable.
          </p>
          <p className="terms_item3">
            3. Awareness that all messages may be monitored by a Wali if the
            purpose of matching is marriage.
          </p>
          <p className="terms_item4">
            4. Compliance with our safety guidelines, which include staying safe
            and taking things at a comfortable pace.
          </p>
          <p className="terms_end_text">
            By using Halal Matchmaking, you are committing to creating a
            positive and respectful experience for yourself and others. We wish
            you all the best in your search for your perfect match.
          </p>
        </div>
        <div onClick={() => handleRegister()} className="terms_button_wrap">
          <button className={`terms_button`}>I Agree</button>
        </div>
      </div>
    </div>
  );
};

export default Terms;

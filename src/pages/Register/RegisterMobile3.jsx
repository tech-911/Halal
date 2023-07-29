import React, { useRef, useState } from "react";
import "./registerMobile3.scss";
import { authModalAction } from "../../redux/slices/authModalSlice";
import { useNavigate } from "react-router-dom";
import PhotoInput from "../../components/photoInput/PhotoInput";
import { SlArrowLeft } from "react-icons/sl";
import mobileAuthHeadImg from "../../assets/png/mobileAuthHead.png";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "../../redux/slices/userDataSlice";
import { otpModalAction } from "../../redux/slices/otpModalSlice";
import { termsModalAction } from "../../redux/slices/termsModalSlice";
import { phoneModalAction } from "../../redux/slices/phoneModalSlice";
import Preloader from "../../components/preLoader/Preloader";
import { preloadModalAction } from "../../redux/slices/preloadModalSlice";
import { registerDataAction } from "../../redux/slices/registerDataSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrlAuth } from "../../BaseUrls/base";
import axios from "axios";
const RegisterMobile3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(0);
  let [photo, setPhoto] = useState([]);
  const handleBack = () => {
    dispatch(termsModalAction({ termsOpen: 1 }));
    navigate(-1);
  };
  const { preloadOpen } = useSelector((state) => state.preloadModalSlice);
  const { user } = useSelector((state) => state.userDataSlice);
  const {
    full_name,
    dob,
    gender,
    height,
    marital_status,
    location,
    current_location,
    profession,
    email,
    phone_number,
  } = useSelector((state) => {
    return state.registerDataSlice;
  });

  const handleRegister = async () => {
    setDisabled(1);
    if (photo.length < 2) {
      return toast.error(`Select at least 2 images}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    dispatch(preloadModalAction({ preloadOpen: 1 }));
    let formData = new FormData();
    photo.forEach((value, id) => {
      formData.append("image", value);
    });
    formData.append("name", full_name);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("height", height);
    formData.append("marital_status", marital_status);
    formData.append("location", location);
    formData.append("current_location", current_location);
    formData.append("profession", profession);
    formData.append("email", email);
    formData.append("phone_no", phone_number);
    try {
      const res = await axios.post(`${baseUrlAuth}/register`, formData);
      const response = await res.data

      if (user && user?.token) {
        dispatch(preloadModalAction({ preloadOpen: 0 }));
        navigate("/main");
      } else {
        try {
          const userRes = await axios.post(`${baseUrlAuth}/login`, {
            email: response.email,
          });
          dispatch(userDataAction({ user: userRes.data }));
          dispatch(preloadModalAction({ preloadOpen: 0 }));
          navigate("/main");
        } catch (err) {
          console.log(err);
          dispatch(preloadModalAction({ preloadOpen: 0 }));
          toast.error(`Error!. Try again.`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
      setDisabled(0);
    } catch (err) {
      toast.error(`Error: ${err?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(err);
      setDisabled(0);
      dispatch(preloadModalAction({ preloadOpen: 0 }));
    }
  };

  return (
    <div className="regmob3_wrapper">
      <ToastContainer />
      {preloadOpen ? <Preloader /> : ""}
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
          <PhotoInput photo={photo} setPhoto={setPhoto} />
        </div>
        <div className="regmob3_button_wrap_mobile">
          <button
            onClick={() => {
              handleRegister();
            }}
            className={`regmob3_button_mobile ${disabled ? "reg_button_inactive" : ""
              }`}
            disabled={disabled ? 1 : 0}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterMobile3;

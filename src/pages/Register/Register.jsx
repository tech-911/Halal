import React, { useEffect, useRef, useState } from "react";
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
import { userDataAction } from "../../redux/slices/userDataSlice";
import { baseUrlAuth } from "../../BaseUrls/base";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "../../components/preLoader/Preloader";
import { preloadModalAction } from "../../redux/slices/preloadModalSlice";
import { registerDataAction } from "../../redux/slices/registerDataSlice";
import axios from "axios";
const Register = () => {
  const [genderState, setGenderState] = useState("");
  const [disabled, setDisabled] = useState(0);
  const dispatch = useDispatch();
  const { preloadOpen } = useSelector((state) => state.preloadModalSlice);
  const { user } = useSelector((state) => state.userDataSlice);
  const navigate = useNavigate();
  let [photo, setPhoto] = useState([]);
  let [data, setData] = useState({
    name: "",
    dob: "",
    gender: "",
    height: "",
    marital_status: "",
    location: "",
    profession: "",
    email: "",
    phone_number: "",
  });
  // useEffect(() => {
  //   console.log(data);
  // }, [genderState]);
  const handleLogin = () => {
    dispatch(authModalAction({ method: "signin", open: 1 }));
    navigate("/");
  };
  const handleGender = (gender) => {
    if (gender === "male") {
      setGenderState("male");
      setData({ ...data, gender: "male" });
    } else if (gender === "female") {
      setGenderState("female");
      setData({ ...data, gender: "female" });
    }
  };
  const handleBack = () => {
    dispatch(termsModalAction({ termsOpen: 1 }));
    navigate("/");
  };

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  let {
    name,
    dob,
    gender,
    height,
    marital_status,
    location,
    profession,
    email,
    phone_number,
  } = data;
  // console.log(photo.length);
  const handleRegister = async () => {
    if (
      name === "" ||
      dob === "" ||
      gender === "" ||
      height === "" ||
      marital_status === "" ||
      location === "" ||
      profession === "" ||
      email === "" ||
      phone_number === "" ||
      photo.length < 2
    ) {
      toast.error(`Error: Fill all fields`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    setDisabled(1);
    dispatch(preloadModalAction({ preloadOpen: 1 }));
    let formData = new FormData();
    photo.forEach((value, id) => {
      formData.append("image", value);
    });
    formData.append("name", name);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("height", height);
    formData.append("marital_status", marital_status);
    formData.append("location", location);
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
  const handleMobNext = () => {
    if (
      name === "" &&
      dob === "" &&
      gender === "" &&
      height === "" &&
      marital_status === ""
    ) {
      toast.error(`Error: Fill all fields`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    dispatch(
      registerDataAction({
        full_name: data.name,
        dob: data.dob,
        gender: data.gender,
        height: data.height,
        marital_status: data.marital_status,
      })
    );
    navigate("/register2");
  };
  return (
    <div className="reg_wrapper">
      {preloadOpen ? <Preloader /> : ""}
      <ToastContainer />
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
                required
                value={name}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              <FaUser className="reg_name_icon" />
            </div>
            <div className="reg_input_dob_wrap">
              <label className="reg_dob_label" htmlFor="dob">
                Date of Birth
              </label>
              <input
                placeholder="Date of birth"
                type="date"
                id="dob"
                className="reg_dob_input"
                required
                value={dob}
                onChange={(e) => {
                  handleInput(e);
                }}
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
                  className={`reg_male ${genderState === "male" ? "reg_gender_active" : ""
                    }`}
                >
                  Male
                </button>
                <button
                  onClick={() => handleGender("female")}
                  className={`reg_female ${genderState === "female" ? "reg_gender_active" : ""
                    }`}
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
                required
                value={height}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
            <div className="reg_input_marstatus_wrap">
              <label className="reg_marstatus_label" htmlFor="marstatus">
                Marital status
              </label>
              <input
                placeholder="Never married"
                type="text"
                id="marital_status"
                className="reg_marstatus_input"
                required
                value={marital_status}
                onChange={(e) => {
                  handleInput(e);
                }}
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
                required
                value={location}
                onChange={(e) => {
                  handleInput(e);
                }}
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
                required
                value={profession}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
          </div>
          <div className="reg_right">
            <div className="reg_photos_wrap">
              <PhotoInput photo={photo} setPhoto={setPhoto} />
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
                required
                value={email}
                onChange={(e) => {
                  handleInput(e);
                }}
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
                id="phone_number"
                className="reg_phone_input"
                required
                value={phone_number}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              <MdOutlinePhoneAndroid className="reg_phone_icon" />
            </div>
          </div>
        </div>
        <div className="reg_button_wrap">
          <button
            onClick={() => {
              handleRegister();
            }}
            className={`reg_button ${disabled ? "reg_button_inactive" : ""}`}
            disabled={disabled ? 1 : 0}
          >
            Create Account
          </button>
        </div>
        <div className="reg_button_wrap_mobile">
          <button
            onClick={() => handleMobNext()}
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

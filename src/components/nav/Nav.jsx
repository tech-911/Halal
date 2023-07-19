import React from "react";
import "./nav.scss";
import Logo from "../../assets/png/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { authModalAction } from "../../redux/slices/authModalSlice";
import { useNavigate } from "react-router-dom";

const Nav = ({ border, theme }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDataSlice);
  const navigate = useNavigate();
  let photo = [];
  if (user) {
    photo = user?.photo?.filter((value) => {
      return value.length !== "" || value !== "";
    });
  }
  const handleSignIn = () => {
    dispatch(authModalAction({ method: "signin", open: 1 }));
  };
  const handleSignup = () => {
    dispatch(authModalAction({ method: "signup", open: 1 }));
  };
  return (
    <div className={`nav_wrapper ${border ? "nav_border" : ""}`}>
      <div className="nav_left">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src={Logo}
          alt="logo"
        />
        <p
          className={`nav_navLinks ${
            theme === "black" ? "nav_navLinks_black" : ""
          }`}
        >
          <a href="/home">About</a>
        </p>
        <p
          className={`nav_navLinks ${
            theme === "black" ? "nav_navLinks_black" : ""
          }`}
        >
          <a href="/home">Help</a>
        </p>
        <p
          className={`nav_navLinks ${
            theme === "black" ? "nav_navLinks_black" : ""
          }`}
        >
          <a href="/home">Premium</a>
        </p>
        {/* <p
          className={`nav_navLinks ${
            theme === "black" ? "nav_navLinks_black" : ""
          }`}
        >
          <a href="/home">Counseling</a>
        </p> */}
      </div>
      {!user?.token ? (
        <div className="nav_right">
          <button
            onClick={handleSignIn}
            className={`nav_signin ${theme === "black" ? "nav_sigin_red" : ""}`}
          >
            Sign In
          </button>
          <button onClick={handleSignup} className="nav_signup">
            Sign Up
          </button>
        </div>
      ) : (
        <div onClick={() => navigate("/main")} className="nav_profile_route">
          <img src={photo[0]} alt="profile" className="nav_profile_img" />
          <p className="nav_profile_name">{user?.name}</p>
        </div>
      )}
    </div>
  );
};

export default Nav;

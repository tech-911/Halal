import React from "react";
import "./nav.scss";
import Logo from "../../assets/png/logo.png";
import { useDispatch } from "react-redux";
import { authModalAction } from "../../redux/slices/authModalSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(authModalAction({ method: "signin", open: 1 }));
  };
  const handleSignup = () => {
    dispatch(authModalAction({ method: "signup", open: 1 }));
  };
  return (
    <div className="nav_wrapper">
      <div className="nav_left">
        <img className="nav_logo" src={Logo} alt="logo" />
        <p className="nav_navLinks">
          <a href="/home">About</a>
        </p>
        <p className="nav_navLinks">
          <a href="/home">Help</a>
        </p>
        <p className="nav_navLinks">
          <a href="/home">Premium</a>
        </p>
        <p className="nav_navLinks">
          <a href="/home">Counseling</a>
        </p>
      </div>
      <div className="nav_right">
        <button onClick={handleSignIn} className="nav_signin">
          Sign In
        </button>
        <button onClick={handleSignup} className="nav_signup">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;

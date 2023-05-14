import React from "react";
import "./nav.scss";
import Logo from "../../assets/png/logo.png";
import { useNavigate } from "react-router-dom";

const Nav = ({ open, setOpen, type, setType }) => {
  const handleSignIn = () => {
    setType("signin");
    if (open) {
      setOpen(0);
    } else {
      setOpen(1);
    }
  };
  const handleSignup = () => {
    setType("signup");
    if (open) {
      setOpen(0);
    } else {
      setOpen(1);
    }
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

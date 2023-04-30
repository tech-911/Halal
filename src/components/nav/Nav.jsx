import React from "react";
import "./nav.scss";
import Logo from "../../assets/png/logo.png";

const Nav = () => {
  return (
    <div className="nav_wrapper">
      <div className="nav_left">
        <img src={Logo} alt="logo" />
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
        <button className="nav_signin">Sign In</button>
        <button className="nav_signup">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;

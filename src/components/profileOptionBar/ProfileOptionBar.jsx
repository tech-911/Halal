import React from "react";
import "./profileOptionBar.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const ProfileOptionBar = ({ border, icon, text, link, linkable, colored }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => (link && linkable ? navigate(link, { state: 1 }) : "")}
      className={`profBar_wrapper ${border ? "profileBar_border" : ""}`}
    >
      <div className="profBar_left">
        {icon}
        <p className={`profBar_text ${colored ? "profBar_red" : ""}`}>{text}</p>
      </div>
      <IoIosArrowForward className="profBar_right" />
    </div>
  );
};

export default ProfileOptionBar;

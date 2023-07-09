import React from "react";
import "./exploreWidget.scss";
import NigeriaFlag from "../../assets/png/nigeriaflag.png";
import widAvatar from "../../assets/png/avatarwidgetimg.png";
import { MdLocationOn } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";

const ExploreWidget = ({ img, name, age, location, work }) => {
  return (
    <div className="expwid_wrapper">
      <img className="expwid_backimg" src={img || widAvatar} alt="profile" />
      <div className="expwid_content_wrap">
        <h1 className="expwid_name">{`${name || "unknown"} ${age || "##"}`}</h1>
        <div className="expwid_location_wrap">
          <MdLocationOn className="expwid_location_icon" />
          <img src={NigeriaFlag} alt="nigflag" className="expwid_flag" />
          <p className="expwid_location">{location || "unknown"}</p>
        </div>
        <div className="expwid_work_wrap">
          <RiShoppingBagFill className="expwid_work_icon" />
          <p className="expwid_work_text">{work || "unknown"}</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreWidget;

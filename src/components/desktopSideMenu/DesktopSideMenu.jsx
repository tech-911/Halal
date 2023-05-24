import React, { useEffect, useState } from "react";
import "./desktopSideMenu.scss";
import { BsFillChatRightFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { MdTravelExplore } from "react-icons/md";
import Matches from "./matches/Matches";
import { useSelector } from "react-redux";
import profileDefault from "../../assets/png/profileDefault.png";

const DesktopSideMenu = () => {
  const [view, setView] = useState("home");
  const { user } = useSelector((state) => state.userDataSlice);
  const [photo, setPhoto] = useState(profileDefault);

  useEffect(() => {
    let profilePhoto = user.photo.filter((value) => {
      return (
        value !== "" || value !== "" || value !== null || value !== undefined
      );
    });
    setPhoto(profilePhoto[0] || profilePhoto[1]);
  }, []);
  return (
    <div className="deskside_wrapper">
      <div className="deskside_header">
        <div className="deskside_profile_wrap">
          <div className="deskside_profile">
            <img className="deskside_profile_image" src={photo} alt="profile" />
          </div>
          <p className="deskside_name">{user?.name || "unknown"}</p>
        </div>
        <div className="deskside_explore">
          <MdTravelExplore className="deskside_explore_icon" />
        </div>
        <div className="deskside_consel">
          <TiUser className="deskside_consel_icon" />
        </div>
        <div className="deskside_chat">
          <BsFillChatRightFill className="deskside_chat_icon" />
        </div>
      </div>
      <div className="deskside_outlet">{view === "home" && <Matches />}</div>
    </div>
  );
};

export default DesktopSideMenu;

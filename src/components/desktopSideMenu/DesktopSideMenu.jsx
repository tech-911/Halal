import React, { useEffect, useState } from "react";
import "./desktopSideMenu.scss";
import { BsFillChatRightFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { MdTravelExplore } from "react-icons/md";
import Matches from "./matches/Matches";
import { useSelector } from "react-redux";
import profileDefault from "../../assets/png/profileDefault.png";
import { useLocation, useNavigate } from "react-router-dom";
import ExploreSide from "../exploreSide/ExploreSide";
import EditSide from "../../components/editSide/EditSide";
const DesktopSideMenu = () => {
  const { user } = useSelector((state) => state.userDataSlice);
  const [photo, setPhoto] = useState(profileDefault);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname === "/main/explore");

  useEffect(() => {
    let profilePhoto = user.photo.filter((value) => {
      return (
        value !== "" || value !== "" || value !== null || value !== undefined
      );
    });
    setPhoto(profilePhoto[0] || profilePhoto[1]);
  }, []);



  const handleExplore = () => {
    navigate("/main/explore/0");
  };
  return (
    <div className="deskside_wrapper">
      <div className="deskside_header">
        <div className="deskside_profile_wrap">
          <div className="deskside_profile">
            <img className="deskside_profile_image" src={photo} alt="profile" />
          </div>
          <p className="deskside_name">{user?.name || "unknown"}</p>
        </div>
        <div onClick={handleExplore} className="deskside_explore">
          <MdTravelExplore className="deskside_explore_icon" />
        </div>
        <div className="deskside_consel">
          <TiUser className="deskside_consel_icon" />
        </div>
        <div className="deskside_chat">
          <BsFillChatRightFill className="deskside_chat_icon" />
        </div>
      </div>
      <div
        className={`deskside_outlet ${
          location.pathname === "/main/edit" ? "deskside_padding_remove" : ""
        }`}
      >
        {(location.pathname === "/main" ||
          location.pathname === "/main/" ||
          location.pathname === "/main/home") && <Matches />}
        {location.pathname.includes(`/main/explore`) && <ExploreSide />}
        {location.pathname === `/main/edit` && <EditSide />}
      </div>
    </div>
  );
};

export default DesktopSideMenu;

import React from "react";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import ProfileHome from "../../assets/png/ProfileHome.png";
import ProfilePictureInput from "../../components/profilePictureInput/ProfilePictureInput";
import ProfileOptionBar from "../../components/profileOptionBar/ProfileOptionBar";
import { profileData } from "./profileData";
import { HiOutlineLogout } from "react-icons/hi";
const Profile = () => {

  return (
    <div className="prof_wrapper">
      <div className="prof_head">
        <img src={ProfileHome} alt="home" className="prof_home" />
        <h1 className="prof_head_text">Profile</h1>
      </div>
      <div className="prof_pic_space">
        <ProfilePictureInput />
      </div>
      <div className="prof_options">
        {profileData.map((value) => {
          return (
            <ProfileOptionBar
              key={value.id}
              text={value.text}
              icon={value.icon}
              border={value.border}
              link={value.link}
              linkable={value.linkable || 0}
            />
          );
        })}
        <ProfileOptionBar
          text="Logout"
          icon=<HiOutlineLogout className="profBar_icon_red" />
          border
          linkable={0}
          colored
        />
      </div>
    </div>
  );
};

export default Profile;

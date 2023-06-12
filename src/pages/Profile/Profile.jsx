import React from "react";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import ProfileHome from "../../assets/png/ProfileHome.png";
import ProfilePictureInput from "../../components/profilePictureInput/ProfilePictureInput";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="prof_wrapper">
      {/* <button onClick={() => navigate("/main/edit", { state: 1 })}>
        clickme
      </button> */}
      <div className="prof_head">
        <img src={ProfileHome} alt="home" className="prof_home" />
        <h1 className="prof_head_text">Profile</h1>
      </div>
      <ProfilePictureInput />
    </div>
  );
};

export default Profile;

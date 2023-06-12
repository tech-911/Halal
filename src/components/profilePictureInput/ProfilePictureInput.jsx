import React from "react";
import "./profilePictureInput.scss";
import { useSelector } from "react-redux";
const ProfilePictureInput = () => {
  const { user } = useSelector((state) => state.userDataSlice);
  const photo = user.photo[0];
  return (
    <div className="profpic_wrapper">
      <div className="profpic_wrap">
        <div className="profpic_circle">
          <img src={photo} alt="profilephoto" className="profpic_photo" />
        </div>
        <div className="profpic_edit"></div>
      </div>

      <h1 className="profpic_profile_name">{`${user.name}, ${"25"}`}</h1>
    </div>
  );
};

export default ProfilePictureInput;

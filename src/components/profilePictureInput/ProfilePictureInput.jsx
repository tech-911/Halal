import React from "react";
import "./profilePictureInput.scss";
import { useSelector } from "react-redux";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const ProfilePictureInput = () => {
  const { user } = useSelector((state) => state.userDataSlice);
  const photo = user.photo.filter((value) => {
    return value.length !== "" || value !== "";
  });
  const navigate = useNavigate();

  return (
    <div className="profpic_wrapper">
      <div className="profpic_wrap">
        <div className="profpic_circle">
          <img src={photo[0]} alt="profilephoto" className="profpic_photo" />
        </div>
        <div
          onClick={() => navigate("/main/edit", { state: 1 })}
          className="profpic_edit"
        >
          <RiPencilFill className="profpic_edit_icon" />
        </div>
      </div>

      <h1 className="profpic_profile_name">{`${user.name}, ${"25"}`}</h1>
    </div>
  );
};

export default ProfilePictureInput;

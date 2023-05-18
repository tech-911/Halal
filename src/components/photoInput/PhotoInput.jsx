import React from "react";
import "./photoInput.scss";
import { AiFillCamera } from "react-icons/ai";
const PhotoInput = () => {
  return (
    <div className="photo_wrapper">
      <p className="photo_header">Add photos</p>
      <div className="photo_box_wrap">
        <div className="photo_box1_wrap">
          <label htmlFor="img1" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
          </label>
          <input type="file" id="img1" className="photo_input1" />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img1" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
          </label>
          <input type="file" id="img1" className="photo_input1" />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img1" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
          </label>
          <input type="file" id="img1" className="photo_input1" />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img1" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
          </label>
          <input type="file" id="img1" className="photo_input1" />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img1" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
          </label>
          <input type="file" id="img1" className="photo_input1" />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img1" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
          </label>
          <input type="file" id="img1" className="photo_input1" />
        </div>
      </div>
      <p className="photo_text">Add at least 2 pictures to continue</p>
    </div>
  );
};

export default PhotoInput;

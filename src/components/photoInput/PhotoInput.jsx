import React, { useEffect, useState } from "react";
import "./photoInput.scss";
import { AiFillCamera } from "react-icons/ai";
const PhotoInput = ({ photo, setPhoto }) => {
  const [image, setImage] = useState([]);
  const handleFileSelect = (event, index) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    const updatedImages = [...photo];
    const updatedPhotos = [...image];
    updatedImages[index] = file;
    updatedPhotos[index] = imageUrl;
    setPhoto(updatedImages);
    setImage(updatedPhotos);
  };
  useEffect(() => {
    return () => {
      image.map((value) => {
        if (value) {
          return URL.revokeObjectURL(value);
        }
      });
    };
  }, [image]);

  return (
    <div className="photo_wrapper">
      <p className="photo_header">Add photos</p>
      <div className="photo_box_wrap">
        <div className="photo_box1_wrap">
          <label htmlFor="img1" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
            <img className="photo_render" src={image[0]} alt="" />
          </label>
          <input
            accept="image/*"
            onChange={(event) => handleFileSelect(event, 0)}
            type="file"
            id="img1"
            className="photo_input1"
          />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img2" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
            <img className="photo_render" src={image[1]} alt="" />
          </label>
          <input
            accept="image/*"
            onChange={(event) => handleFileSelect(event, 1)}
            type="file"
            id="img2"
            className="photo_input1"
          />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img3" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
            <img className="photo_render" src={image[2]} alt="" />
          </label>
          <input
            accept="image/*"
            onChange={(event) => handleFileSelect(event, 2)}
            type="file"
            id="img3"
            className="photo_input1"
          />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img4" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
            <img className="photo_render" src={image[3]} alt="" />
          </label>
          <input
            accept="image/*"
            onChange={(event) => handleFileSelect(event, 3)}
            type="file"
            id="img4"
            className="photo_input1"
          />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img5" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
            <img className="photo_render" src={image[4]} alt="" />
          </label>
          <input
            accept="image/*"
            onChange={(event) => handleFileSelect(event, 4)}
            type="file"
            id="img5"
            className="photo_input1"
          />
        </div>
        <div className="photo_box1_wrap">
          <label htmlFor="img6" className="photo_box1">
            <AiFillCamera className="photo_icon1" />
            <img className="photo_render" src={image[5]} alt="" />
          </label>
          <input
            accept="image/*"
            onChange={(event) => handleFileSelect(event, 5)}
            type="file"
            id="img6"
            className="photo_input1"
          />
        </div>
      </div>
      <p className="photo_text">Add at least 2 pictures to continue</p>
    </div>
  );
};

export default PhotoInput;

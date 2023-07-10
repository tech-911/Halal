import React, { useEffect, useState } from "react";
import Edit from "./Edit";
import Preview from "./Preview";
import { useLocation, useNavigate } from "react-router-dom";

const EditPreview = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isEdit, setisEdit] = useState(true);
  const [ismore, setismore] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 799 && !state) {
      navigate("/main/profile");
    }
  }, [state]);
  return (
    <div
      className={`w-full h-full  bg-white md:w-[400px]  
      ${isEdit && !ismore ? "" : ""}`}
    >
      <div className="grid grid-cols-2 w-full">
        <div
          onClick={() => {
            setisEdit(true);
          }}
          className={` w-full flex cursor-pointer justify-center items-center py-3 font-medium border-b-2 ${isEdit
            ? "border-[#FF0020] text-[#FF0020]"
            : "border-[#B4B4B4] text-gray-300"
            }`}
        >
          Edit
        </div>
        <div
          onClick={() => {
            setisEdit(false);
          }}
          className={` w-full flex cursor-pointer justify-center items-center py-3 font-medium border-b-2 ${isEdit
            ? "border-[#B4B4B4] text-gray-300"
            : " border-[#FF0020] text-[#FF0020]"
            }`}
        >
          Preview
        </div>
      </div>
      <Edit isEdit={isEdit} />
      <Preview isEdit={isEdit} ismore={ismore} setismore={setismore} />
    </div>
  );
};

export default EditPreview;

import React from "react";
import "./mobileMenue.scss";
import { AiFillHome } from "react-icons/ai";
import { MdTravelExplore } from "react-icons/md";
import { BsFillChatRightFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { HiUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const MobileMenue = () => {
  const navigate = useNavigate();
  return (
    <div className="mobmen_wrapper">
      <AiFillHome
        onClick={() => navigate("/main/home")}
        className={`mobmen_item1`}
      />
      <BsFillChatRightFill className={`mobmen_item2`} />
      <MdTravelExplore className={`mobmen_item3`} />
      <TiUser className={`mobmen_item4`} />
      <div className={`mobmen_item5`}>
        <HiUser className={`mobmen_item5_sub`} />
      </div>
    </div>
  );
};

export default MobileMenue;

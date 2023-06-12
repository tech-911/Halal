import React from "react";
import profile from "../../assets/png/profileDefault.png";
import {
  MdTravelExplore,
  MdNavigateNext,
  MdSettingsApplications,
  MdFavorite,
  MdBlock,
} from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { BsFillChatRightFill } from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { IoNotifications } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const EditDesktopNav = () => {
  return (
    <div className="w-full font bg-white shadow-lg h-full">
      {/* <div className="flex bg-[#FF0020] sm:p-2 lg:p-2 w-full justify-around">
        <div className="flex justify-start space-x-2 items-center text-sm lg:text-[15px]">
          <div className="sm:w-[30px] rounded-full sm:h-[30px] lg:w-[35px] lg:h-[35px]">
            <img
              src={profile}
              alt=""
              className="rounded-full w-full h-full object-fill"
            />
          </div>
          <div className="truncate  w-[100px] text-white">
            <span className="text-ellipsis whitespace-nowrap overflow-hidden w-[40px] lg:w-[80px]">
              Mubarak Abolade
            </span>
          </div>
        </div>

        <div className="p-2 bg-[#1E1E1E] rounded-full">
          <MdTravelExplore className=" text-[16px] hover:text-[#FF0020] text-white lg:text-[20px]" />
        </div>
        <div className="p-2 bg-[#1E1E1E] rounded-full">
          <TiUser className=" text-[16px] text-white hover:text-[#FF0020] lg:text-[20px]" />
        </div>
        <div className="p-2 bg-[#1E1E1E] rounded-full">
          <BsFillChatRightFill className=" text-[16px] hover:text-[#FF0020] text-white lg:text-[20px]" />
        </div>
      </div> */}
      <div className="font w-full pt-3 pb-4 flex items-center justify-center font-semibold text-lg text-[#1E1E1E]">
        Profile
      </div>

      <div className="w-full p-3 lg:p-4 border-b border-[#D2D2D2] flex justify-between items-center">
        <div className="group space-x-2 flex items-center justify-start">
          <ImUser className="group-hover:text-[#FF0020] text-[20px]  text-zinc-700 font-medium" />
          <span className="text-sm font-medium group-hover:text-[#FF0020] ">
            Profile
          </span>
        </div>
        <MdNavigateNext className="text-[20px]  text-zinc-700 font-medium" />
      </div>
      <div className="w-full p-3 lg:p-4 border-b border-[#D2D2D2] flex justify-between items-center">
        <div className="group space-x-2 flex items-center justify-start">
          <MdSettingsApplications className="group-hover:text-[#FF0020] text-[20px]  text-zinc-700 font-medium" />
          <span className="text-sm font-medium group-hover:text-[#FF0020] ">
            Settings
          </span>
        </div>
        <MdNavigateNext className="text-[20px]  text-zinc-700 font-medium" />
      </div>

      <div className="w-full p-3 lg:p-4 border-b border-[#D2D2D2] flex justify-between items-center">
        <div className="group space-x-2 flex items-center justify-start">
          <IoNotifications className="group-hover:text-[#FF0020] text-[20px]  text-zinc-700 font-medium" />
          <span className="text-sm font-medium group-hover:text-[#FF0020] ">
            Notification
          </span>
        </div>
        <MdNavigateNext className="text-[20px]  text-zinc-700 font-medium" />
      </div>

      <div className="w-full p-3 lg:p-4 border-b border-[#D2D2D2] flex justify-between items-center">
        <div className="group space-x-2 flex items-center justify-start">
          <MdFavorite className="group-hover:text-[#FF0020] text-[20px]  text-zinc-700 font-medium" />
          <span className="text-sm font-medium group-hover:text-[#FF0020] ">
            Favourites
          </span>
        </div>
        <MdNavigateNext className="text-[20px]  text-zinc-700 font-medium" />
      </div>

      <div className="w-full p-3 lg:p-4 border-b border-[#D2D2D2] flex justify-between items-center">
        <div className="group space-x-2 flex items-center justify-start">
          <MdBlock className="group-hover:text-[#FF0020] text-[20px]  text-zinc-700 font-medium" />
          <span className="text-sm font-medium group-hover:text-[#FF0020] ">
            Blocked
          </span>
        </div>
        <MdNavigateNext className="text-[20px]  text-zinc-700 font-medium" />
      </div>

      <div className="w-full p-3 lg:p-4 border-b border-[#D2D2D2] flex justify-between items-center">
        <div className="group space-x-2 flex items-center justify-start">
          <FiLogOut className="group-hover:text-[#FF0020] text-[20px]  text-zinc-700 font-medium" />
          <span className="text-sm font-medium group-hover:text-[#FF0020] ">
            Log out
          </span>
        </div>
        <MdNavigateNext className="text-[20px]  text-zinc-700 font-medium" />
      </div>
    </div>
  );
};

export default EditDesktopNav;

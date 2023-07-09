import React, { useContext } from "react";
import "./user.scss";
import MobileMenue from "../../../components/mobileMenue/MobileMenue";
import DesktopSideMenu from "../../../components/desktopSideMenu/DesktopSideMenu";
import { Outlet } from "react-router-dom";
import { StyleContext } from "../../../App";
const User = () => {
  const { isHidden } = useContext(StyleContext);

  return (
    <div
      className={`fixed inset-0 w-full h-full ${
        isHidden ? "overflow-hidden" : "overflow-x-hidden overflow-y-auto"
      } `}
    >
      <div className="fixed top-0 left-0 max-[800px]:hidden w-[330px] h-full">
        <DesktopSideMenu />
      </div>
      <div
        className={`bg-[#f0f2f4] min-[800px]:float-right right  h-fit flex fle-col justify-center items-center px-0 pt-0 pb-0 min-[800px]:px-[5rem] min-[800px]:pt-[2rem] min-[800px]:pb-[5rem] overflow-hidden ${
          isHidden ? "overflow-hidden" : "overflow-x-hidden overflow-y-auto"
        }`}
      >
        <Outlet />
      </div>
      <div className="fixed inset-x-0 bottom-0 min-[800px]:hidden">
        <MobileMenue />
      </div>
    </div>
  );
};

export default User;

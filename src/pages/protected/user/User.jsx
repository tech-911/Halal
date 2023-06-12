import React from "react";
import "./user.scss";
import MobileMenue from "../../../components/mobileMenue/MobileMenue";
import DesktopSideMenu from "../../../components/desktopSideMenu/DesktopSideMenu";
import { Outlet, useLocation } from "react-router-dom";

const User = () => {
  return (
    <div className={`user_wrapper`}>
      <div className="user_side">
        <DesktopSideMenu />
      </div>
      <div className="user_outlet">
        <Outlet />
      </div>
      <div className="user_mobile_menue">
        <MobileMenue />
      </div>
    </div>
  );
};

export default User;

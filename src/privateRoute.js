import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private_route = ({ children, link }) => {
  const { user } = useSelector((state) => state.userDataSlice);
  if (!user || user?.status === "ongoing" || !user?.token) {
    // user is not authenticated
    return <Navigate to={link} />;
  }
  return children;
};

export default Private_route;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private_route = ({ children, link }) => {
  const { user } = useSelector((state) => state.userDataSlice);
  if (!user || user?.status === "ongoing" || !user?.token) {
    // user is not authenticated
    return children;
  }
  return children;
};
// return <Navigate to={link} />;
export default Private_route;

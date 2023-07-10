import React, { useState, createContext } from "react";
import "./App.css";
// import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import MobileSignup from "./pages/mobileAuth/MobileSignup";
import MobileSignin from "./pages/mobileAuth/MobileSignin";
import Register from "./pages/Register/Register";
import RegisterMobile2 from "./pages/Register/RegisterMobile2";
import RegisterMobile3 from "./pages/Register/RegisterMobile3";
import Terms from "./pages/Terms_and_Services/Terms";
import { useSelector } from "react-redux";
import User from "./pages/protected/user/User";
import UserHome from "./pages/protected/home/UserHome";
// import { Navigate } from "react-router-dom";
import Private_route from "./privateRoute";
import Explore from "./pages/Explore/Explore";
import EditPreview from "./components/editandpreview/EditPreview";
import ExploreDetailMobile from "./pages/Explore/ExploreDetailMobile";
import Profile from "./pages/Profile/Profile";
import Message from "./pages/Message/Message";
export const StyleContext = createContext()
const App = () => {
  const { user } = useSelector((state) => state.userDataSlice);
  const [isHidden, setHidden] = useState(true)
  // console.log(user);
  return (
    <div className="App">


      <StyleContext.Provider value={{ isHidden, setHidden }}>
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<MobileSignup />} />
          <Route path="/signin" element={<MobileSignin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register2" element={<RegisterMobile2 />} />
          <Route path="/register3" element={<RegisterMobile3 />} />
          <Route path="/terms" element={<Terms />} />
        //--------------------Protected Routes-----------------------------↓
          <Route
            path="/main"
            element={
              <Private_route link={"/"}>
                <User />
              </Private_route>
            }
          >
            <Route
              index
              element={
                <Private_route link={"/"}>
                  <UserHome />
                </Private_route>
              }
            />
            <Route
              path="/main/home"
              element={
                <Private_route link={"/"}>
                  <UserHome />
                </Private_route>
              }
            />
            <Route
              path="/main/profile"
              element={
                <Private_route link={"/"}>
                  <Profile />
                </Private_route>
              }
            />
            <Route
              path="/main/edit"
              element={
                <Private_route link={"/"}>
                  <EditPreview />
                </Private_route>
              }
            />
            <Route
              path="/main/message"
              element={
                <Private_route link={"/"}>
                  <Message />
                </Private_route>
              }
            />
            <Route
              path="/main/explore/:id"
              element={
                <Private_route link={"/"}>
                  <Explore />
                </Private_route>
              }
            />
            <Route
              path="/main/exploremob/:mobid"
              element={
                <Private_route link={"/"}>
                  <ExploreDetailMobile />
                </Private_route>
              }
            />
          </Route>
        //--------------------Protected Routes-----------------------------↑
        </Routes>
      </StyleContext.Provider>
    </div>
  );
};

export default App;

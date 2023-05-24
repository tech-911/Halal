import "./App.scss";
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

const App = () => {
  const { user } = useSelector((state) => state.userDataSlice);
  console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<MobileSignup />} />
        <Route path="/signin" element={<MobileSignin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<RegisterMobile2 />} />
        <Route path="/register3" element={<RegisterMobile3 />} />
        <Route path="/terms" element={<Terms />} />
        //--------------------Protected Routes-----------------------------
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
        </Route>
        //--------------------Protected Routes-----------------------------
      </Routes>
    </div>
  );
};

export default App;

import "./App.scss";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import MobileSignup from "./pages/mobileAuth/MobileSignup";
import MobileSignin from "./pages/mobileAuth/MobileSignin";
import Register from "./pages/Register/Register";
import RegisterMobile2 from "./pages/Register/RegisterMobile2";
import RegisterMobile3 from "./pages/Register/RegisterMobile3";

const App = () => {
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
      </Routes>
    </div>
  );
};

export default App;

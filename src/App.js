import "./App.scss";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import MobileSignup from "./pages/mobileAuth/MobileSignup";
import MobileSignin from "./pages/mobileAuth/MobileSignin";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<MobileSignup />} />
        <Route path="/signin" element={<MobileSignin />} />
      </Routes>
    </div>
  );
};

export default App;

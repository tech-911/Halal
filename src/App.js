import "./App.scss";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import MobileAuth from "./pages/mobileAuth/MobileAuth";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/auth" element={<MobileAuth />} />
      </Routes>
    </div>
  );
};

export default App;

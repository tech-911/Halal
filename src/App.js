import "./App.scss";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;

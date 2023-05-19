import "./facebookButton.scss";
import FacebookLogin from "react-facebook-login";
import { FaFacebook } from "react-icons/fa";
import { baseUrlAuth } from "../../BaseUrls/base";
import axios from "axios";
import { useDispatch } from "react-redux";
import { preloadModalAction } from "../../redux/slices/preloadModalSlice";
import { authDataAction } from "../../redux/slices/authDataSlice";
import { useNavigate } from "react-router-dom";
import { authModalAction } from "../../redux/slices/authModalSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FacebookButton = ({ option, border }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responseFacebook = async (response) => {
    dispatch(preloadModalAction({ preloadOpen: 1 }));
    try {
      const res = await axios.post(
        `${baseUrlAuth}/facebooksignup`,
        {},
        { headers: { Authorization: "Bearer " + response?.accessToken } }
      );
      dispatch(authDataAction({ authData: res.data }));
      dispatch(preloadModalAction({ preloadOpen: 0 }));
      dispatch(authModalAction({ method: "signup", open: 0 }));
      if (res?.data?.status === "ongoing") {
        navigate("/register");
      } else {
        console.log("done registering");
      }
    } catch (err) {
      console.log(err);
      dispatch(preloadModalAction({ preloadOpen: 0 }));
      toast.error(`Error: ${err}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="facebook_wrapper">
      <ToastContainer />
      {option === "signup" && (
        <FacebookLogin
          // ref={facebookRef}
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          fields="name,email,picture"
          scope="public_profile,email"
          callback={responseFacebook}
          cssClass={`facebookbutton ${border ? "facebook_border" : ""}`}
          icon=<FaFacebook className="facebook_icon" />
          textButton="Signup with Facebook"
        />
      )}
      {option === "signin" && (
        <button className={`facebookbutton ${border ? "facebook_border" : ""}`}>
          <FaFacebook className="facebook_icon" />
          Signin with Facebook
        </button>
      )}
    </div>
  );
};

export default FacebookButton;

import { useEffect, useState } from "react";
import "./googleButton.scss";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { baseUrlAuth } from "../../BaseUrls/base";
import { preloadModalAction } from "../../redux/slices/preloadModalSlice";
import { authDataAction } from "../../redux/slices/authDataSlice";
import { useNavigate } from "react-router-dom";
import { authModalAction } from "../../redux/slices/authModalSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoogleButton = ({ option }) => {
  const [googleSize, setGoogleSize] = useState(() => {
    return window.innerWidth > 438 ? "400" : "300";
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const googlesizesetter = () => {
      if (window.innerWidth < 438 && window.innerWidth >= 350) {
        setGoogleSize("300");
      } else if (window.innerWidth < 350) {
        setGoogleSize("200");
      } else {
        setGoogleSize("400");
      }
    };

    window.addEventListener("resize", googlesizesetter);
    return () => window.removeEventListener("resize", googlesizesetter);
  }, []);
  return (
    <div className="google_wrapper">
      <ToastContainer />
      {option === "signup" && (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_APP_ID}>
          <GoogleLogin
            text={"signup_with"}
            width={googleSize}
            onSuccess={(credentialResponse) => {
              dispatch(preloadModalAction({ preloadOpen: 1 }));
              axios
                .post(`${baseUrlAuth}/googlesignup`, {
                  token: credentialResponse?.credential,
                })
                .then((res) => {
                  dispatch(preloadModalAction({ preloadOpen: 0 }));
                  dispatch(authDataAction({ authData: res.data }));
                  dispatch(authModalAction({ method: "signup", open: 0 }));
                  if (res?.data?.status === "ongoing") {
                    navigate("/register");
                  } else {
                    console.log("done registering");
                  }
                })
                .catch((err) => {
                  console.log(err);
                  dispatch(preloadModalAction({ preloadOpen: 0 }));
                  toast.error(`Error: ${err}`, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                });
            }}
            theme="filled_blue"
            shape="pill"
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      )}
      {option === "signin" && (
        <button className="google_button">
          <div className="google_icon_wrap">
            <FcGoogle className="google_icon" />
          </div>
          Login with Google
        </button>
      )}
    </div>
  );
};

export default GoogleButton;

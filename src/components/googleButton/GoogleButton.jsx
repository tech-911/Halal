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
import jwt_decode from "jwt-decode";
import { userDataAction } from "../../redux/slices/userDataSlice";

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
                .then(async (res) => {
                  dispatch(authDataAction({ authData: res.data }));

                  if (res?.data?.status === "ongoing") {
                    dispatch(preloadModalAction({ preloadOpen: 0 }));
                    dispatch(authModalAction({ method: "signup", open: 0 }));
                    navigate("/register");
                  } else {
                    try {
                      const loginUser = await axios.post(
                        `${baseUrlAuth}/login`,
                        {
                          email: res?.data?.email,
                        }
                      );
                      dispatch(userDataAction({ user: loginUser.data }));
                      dispatch(preloadModalAction({ preloadOpen: 0 }));
                      dispatch(authModalAction({ method: "signup", open: 0 }));
                      navigate("/main");
                    } catch (err) {
                      console.log(err);
                      dispatch(preloadModalAction({ preloadOpen: 0 }));
                      toast.error(`Login Error!. Try again.`, {
                        position: toast.POSITION.TOP_RIGHT,
                      });
                    }
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
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_APP_ID}>
          <GoogleLogin
            text={"signin_with"}
            width={googleSize}
            onSuccess={async (credentialResponse) => {
              dispatch(preloadModalAction({ preloadOpen: 1 }));
              const decoded = jwt_decode(credentialResponse.credential);
              try {
                const res = await axios.post(`${baseUrlAuth}/login`, {
                  email: decoded.email,
                });
                dispatch(userDataAction({ user: res.data }));
                dispatch(preloadModalAction({ preloadOpen: 0 }));
                dispatch(authModalAction({ method: "signup", open: 0 }));
                if (res?.data?.status === "ongoing") {
                  navigate("/register");
                } else {
                  navigate("/main");
                }
                console.log(res);
              } catch (err) {
                console.log(err);
                dispatch(preloadModalAction({ preloadOpen: 0 }));
                toast.error(`Login Error!. Try again.`, {
                  position: toast.POSITION.TOP_RIGHT,
                });
              }
            }}
            theme="filled_blue"
            shape="pill"
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      )}
    </div>
  );
};

export default GoogleButton;

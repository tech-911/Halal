import { useEffect, useState } from "react";
import "./googleButton.scss";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GoogleButton = ({option}) => {
  const [googleSize, setGoogleSize] = useState(() => {
    return window.innerWidth > 438 ? "400" : "300";
  });
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
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_APP_ID}>
        <GoogleLogin
          text={"signup_with"}
          width={googleSize}
          onSuccess={(credentialResponse) => {
            console.log("credentialResponse: ", credentialResponse);
          }}
          theme="filled_blue"
          shape="pill"
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleButton;

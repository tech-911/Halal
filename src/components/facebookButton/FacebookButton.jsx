import "./facebookButton.scss";
import FacebookLogin from "react-facebook-login";
import { FaFacebook } from "react-icons/fa";

const FacebookButton = ({ option }) => {
  const responseFacebook = (response) => {
    console.log("FacebookUser: ", response);
  };

  return (
    <div className="facebook_wrapper">
      {option === "signup" && (
        <FacebookLogin
          // ref={facebookRef}
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          fields="name,email,picture"
          scope="public_profile,email"
          callback={responseFacebook}
          cssClass="facebookbutton"
          icon=<FaFacebook className="facebook_icon" />
          textButton="Signup with Facebook"
        />
      )}
      {option === "signin" && (
        <button className="facebookbutton">
          <FaFacebook className="facebook_icon" />
          Signin with Facebook
        </button>
      )}
    </div>
  );
};

export default FacebookButton;

import "./App.scss";
// import { useSelector } from "react-redux";
import FacebookLogin from "react-facebook-login";
import jwt_decode from "jwt-decode";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  // const value = useSelector((state) => state);
  // console.log(value);
  const responseFacebook = (response) => {
    console.log("FacebookUser: ", response);
  };

  return (
    <div className="App">
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-custom-clas"
      />
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_APP_ID}>
      <div className="tunde">
        <GoogleLogin
          className={"checking"}
          onSuccess={(credentialResponse) => {
            const details = jwt_decode(credentialResponse.credential);
            console.log("details: ", details);
            console.log("credentialResponse: ", credentialResponse);
          }}
          theme="filled_black"
          shape="pill"
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
        
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;

import "./googleButton.scss";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_APP_ID}>
        <div className="tunde">
          <GoogleLogin
            className={"checking"}
            onSuccess={(credentialResponse) => {
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

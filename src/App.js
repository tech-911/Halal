import "./App.scss";
import { useSelector } from "react-redux";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

function App() {
  const value = useSelector((state) => state);
  console.log(value);
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <div className="facebookstyle">
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-custom-clas"
        />
      </div>
    </div>
  );
}

export default App;

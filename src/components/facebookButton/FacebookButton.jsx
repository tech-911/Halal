import "./facebookButton.scss";
import FacebookLogin from "react-facebook-login";

const App = () => {
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
    </div>
  );
};

export default App;

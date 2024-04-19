import React from "react";
import { useState } from "react";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const LoginPage = (props) => {
  const [isSignedUp, setIsSignedUp] = useState(true);
  return (
    <div>
      {isSignedUp ? (
        <Login
          setLogin={props.setLogin}
          goToSignup={() => setIsSignedUp(false)}
        />
      ) : (
        <Signup
          setSignup={props.setLogin}
          goToLogin={() => setIsSignedUp(true)}
        />
      )}
    </div>
  );
};

export default LoginPage;

import React from "react";

const Login = (props) => {
  return (
    <form onSubmit={props.setLogin}>
      <div className="input-div">
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" />
      </div>
      <div className="input-div">
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" />
      </div>
      <button>Login</button>
      <p>
        Don't have an account? <a onClick={props.goToSignup}>Signup</a>
      </p>
    </form>
  );
};

export default Login;

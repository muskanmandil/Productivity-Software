import React from "react";

const Signup = (props) => {
  return (
    <form onSubmit={props.setSignup}>
      <div className="input-div">
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" />
      </div>
      <div className="input-div">
        <label htmlFor="password">Set Password</label>
        <input type="password" name="" id="password" />
      </div>
      <div className="input-div">
        <label htmlFor="password">Confirm Password</label>
        <input type="password" name="" id="password" />
      </div>
      <button>Signup</button>
      <p>
        Already have an account? <a onClick={props.goToLogin}>Login</a>
      </p>
    </form>
  );
};

export default Signup;

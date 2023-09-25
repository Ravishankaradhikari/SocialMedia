import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Ravi Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
};

function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <b><span style={{ fontSize: "11px" }}>
                Don't have an account Sign up
              </span></b>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>SignUp</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="conformpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <b>
            <span style={{ fontSize: "11px" }}>
              Already have an account. Login!
            </span>
          </b>
        </div>
        <button className="button infoButton" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Auth;

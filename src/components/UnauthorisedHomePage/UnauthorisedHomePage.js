import React from "react";
import Homepage from "../../assets/Homepage.png";
import "./UnauthorisedHomePage.css";

export default function UnauthorisedHomePage({ history }) {
  return (
    <div className="Unauthorised-home-page">
      <div className="Unauthorised-home-page-image">
        <img src={Homepage} alt="Homepage" />
      </div>
      <div className="Unauthorised-home-page-info">
        <div>
        <h1>BLACK HAIR INDEX</h1>
         <p>Online Community For All Things Black Hair</p>
        </div>
        <div>
          <button className="unauthorised-login-button"
            onClick={() => {
              history.push("/login");
            }}
          >
            Log In
          </button>
          <button className="unauthorised-signup-button"
            onClick={() => {
              history.push("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

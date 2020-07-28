import React from "react";
import Homepage from "../../assets/Homepage.png";
import "./HomePage.css";

export default function UnauthorisedHomePage({ history }) {
  return (
    <div className="home-page">
      <div className="home-page-image">
        <img src={Homepage} alt="Homepage" />
      </div>
      <div className="home-page-info">
        <div>
         <h1>BLACK HAIR INDEX</h1>
         <p>Online Community For All Things Black Hair</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import AdditionalPhoto1 from "../../assets/AdditionalPhoto1.png";
import "./HomePage.css";

export default function UnauthorisedHomePage({ history }) {
  return (
    <div className="home-page">
      <div className="home-page-image">
        <img src={AdditionalPhoto1} alt="Homepage" />
      </div>
      <div className="home-page-info">
        <div className="home-page-text">
         <h1>BLACK HAIR INDEX</h1>
         <p>Welcome to BHI, your online directory for Afro Hairdressing Salons, Barbershops & Hair Care Shops.</p>
         <p>Please browse through the directory and leave comments if you've ever patronised any of these places.</p>
         <p>And don't forget to add any places you've been to which aren't in the directory!</p>
        </div>
      </div>
    </div>
  );
}

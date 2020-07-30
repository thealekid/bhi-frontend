import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="add">
          <Link to="/addashop">Add A New Place</Link>
          <Link to="/searchshops">Search Places</Link>
        </div>
        <div>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      </nav>
    );
  }
}

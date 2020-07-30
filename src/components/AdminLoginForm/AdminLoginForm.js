import React, { Component } from "react";
import API from "../../API";
import AdminLoginFormImage from "../../assets/AdminLoginFormImage.png";
import "./AdminLoginForm.css"

export default class AdminLoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    API.adminlogin(this.state).then((data) => this.props.adminlogin(data));
  };

  render() {
    return (
      <div className="Admin-Login-Form">
        <div className="Admin-Login-image">
          <img src={AdminLoginFormImage} alt="Login" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            name="username"
            type="password"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <button className="Admin-Login-button">Welcome Back Admin!!</button>
        </form>
      </div>
    );
  }
}

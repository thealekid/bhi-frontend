import React, { Component } from "react";
import API from "../../API";
import "./LoginForm.css";
import Login from "../../assets/Login.png";


export default class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    errors: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    API.login(this.state).then((data) => {
      data.message
        ? this.setState({
            errors: data.message,
          })
        : this.props.login(data);
    });
  };

  render() {
    return (
        <div><p className="motto">UK's online hair community</p>
      <div className="Login-form">
          <div className="Login-image">
              <img src={Login} alt="Login" />
          </div>
        <form onSubmit={this.handleSubmit}>
            <h2>Log In</h2>
          <label>Username:</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
          <br/>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <br/>
          <button type="submit">Welcome Back To BHI!!!</button>
          <br />
          {this.state.errors && <p>{this.state.errors}</p>}
          <br />
          <div className="btn">
            <button
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              Home
            </button>
            <button
              onClick={() => {
                this.props.history.push("/signup");
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Signup from "../Signup/Signup";
import LoginForm from "../LoginForm/LoginForm";
import AdminLoginForm from "../AdminLoginForm/AdminLoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
import UnauthorisedHomePage from "../UnauthorisedHomePage/UnauthorisedHomePage";

export default class Unauthorised extends Component {
  render() {
    return (
      <div className="unauthorised">
        <Switch>
          <Route exact path="/signup"
          render={(routerProps) => <Signup login={this.props.login} {...routerProps} />}>
          </Route>
          <Route exact path="/login"
            render={(routerProps) => <LoginForm login={this.props.login} {...routerProps} />}>
          </Route>
          <Route exact path="/admin">
            <AdminLoginForm adminlogin={this.props.adminlogin} />
          </Route>
          <Route
            exact path="/"
            render={(routerProps) => <UnauthorisedHomePage {...routerProps} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

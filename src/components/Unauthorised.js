import React, { Component } from 'react'
import Signup from "./Signup"
import LoginForm from './LoginForm'
import AdminLoginForm from './AdminLoginForm'
import { Switch, Route, Redirect } from 'react-router-dom'


export default class Unauthorised extends Component {

    

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/signup">
                        <Signup login={this.props.login}/>  
                    </Route>
                    <Route exact path="/">
                        <LoginForm login={this.props.login}/>
                    </Route>
                    <Route exact path="/admin">
                        <AdminLoginForm adminlogin={this.props.adminlogin}/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </div>
        )
    }
}

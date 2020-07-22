import React, { Component } from 'react'
import Signup from "./Signup"
import LoginForm from './LoginForm'
import AdminLoginForm from './AdminLoginForm'


export default class Unauthorised extends Component {

    

    render() {
        return (
            <div>
                <Signup login={this.props.login}/>
                <LoginForm login={this.props.login}/>
                <AdminLoginForm adminlogin={this.props.adminlogin}/>
                
            </div>
        )
    }
}

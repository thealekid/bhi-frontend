import React, { Component } from 'react'
import API from "../API"

export default class AdminLoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        API.adminlogin(this.state)
        .then(data => this.props.adminlogin(data))
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input name="username" value={this.state.username} onChange={this.handleChange}></input>
                <label>Password:</label>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
                <button>Welcome Back Admin!!</button>
            </form>
        )
    }
}
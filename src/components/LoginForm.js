import React, { Component } from 'react'
import API from "../API"

export default class LoginForm extends Component {

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
        API.login(this.state)
        .then(data => this.props.login(data))
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input name="username" value={this.state.username} onChange={this.handleChange}></input>
                <label>Password:</label>
                <input name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button>Welcome Back To BHI!!!</button>
            </form>
        )
    }
}

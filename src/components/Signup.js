import React, { Component } from 'react'
import API from "../API"

export default class Signup extends Component {

    state = {
        first_name: "",
        last_name: "",
        username: "",
        email_address: "",
        password: "",
        password_confirmation: "",
        errors: ""
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        API.signup(this.state)
        .then(data => {data.error ? this.setState({
            errors: data.error
        }): this.props.login(data)})
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>First Name:</label>
                <input name="first_name" value={this.state.first_name} onChange={this.handleChange}></input>
                <label>Last Name:</label>
                <input name="last_name" value={this.state.last_name} onChange={this.handleChange}></input>
                <label>Username:</label>
                <input name="username" value={this.state.username} onChange={this.handleChange}></input>
                <label>Email Address:</label>
                <input name="email_address" value={this.state.email_name} onChange={this.handleChange}></input>
                <label>Password:</label>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
                <label>Confirm Password:</label>
                <input name="password_confirmation" type="password" value={this.state.password_confirmation} onChange={this.handleChange}></input>
                <button>Sign Up To BHI!!</button>
                <div className="Errors">
                    {this.state.errors.length > 0
                 ? this.state.errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))
              : null}
                </div>
            </form>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/hairproducts">Hair Products</Link>
                <Link to="/searchshops">Search Shops</Link>
                <button onClick={this.props.logout}>Log out</button>
            </nav>
        )
    }
}

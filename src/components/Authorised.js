import React, { Component } from 'react'

export default class Authorised extends Component {
    render() {
        return (
            <div>
                HO, U IN!
                <button onClick={this.props.logout}>Log out</button>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class SearchShop extends Component {

    render() {
        return (
            <div>
            <input
              placeholder={"Search for Hairdressers, Barbers or Hair Care Shops by location..."}
              onChange={this.props.handleChange}
              value={this.props.search}
            />
            <button onClick={this.props.handleClick}>Submit</button>
          </div>
        )
    }
}

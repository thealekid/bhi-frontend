import React, { Component } from 'react'
import SearchBarShop from './SearchBarShop'
import Shop from './Shop'

export default class SearchShop extends Component {

    render() {
        const {handleChange, search, handleClick} = this.props
        return (
            <div>
            <SearchBarShop handleChange={handleChange} search={search.search} handleClick={handleClick}/>
            <Shop foundShops={search.searchResults}/>
            </div>
        )
    }
}

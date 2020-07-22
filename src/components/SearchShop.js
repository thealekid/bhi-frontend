import React, { Component } from 'react'
import SearchBarShop from './SearchBarShop'             
import ShopList from './ShopList'

export default class SearchShop extends Component {

    render() {
        const {handleChange, search, handleClick} = this.props
        return (
            <div>
            <SearchBarShop handleChange={handleChange} search={search.search} handleClick={handleClick}/>
            <ShopList foundShops={search.searchResults}/>
            </div>
        )
    }
}

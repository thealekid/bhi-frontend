import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './HomePage'
import ProductList from './ProductList'
import ShopList from './ShopList'
import SearchShop from './SearchShop'
import API from '../API'

export default class Authorised extends Component {

    state = {
        search: "",
        searchResults: []
    }

    handleChange = (event) => {
        let fieldvalue = event.target.value
        this.setState({
            search: fieldvalue
          })
    }

    handleClick = () => {
        API.searchShops({search: this.state.search}).then(searchResults => this.setState({searchResults}))
    }

    render() {
        return (
            <div>
                <NavBar history={this.props.history} logout={this.props.logout}/>
                <Switch>
                <Route exact path={"/"} render={() => <HomePage/>}/>
                <Route exact path={"/hairproducts"} render={() => <ProductList/>}/>
                <Route exact path={"/shops"} render={() => <ShopList/>}/>
                <Route exact path={"/searchshops"} render={() => <SearchShop handleChange={this.handleChange} search={this.state} handleClick={this.handleClick}/>} />
                <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './HomePage'
import ProductList from './ProductList'
import SearchShop from './SearchShop'
import API from '../API'
import ShopCard from './ShopCard'

class Authorised extends Component {

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
                <Route exact path={"/searchshops"} render={() => <SearchShop handleChange={this.handleChange} search={this.state} handleClick={this.handleClick}/>} />
                <Route exact path={"/shop/:id"} render={matchProps => <ShopCard shopId={matchProps.match.params.id}/>}/>
                <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default withRouter (Authorised)

import React, { Component } from 'react'
import API from '../../API'
import AdminShopApprovalCard from './AdminShopApprovalCard'

export default class AdminPage extends Component {

    state = {
        shops: []
    }

    componentDidMount(){
        API.adminapproved()
        .then(shops => {console.log(shops)
        this.setState({
            shops
        })})
    }

    approvedShop = (shop) => {
        API.adminconfirmed(shop)
        .then(data => data.approved && this.setState({shops: this.state.shops.filter((filteredshop) => filteredshop.id !== shop.id)}))
    }

    declineShop = (shop) => {
        API.adminDestroy(shop)
        .then(data => this.setState({shops: this.state.shops.filter((filteredshop) => filteredshop.id !== shop.id)}))
    }



    render() {
        let shopsAwaitingApproval = this.state.shops.map(shop => <AdminShopApprovalCard key={shop.id} shop={shop} approved={this.approvedShop} decline={this.declineShop}/>)
        return (
            <div className="Admin-page">
                <div className="Admin-nav">
                ADMIN PAGE
                <button className="Admin-logout" onClick={this.props.logout}>Log Out</button>
                </div>
                {shopsAwaitingApproval}
            </div>
        )
    }
}

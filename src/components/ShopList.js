import React, { Component } from 'react'
import Shop from './Shop'

export default class ShopList extends Component {

    render() {

        const shopCards = this.props.foundShops.map(shop => <Shop key={shop.id} shop={shop} /> )

        return (
            <div>
            {shopCards}
            SHOPLIST
            </div>
        )
    }
}

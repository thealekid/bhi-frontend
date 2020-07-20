import React, { Component } from 'react'
// import Shop from './Shop'

export default class ShopList extends Component {

    state = {
        shop: []
    }

    componentDidMount(){
        fetch("")
        .then(response => response.json())
        .then(data =>            
            this.setState({
                shop : data,
            })
        )
    }

    render() {

        // let shops = this.state.shops.map(shop => <Shop key={shop.id} name={shop.name}/>)

        return (
            <div>
            {/* {shops} */}
            SHOPLIST
            </div>
        )
    }
}

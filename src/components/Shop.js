import React from 'react'
import ShopCard from './ShopCard'

export default function Shop({foundShops}) {
    const shopCard = foundShops.map(shop => <ShopCard key={shop.id} shop={shop} /> )
    return (
        <div>
            {shopCard}
        </div>
    )
}


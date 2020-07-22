import React from 'react'
import {Link} from 'react-router-dom'
import ShopCardInfo from './ShopCardInfo'

export default function Shop({shop}) {
    return (
        <Link to={`/shop/${shop.id}`}>
            <ShopCardInfo labelInput="Name:" pInput={shop.name}/>
            <ShopCardInfo labelInput="County:" pInput={shop.county}/>
            <ShopCardInfo labelInput="Postcode:" pInput={shop.postcode}/>
            <ShopCardInfo labelInput="Service:" pInput={shop.service}/>
        </Link>
    )
}

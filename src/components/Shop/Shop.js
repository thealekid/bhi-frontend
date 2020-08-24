import React from 'react'
import {Link} from 'react-router-dom'
import ShopCardInfo from '../ShopCardInfo'

export default function Shop({shop}) {
    return (
        <Link to={`/shop/${shop.id}`} style={{textDecoration: 'none'}}>
            <div className="shop">
            <b><ShopCardInfo pInput={shop.name}/></b>
            <br/>
            <ShopCardInfo pInput={shop.postcode}/>
            <ShopCardInfo pInput={shop.service}/>
            </div>
        </Link>
       
    )
}

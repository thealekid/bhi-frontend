import React from 'react'
import {Link} from 'react-router-dom'
import ShopCardInfo from '../ShopCardInfo'

export default function Shop({shop}) {
    return (
        <Link to={`/shop/${shop.id}`} style={{textDecoration: 'none'}}>
            <div className="shop">
            <b><ShopCardInfo pInput={shop.name}/></b>
            <br/>
            <ShopCardInfo labelInput="Postcode:" pInput={shop.postcode}/>
            <ShopCardInfo labelInput="Service:" pInput={shop.service}/>
            </div>
        </Link>
       
    )
}

import React from 'react'
import ShopCardInfo from '../ShopCardInfo'


export default function AdminShopApprovalCard({shop, approved, decline }) {
    return (
        <div className="Admin-shop-approval-card">
            <img src={shop.image_url} alt=""/>
            <br/>
            <ShopCardInfo labelInput="Name:" pInput={shop.name}/>
            <ShopCardInfo labelInput="Phone Number:" pInput={shop.phone_number}/>
            <ShopCardInfo labelInput="Opening Hours:" pInput={shop.opening_hours}/>
            <ShopCardInfo labelInput="Address:" pInput={shop.address}/>
            <ShopCardInfo labelInput="Town:" pInput={shop.town}/>
            <ShopCardInfo labelInput="County" pInput={shop.county}/>
            <ShopCardInfo labelInput="Country:" pInput={shop.Country}/>
            <ShopCardInfo labelInput="Postcode:" pInput={shop.postcode}/>
            <ShopCardInfo labelInput="Service:" pInput={shop.service}/>
            <button value="Approve" onClick={() => approved(shop)}>Approve</button>
            <button value="Decline" onClick={() => decline(shop)}>Decline</button>
        </div>
    )
}
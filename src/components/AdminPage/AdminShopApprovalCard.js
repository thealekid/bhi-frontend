import React from "react";
import ShopCardInfo from "../ShopCardInfo";
import "./AdminPage.css"

export default function AdminShopApprovalCard({ shop, approved, decline }) {
  return (
    <div className="Admin-shop-approval-card">
      <div className="Admin-details">
        <div className="Admin-image">
          <img src={shop.image_url} alt="" />
        </div>
        <br />
        <div className="Admin-shop-details">
        <ShopCardInfo labelInput="Name:" pInput={shop.name} />
        <ShopCardInfo labelInput="Phone Number:" pInput={shop.phone_number} />
        <ShopCardInfo labelInput="Opening Hours:" pInput={shop.opening_hours} />
        <ShopCardInfo labelInput="Address:" pInput={shop.address} />
        <ShopCardInfo labelInput="Town:" pInput={shop.town} />
        <ShopCardInfo labelInput="County:" pInput={shop.county} />
        <ShopCardInfo labelInput="Country:" pInput={shop.Country} />
        <ShopCardInfo labelInput="Postcode:" pInput={shop.postcode} />
        <ShopCardInfo labelInput="Service:" pInput={shop.service} />
        <div className="Admin-btn">
        <button className="Admin-approve-btn" value="Approve" onClick={() => approved(shop)}>
          Approve
        </button>
        <button className="Admin-decline-btn" value="Decline" onClick={() => decline(shop)}>
          Decline
        </button>
        </div>
      </div>
    </div>
</div>
  );
}

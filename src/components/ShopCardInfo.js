import React from "react";

export default function ShopCardInfo({ labelInput, pInput }) {
  return (
    <div className="info-details">
      <div>
        <label>{labelInput}</label>
      </div>
      <div>
        <p>{pInput}</p>
      </div>
    </div>
  );
}

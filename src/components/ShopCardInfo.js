import React from 'react'

export default function ShopCardInfo({labelInput, pInput}) {
    return (
        <div>
            <label>{labelInput}</label>
            <p>{pInput}</p>
        </div>
    )
}

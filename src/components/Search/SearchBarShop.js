import React, { Fragment } from 'react'
import "./SearchBarShop.css"

export default function SearchBarShop({handleChange, search, handleClick}) {
    
    return (
        <div className="search-bar-shop">
        <Fragment>
            <input
              placeholder={"Search for Hairdressing Salons, Barbershops or Afro Hair Care Shops by postcode..."}
              onChange={handleChange}
              value={search}
            />
            <button className="search-button" onClick={handleClick}>Submit</button>
        </Fragment>
        </div>

        
    )
}

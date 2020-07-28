import React, { Fragment } from 'react'
import "./SearchBarShop.css"

export default function SearchBarShop({handleChange, search, handleClick}) {
    
    return (
        <div className="search-bar-shop">
        <Fragment>
            <input
              placeholder={"Search for Hairdressers, Barbers or Hair Care Shops by location..."}
              onChange={handleChange}
              value={search}
            />
            <button onClick={handleClick}>Submit</button>
        </Fragment>
        </div>
    )
}

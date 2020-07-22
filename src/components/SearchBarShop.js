import React, { Fragment } from 'react'

export default function SearchBarShop({handleChange, search, handleClick}) {
    
    return (
        <Fragment>
            <input
              placeholder={"Search for Hairdressers, Barbers or Hair Care Shops by location..."}
              onChange={handleChange}
              value={search}
            />
            <button onClick={handleClick}>Submit</button>
        </Fragment>
    )
}

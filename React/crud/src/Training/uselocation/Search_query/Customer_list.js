import React from 'react'
import { Link } from 'react-router-dom'
import { CUSTOMER } from '../../../const'

function Customer_list() {
    let query= "Cooking Oil"
    let id = 10;
  return (
    <div>
        <Link to={`${CUSTOMER}/${id}?query=${query}`}>Customer</Link> 
         {/* <Link to="/customer?query=Cooking Oil">Customer</Link> */}
    </div>
  )
}

export default Customer_list
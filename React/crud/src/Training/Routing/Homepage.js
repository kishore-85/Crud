import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
     <h2>Welcome to home page</h2>
    <Link to={'/category'}>Category</Link>
    </div>
  )
}

export default Homepage
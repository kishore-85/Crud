import React from 'react'
import { Link } from 'react-router-dom'
import { PURCHASE } from '../../const'


function Home() {
  return (
    <div>
        <h2>Home Component</h2>
        <Link to={PURCHASE}> Purchase</Link>
    </div>
  )
}

export default Home
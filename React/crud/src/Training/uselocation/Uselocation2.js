import React from 'react'
import { useLocation } from 'react-router-dom'

function Uselocation2() {

    const location = useLocation()

    console.log('location value',location)
    
  return (
    <div>Uselocation2</div>
  )
}

export default Uselocation2
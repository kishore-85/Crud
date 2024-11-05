import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Uselocation() {
  const navigate = useNavigate();
  const [user,setuser] = useState('admin')

    function handlenavigation(){
       navigate("/location2",{
           state:user
       })
    }
  return (
    <>
       <button onClick={handlenavigation}>navigate to uselocation2</button>

    </>
  )
}

export default Uselocation
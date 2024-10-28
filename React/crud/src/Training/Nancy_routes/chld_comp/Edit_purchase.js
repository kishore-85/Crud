import React from 'react'
import { useParams } from 'react-router-dom'

function Edit_purchase() {

  let val = useParams()
  console.log(val)

  return (
    <div>
      <h3> welcome {val.id} </h3>
    </div>
  )
}

export default Edit_purchase
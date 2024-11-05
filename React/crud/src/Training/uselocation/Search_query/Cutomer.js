import React, { useEffect } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

function Cutomer() {
let id = useParams()
 let [searchparamas] = useSearchParams()
 let location = useLocation()
 let query = searchparamas.get('query')
 console.log('params11',id)
 console.log('query',query)
 console.log('location',location)
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res =>{
            console.log(res)
        })
        .catch(err=>console.log(err))
    })
  return (
    <div>Cutomer</div>
  )
}

export default Cutomer
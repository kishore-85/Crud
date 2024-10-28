import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EDIT_PURCHASE } from '../../../const'
import Edit_purchase from './Edit_purchase';

function Purchase() {

    const [apidata,setapidata] = useState([]);

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(res=>setapidata(res.products))        
    },[])
  return (
    <div>
        <h3>Purchase component</h3>
        {apidata.length>0 &&  apidata.map((val,indx)=>{
           return <p key={indx}>
                       <span>{val.id}</span> 
                       <span>{val.title}</span> 
                       <span><Link to={`${EDIT_PURCHASE}/${val.brand}`}><button>Edit</button></Link></span> 
                   </p>            
        })}
        {/* <Link to={EDIT_PURCHASE}><button>ADD_EDIT Purchase order</button></Link> */}
    </div>
  )
}

export default Purchase
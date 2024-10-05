import React, { useState } from 'react';


export default function Formsstate() {
 let [data, setdata] = useState({
   fname:'',
   email:''
 })
  function handleforms(event){
    event.preventDefault()
  
    let {name,value} = event.target
    // console.log('value',value)
    setdata({...data, [name]:value})
   
    console.log('value',data)
  }

  return (
    <>
    <form onSubmit={handleforms}>
          <input type="text" name="fname" onChange={handleforms}></input> <br></br>
          <input type="email" name="email" onChange={handleforms}></input> <br></br>
          <input type="submit"></input>
    </form>
   
    </>
  )
}

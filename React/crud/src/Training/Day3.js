import { useState } from "react";
import Child from "./Child";


function Props(){
    let email = "kishore@gmail.com";
    let obj ={id:'1',city:'krr'}
    
    
    let [val,setval] = useState(0)
    function add(){
       ++val;
       setval(val)
       console.log('token value',val)
    }
    return(
        <>
        <p>parent</p>
        <button onClick={add}>add</button>
        <p>{val}</p>
        <Child send={email} val={'kec'}  val2={obj}>  </Child>
        </>
    )
}

export default Props;
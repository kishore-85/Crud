import { useState } from "react";
import Child from "./Child";

function Parent(){
    let fname = 'kishore';              //sending single data
   
    let arr =[  
        {fname:'kiruba'},               //Sending array
        {fname:'preethi'}
    ]      
    
   
    return(
        <>
            <p>Parent component</p>
            <Child a = {fname} b={arr}></Child>

           
        </>
    )
}

export default Parent;
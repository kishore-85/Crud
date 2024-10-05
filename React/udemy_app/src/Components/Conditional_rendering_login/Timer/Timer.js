import React, { useState } from 'react'
export default function Timer() {
    
    
    const [timer, setTimer] = useState(new Date().toLocaleTimeString());
    
    function chnage(){
           setTimer(new Date().toLocaleTimeString())
    }

    setInterval(() => {
       chnage() 
    }, 1000);
  return (
    <>
    {timer}

    {/* <button onClick={chnage}>press 1</button> */}
    </>
  )
}

import { useCallback, useEffect, useState } from "react";


function Use(){

    const [day, set_day]  = useState('monday');
    let [time, set_time]= useState(10) 

    

    function  my_change(){
          set_day('Tuesday')
          set_time(time++)
    }

    useEffect(()=>{
        console.log('use effect mounting',time)
    },[])

    useEffect(()=>{
        console.log('use effect updating time',time)
    },[time])
      return(
          <>
               <p >{day}</p>
               <button onClick={my_change}>Change  Day</button>
          </>
      )
}

export default  Use;
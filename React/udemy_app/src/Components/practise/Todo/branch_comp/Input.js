import { useState } from "react";

function Input(props){

    const[ipval , setipval] = useState('');

    function handleChange(e){       
        //  console.log(e)
         let e_val = e.target.value;
         setipval(e_val);       
       
    }
    
    return (
        <>
        
                   <label id="lbl">Enter your UserName:</label><br></br>
                   <input type="text" id="ip1" name="ip" onChange={handleChange}></input><br></br>
                    <br></br>
                     <button id="submit" onClick={()=>{props.onClickFunction(ipval)}}>Add</button>
              
          
        </>
    )
}

export default Input;
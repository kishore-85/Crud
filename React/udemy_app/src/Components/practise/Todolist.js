
import { useState } from "react";
import "./Todo.css";

function Todolist(){
   
   const[ipval , setipval] = useState('');
   const [user_val, set_userval]= useState([])

    function handleChange(e){       
        
         let e_val = e.target.value;
         setipval(e_val);       
       
    }

    function handlesubmit(e){
        e.preventDefault()
       
        set_userval((pre_val)=>{
            return [...pre_val , ipval]
        })
       
        
    }

    function handledelete(e){
       
       console.log(parseInt(e))    
       
        console.log('bfr splice',user_val)
        let indx = user_val.indexOf(e)
        user_val.splice(indx,1)
        console.log('after splice',user_val)

         
        set_userval([...user_val])
       
    }

    return(
        <>
           <h1>TodoList</h1>
           <div id="container_1">
               <form id="form" onSubmit={handlesubmit}>
                   <label id="lbl">Enter your UserName:</label><br></br>
                    <input type="text" id="ip1" name="ip" onChange={handleChange}></input><br></br>
                    <br></br>
                     <input id="submit" type="submit"></input>
               </form>
              
           </div>
          <div id="container_2">
              <ul>
                    {
                        user_val.map((val,index)=>{
                          return  <li key={index} className="li">
                              {val} <button className="delete" onClick={()=>{handledelete(val)}}>Delete </button>
                          </li>
                        })
                    }
              </ul>

          </div>
        </>
    )
}

export default Todolist;
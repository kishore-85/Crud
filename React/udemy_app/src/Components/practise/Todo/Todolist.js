
import { useState } from "react";
import "./Todo.css";
import Li from "./branch_comp/Li";
import Input from "./branch_comp/Input";
function Todolist(){
   
   
   const [user_val, set_userval]= useState([])

    

    function handlesubmit(e){
        
       
        set_userval((pre_val)=>{
            return [...pre_val , e]
        })
       
        
    }

    function handledelete(e){
       
         
       console.log('delete works')
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
                <Input  onClickFunction={handlesubmit}></Input>              
           </div>
           <div>
                <Li arrval={user_val} onClickFunction={handledelete}></Li>
           </div>
           
        </>
    )
}

export default Todolist;
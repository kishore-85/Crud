import React from 'react'
import './Todo.css'
function Todo(props) {
 
  return (
    <div id='todo'>
      <h2 style={{textAlign:"center"}}>Todo</h2>
      <table>
        <tbody>
        {
           props.data.map((val,indx)=>{
             return <tr>
                        <td>{val.task}</td> 
                        <td><button  id="progress" onClick={()=>{props.funprog(val,indx)}}>Inprogress</button></td> 
                        <td ><button id="edit">Edit</button></td> 
                        <td ><button id="delete" onClick={()=>{props.fun_delete(indx)}}>delete</button></td> 
                    </tr>
           })
         }
        </tbody>
      </table>
        
    </div>
  )
}

export default Todo
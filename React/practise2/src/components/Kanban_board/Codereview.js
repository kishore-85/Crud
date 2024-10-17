import React from 'react'

function Codereview(props) {
  return (
    <div id="review">
       <h2 style={{textAlign:"center"}}>Code review</h2>

<table>
        <tbody>
          {
            props.data.map((val,ind)=>{
              return <tr>
                <td>{val.task}</td>
                <td><button  style={{marginLeft:"100px"}} onClick={()=>{props.fun_done(val,ind)}}>Done</button></td>                
                {/* <td ><button id="delete" onClick={()=>{props.fun_delete(ind)}}>delete</button></td>  */}  
              </tr>
            })
          }
        </tbody>
      </table>
    
    </div>
  )
}

export default Codereview
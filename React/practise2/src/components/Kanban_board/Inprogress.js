import React from 'react'

function Inprogress(props) {
  return (
    <div id="inprogress">
      <h2 style={{textAlign:"center"}}>In progress</h2>

      <table>
        <tbody>
          {
            props.data.map((val,ind)=>{
              return <tr>
                <td>{val.task}</td>
                <td><button  style={{marginLeft:"100px"}} onClick={()=>{props.fun_review(val,ind)}}>Code review</button></td>                
                {/* <td ><button id="delete" onClick={()=>{props.fun_delete(ind)}}>delete</button></td>  */}  
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Inprogress
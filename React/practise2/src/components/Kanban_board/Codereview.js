import React from 'react'

function Codereview(props) {
  return (
    <div id="review">Codereview

<table>
        <tbody>
          {
            props.data.map((val,ind)=>{
              return <tr>
                <td>{val.task}</td>
                <td><button  style={{marginLeft:"170px"}} onClick={()=>{props.fun_done(val)}}>Done</button></td>                
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
import React from 'react'

function Done(props) {
  // console.log('done comp',props.data)
 
  return (
    <div id="Done">
       <h2 style={{textAlign:"center"}}>Completed</h2>
    
    <table>
        <tbody>
          {
            props.data.map((val,ind)=>{
              return <tr>
                <td>{val.task}</td>               
              </tr>
            })
          }
        </tbody>
      </table>
    
    </div>
  )
}

export default Done
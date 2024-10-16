import React, { useEffect } from 'react'

function Done(props) {
  // console.log('done comp',props.data)
 
  return (
    <div id="Done">Done
    
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
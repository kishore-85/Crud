import React from 'react'
import './List.css'
function List(props) {
   
  return (
    <div>
        <ul>

       
        {props.arrval.map((val,index)=>{
          return <li key={index}>
            
                  <span id="name">{val.user_name}</span> <span id="email">{val.email_id}</span> 

                    <div className='list_item'>
                      <div className='li_btn_div'> 
                            <button  className='li_btn' onClick={()=>{props.fun_edit(val,index)}}>Edit</button>
                      </div>
                      <div className='li_btn'>
                            <button className='li_btn' onClick={()=>{props.fun_delete(index)}}>Delete</button>
                      </div>
                      
                    </div>
                 </li>
                
          
         
        })}

        </ul>
    </div>
  )
}

export default List
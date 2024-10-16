import React, { useState } from 'react'
import Codereview from './Codereview'
import Done from './Done'
import Inprogress from './Inprogress'
import Todo from './Todo'
import  './kanban.css'

function Kanban() {
    const [formval,setformval] = useState({
        task:'',
        descrpt:''
    })

    const [arr_data , set_arr] = useState([])
    const [arr_Inprogress, set_inprog] =useState([])
    const [arr_review, set_arrrview] =useState([])
    const [arr_done, set_done] =useState([])

    function handlechange(e){
        const {name , value}= e.target;        
        setformval({...formval,[name]:value})                //Method-1

        // setformval((pre)=>{                               //Method-2
        //     return {...pre,[name]:value}
        // })
    }

    function handleSubmit(e){
        e.preventDefault()
        set_arr((pre)=>{
            return [...pre,formval]
        })
    }

   function handledelete(e){      
       set_arr((pre)=>{
           return pre.filter((val,indx)=>{
               return !(indx==e);
           })
       })
   }

  function handleInprogress(e,indx){
    //   console.log('prog',e)
      
      set_inprog((pre)=>{
          return [...pre,e]
      })
      
    //   console.log('prog val',arr_Inprogress)
  } 

  function handleCodeReview(e){
    
    set_arrrview((pre)=>{
        return [...pre , e]
    })
    // console.log('review',arr_review)
   
} 


function handleCodeReview(e){
    
    set_arrrview((pre)=>{
        return [...pre , e]
    })
    // console.log('review',arr_review)
   
} 

function handleDone(e){
    
    // let Done_val =  arr_review.splice(e,1)
    // console.log('value of done',Done_val)

    set_done((pre)=>{
        return [...pre,e]
    })
    // set_done([...arr_done,Done_val])
    // console.log('done fun',arr_done)
   
} 
  return (
    <>
       <div id="form">
           <form onSubmit={handleSubmit}>
               <div className='inp'>
                     <label>Task Name:</label>
                     <input type="text" id="task_name" name='task' onChange={handlechange} value={formval.task}/> <br/>
               </div>
               <div className='inp'>
                     <label>Description:</label>
                     <textarea id="txt_area" rows={5} cols="30" name="descrpt" onChange={handlechange} value={formval.descrpt}></textarea>
               </div>
               <div className='cls_btn'>
                    <button className='btn'>Submit</button>               
               </div>
             
           </form>

       </div>
       <div className='list_comp'>
            <Todo data={arr_data} fun_delete={handledelete} funprog={handleInprogress}></Todo>
            <Inprogress data={arr_Inprogress} fun_review={handleCodeReview}></Inprogress>
            <Codereview data={arr_review} fun_done={handleDone}></Codereview>
            <Done data={arr_done}></Done>
       </div>
      
    </>
  )
}

export default Kanban
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
    let [edit,setedit] =useState(null)

    function handlechange(e){
        const {name , value}= e.target;        
        setformval({...formval,[name]:value})                //Method-1

        // setformval((pre)=>{                               //Method-2
        //     return {...pre,[name]:value}
        // })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formval)
        console.log(edit)
        if(edit===null){
            set_arr((pre)=>{
                return [...pre,formval]
            })
        }
        else{
            set_arr((pre)=>{
                return pre.map((val,ind)=>{
                   if(edit == val.task){
                      console.log('##',val.task)
                      val.task = formval.task;
                      val.descrpt = formval.descrpt;
                }
                 return val
             })
          })
          setedit(null)
        }
        
    }
    function handleedit(e){
     
        setedit(e.task)
        console.log(edit,'edit')
        setformval(e)    
     }
     
   function handledelete(e){      
       set_arr((pre)=>{
           return pre.filter((val,indx)=>{
               return !(indx===e);
           })
       })
   }

  function handleInprogress(e,indx){
   
      
      set_inprog((pre)=>{
          return [...pre,e]
      })
      
      set_arr((pre)=>{
          return pre.filter((val,ind)=>{
              return !(ind===indx)
          })
      })
    
  } 

  function handleCodeReview(e,indx){
    
    set_arrrview((pre)=>{
        return [...pre , e]
    })
    set_inprog((pre)=>{
        return pre.filter((val,ind)=>{
            return !(ind===indx)
        })
    })
   
} 




function handleDone(e,indx){    
    
    set_done((pre)=>{
        return [...pre,e]
    })
    set_arrrview((pre)=>{
        return pre.filter((val,ind)=>{
            return !(ind===indx)
        })
    })

   
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
            <Todo data={arr_data} fun_delete={handledelete} funprog={handleInprogress} funedit={handleedit}></Todo>
            <Inprogress data={arr_Inprogress} fun_review={handleCodeReview}></Inprogress>
            <Codereview data={arr_review} fun_done={handleDone}></Codereview>
            <Done data={arr_done}></Done>
       </div>
      
    </>
  )
}

export default Kanban
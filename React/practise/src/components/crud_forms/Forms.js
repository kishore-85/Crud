import React, { useState } from 'react'
import './Forms.css'
import List from './List/List'

function Forms() {

      const [formvalue , setformvalue] = useState(
            {
                  user_name:' ',
                  email_id:' ',
                  clge:' ',
                  event: ' '

            }
      )

      const [userval , setuserval] = useState([])
      let [editindex , seteditindex] = useState(null)
     function handleChange(e){          
          const{name,value} = e.target;

          setformvalue({...formvalue,[name]:value})
         
     }

   const  handleSubmit = (e)=>{
         e.preventDefault();
          
         if(editindex == null){
            setuserval((pre)=>{
                  return [...pre , formvalue]
            })
            setformvalue({
             user_name:' ',
             email_id:' ',
             clge:' ',
             event: ' '
 
            })
         }
         else {
               
            //    userval.splice(editindex,1,formvalue)      //method 1
            //    console.log(userval)
            //    setuserval([...userval])

               setuserval(()=>{                              //method 2
                     return userval.map((val,index)=>{
                           if(index === editindex){
                              val.user_name = formvalue.user_name;
                              val.email_id = formvalue.email_id;
                              val.clge = formvalue.clge;
                              val.event = formvalue.event
                           }

                           return val;
                     })
               })                                 
               setformvalue({
                  user_name:' ',
                  email_id:' ',
                  clge:' ',
                  event: ' '
      
                 })
               seteditindex(null)
         }
          
      //      console.log('formarr',userval)
     }

     function handleDelete(e){
          

           setuserval((pre)=>{
                 return userval.filter((val,indx_fltr)=>{
                      return !(e===indx_fltr);
                 })
           })
     }

     function handleEdit(e,indx){
         
           setformvalue({
                 user_name: e.user_name,
                 email_id: e.email_id,
                 clge:e.clge,
                 event:e.event
            })
            seteditindex(indx)           
     }

  return (
    <div>
        <form id="form" onSubmit={handleSubmit}>
            <h2>Registraiton form </h2>
            <div className='div_content'>
                  <label>Fname:</label>
                  <input className='inp1' type='text' name="user_name" onChange={handleChange} value={formvalue.user_name}/>
            </div>
            <div className='div_content'>
                  <label>Email:</label>
                  <input className='inp2' type='email' name="email_id" onChange={handleChange} value={formvalue.email_id}/>
            </div>
            <div className='div_content' id="con3">
                  <label>College:</label>
                  <input className='inp3' type='text' name="clge" onChange={handleChange} value={formvalue.clge}/>
            </div>
            <div className='div_content' id="select">
                <label>Event:</label>
                 <select className='inp4' name='event' onChange={handleChange}>
                      <option value="cricket">Cricket</option>
                      <option value="football">Football</option>
                      <option value="volley ball">Volley ball</option>
                      <option value="hockey">hockey</option>
                 </select>
            </div>
           <button>submit</button>           

        </form>

        <div>
              <List arrval={userval} fun_delete={handleDelete} fun_edit={handleEdit}></List>
        </div>
    </div>
  )
}

export default Forms
import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super()
        this.state = {
          fname:'',
          email:'',
          gender:false,
          Dept:'',
          arr:[],
          edit_indx:null
        }
      }
    
      handleChange = (e)=>{
       const {name , value}= e.target;

      this.setState(pre=>({...pre,[name]:value}))
      }

      handleSubmit=(e)=>{
          e.preventDefault();
         
          const {fname,email,gender,Dept,arr,edit_indx}= this.state;

          if(edit_indx===null){
            this.setState({
                arr:[...arr,{fname,email,gender,Dept}],
                fname:' ',
                email:'',
                gender:'',
                Dept:'',
                edit_indx: null
            })
          }
          else{
              const Currentdata = [...arr]
              Currentdata[edit_indx]={fname,gender,email,Dept}

              this.setState({
                  arr:Currentdata,
                  fname:'',
                  email:'',
                  gender:'',
                  edit_indx:null
              })
          }
         
          console.log(arr)
      }

      handleDelete = (id)=>{
          console.log('delete clicked')
          const Currentdata = [...this.state.arr];
          Currentdata.splice(id,1);
          this.setState({arr:Currentdata})
          
      }

      handleEdit = (e,indx)=>{
          console.log('e',e)
           this.setState(pre=>
               ({...pre,
            fname:e.fname,
            email:e.email,
            gender:e.gender,
            Dept:e.Dept,
            edit_indx:indx
        })
        
           )
      }
  render() {

    const {fname,email,gender,arr,Dept} =this.state;
    console.log(this.state);
    return (
        
      <div>

           <form onSubmit={this.handleSubmit}>
               <label>Name:</label>
               <input type="text" name="fname" onChange={this.handleChange} value={fname}/><br></br>

               <label>Email:</label>
               <input type="email" name="email" onChange={this.handleChange} value={email}/><br></br>

               <label>Gender:</label>
               <input type="radio" name="gender" onChange={this.handleChange} value={gender} />
               <input type="radio" name="gender" onChange={this.handleChange} value={gender}/><br></br>

               <label>Dept:</label>
               <select name="Dept" value={Dept} onChange={this.handleChange}>
                   <option value="ECE" >ECE</option>
                   <option value="CSE">CSE</option>
                   <option value="IT">IT</option>
               </select>
               <button type="submit">Add Data</button>
           </form>
           <ul>
               {
                  arr.map((val,indx)=>{
                     return(
                         <li key={indx}>{val.fname} 
                          <button onClick={this.handleDelete}>Delete</button>
                          <button onClick={()=>this.handleEdit(val,indx)}>Edit</button>
                         </li>
                     )
                  })
               }
           </ul>
      </div>
      
    )
  }
}

export default Form
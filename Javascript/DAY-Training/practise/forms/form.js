 
 let form_val ={
    method1:function(e){
     
        e.preventDefault();
        posting();
        // console.log('submit works');
        // console.log(`${this.fname} and email-id ${this.email} ${this.contact} ${this.dept}`)
    }
};  
 

let handle_change= function(e){
    
   
  if(e.target.name== "fname"){
      {form_val.fname= e.target.value}
      
  }
  else if(e.target.name=="email_id"){
      form_val.email=e.target.value   
      
   }
  else if(e.target.name=="no"){
      form_val.ph = e.target.value
  }
 else if(e.target.name=="Gender"){
      form_val.gender = e.target.value
    }
else if(e.target.name=="contact_type"){
        form_val.contact = e.target.value
      }
else if(e.target.name=="dept"){
        form_val.dept = e.target.value
      }  
  
//   console.log(form_val)  

  return form_val;

}


// const obj = {
//     method:'POST',
//     data:JSON.stringify(form_val)
   
// }

// function posting(){
//      fetch('https://api.spacexdata.com/v3/launches',obj)
//     .then(res=> {res.json()})
//     .then(data=>{console.log(data)})
//     .catch(err=>{console.log(err)})
// }



function posting() {
    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form_val),
    })
    .then(res => res.json())  // Fix: Return the promise from res.json()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

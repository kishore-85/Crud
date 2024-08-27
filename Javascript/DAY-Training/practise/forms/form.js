 
 let form_val ={
    method1:function(e){
        e.preventDefault();
        console.log('submit works');
        console.log(`${this.fname} and email-id ${this.email}`)
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
      form_val.ph=e.target.value
  }
    

  
  form_val.method1(e)
  console.log(form_val)
  
    return form_val;

}




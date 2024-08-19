 let handle_submit = {
     
//     on_Submit:function(){
//         console.log('submit works')
//     // return`${this.fname} and email id:${this.email}`
// }
 }

 function kk(event){
     console.log(event,'submitted');
     console.log(this.fname,'submitted');
     event.preventDefault()
 }

function handle_change(e){

    // console.log('k',e.target.name,'&',e.target.value)

    let form_val ={
        method1:function(){
            console.log('submit works')
        }
    };  

    

  if(e.target.name== "fname"){
      form_val.fname= e.target.value
      
  }
  else if(e.target.name=="email_id"){
      form_val.email=e.target.value   
      
   }
  else if(e.target.name=="no"){
      form_val.ph=e.target.value
  }
    //  form_val.on_Submit=function(){
    //      console.log('submit works')
    //  }
//   form_val.submit= handle_submit.on_Submit;

  console.log(form_val)

  
    return form_val;

}

function to_submit(event){
    console.log('to')
    form_val.method1()
}


// let my_Validate = function(){
//     return console.log(`${this.values.fname} and kk ${this.obj}`)
// }

let vali=function(e){
    const regex = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if(!e.fname){
        console.log('fnmae is req')
    }
    if(!e.email){
        console.log('email is req')
    }
    else if(!regex.test( e.email)){
        console.log('email is not valid')
    }
}

let forms =document.getElementById('forms')

forms.addEventListener('submit',(e,)=>{
  
    e.preventDefault();   

    let obj={}

    obj.fname= document.getElementById('fname').value;
   
    obj.email=document.getElementById('email_id').value;

    obj.ph=document.getElementById('no').value;

    // obj.validate = my_Validate;
    //    obj.validate();

    vali(obj)
    
    console.log('submit fun called')

})
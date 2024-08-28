
// let my_Validate = function(){
//     return console.log(`${this.values.fname} and kk ${this.obj}`)
// }

let vali=function(e){
    const regex = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  
    if(!e.email){
        console.log('email is req')
    }
    else if(!regex.test( e.email)){
        console.log('email is not valid')
    }
    else{
        post(e)
    }
}

let forms =document.getElementById('forms')

forms.addEventListener('submit',(e,)=>{
  
    e.preventDefault();
    let genderr;      
    let obj={};
    obj.fname= document.getElementById('fname').value;
    obj.email= document.getElementById('email_id').value;
    obj.gender= genderr;

    //radio-btn
    let radio=document.getElementById('radio').value    
    // console.log(document.querySelector('#Gender1').value)
    // console.log(document.getElementById('Gender1').value)
//     if(document.getElementById('Gender1').checked){
//         //  genderr= document.getElementById('Gender1').value;
//          console.log(document.querySelector('#Gender1').value)
//     }
//    else if(document.getElementById('Gender2').checked){
//         genderr= document.getElementById('Gender2').value;
//    }
    
    // obj.contact_type= document.querySelector('.checkbox').checked;

    //check-box;

    if(document.getElementById('phone_chck').checked){
                
                 console.log(document.querySelector('phone_chck').value)
            }
           else{
                // genderr= document.getElementById('Gender2').value;
                console.log('else')
           }


    //select

    obj.dept= document.querySelector('#select').value
   
    
    console.log('submit',obj)
     vali(obj)
     
})


function post(obj){
    fetch('https://jsonplaceholder.typicode.com/comments',{
        method:'post',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(obj),
    })
    .then(res=>{res.json()})
    .then(resp=>{console.log(resp)})
    .catch(err=>{console.log(err)})
}
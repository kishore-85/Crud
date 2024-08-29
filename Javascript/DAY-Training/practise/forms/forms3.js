
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
    let obj={};
    let genderr;
    let check_box = [];
    obj.fname= document.getElementById('fname').value;
    obj.email= document.getElementById('email_id').value;   
    obj.contact_type = check_box;

    //radio-btn
   document.getElementsByName('Gender').forEach(item=>{
    if(item.checked === true){
       obj.gender=item.value
    }
   })


    //check-box:
      document.querySelectorAll('[type="checkbox"]').forEach(item => {
          if(item.checked === true){
              check_box.push(item.value)
              console.log(item.value,'check-box val')
          }
      })

    //select

    obj.dept= document.querySelector('#select').value
   
    
    console.log('submit',obj)
    post(obj)
    //  vali(obj)
     
})
//fetch('https://api.spacexdata.com/v3/launches')
//https://jsonplaceholder.typicode.com/comments

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


function get_data(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(resp=>{
        console.log(resp)
    })
    .catch(err=>{
        console.log(err)
    })
}
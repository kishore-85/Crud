
// method-1"
// let ip= document.getElementById('ip')

// function add(){
//   console.log(ip.value)
//     let div1 = document.createElement('div')

//     div1.setAttribute('id','id-div')
//   let ul= document.createElement('ul');
  
//   let li =document.createElement('li');
//   li.setAttribute('id','li')
//   li.innerText=`${ip.value}`
//   ul.append(li);
//   div1.append(ul)
//   document.body.append(div1)
// }


//method-2

let input= document.getElementById('input');

let button= document.getElementById('add');

let todo_list= document.getElementById('todo-list')

let todos =[];

button.addEventListener('click',()=>{
     
     todos.push(input.value)
     console.log(todos,'todos') 
   
    add(input.value)

   
})

function add(e){
  let p=  document.createElement('p');
   p.innerText=`${e}`;
   todo_list.appendChild(p);  

   p.addEventListener('dblclick',()=>{
     todo_list.removeChild(p)
     console.log('log',e);
     remove(e)
     
   })
}


function remove(e){
  console.log(e,'rmve')
   let index= todos.indexOf(e)
   if(index>=0){
     todos.splice(index,1);
    //  todo_list.removeChild(p)
     console.log(todos,'aftr splice')
   }
   

 }


 //---method -3----//
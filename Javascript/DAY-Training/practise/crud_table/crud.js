let body = document.getElementById('body')
let btn =document.getElementById('btn')
let tr;
let user;
let data_arr = [] ; 
let delete_fname_arr = [];

document.getElementById('btn_save').style.display="none";

btn.addEventListener(('click'),(e)=>{
     e.preventDefault()
     add(e)
})


function add(e){   
   let obj={};
   obj.fname = document.getElementById('fname').value;
   obj.email= document.getElementById('email').value;
   data_arr.push(obj)
   console.log(data_arr)
   create(data_arr)
}

function create(){
     remove_dom()
   // let create_data = [];
   // create_data =  JSON.parse(JSON.stringify(e)) ;
      data_arr.forEach((x) => {

         let tr= document.createElement('tr');
         tr.setAttribute('id','list_tr')
         tr.innerHTML = 
            `<td><input type='text' id="td_fname" class="inp_type" value="${x.fname}" disabled ></td>
             <td><input type='text' id="td_email" class="inp_type" value="${x.email}" disabled ></td>
             <td><button class="btn" id="btn_edit" onclick="edit('${x.fname}')">Edit</button></td>
             <td><button class="btn" id="btn_save" onclick="save()">save</button></td>
             <td><button class="btn" id="btn_Delete" onclick="Delete('${x.fname}')">Delete</button></td>`
         body.appendChild(tr)
   });
  
   
}
function edit(e){   
   console.log('edit c',e)
   user = e;
   document.getElementById('btn').style.display="none";
   document.getElementById('btn_save').style.display="block"; 
   // rowEdit_enable() 
   row_edit()
}


function savee(){   

   document.getElementById('btn').style.display="block";
   // document.getElementById('td_fname').setAttribute('disabled')
   document.getElementById('btn_save').style.display="none";

   data_arr.forEach((val) => {
     if(val.fname == user){
        val.fname = document.getElementById('fname').value;
        val.email =document.getElementById('email').value;
     }
   return val;
});
  console.log('data array',data_arr)  ;
  remove_dom();
  create();
}


function Delete(e){
  delete_fname_arr = data_arr.map((val)=>{
       return val.fname;
   })

  let index =  delete_fname_arr.indexOf(e)
  data_arr.splice(index,1)
  remove_dom()
  create();
}

function remove_dom(){
   document.querySelectorAll('tr').forEach((element)=>{
      console.log('element',element)
      if(element.id=="list_tr"){
         element.remove();
      }     
   })
}

// function rowEdit_enable(){
//    console.log(user,'user')
// }
function row_edit(){
   document.querySelectorAll('tr').forEach((element)=>{
     element.addEventListener('click',(x)=>{
      x.setAttribute('disabled',false)
     })
   })
}
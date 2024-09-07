//AJAX- asynchronous javascript xml

//sync => after completing 1st task and then only it will go to next;

//Async => Non-blocking...

//javascript is an synchronous language
          

// Ajax will load only particular content.

//API ==> application programming interface






// fetch('https://api.spacexdata.com/v3/launches')
// .then(res=>{
//     console.log('res',res)                                     //step--1
// })



// fetch('https://api.spacexdata.com/v3/launches')
// .then(res=>{
//     console.log('res',res)                                     //step--2
// }).catch(err=>{
//     console.log('err',err)
// })



let a = document.getElementById('rock')

let get=[]

fetch('https://api.spacexdata.com/v3/launches')                 //step--3
.then(res=>res.json().then(resp=>{
    console.log('resp',resp) 

  for(let i of resp){    
        console.log(i.details)
        // document.getElementById('rock').innerHTML+=`<div>${i.details} &&&    ${i.
        //     launch_date_unix}`
        get.push(i.details) 
  }
                                                                                          
})).catch(err=>{
    console.log('err',err)
})



function myfun(){
    for(let i of get){
        console.log(i,'iiii')
        document.getElementById('rock_2').innerHTML+= `<p>${i}</p>`
    }
}


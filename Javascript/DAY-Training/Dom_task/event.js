 function myFun(){
    console.log('double click')
}

function pageLoad(){
    console.log('load')
}

function mouse_Hover(){
    // console.log('hover')
    document.getElementById('mou').innerHTML="hover success"
}


//add event listener

//Element.addEventListener(event,function,useCapture)

document.getElementById('h2-event').addEventListener('click',(evt)=>{
    console.log('event-fun-clicked',evt,evt.target)
    add(10,20)
})

let result;
function add(a,b){
    console.log(a+b);
    result = a+b;
   return result;
}
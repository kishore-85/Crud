//--------------Event-bubbling-----------------//

function my_click(event){
     console.log('div',event.target,'div-2',event.currentTarget)
}

function span_click(e){
    console.log('span',e.target,'span-2',e.currentTarget)
    e.stopPropagation();
}

function button_click(e){
    console.log('btn',e.target,'btn-2',e.currentTarget);
    e.stopPropagation();
}

//add event listener method

// document.getElementById('div-bubble').addEventListener('click',(e)=>{
//     console.log('div-bubble',e.target)
// })

// document.getElementById('span-bubble').addEventListener('click',(e)=>{
//     console.log('span-bubble',e.target)
// })


//-----------Event-capturing-------------//

document.getElementById('div_Capture').addEventListener('click',(e)=>{
    console.log('even-capture',e.target)
},true)

document.getElementById('span-capture').addEventListener('click',(e)=>{
    console.log('span-capture',e.target)
},true)


function myclk(event){
event.preventDefault()
}
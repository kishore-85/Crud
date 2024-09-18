let count = 0;
document.getElementById('p').innerText = `${count}`
function increment(){
   count= ++count;
   document.getElementById('p').innerText = `${count}`
}


function Decrement(){
   count = --count;
   document.getElementById('p').innerText = `${count}`
}
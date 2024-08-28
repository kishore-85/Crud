// let obj={};
// function my_submit(event){
//     event.preventDefault();
//     // console.log('mysubmit works')
   
//     obj.fname = document.getElementById('fname').value;
//     obj.age = document.getElementById('age').value;  
//     postt();


// }

// const post = {
//     method:'post',
//     data: JSON.stringify(obj)
// }


// function postt(){
//      fetch('https://jsonplaceholder.org/comments')
//     .then(res=>{res.json()})
//     .then(data=>{console.log(data)})
//     .catch(err=>{console.log(err)})
// }

let obj = {};

function my_submit(event) {
    event.preventDefault();
   
    obj.fname = document.getElementById('fname').value;
    obj.age = document.getElementById('age').value;  
    postt();
}

function postt() {
    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
    .then(res => res.json())  // Fix: Return the promise from res.json()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}


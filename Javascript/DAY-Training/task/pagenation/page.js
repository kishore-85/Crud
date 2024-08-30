let data = []
let div = document.getElementById('div')
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(resp=>{
    for(let i of resp){
        data.push(i)
    }
})
.catch(err=>console.log(err))
// console.log(data)
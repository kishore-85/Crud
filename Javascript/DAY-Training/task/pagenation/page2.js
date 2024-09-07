let data = []
let div =document.getElementById('div')
let pages;
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(resp=>{
    console.log(resp,'resp')    
    for(let i of resp){
        data.push(i)
    }
})
.catch(err=>{
    console.log(err)
   
})




setTimeout(() => {   
    let len= []
    data.forEach(x => {
       len.push(x.id)       
    });
   length = len.length;  
   pages = length/10;
   page(); 
 
}, 2000);


let page= ()=>{
    for(i=1;i<=pages;i++){
        let a = document.createElement('a');
        a.setAttribute('id','link')
        a.setAttribute('href',`#`)
        a.innerText= i;
        div.appendChild(a)
    }
}

setTimeout(() => {
    document.querySelectorAll('a').forEach(e => {
        e.addEventListener('click',(e)=>{        
          console.log('clicked')
          createpage(e.target.innerText)
        })
  });
  
}, 2500);

let items;
let ftr_data = [];
function createpage(e){
    //   console.log(e,'e')
    //   for(i=0;i<data.length;i++){
    //      for(j=i;j<j+5;j+5){
    //         console.log(data[j],'data of j')
    //      }
    //   }
    
}

setTimeout(() => {
    console.log(d,'d')
}, 5000);
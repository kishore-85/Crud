let data = [];
let fltr_data = [];
let div1 =document.getElementById('div')
let pages;
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(resp=>{     
    data = JSON.parse(JSON.stringify(resp))    
})
.catch(err=>{
    console.log(err)   
})
setTimeout(() => {     
   length = fltr_data.length;   
   page(); 
 
}, 3000);


let page= ()=>{   
    for(i=0;i<length;i++){       
        let a =  document.createElement('a')
        a.innerHTML = `<a id="link" href="#" onclick="createpage(${i})"> ${i} </a>`
        div1.appendChild(a);     
     }
    }
   
function createpage(e){  
   console.log('clicked',e)
      let a = parseInt(e);     
      let get_arrid;     
     
   
      for(let i in fltr_data){
           if(i==a){                                             //finding starting id;
            get_arrid =  fltr_data[i].id           
           }
      }       
      let b = get_arrid+5;    

    //   for(let i=get_arrid-1;i<b-1;i++){          
    //     let p =  document.createElement('p');                  //traditional for loop method
    //     p.innerText=`${data[i].id}) ${data[i].title} `
    //     div1.appendChild(p)  
    //  }

    let filtered_data = data.filter((val)=>{                      //filter method
        return val = val.id>= get_arrid && val.id <b
    })
   
    filtered_data.forEach((x) => {
        let p =  document.createElement('p');                  
            p.innerText=`${x.id}) ${x.title} `
            div1.appendChild(p) 
    });
      
    
}



setTimeout(() => {
    for(let i=0;i<data.length;i+=5){
           fltr_data.push(data[i]) 
    }
    console.log('pushed data',fltr_data)
}, 2000);
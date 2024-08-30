let a;
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
  

function pagenation(){
  for(let i=0;i<10;i++){
   let a_tag= document.createElement('a')
   a_tag.classList.add('btn')  
   a_tag.innerText = i;

  //  a_tag.setAttribute('href',`./pagenation/page.html`)
  a_tag.setAttribute('href',`#${i}`)
  a_tag.setAttribute('id','click')  
  

   div.appendChild(a_tag)
   
  }
}
pagenation()


document.querySelectorAll('a').forEach(e => {
      e.addEventListener('click',(e)=>{        
        
        createpage(e.target.innerText)
      })
});

function pre(){
  if(a>0){
    --a;  
    createpage(a)
  }  
}

function next(){
  if(a>0){
    ++a;
    createpage(a)
  }   
}

function createpage(e){
  console.log('page created',e)
  a =parseInt(e)
  let b;
  switch(a){
    case (0):b = data.filter((val)=>{
       return val.id<10
    });
    break;
    case (1):b = data.filter((val)=>{
      return val.id>=10 && val.id <20
    });
    break;
    case (2):b = data.filter((val)=>{
      return val.id>=20 && val.id <30
    });
    break;
    case (3):b = data.filter((val)=>{
      return val.id>=30 && val.id <40
    });
    break;
    case (4):b = data.filter((val)=>{
      return val.id>=40 && val.id <50
    });
    break;
    case (5):b = data.filter((val)=>{
      return val.id>=50 && val.id <60
    });
    break;
    case (6):b = data.filter((val)=>{
      return val.id>=60 && val.id <70
    });
    break;
    case (7):b = data.filter((val)=>{
      return val.id>=70 && val.id <80
    });
    break;
    case (8):b = data.filter((val)=>{
      return val.id>=80 && val.id <90
    });
    break;
    case (9):b = data.filter((val)=>{
      return val.id>=90 && val.id <100
    });
    break;
  }
  console.log(b)


  b.forEach((x)=>{
    let ul = document.createElement('ul');
    let li =document.createElement('li');
    li.innerText = `${x.id} and titile  ${x.title}`
    ul.appendChild(li)
    div.appendChild(ul)
  })
}
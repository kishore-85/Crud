let data=['kowsik','praveen','kavin pradeep','kulops','naveena','ram moorthy','jeevan sanjay','mano shri','kiruba sri']


let ul=document.getElementById('ul')
let checked =false;
let arr=[];

function my_fun2(event){
    let check =event.target.checked; 
    console.log(check,'check',event.target.checked)
    if(check==true){
        checked=true;
    }
    else{
        checked=false;
    }
     console.log(checked,'checked')
}


function my_fun(event){
    let a = event.target.value.trim().toLowerCase();         
   
    
    // let c=document.getElementById('checkbox').checked
   
   
    let ul_li;
    
    console.log(arr.length,'length')
    // if(arr.length>0){
    //     ul.remove()
        
    //     arr=[];
    //     console.log(arr,'in arr-lenght class')
      
    // }

    if(arr.length>=0 ){
    //    for(let i of arr){
    //     // ul.removeChild(ul_li)
    //     ul.removeChild('li')
    //    }       
        arr=[]   
    }
    
    if(checked==true){
        console.log('if')
        for(let i of data){     
            console.log(a,'a')      
           if(i.startsWith(a)&&(!a=='')){
               arr.push(i)
              
           }
        }
       
         for(let item of arr){   
                       
          ul_li=  document.createElement('li');
          ul_li.innerText=item;
          ul.appendChild(ul_li)
         }
      
    }
    else{
        console.log('else')
       for(let j of data){
        if(j.includes(a)&&(!a=='')){
            console.log(j)
            let lii=document.createElement('li');
            lii.innerText=j;
            ul.appendChild(lii)              
        }
       }        
       
    }       
      console.log(arr,'arr val')
    }

   
   



   
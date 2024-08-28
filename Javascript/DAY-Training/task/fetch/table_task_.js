let get_data=[]
fetch('https://api.spacexdata.com/v3/launches')
.then(res=>res.json().then(resp=>{
    console.log(resp)
    for(let item of resp){
        get_data.push(item)
    }
}
    
))
.catch(err=>
    {console.log(err)}
    )


 let div=   document.getElementById('box1')

 function my(){
    // for(let i of get_data){
    //     let li=document.createElement('p');
    //     li.innerText=i.flight_number;
    //     ul.appendChild(li)
    // }

   

    //table_creation

        let table=   document.createElement('table')
        let thead=  document.createElement('thead')
        let tbody=  document.createElement('tbody')



        //t-head

      let th_tr=  document.createElement('tr');
      let th_th1=  document.createElement('th');
      let th_th2=  document.createElement('th');
      let th_th3=  document.createElement('th');
      
      
        let th_keys =Object.keys(get_data[0])
        let th_values=Object.values(get_data)

         th_th1.innerText="mission_name";
        
         th_th2.innerText="launch_year";
         th_th3.innerText="rocket";    
           

      th_tr.appendChild(th_th1);
      th_tr.appendChild(th_th2);
      th_tr.appendChild(th_th3);
      thead.appendChild(th_tr)

     //t-body
  
     for(let item of get_data){
      let tr = document.createElement('tr')
      let td1 =document.createElement('td')
      let td2 = document.createElement('td')
      let td3= document.createElement('td')

      console.log(item)
      td1.innerText=item.mission_name;      
      td2.innerText=item.launch_year
      td3.innerText=item.rocket.rocket_name




      console.log(item.rocket,'rock')
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tbody.appendChild(tr)
     }

      //appehed
      
      table.appendChild(thead)
      table.append(tbody)
      div.appendChild(table)
    }
 
 
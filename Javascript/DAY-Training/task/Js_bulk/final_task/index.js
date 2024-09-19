
 let interval1;
 let interval2;
 let interval3;
 let interval4;

 let unitval = 0;
 let light_unit = 0;
 let ac_unit = 0;
 let washing_unit = 0;
 let sum_unit = 0;
 let sum_price = 0;
function create(e){   
    let ul =  document.getElementById('ul')
    let li = document.createElement('li')
    li.setAttribute('id','li')

    if(e == 'iron'){
        console.log('iron create')
        li.innerHTML = `<img src="./iron.webp" width="120px" height="100px" class="li_row_img">
        <input type="checkbox" class="li_row postion_cls_checkbox" onclick="count_ironbox(event)">
        <input type="text" id="sec" class="li_row postion_cls_sec">
        <input type="text" id="unit" class="li_row postion_cls_rate">
        `
    }
    else if(e=='light'){
        console.log(' create light')
        li.innerHTML = `<img src="./light.webp " width="120px" height="100px">
        <input type="checkbox" class="li_row postion_cls_checkbox" onclick="count_light(event)">
        <input type="text" id="light_sec" class="li_row postion_cls_sec">
        <input type="text" id="light_unit" class="li_row postion_cls_rate">`
    } 
    else if(e=='AC'){
        console.log(' create  AC')
        li.innerHTML = `<img src="./Ac.webp" width="120px" height="100px" class="li_row">
        <input type="checkbox" class="li_row postion_cls_checkbox" onclick="count_AC(event)">
        <input type="text" id="ac_sec" class="li_row postion_cls_sec">
        <input type="text" id="ac_unit" class="li_row postion_cls_rate">`
    }  
    else if(e=='washing_machine'){
        console.log('create washing_machine')
        li.innerHTML = `<img src="./washingmachine.webp" width="120px" height="100px" class="li_row">
        <input type="checkbox" class="li_row postion_cls_checkbox" onclick="count_washing(event)">
        <input type="text" id="washing_sec" class="li_row postion_cls_sec">
        <input type="text" id="washing_unit" class="li_row postion_cls_rate">`
    }  
    ul.appendChild(li)

}


function count_ironbox(event){
    // console.log('count works',event.target.checked);
    let e = (event.target.checked == true)?true : false;
    let count = 0;    

    if(e == true){
      interval1 =  setInterval(() => {
            count++;            
            document.getElementById('sec').value = `${count}`;
            unit_iron(count)
            // console.log('true',count)
        }, 1000);
    }
    else{        
        clearInterval(interval1);
        // console.log('false',count);
    }
}

function unit_iron(e){       
    if(e%5==0){
        unitval++;
        document.getElementById('unit').value = `${unitval}`;
        total_unit()
    //    console.log('price-rate',unitval)
    }
}


//2nd portion -- light
function count_light(event){
    // console.log('count works',event.target.checked);
    let e = (event.target.checked == true)?true : false;
    let count = 0;    

    if(e == true){
      interval2 =  setInterval(() => {
            count++;            
            document.getElementById('light_sec').value = `${count}`;
            unit_light(count)
            // console.log('true',count)
        }, 1000);
    }
    else{        
        clearInterval(interval2);
        // console.log('false',count);
    }
}

function unit_light(e){       
    if(e%8==0){
        light_unit++;
        document.getElementById('light_unit').value = `${light_unit}`;
        total_unit()
    //    console.log('price-rate',unitval)
    }
}


//3rd portion

function count_AC(event){
    // console.log('count works',event.target.checked);
    let e = (event.target.checked == true)?true : false;
    let count = 0;    

    if(e == true){
      interval3 =  setInterval(() => {
            count++;            
            document.getElementById('ac_sec').value = `${count}`;
            unit_AC(count)
            // console.log('true',count)
        }, 1000);
    }
    else{        
        clearInterval(interval3);
        // console.log('false',count);
    }
}

function unit_AC(e){       
    if(e%3==0){
        ac_unit++;
        document.getElementById('ac_unit').value = `${ac_unit}`;
        total_unit()
    //    console.log('price-rate',unitval)
    }
}


//4th portion 

function count_washing(event){
    // console.log('count works',event.target.checked);
    let e = (event.target.checked == true)?true : false;
    let count = 0;    

    if(e == true){
      interval4 =  setInterval(() => {
            count++;            
            document.getElementById('washing_sec').value = `${count}`;
            unit_washing(count)
            // console.log('true',count)
        }, 1000);
    }
    else{        
        clearInterval(interval4);
        // console.log('false',count);
    }
}

function unit_washing(e){       
    if(e%4==0){
        washing_unit++;
        document.getElementById('washing_unit').value = `${washing_unit}`;
        total_unit()
    //    console.log('price-rate',unitval)
    }
}

function total_unit(){
    sum_unit = washing_unit+unitval+ac_unit+light_unit;
    document.getElementById('total_unit').innerText = `${sum_unit}`
    price()
}

function price(){
   if(sum_unit%5==0){
       sum_price++;
    document.getElementById('total_price').innerText = `${sum_price}`
   }
}
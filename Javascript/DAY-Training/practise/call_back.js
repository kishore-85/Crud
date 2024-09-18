function sum(){                      //call - back example-1
   return 100;
}

function total(sumvalue){
    let result = sumvalue +18;   
    return result;
}


console.log('total',total(sum()))


function total_items_sum(){
     let t_shirt = 220;
     let saree = 499;
     return t_shirt + saree;
}

let order_details = function (sumval){
     let  delivery_charge = 30;
     let gst = 18;
     console.log('op',sumval + delivery_charge + gst)
     return sumval + delivery_charge + gst;
}

// console.log('order_details',order_details(total_items_sum()))


//call-back chaining; [have 2+ more functions in chaining]

let sales_order = function(values,fun){
     return console.log(fun(values));
}

function order_date(val){
     let order_date = val +' '+ new Date();
         return customers(order_date)
}

function customers(val){
     let customer;
     return customer = "kishore"+' '+ val;
}




//promise - //                                        //ex -1

let prmse = new Promise( (res, rej)=>{
     // res('success'); 
     rej('failure')
})

prmse.then(console.log)
.catch(console.error)
                                                    //ex-2 [with time out]

let prmse2  = new Promise((res,rej)=>{
     setTimeout(() => {
          // res('success');
          rej('failuree');
     }, 1000);
})
prmse2.then(console.log)
.catch(console.error)                             

                                                    //ex-3
     
let prmse3 = new Promise ((res,rej)=>{
     setTimeout(() => {
          // res(10);
          rej('cal failed')
     }, 1500);
})     

prmse3.then(x=> x+18).then(console.log)
.catch(console.error)
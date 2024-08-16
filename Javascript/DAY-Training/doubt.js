//-----string-----//

// if(15>"10"){
//     console.log('greater')
// }
// else{
//     console.log('not greater')
// }

              // ----------------------------nested object access-----------------------//
// let students =[
//     {
//     fname:'kishore',
//     age:24,
//     contact:{
//         ph:885940968,
//         email:'kishore@gmail.com'
//     }},
//     {
//         fname:'prvn',
//         age:22,
//         contact:{
//             ph:900940968,
//             email:'prvn@gmail.com'
//         }},
//         {
//             fname:'naveen',
//             age:21,
//             contact:{
//                 ph:7885940968,
//                 email:'naveen@gmail.com'
//             }}
    

// ]

// for(let i of students){
//     console.log(i.fname+' & '+ i.contact.email)
// }
                //------------------------------------Nested array access----------------//




//[-----example:1----------]

// let employees = [
//     {
//         fname:'kishore',
//         domain:'fornt-end',
//         wrk_history:[
//             {cmpyname:'hcl',salary:30000},
//             {cmpyname:'infoys',salary:40000}
//         ]
//     },
//     {
//         fname:'prvn',
//         domain:'fornt-end',
//         wrk_history:[
//             {cmpyname:'bts',salary:10000},
//             {cmpyname:'infoys',salary:20000}
//         ]
//     },
//     {
//         fname:'naveen',
//         domain:'fornt-end',
//         wrk_history:[
//             {cmpyname:'jio',salary:20000},
//             {cmpyname:'airtel',salary:25000}
//         ]
//     },

// ]

// for(i=0;i<employees.length;i++){
//     console.log(employees[i].fname);
//     console.log(employees[i].wrk_history[1]);
//     // console.log(employees[i].fname+" & "+employees[i])
// }


// for(i=0;i<employees.length;i++){
//     console.log(employees[i].wrk_history);
//     for(j=0;j<employees[i].wrk_history.length;i++){
//         console.log(employees[j],'j')
//     }
// }

// *// for(let i of employees){
//     // console.log(i.wrk_history)
//     for(let j of i.wrk_history){
//         console.log(i.fname +' worked in  '+j.cmpyname)
//     }
// }



//[-----example:2----------]


let employees = [
    {
        custname:'kishore',
        email:'kish@gmail.com',
        purchase:[
            {status:true,amount:50000},
            {status:false,amount:10000},
            {status:true,amount:500},
            {status:true,amount:1500},
            {status:false,amount:20000}
        ]
    },
    {
        custname:'prvn',
        email:'prvn@gmail.com',
        purchase:[
            {status:false,amount:50000},
            {status:false,amount:500000}
        ]
    },
    {
        custname:'naveen',
        email:'naveen@gmail.com',
        purchase:[
            {status:true,amount:50000},
            {status:true,amount:250000}
        ]
    },

]


// for(i=0;i<employees.length;i++){
//     console.log(employees[i].purchase)
//     for(j=0;j<purchase.length;i++){
//         console.log('j',j)
//     }
// }


// for(let i of employees){
//     // console.log(i)
//     // console.log(i.purchase)
//     for(let j of i.purchase){
//         // console.log(j);//---iterating current object
//         console.log(j.status)//--iterating obj with keyname
//         // console.log(i.custname+' '+j.status+' '+j.amount)
//         // if(j.status==true){
//         //     console.log(i.custname +' '+j.amount)               ///----------------Estimated output
//         // }
//     }
// }


//........................map........................//

// let kk =employees.map((x)=>{
//     // console.log(x);
//     // console.log(x.purchase);
//     let b = x.purchase.map((y)=>{
//         // console.log('y',y);
//         console.log(x.custname+' '+y.amount+' '+y.status)
//         // console.log(x.custname+' '+y.status)
//     })
// })
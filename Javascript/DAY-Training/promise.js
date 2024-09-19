//promise -ES-6

// let prmse = new Promise(
//     function (resolve,rej){
//         setTimeout(() => {
//             // resolve('success');
//             rej('failure')
//         }, 2000);
//     }
  
// )
// prmse.then(console.log(prmse))

//2 -type

// const p2 = val=> new Promise((resolve,reject)=>{
//     setTimeout(() => {
//          resolve(val+10)
//     }, 2000);
// })

// p2(2).then(x=>x+20).then(y=>y+30).then(console.log)

//3promise 
  let p3= new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve('suceess p3')
          reject('reject p3')
      }, 1000);
  })


  let p4= new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve('suceess p4')
        reject(' p4')
    }, 1500);
})
// Promise.all([p3,p4]).then(console.log).catch(console.error)
// Promise.allSettled([p3,p4]).then(console.log).catch(console.log)
Promise.race([p3,p4]).then(console.log).catch(console.log)




//call-back  [this is call back chain example]

const f1 =((val,fun)=>{
    return fun(val+10);
})


const callback =(val)=>{
    return callback2 (val+20)
}

const callback2 =(val)=>{
    return (val+30)
}

console.log(f1(2,callback),'cc')




// function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const response= false;

//             if(response){
//                 resolve('Data fetch success')
//             }
//             else{
//                 reject('data failed')
//             }
//         }, 2000);
//     })
// }


// async function getdata(){
//     try{
//         const result =  await fetchdata();
//         console.log(result)
//     }
//     catch(error){
//           console.log('error',error)
//     }
//    finally{
//        console.log('operation is successful')
//    }

   
// }


// getdata()
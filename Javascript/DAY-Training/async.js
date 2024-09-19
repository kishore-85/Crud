//async keyword used before function declaration it always return a promise.
//async function execution pass untill the promises is settled or rejected
// function myfun(){
//     return 1;
// }

// console.log(myfun(),'myfun1')


// async function myfun2(){
//     return 1                                 //1
// }

// console.log(myfun2(),'myfun2')



async function myFun(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve(1,'promise success');
            reject('failure')
        }, 3000);
    })
}

// console.log(myFun())                      //to acheive api call we use await or then method

// async function await_ex(){
//     const output = await myFun();
//     console.log(output,'op')              //2
// }

// async function awaitfun2(){
//     myFun().then(console.log)
//     .catch(console.error)
// }
// await_ex()
// awaitfun2()

// async function increment(res){
//     return new Promise ((resolve)=>{
//         setTimeout(() => {
//             resolve(res+1)
//         }, 2000);
//     })
// }

// async function awaitfun(){
//       myFun().then(res=>increment(res))
//       .then(res=>increment(res))
//       .then(res=>increment(res))
//       .then(console.log)
//       .catch(console.log)

// }

// awaitfun()

// async function awaitfun(){
// try{
//     const v1= await myFun()

//     const v2 = await increment(v1)

//     const v3 = await increment(v2)

//     const v4 = await increment(v3)

//     console.log(v4,'v4')
// }
//    catch(error){
//        console.log('error',error)
//    } 
// } 

// awaitfun();


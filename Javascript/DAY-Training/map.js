//Map,filter,reduce will return new array.
   let arr =[1,2,3,4,5];

//    let sqr_arr = arr.map((val)=>{
//        return val*val;
//    })

// let sqr_arr = arr.map((val)=>{    
//            return (val%2==0);
//        })

//    console.log(sqr_arr,'map')

//map : will return the same number of elements

//filter ==> filter some values
// let result;
// let filter_arr =arr.filter((val)=>{
//     return (val%2==0)
// })
// console.log(filter_arr,'filter')

// let filter_arr =arr.filter((val)=>val%2==0).map((val)=>val*val)

//reduce==> Convert an array to single value or single object;

// let reduce_arr =arr.reduce((result,currentval)=>{
//     return result+currentval;                                   //Ex-1
// },0)
// console.log(reduce_arr,'reduce')


let employee =[{fname:'kishore',salary:20000},
{fname:'ram',salary:15000},
{fname:'vishnu',salary:15000},
{fname:'sam',salary:18000}]                                    //Ex-2

// let total_sal= employee.reduce((total,currentval)=>{
//         return total+currentval.salary           
// },0)

// console.log(total_sal,'emp')



let emp = employee.reduce((result,val)=>{
               if(val.salary in result){
                result[val.salary]++
               }

               else{
                result[val.salary]=1
               }
               return result;
},{})

console.log(emp,'emp reduce')
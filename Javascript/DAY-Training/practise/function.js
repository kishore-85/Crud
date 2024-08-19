function my_fun(e){
    let a =[];
    a.push(e)
//     console.log(arguments)
for(i=0;i<arguments.length;i++){
    console.log(arguments[i],'i')           //Default argument array
}

for(i=0;i<a.length;i++){
    console.log(a[i],'i')
}
}

let clossure = function(){
    let state=0;

   return ()=>{
       state=state+1;                         //closure function syntax;
       return state;
   }
}


// let a =[10,20,30,40,50];
// console.log(a,'bfr')
// a.forEach((x) => {
//    x=x*x;
//    return x;
//    console.log(x)                               //for-eaach
// });
// console.log(a,'aftr')


// let a =[10,20,30,40,50];

// let b = a.map((x)=>{
//     x=x*x;
//     return x;                                       //map  ex-1
// })

// console.log(a,'a-aftr');
// console.log(b)


let employes = [{
    fname:'aravindh',
    age:30,
    gender:'male',
    salary:18000
},
{
    fname:'sam',
    age:27,
    gender:'male',
    salary:15000
},
{
    fname:'vishnu',
    age:32,
    gender:'male',
    salary:30000
},
{
    fname:'priya',
    age:23,
    gender:'fe-male',
    salary:18000
},
{
    fname:'ram',
    age:27,
    gender:'male',
    salary:15000
}
] 
// let modified_data = employes.map((val)=>{             //map---Ex2
//     let data= val.fname +' '+val.salary;
//     return data;
// })

// console.log(modified_data)


// let modified_data_2 = employes.map((val,index)=>{
//     return{
//         fname:val.fname,                                //map_Ex-3[updated data]
//         age:val.age,
//         gender:val.gender,
//         salary:val.salary+2000
//     }
// })

// console.log(modified_data_2)

//-----------Filter------------//
// let name_data="priya";
// let filter_data = employes.filter((value,index)=>{
// return value.fname.includes(name_data)                         //Filter_ex-1 [finding by name]
// })

// console.log(filter_data)
// let c;
// let filter_salary =employes.filter((value)=>{   
    
//     return value.salary<20000                                    //filter_ex-2 [filtering data by condition]
// })

// console.log(filter_salary,'salry')


//--------Reduce------------//


// let arr=[10,20,30,40,40]

// let arr3= arr.reduce((total,val)=>{
//     total=total+val;
//     return total;                                                   //Summing an array
// },0);

// console.log(arr3,'k')

// let data_sum_count = employes.reduce((previous,current_val)=>{
// if(current_val.age in previous){
//     previous[current_val.age].push(current_val);
// }
// else{                                                                //Sum & grouping based on employees age 
//     previous[current_val.age]=[current_val];
// }
// return previous;
// },{});

// console.log(data_sum_count,'reduce')



//Sorting

// let arr_sort = employes.sort((a,b)=>{                                //Sorting an array based on employees age
//    return a.age-b.age;
// })
// console.table(arr_sort)


// splice [It modifies the original array & also return new array]

// let arr_splice = employes.splice(1);
//        console.log(employes,'orginal_array');                        //splice Ex-1
//        console.log(arr_splice,'new array')

// let arr_splice2 =employes.splice(2,1)
//           console.log(employes,'orginal_array');                     //splice Ex-2
//           console.log(arr_splice2,'new array')

// let arr_splice3 = employes.splice(2,1,{fname:'karthik',age:40})
//         console.log(employes,'orginal_array');                       //splice Ex-3
//         console.log(arr_splice3,'new array')

// Slice [It will not impact the original array]



// let arr_slice= employes.slice(1)
//           console.log(employes,'orginal_array');                    //slice ex1
//           console.log(arr_slice,'new array')

// let arr_slice2 =employes.slice(2,5)
//           console.log(employes,'orginal_array');
//           console.log(arr_slice2,'new array')                          //slice ex1



let objvalues ={
    fname:'kishore',
    ph:8870435248,
    age:25
}




  let formk ={
      fname:'surya',
      age:23,
      city:'krr',
      submitt:function(){                                    //calling function with object name  (or)

          console.log('k')                                  // Setting the object values to the below function 
          console.log(this);
          console.log(this.fname+' '+this.city)
      }
  }
  
  


// console.log(this)


let arr=[{fname:'kishore',age:25,dob:2000},
{fname:'kavin',age:20,dob:2002},
{fname:'ram',age:28,dob:1999}]

let result= arr.every((val)=>{                           //every & some
    return val.dob>=2000
})
console.log(result,'every')

let result1 = arr.find((val)=>val.age==20)               //find
console.log(result1,'result1')

let find_index = arr.findIndex((val)=>val.age==20)        //find_index
console.log(find_index,'find_index')

let includes_val= arr.includes((val)=>val.dob===2000)
console.log(includes_val,'includes_val')
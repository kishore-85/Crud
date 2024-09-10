let obj_A = {fname:'kishore',age:25};  //normal - [before using shallow copy]

let obj_B = obj_A

obj_B.salary = 30000

console.log('a',obj_A)
console.log('b',obj_B)                 // to overcome we use clone method

//spread operator

let obj_c = {...obj_A}
obj_c.skol = 'kec'

console.log('a',obj_A)
console.log('c',obj_c) 


//object assign

let obj_4 = Object.assign({},obj_A)
obj_4.city ="krr"
obj_4.age=30;
console.log('a',obj_A)                //model 1
console.log('4',obj_4) 

let obj_5 = Object.assign(obj_A,obj_4)
console.log('target a',obj_A)        //model-2
console.group('object 4',obj_4)
console.log('obj 5 variable',obj_5)


//clone array

let arr1 = [5,10,15,20,25,30,35,40,45,50]

//spread operator

let arr2 = [...arr1];
arr2.push(60);
console.log('arr1',arr1)
console.log('arr2',arr2)

//slice out

let arr3 = arr1.slice()
arr3.push(61);
console.log('arr1',arr1)
console.log('arr3',arr3)

//concat

let arr33 = [].concat(arr1)
arr33.push(101)
console.log('arr1',arr1)
console.log('arr33',arr33)

//array from

let arr4 = Array.from(arr1)
arr4.push(63)
console.log('arr1',arr1)
console.log('arr4',arr4)

//json parse & json stringfy

arr5 =  JSON.parse(JSON.stringify(arr1)) 

arr5.push(65)
console.log('arr1',arr1)
console.log('arr5',arr5)


//deep copy

let employee = {
    fname:'raju',
    age:27,
    role:'software developer',
    contact:{
        phone:890906778,
        email:'raju@gmail.com',  
        address:{
             city:'erode',
             pincode:678908,
             state:'tamil nadu'
        }      
    },
   salary:30000
    
}

let b = {...employee,contact:{...employee.contact}}


b.contact.email = "ramesh@gmail.com"

console.log('employee',employee);
console.log('b',b)

let employee_Arr =[
    {
        fname:'raju',
        age:27,
        role:'software developer',
        contact:{
            phone:890906778,
            email:'raju@gmail.com',  
            address:{
                 city:'erode',
                 pincode:678908,
                 state:'tamil nadu'
            }      
        },
       salary:30000,
       education:[
           {insitution:'kec'},
           {clge:'bannari'}

        ]
    }
    ,
    {
        fname:'geetha',
        age:23,
        role:'software tester',
        contact:{
            phone:906779090,
            email:'geetha@gmail.com',  
            address:{
                 city:'namakkal',
                 pincode:690844,
                 state:'tamil nadu'
            }      
        },
       salary:20000,
       education:[
        {insitution:'bp'},
        {clge:'kumaraguru'}

     ]
        
    }
    
]
let copy_employee_arr = [...employee_Arr]

let c= copy_employee_arr.map((x)=>{
     return x.salary= x.salary+1500;                    //ex-1      [original array value changing - due to 2nd level]
})
let d = copy_employee_arr.push(['kec','llv'])           //ex-2      [1st level does't change]

console.log('employee arr',employee_Arr);
console.log('copy arr',copy_employee_arr);
console.log('c',c)                                     // to overcome nested we use deep copy


let e = JSON.parse(JSON.stringify(employee_Arr))

let f= e.map((x)=>{
    return x.salary= x.salary+1500;                    //ex-3  [nested array does't impact the original array]
})


console.log('orginal arr',employee_Arr)
console.log('copy arr',e)
console.log('mapped arr',f)
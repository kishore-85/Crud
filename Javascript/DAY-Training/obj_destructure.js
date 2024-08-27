let obj={
    fname:'kishore',       //object destructure is to extact properties from objects and bind them to variables
    age:25,
    contact:{
        ph:887034435,
        email:'kishroe@gamil.com',
        sec_ph:7987989,
    }
}

//array destructure
let arr=[1,2,3,4,5]

// const [a,b,c,d,e]=arr;     //type-1
//  const[f,,g]=arr               //type-2
const [a,b,c,...f]=arr     //type3

console.log(a)
console.log(b)
console.log(c)
console.log(f)
// console.log(g)


let aa =[1,2,3,4]
console.log(aa,'aa')
console.log(...aa,'sprd')

//obj destructure

                                                                   //object destructure is to extact properties from objects and bind them to variables
let obj2 ={
    age:34,
    city:'krr',

}                                                                 //we need to use property name to obj destructure 
let {age,city}=obj2

console.log(age,'v2',city)
                                                                
//to- overcome

let{age:ac ,city:bc}=obj2

console.log(ac,'and',bc)

let {age:std_age}=obj2;

console.log(std_age,'proprty name chnge')
                                                            
//nested obj

let emp={
    fname:'kishore',      
    sal:25000,
    address:{
        ph:887034435,
        email:'kishroe@gamil.com',
        sec_ph:7987989,
        pin:{
            code:6899
        }
    }
}

let {sal:salary}=emp //1st level
let {address:{ph:phonenumber}}=emp

let {address:{pin:{code}}}=emp

let {address:{pin:{code:pin_code}}}=emp

console.log(salary,'salary')
console.log(phonenumber,'ph')
console.log(code,'code');
console.log(pin_code)




//shallow copy

//spread operator

let arr1 = [10,20,30,40];

let arr2 = [20,30,70,80];

let arr3 =[...arr1,...arr2];

console.log(arr3,'arr3');

const max_arr=Math.max(...arr1)
console.log(max_arr)

//obejct assign

// let arr4=[1,2,3,45,];

// let arr5 =[5,6,7,8];

// arr4 =arr5;

// arr5=Object.assign([],arr5);

// arr5.push(555);

// console.log(arr4,'4')
// console.log(arr5,'5')





//in-object

// let obj1={fname:'kishore',age:25};

// let obj2={fname:'kumar',age:30};

// obj1=obj2;

// obj2=Object.assign({},obj2);

// obj2.ph=90

// console.log(obj1,'1')
// console.log(obj2,'2')



let obj1 ={a:1,b:2}

let obj2 ={a:3,b:4}



obj1 = obj2

 const obj3 =Object.assign({},obj1)

//  console.log(obj1)
 console.log(obj3)



//deep copy

const student= {
    fname:'a',
    address:{
        street:'ky street',
        doorno:{
            xx:11,
            yy:22
        }
       
    },
    marks:{
        tamil:{
            term1:70,
            term2:90
        },
        english:{
            term1:60,
            term2:70
        }
    }
 
   
}


const copy={...student}

student.fname="jenni"
student.address.street="kkkkkk"                   //object.assign , spread operator create a new address for 1st level only
// console.log(copy,'copy')



// const copp1 ={...student,address:{student.address}}

const copy2 ={...student,address:{...student.address}}

student.address="222"
console.log(student,'student')
console.log(copy2,'copy')
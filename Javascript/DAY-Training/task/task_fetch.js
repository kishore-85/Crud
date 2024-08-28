//1)
let filter_data =[]

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(resp=>{   
    for(let i of resp){
        filter_data.push(i)
    }
   
})
.catch(err=>{
    console.log(err);
})


function myfun(){

    let result = filter_data.filter((x)=>{
        return (x.id== 3)
    })

    console.log(filter_data,'original_array')
    console.log(result,'result')
}

//2)
let date = new Date()
var month = date.getUTCDay()
console.log(date)
console.log(month,'mon')

//3

for(i=0;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log('5 & 3')
    }
    else if(i%5==0){
        console.log('*5')
    }
    else if(i%3==0){
        console.log('*3')
    }
    else{
        console.log(i)
    }
}

//4
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(resp=>{
    console.log(resp,'r')
    for(let i of resp ){
        console.log(i.id,' & ',i.name)
    }
})
.catch(err=>{
    console.log(err)
})

//5

let arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//spread_operator_type
let arr_copy1 = [...arr]
arr_copy1[0]= 99;
console.log(arr,'orginal arr');
console.log(arr_copy1,'copy arr')

//object assign

let a={fname:'kishore',count:1}
let b={count:2}
let c={}
//model-1
// Object.assign(a,b)
// a.age=25;
// console.log(a,'a');
// console.log(b,'b')

//model2
Object.assign(c,b)
c.age=25
console.log(b,'b')
console.log(c,'c')

// console.log(c,'c')

//6
let arr_filter = arr.filter((val)=>{
    return (val%2==0)
})

console.log(arr_filter,'even')

//7

let arr_filter2 = arr.filter((val)=>{
    return (val%2!=0)
})
console.log(arr_filter2,'odd')

//8

let n = 50;
if(arr.includes(n)){
    console.log('true')
}
else{
    console.log('false')
}

//9
let ex9 = arr.filter((val)=>console.log( (val%2==0)?val:null,'9th'))

//10


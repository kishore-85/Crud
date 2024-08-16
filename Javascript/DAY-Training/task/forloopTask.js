


//1
for(i=1;i<=10;i++){
    console.log(i)
}

//2
let arr=[[1,2],[3,4],[5,6]];

let c =arr.flat();

console.log(c);

//3
let evnarr =[1,2,3,4,5,6];

for(let i of evnarr){
    if(i%2==0){
        console.log('even',i)
    }
}

//4
function expo(base,exponent){
let baseval = base;
let result=1;
for(i=1;i<=exponent;i++){
    result = result*baseval;    
}
console.log(result,'result')

}

expo(2,3)

// console.log(Math.pow(2,3),'4')



//5
let a= "";
for(i=1;i<5;i++){
    for(j=1;j<=i;j++){
        a=a+j;
    }
    a+= "\n";
}

console.log(a);

//6
let num = 6788;
let str =num.toString()
let spilit= str.split('');
let length= spilit.length;
console.log('num length',length);

//7
// let given_num = 885;
// let tostr =given_num.toString();
// let tosplit = tostr.split('');
// let emptyarr= [];
// let result=0;
// for(let i of tosplit){
// emptyarr.push(parseInt(i))  //converting string array to number array
// }

// for(let j of  emptyarr){ 
    
//     result= result+j;  //sum the array
// }

// console.log(result,'result')

let ac1=[1,5,6];
let ac2= [2,4,6];

for(i=0;i<ac1.length;i++){
    for(j=0;j<ac2.length;j++){
        if(i==j){
            let r=ac1[i]+ac2[j];            //self-practise sum of 2 arrays
            console.log(r,'r')
        }
    }
}

//8
// let largearr = [2,4,11,1,5,7];

// let sortarr = largearr.sort((a,b)=>{
   
//     return a - b;
// });
// console.log(sortarr.at(-1))

//9
// arr1 = [3,45,23,78,34];
// arr2 = [4,2,34,4,12,1];

// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length && j<=i;j++){
//         if(i==j){
//             // console.log("9",arr1[i],' &',arr2[j]);
//             console.log(arr1[i]*arr2[j])
//         }
       
        
//     }
// }

//10

let orignalarr=[10,20,30,40,20,50,60,40];
let damiarr2=[];
for(let i of orignalarr){
    if(!damiarr2.includes(i)){
        damiarr2.push(i)
    }
}

console.log(damiarr2);


// let arr3 = [4,2,34,4,12,2,1];
// let arr4 =[];

// for(i=0;i<arr3.length;i++){
//     for(j=0;j<arr3.length;j++){
//         if(i!==j){
//             if(arr[i]==arr[j]){
//                 console.log(arr[i])
//             }
//             // console.log('i',arr3[i],arr3[j])
//         }
//     }
// }

// for(let i of arr3){
//     for(let j of arr3){
//        console.log('ji',i,j)
//     }
// }



//11


for(i=0;i<5;i++){
    console.log(i,"this is kishore");
}
               //-------self practise------//

// let arr5 = [10,20,30,10,40,50,60,30];
// let arr6= [20,40,90];
// for(let i of arr5){
//     let b= arr6.includes(i);
//     console.log(b)
    
// }


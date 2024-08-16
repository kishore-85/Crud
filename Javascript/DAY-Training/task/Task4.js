//1
let num1 = 5;
let num2 = 7;
let num3 ;
 num3 =num1;
 num1=num2;
 num2=num3;
 console.log('num1',num1);
 console.log('num2',num2);

 //2
 let a=2,b=4,c=3;
 if(a>b&&a>c){
    console.log('a is greater')
 }
 else if(b>c && b>a){
    console.log('b is greater')
 }
 else{
    console.log('c is greater')
 }

 //3
//  for(i=1;i<=100;i++){
//      if(i%2==0){
//          console.log(i)
//      }
//  }

//4
//5
let arr=[10,20,30,40,50,60,70,8,90,100];
let rvr =arr.reverse();
console.log(rvr)

//6
// let arr2=[10,20,30,40,50,60,70,8,90,100];
// for(i=0;i<arr2.length;i++){
//     if(i%2==0){
//         console.log(arr2[i])
//     }
// }

// arr2.forEach((x,y)=>{
//    console.log('foreach',x+" & y is"+y)  //for-each with index & value
// })


// for(let [i,j] of arr2.entries()){  //for -of with index & values
//    console.log('of',i,j)
// }


//7
// let arr7=[10,11,12,13,14,15,16,17,18,19,20];
// let sum=0;
// arr7.forEach((x)=>{
//    if(x%2==0){
//       console.log('even',x)
//    }
//    else{
//       console.log('odd',x)      
//       sum=sum+x;
//       console.log('a',sum)
      
//    }
// })

//8
// for(i=1;i<=100;i++){
//    if(i==1){
//       console.log('not an prime num',i)
//    }
//    else if(i %2  == 0){
//       console.log('not an prime num',i)

//       }
//       else{
//          console.log(' prime num',i)
//       }
//    }

//9
let sortarr= [22,1,33,23,13,15,10];
console.log(sortarr.sort(),'sort')

//10

let mainarr=[10,20,30,50,40,60,70,80];
let d=[1,2,3,4,50];
// for(let i of mainarr){  
  
//  if(mainarr.includes(i)){
//     console.log(i,'include')
//  }
//  else{
//    console.log(i,'not-include')
//  }
  
// }


let duparr=[10,20,30,40,50,20,30]


//1
for(let i in mainarr){
   for(let j in mainarr){
         // console.log(i,j)
         if(i !== j){
            if(duparr[i]==duparr[j]){
               console.log(duparr[i],'duplicate values')
            }
            // else{
            //    console.log(duparr[i],'not an duplicate')
            // }
         }
   }
}

//2
let date = new Date()
console.log(date)
//3
let m1=10;
let  m2=20;
console.log(m1*m2,'mul')
console.log(m1/m2,'division')

//4
let uurl =window.location.href
console.log(uurl)
   
//5
// let prmpt =  parseInt(prompt('enter a num')) 
// let givn =13;
// let diif= prmpt-givn;
// if(prmpt>13){
//    console.log(diff*2,'diff into double')
// }

//6
// let val1 =parseInt(prompt('enter num1'));
// let val2 =parseInt(prompt('enter num2'));

// let sum=val1+val2;

// if(val1==val2){
//    let result = sum*3;
//    console.log(result,'3 sum')
// }

// console.log('sum',sum);

//7

let ar1 = [2,4,6,8,10,12,6]
let ar2= [3,5,7,8,9,10,11]
let ar3= []

for(let i of ar1){
   for(let j of ar2){
      if(i==j){
         ar3.push(i)
         console.log(i,j)
      }
   }
}
console.log(ar3,'ar3')

//8
let ar5=[]
for(i=1;i<=150;i++){
if(i%6==0 && i%9 !==0){
   ar5.push(i)
}
}
console.log(ar5,'ar5')

//9
let fname="kishore";
console.log(fname.slice(1,5))

//10

let full_name="kishorekumar";
let to_arr =full_name.split('');

let chng1 =to_arr;
chng1[0]=chng1[chng1.length-1];
chng1[chng1.length-1]=chng1[0]
console.log(chng1,'chnge1')
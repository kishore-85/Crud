//2
let arr = [1,2,3,4,5,6,7,8,9,9,5]
let arr2=[...arr]
let c;

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr[i]==arr[j] && !(i==j)){
          c=  arr.indexOf(arr[i])
            arr.splice(c,1)
        }
    }
}

console.log('arr',arr)

//5
let fib = [0,1]
let n=10
for(let i=1;i<n ; i++){
    console.log('a',fib[i-1]+'& b is'+fib[i])
  fib.push(fib[i-1]+fib[i])


}
console.log(fib)
//4
function gcd(a,b){
   if(b==0){
       return a;
   }
   else{
       return gcd(b,a%b)
   }
}

console.log(gcd(24,12))
//3
function factorial(n){
     if(n==0){
         return 1;
     }
     else{
         return n*factorial(n-1)
     }
}

console.log(factorial(5))


// let ec=[10,20,30]
// console.log(ec.length,'ln')
// for(let i=1;i<5;i++){
//     console.log(ec[i])
//     ec.push(ec[i]+ec[i-1])
// }
// console.log(ec,'final')


//6
const triangle = [];

for(let i=0;i<5;i++){
    let row=[];
    for(let j=0;j<=i;j++){
           if(j===0 || j===i){
               row.push(1)
           }
           else{
               row.push(triangle[i-1][j-1]+triangle[i-1][j])
           }
    }
   triangle.push(row)
}
console.log('triangle',triangle)
//9
// let ip =60;
// if (marks>=90 && marks<=100){
//     console.log('a grade');
// }
// else if(marks>=80 && marks<=90){
//     console.log('b grade');
// }
// else if(marks>=70 && marks<=80){
//     console.log('c grade');
// }
// else if(marks>=60 && marks<=70){
//     console.log('d grade');
// }
// else if(marks>=50 && marks<=60){
//     console.log('e grade');
// }
// else if(marks>=40 && marks<=50){
//     console.log('students failed ');
// }

//10
let input=22;
if(input>=18){
    console.log('eligible')
}
else{
    console.log(' Not elgible')
}

//7
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]))


//1)
let number = 10;
if(number % 2 == 0){
    console.log('even number');
}

else{
    console.log('odd number');
}


//2)
let ip = 6;


if(isNaN(ip)){
    console.log('not number',ip);
}
else{
    console.log(' an number',ip);
}


//3

let a =5,b=1,c=9;

if(a>b&&a>c){
    console.log(' a is greater');
}

else if(b>a && b>c){
    console.log(' b is greater');
}

else{
    console.log(' c is greater');
}

//4
let aa =5,bb=1;

if(aa>bb){
    console.log(' aa is greater');
}

else{
    console.log(' bb is greater');
}


//5 
let side1 =5;
let side2 =6;
let side3 =7;

if(side1==side2 && side2 == side3 && side3== side1){
    console.log('Equilateral triangle')
}

else if(side1==side2 || side2 == side3){
    console.log('Isosceles triangle')
}
else{
    console.log('scalene triangle')
}


//6
let arr =[1,2,3,4,5,6,7,8]

for(let i of arr){
    if(i>=3 && i<=5){
        console.log('between the range',i);
    }
    else{
        console.log('outside the  range',i);
    }
}


//7
// let num1 =3;
// let num2=4;
// let o = prompt("enter operator")
// switch(o){
//     case "+": console.log(num1+num2);
//     break;
//     case "-": console.log(num1-num2);
//     break;
//     case "*": console.log(num1*num2);
//     break;
//     case "/": console.log(num1/num2);
//     break;
//     case "%": console.log(num1%num2);
//     break;
// }
//8

let year = 2022;
if((0 == year%4) && (0 != year%100)){
console.log('leap year')
}
else if(0 == year%400){
    console.log('leap year')
}
else{
    console.log('not an leap year')
}

9//
let marks =83
if (marks>=90 && marks<=100){
    console.log('a grade');
}
else if(marks>=80 && marks<=90){
    console.log('b grade');
}
else if(marks>=70 && marks<=80){
    console.log('c grade');
}
else if(marks>=60 && marks<=70){
    console.log('d grade');
}
else if(marks>=50 && marks<=60){
    console.log('e grade');
}
else if(marks>=40 && marks<=50){
    console.log('students failed ');
}
else if(marks>=0 && marks<=40){
    console.log('Invalid marks');
}


//10

let month = 5;
let years =2024
if(month>12){
    console.log('Invalid month');
}
else if(month ==2){
    if((0 == year%4) && (0 != year%100)){
        console.log('leap year 29days');
    }
    else{
        console.log('not an leap year 28days');
    }
}
 else if((month == 4 || 6 || 9|| 11)){
    console.log('print 30 days');
 }
 else{
    console.log('print 31 days');
 }
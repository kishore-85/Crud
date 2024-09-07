//Set timeout ==> executing after spefic given time

let a= function disp(e){
    console.log('hi')
}

// setTimeout( a() => {
    
// }, 1000);

let b= setTimeout(() => {
    console.log('hi')
}, 2000);


//set interval ==> repeating every interval of given time...


let val =false;
let myfun =  setInterval(() => {
    console.log('chennai super kings')
}, 1000);
if(val==false){
   clearInterval(myfun)
}

 let arr = [];
 let arr_length;
 for(i=0;i<5;i++){
     arr.push(i)
     arr_length = arr.length
 }


 let c = setInterval(() => {

     console.log('my name is kishore')
     if(arr_length===5){
         clearInterval(c)
     }
 }, 1000);

 
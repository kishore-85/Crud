//--normal function---//

// function myfun(){
//     console.log('normal function')
// }

// myfun();

//---function declared by expression--//
// let kk = function(){
//     console.log('expression function')

// }

// kk();


//------arrow function---//

let arrfun = (()=>{
    console.log('arrow function');
})
arrfun();


//---parameter && argument--//

// function add(a,b){
//     return a+b;
// }

// console.log(add(5,10));
// console.log(add(a,b));
// console.log(add())

// function defaultparameter(a,b){         //--es-5

//     a=(a===undefined)? 0 : a;
//     b=(b===undefined)?0 : b;

//     return a+b;

// }

// console.log(defaultparameter(2,2));
// console.log(defaultparameter(2));
// console.log(defaultparameter(null,5))



// function defaultwithparameter(a=0,b=0){         //--es-6
      
//        console.log(a+b)
    
       
//     }
//     defaultwithparameter(10,20);
//     defaultwithparameter();
//     defaultwithparameter(4);
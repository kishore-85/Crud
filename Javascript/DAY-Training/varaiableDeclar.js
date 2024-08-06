var a =10;     //--value-assign--// [function scope/]

console.log("a val",a);

a =20;         //Re-assign--//

console.log("a val",a);

var a =30;     //Re-Decalare--//
console.log("a val",a);


//----------let-----------//  [block-level-scope]

let b = 10;

console.log('b val',b);


  //---Re-assign---//  
b = 20;
console.log('b val',b);


 //Re-declare--//
// let b = 30;
// console.log('b val',b);


//----------------const----------//   [block-level-scope]

const c =10;
console.log('c',c);

// c =20;
// console.log('c',c)


// const c = 35;

// console.log('c',c);


///////////////////////-----------------function----------------//  [set of code to perform some task]

function printVarValues(){
    for(var i=0;i<10;i++){
        console.log("i val is",i)
    }
    console.log("i val outside",i)
}
printVarValues()



// function printLetValues(){
//     for(let i=0;i<10;i++){
//         console.log("i val is",i)
//     }
//     console.log("i val outside",i)
// }
// printLetValues()



//----------primitive datatype----// [memory location]
// var aa= 10;
                    
// var bb;

// bb = aa;

// var aa=20;

// console.log(aa,bb)

//------------non-primitive ---//[memory location]


var arr = [1,2,3,4,5];

var arr2= [];

arr2 = arr;

arr2.push(6);

console.log(arr,arr2)


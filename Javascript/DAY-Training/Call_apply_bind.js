let obj={
    num:5
} 
let obj1={
    num:5
} 
let obj2={
    num:5
}  
                // want to use same function for multiple objects.
let v=[4,5]

function myfun(){
       console.log(this,'this')          //syntax functionname.call(objectname,arguments as comma separated)
       console.log(this.v,'arr')
}

myfun()


// function add(a,b){
//     console.log(a,b)
//     console.log(a,b,this.num,'this')
//     console.log('num',this.num+a+b)
// }

// // add.call(obj,4,5)
// add.apply(obj2,[5,6])   

// let c =add.bind(obj)
// console.log(c(10,20))                



//-------------------------class------------------------//

                         //---brings in es-6

                         //we create many objects

                         //It is an prototype


// class car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }

// const myCar= new car('audi',2023)
// console.log('op',myCar)                              //

//--class inheritance----//

                                                   //Acess the parent function and variables


// class vehicle{
//     constructor(brand,year,model){
//         this.brand =brand;
//         this.year =year;
//         this.model=model;
//     }
// }

// class Car extends vehicle{
//     constructor(brand,year,model,wheels){
//         super(brand,year,model);
//         this.wheels =wheels
//     }
// }


// class bike extends vehicle{
//     constructor(brand,year,model,wheels){
//         super(brand,year,model);
//         this.wheels =wheels;
//     }
// }


// const car1 = new car('bmw',2020,'benz',4)
// console.log(car1,'car1')

// const bike1 = new bike('honda',2026)
// console.log(bike1,'car1')



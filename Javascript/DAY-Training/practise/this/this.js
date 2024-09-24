

// let a = 'harish'
// console.log(this)

// function my(){
//     console.log(this.a)

// }
// my()
// let skol= "kec"
// console.log(this.skol,'calling out')
// function a (){
//     return  console.log(this.skol,'calling a')
// }
// a()

// let b = function(){
//      return console.log(this.skol,'calling b')
// }

// let c = {
//     skol:'bharani',    
//     fun:b,
//     fun2:function(){
//           return console.log('fun-2',this.skol)
//     }
// }

// c.fun();
// c.fun2();

// let obj_literal = {}
//       obj_literal.person ='ravi';               //object_literal
//       obj_literal.age=30;


// let newobj = new Object();                       //new object method

//    newobj.person = "kavin";
//    newobj.age = 25;

// console.log('newobject',newobj);


// let create_obj = Object.create(newobj);           //prototype

//    create_obj.person = 'karthi';
// //    create_obj.age =23;
//    console.log('create_object',create_obj);
//     console.log('create_object age',create_obj.age);


    class base {
        constructor(courses){      
            
             this.courses = courses
        }
    }
   
    // const cls_obj = new college(27 , 49)

    // console.log(cls_obj,'final_college_count')

    class  kec extends base{
        constructor(courses,dept,student,staffs){
            super(courses)
            
            this.dept = dept;
            this.student = student;
            this.staffs = staffs;
        }
    }

    class psg extends base{
        constructor(courses,student,staffs){
            super(courses)
               this.student = student;
               this.staffs = staffs;
        }
    }
 
 const kec_clge = new kec(7,10,4000,200)
 const psg_clge = new psg(11,3000,120)
 console.log(psg_clge)
 console.log(kec_clge,'kec_cge')
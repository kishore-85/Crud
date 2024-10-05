let obj ={    
}
function handleevent(event){
    
    const {name , value} = event.target
    console.log(name)
    console.log(value)

   

   if(name == "fname"){
      obj.fname = value;
   }
   else if(name=="psswrd"){
      obj.password = value;
   }

//    let obj2 ={}

//    obj2.name = value ;
    console.log('obj1',obj)
    // console.log('obj2',obj2)

}




let data;
function my(){
     data={
        emp_name:'kavin',
        age:25,
        method1:function(event){
            event.preventDefault();
            console.log('fun works');           //1) same-object method
            data.validate();                    //2)write separate functions for onchange,validate,onsubmit
        },                                      //3)try in event-listener
        validate: function(){
            console.log('validate works')
        }
    }
//    return data.method1;
}
my()

// data.method1()
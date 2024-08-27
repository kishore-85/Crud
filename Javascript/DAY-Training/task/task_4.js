 let arr =[10,20,30,40,50,50,10]
let result;
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
       
        if(!(i==j)){
            
            result=(arr[i]==arr[j]?console.log(arr[i],'arr of i'):console.log('else'))
            
        }
    }
}
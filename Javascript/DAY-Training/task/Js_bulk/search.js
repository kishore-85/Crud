let value;
let input_val;
let div = document.getElementById('div')
function handle_change(event){
   
    if(event.target.name=="type_search"){
           value = event.target.value;
          
    }
    else{
      input_val=   event.target.value
    }
}

function submit(){
  
    console.log('select',value ,' nd',input_val)
   
    // return false;
    if(value=='google'){
      let iframe =   document.createElement('iframe');
      iframe.setAttribute('src',`https://www.google.com/search?q=+${input_val}}`)
      div.appendChild(iframe)
     
    }
    else{       
        let iframe =   document.createElement('iframe');
        iframe.setAttribute('src',`https://www.bing.com/search?q=%s+${input_val}}`)
        div.appendChild(iframe)
    }
  
}
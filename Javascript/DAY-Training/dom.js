console.log(document,'document')

// let  h2= document.getElementById('h2');
// console.log(h2,'h2')

//value access

// let  h= document.getElementById('h2').innerHTML;
// let  h3= document.getElementById('h2').innerText;
// console.log(h,'innerhtml')
// console.log(h3,'innertext')


// let d1 =document.getElementById("dom").innerHTML;  // it will return including html element
// let d2=document.getElementById("dom").innerText; // it will return including html content only
//  console.log(d1,'innerhtml')
//  console.log(d2,'innertext')

 //value chnage
           //<-by id->
//  document.getElementById("h2").innerText="react cls"

         //<-by cls->
let d3=document.getElementsByClassName("cls")

for(i=0;i<d3.length;i++){
  d3[i].innerText="content chnged"
}

//<--by query selector--//

console.log('query-selector-by-id',document.querySelector('#h2'))



console.log('query-selector-by-cls',document.querySelector('.cls'))

console.log('query-selector-by-cls',document.querySelectorAll('.cls'))


function mychange(){
    document.getElementById("h2").innerText="react cls"
}
 
/////-----------------------create  dom-----------------//

let contact= document.createElement('div')

contact.setAttribute('id','contactid');

contact.classList.add('contact_cls');

console.log(contact,'contact')


let fName=document.createElement('h2');
fName.setAttribute('id','fname_id');
fName.classList.add('fname-cls');
fName.innerText='Crud academy';

contact.appendChild(fName)


let url =document.createElement('a');
url.setAttribute('href','https://www.w3schools.com/html/html_links.asp')
url.setAttribute('target','blank')
contact.appendChild(url)

document.body.appendChild(contact)
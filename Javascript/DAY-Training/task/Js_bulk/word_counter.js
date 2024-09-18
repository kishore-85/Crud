function myfun(e){
    console.log('chnge',e.target.value);
    let getval = e.target.value;
    let a = getval.split(' ');
    let b = a.length;
    document.getElementById('p').innerText = `${b}`
}
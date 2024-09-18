
let time=0;
let timeb;
let sec;
let min;
let time_interval;
let startTime;
let updatedTime;
let difference;
let get_time = [];

function update(){
   ++time;
   updatedTime = new Date().getTime();          //by chat-gpt
   difference = updatedTime - startTime;


   sec = time%60;
   let min = Math.floor((difference / (1000 * 60)) % 60);
   // min = Math.floor(time/60);                    //by own
   hour = Math.floor(min/60);  
   minutes = (min < 10) ? "0" + min : min;
   seconds = (sec < 10) ? "0" + sec : sec;


   
      //  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      //  let minutes = Math.floor((difference / (1000 * 60)) % 60);
      //  let seconds = Math.floor((difference / 1000) % 60);
      //  hours = (hours < 10) ? "0" + hours : hours;
      //  minutes = (minutes < 10) ? "0" + minutes : minutes;
      //  seconds = (seconds < 10) ? "0" + seconds : seconds;
  

   document.getElementById('display').innerText =`${hour}:${minutes}:${seconds}`;
   
  
}
function start(){      
   time_interval =  setInterval(update,1000);
   startTime = new Date().getTime();
}



function stop(e){
   clearInterval(time_interval);    
   console.log('stop', e );
   get_time.push(document.getElementById('display').innerText)
   // console.log(get_time)
   create();
}

function reset(){
   time = 0;
   document.getElementById('display').innerText =`00:00:00`
}

function create(){
  let div=  document.getElementById('create');
  let ul =document.createElement('ul');
 
   get_time.forEach((x)=>{     
      ul.innerHTML = `<li> ${x}</li>`;
     
   })
   div.appendChild(ul)
}
























// let startTime;
// let updatedTime;
// let difference;
// let tInterval;
// let running = false;
// let display = document.getElementById('display');

// function startTimer() {
//     if (running) return;
//     running = true;
//     startTime = new Date().getTime();
//     tInterval = setInterval(updateTime, 1);
// }

// function updateTime() {
//     updatedTime = new Date().getTime();
//     difference = updatedTime - startTime;
//     let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     let minutes = Math.floor((difference / (1000 * 60)) % 60);
//     let seconds = Math.floor((difference / 1000) % 60);
//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;
//     display.innerHTML = hours + ":" + minutes + ":" + seconds;
// }

// function stopTimer() {
//     if (!running) return;
//     running = false;
//     clearInterval(tInterval);
// }

// function resetTimer() {
//     if (running) stopTimer();
//     display.innerHTML = "00:00:00";
//     startTime = null;
//     updatedTime = null;
//     difference = null;
// }

// document.getElementById('start').addEventListener('click', startTimer);
// document.getElementById('stop').addEventListener('click', stopTimer);
// document.getElementById('reset').addEventListener('click', resetTimer);

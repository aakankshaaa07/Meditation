let seconds = 00;
let minutes = 00;
let getSeconds = document.querySelector(".seconds");
let getMinutes = document.querySelector(".minutes");
let buttonStart = document.querySelector(".buttonStart");
let buttonStop = document.querySelector(".buttonStop");
let buttonRestart = document.querySelector(".buttonRestart");
let interval;

buttonStart.addEventListener("click", ()=>{
  interval = setInterval(startTimer, 1000);
})

buttonStop.addEventListener("click", ()=>{
  clearInterval(interval);
})

buttonRestart.addEventListener("click", ()=>{
  clearInterval(interval)
  minutes = '00';
  seconds= '00';
  getMinutes.innerHTML = minutes;
  getSeconds.innerHTML = seconds;
})
function startTimer(){
  seconds++;
  if(seconds <= 9){
    getSeconds.innerHTML = '0' + seconds;
  }
  if(seconds > 9){
    getSeconds.innerHTML = seconds;
  }
  if(seconds > 59){
    minutes++;
    getMinutes.innerHTML = '0' + minutes;
    seconds = 0;
    getSeconds.innerHTML = '0' + 0;
  }
  if(minutes > 9){
    getMinutes.innerHTML = tens;
  }
}
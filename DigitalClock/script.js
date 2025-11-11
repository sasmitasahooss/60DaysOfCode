setInterval(function(){
let date = new Date();
let Hours = date.getHours();
let Minutes= date.getMinutes();
let Seconds = date.getSeconds();

let time = document.querySelector(".container");
time.textContent = Hours + ':' + Minutes + ':' +  Seconds
},1000)
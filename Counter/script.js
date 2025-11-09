let inc = document.querySelector("#increment");
let dec = document.querySelector("#decrement");
let res = document.querySelector("#reset");
let count = document.querySelector("#count");

    let counter =0;

inc.addEventListener("click", function(){
    counter++;
    count.textContent  = counter;
})

dec.addEventListener("click", function(){
    counter--;
    count.textContent = counter;
})

res.addEventListener("click", function(){
    counter =0;
    count.textContent = counter;
})
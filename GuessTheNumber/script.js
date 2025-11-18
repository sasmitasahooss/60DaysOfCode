let inp = document.querySelector("input");
let btn = document.querySelector("button");
let main = document.querySelector("main")

let chances = document.createElement("div");
chances.classList.add('chances'); 

inp.addEventListener("input", function(dets){
    return val = dets.target.value;
})

let ran = Math.floor(Math.random()*10)+1;

btn.addEventListener("click", function(){
    if (val>ran){
    chances.textContent = "Too High"
    }
    else if(val<ran){
    chances.textContent = "Too Low"
     }
    else{
    chances.textContent = "Matched"
    }
    
    main.appendChild(chances)    

    inp.value = ""
    val = ""
})
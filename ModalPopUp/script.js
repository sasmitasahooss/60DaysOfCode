let btn = document.querySelector("button");
let main = document.querySelector("main")

btn.addEventListener("click",function(){
    let modal = document.createElement("div");
    modal.textContent = "This is modal box";
    modal.classList.add("mdl");
    main.appendChild(modal)
})
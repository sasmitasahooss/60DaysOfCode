let btn = document.querySelectorAll(".blocks");
let board = document.querySelector(".board");
let inputs = document.querySelector(".inputs")

    let currentExpression = "";



btn.forEach(function(blocks){
    blocks.addEventListener("click", function(dets){
        if(dets.target.textContent === "C"){
            inputs.textContent ="";
            currentExpression = "";
        }
        else if(dets.target.textContent === "="){
            currentExpression = eval(currentExpression);
            inputs.textContent = currentExpression;
        }
        else{
            currentExpression += dets.target.textContent;
            let span = document.createElement("span");
            span.textContent = dets.target.textContent;
            inputs.appendChild(span)
        }
    })
})
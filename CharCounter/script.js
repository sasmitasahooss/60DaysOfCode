let inp = document.querySelector("#textInput");
let charCount = document.querySelector("#charCount")

inp.addEventListener("input", function(){
    charCount.textContent = inp.value.length;
})
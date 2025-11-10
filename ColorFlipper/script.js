let btn = document.querySelector("#Flipper")
let main = document.querySelector(".main")

let color = document.querySelectorAll(".color")
let img = document.querySelector("#perfume")

btn.addEventListener("click", function(){
    let R = Math.floor(Math.random()*256).toString(16).padStart(2, "0");
    let G = Math.floor(Math.random()*256).toString(16).padStart(2, "0");
    let B = Math.floor(Math.random()*256).toString(16).padStart(2, "0");
    let color = "#" +R+G+B;
    main.style.backgroundColor = color
})

color.forEach(function(btn){
    btn.addEventListener("click", function(dets){
        // console.log(dets.target); 
        img.setAttribute("src", dets.target.dataset.img)
    });
});

let dice = document.querySelector(".dice img");
let scoreText = document.querySelector("h2");

dice.addEventListener("click", function(){
    let score = Math.floor(Math.random()*6 +1);
    dice.src = `dice_${score}.png`
    scoreText.textContent = "Score : " + score ;
})
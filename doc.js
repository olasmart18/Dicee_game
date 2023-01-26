// alert("working")
let randomNum1;
let randomNum2;
try {
    randomNum1 = Math.floor(Math.random() * 6) + 1; // get num 1 -6

let randomDice1 = `./images/dice${randomNum1}.png`; // images/dice1.png - images/dice6.png

let player1 = document.querySelectorAll("img")[0]

player1.setAttribute("src", randomDice1);
} catch (error) {
    console.log(error);
}

try {
     randomNum2 = Math.floor(Math.random() * 6) + 1 
    let randomDice2 = `./images/dice${randomNum2}.png`;
    let player2 = document.querySelectorAll("img")[1];
    player2.setAttribute("src", randomDice2);
} catch (error) {
    console.log(error);
}

if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "player1 wins!"
}else if (randomNum2 > randomNum1) {
    document.querySelector ("h1").innerHTML = "player2 win!"
}else{
    document.querySelector("h1").innerHTML = "Draw!!!"
}



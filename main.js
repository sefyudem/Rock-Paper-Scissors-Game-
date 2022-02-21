let choices = ["paper", "rock", "scissors"];
let i = Math.floor(Math.random() * 3);
let ComChoice = choices[i];
let UserPoints = 0;
let ComPoints = 0;
const score = () => {
	let score_div = document.getElementById("score").innerHTML = ` ${UserPoints} - ${ComPoints} `;
}
setInterval(score, 50);
function convert(word){
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}
const game = (UserChoice) => {
	let box = document.getElementById("challenge");
	box.style.display = "inline-flex";
	let userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(UserChoice);
	let comDiv = document.getElementById("ComObject");
	comDiv.innerHTML = convert(ComChoice);
	if((UserChoice === "paper" && ComChoice === "rock") || (UserChoice === "rock" && ComChoice === "scissors") || (UserChoice === "scissors" && ComChoice === "paper") ){
		win(UserChoice);
	}
	else if(UserChoice === ComChoice){
		draw(UserChoice);
	}
	else{
		lose(UserChoice);
	}
	const continuGame = () => {
		i = Math.floor(Math.random() * 3);
		ComChoice = choices[i];
		box.style.display = "none";
	}
	setTimeout(continuGame, 1200);
}
const win = (bn) => {
	UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
     bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);
}
const draw = (bn) => {
	document.getElementById("who").innerHTML = "It's a Draw.";
	 bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1200);
}
const lose = (bn) => {
	ComPoints++;
	document.getElementById("who").innerHTML = "You lose...";
	 bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1200);
}
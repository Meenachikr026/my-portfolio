
let attempts=0;
let score=0;
let highScore=0;

let secretNumber=Math.floor(Math.random()*100)+1;
let savedHighScore= localstorage.getItem("highScore");
if(savedHighScore !== null){
	highScore=Number(savedHighScore);
}
console.log(secretNumber);


function checkGuess(){
	
	
	let userGuess=document.getElementById("guess").value;
	if(userGuess === ""){
		document.getElementById("message").textContent="Please enter a number!";
		return;
	}
	if(userGuess<1 || userGuess>100){
	document.getElementById("message").textContent="Guess a number between 1 and 100";
return;	
	}
	attempts++;
	document.getElementById("attempts").textContent="Attempts: "+ attempts;
	if(userGuess == secretNumber){
		
score=Math.max(100-((attempts-1)*10), 10);
if(score>highScore){
	highScore=score;
}

document.getElementById("score").textContent="Score: "+ score;
document.getElementById("highScore").textContent="High Score: "+ highScore;

		document.getElementById("message").textContent="Correct! You Won!";
		document.getElementById("message").classList.add("win");
		//document.querySelector("button").disabled=true;
		document.getElementById("guessButton").disabled=true;
	}
	else if(userGuess> secretNumber){
		document.getElementById("message").textContent="Too High!";
	}
	else{
		document.getElementById("message").textContent="Too Low!";
	}
}

function resetGame(){
	secretNumber=Math.floor(Math.random()*100)+1;
	attempts=0;
	score=0;
	document.getElementById("score").textContent="Score: 0";
	document.getElementById("guess").value="";
	document.getElementById("message").textContent="";
	document.getElementById("attempts").textContent="Attempts: 0";
	document.getElementById("guessButton").disabled=false;

}










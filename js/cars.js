var randomnumber = (Math.floor(Math.random()*100)+1);
var guesses = document.querySelector('.guesses');
var lastresult = document.querySelector('.lastResult');
var loworhigh = document.querySelector('.loworHigh');
var guessfield = document.querySelector('.guessfield');
var guesssubmit = document.querySelector('.guessSubmit');
var guessCount = 1;   
var restButton;
var newbutton = document.querySelector(".main-content .newbutton");
var pcollect= document.querySelectorAll(".main-content p"); 

guesssubmit.addEventListener('click',pressMe);

function pressMe(){
guesses.innerHTML = guessCount + " " + " / 10 "+ " Tries";
var userGuess = Number(guessfield.value);
if(userGuess===randomnumber){
 lastresult.innerHTML ="!!Congratulation!!";
 lastresult.style.backgroundColor="green";
 lastresult.style.textAlign = "center";
 loworhigh.innerHTML='';

 setGameOver();
}
else if(guessCount===10){
 lastresult.innerHTML = "!!GAMEOVER!!";
 lastresult.style.backgroundColor = "red";
 lastresult.style.textAlign = "center";
 setGameOver();
}
else{
	lastresult.innerHTML = "WRONG";
	if (userGuess < randomnumber) {
		loworhigh.innerHTML = "Last guess too low!!";
		loworhigh.style.textAlign = "center";
	}	
	else if (userGuess > randomnumber) {
		loworhigh.innerHTML = "Last guess was too high";
	} 
}
guessCount++;
guessfield.value='';
guessfield.focus();
}

function setGameOver(){
 guessfield.disabled = true;
 guesssubmit.disabled = true;
 restButton = document.createElement("button");
 restButton.textContent = "Start newgame";
 newbutton.appendChild(restButton);
 restButton.style.padding="5px";
 restButton.style.fontSize="0.5em";
 
 restButton.addEventListener('click',resetGame);
}

function resetGame(){
	guessCount= 1;
    for (var i = 0; i < pcollect.length; i++) {
    	pcollect[i].innerHTML ='';
    }

   restButton.parentNode.removeChild(restButton);
   guessfield.disabled = false;
   guesssubmit.disabled = false;
   guessfield.value='';
   guessfield.focus();
   lastresult.style.backgroundColor="white";
   randomnumber;
}

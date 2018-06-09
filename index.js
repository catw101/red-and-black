function initialize()
{
		numR = document.getElementById("num_r");
		numB = document.getElementById("num_b");
		numRC = document.getElementById("num_r_comp");
		numBC = document.getElementById("num_b_comp");
		
		redToken = document.getElementsByClassName("red_token");
		blackToken = document.getElementsByClassName("black_token"); 
		
		redTokenComputer = document.getElementById("red_token_comp");
		blackTokenComputer = document.getElementById("black_token_comp");
		
		rollButton = document.getElementById("roll_button");
		buttonChoices = document.getElementsByClassName("button_choices");
		
		computerChoice = document.getElementById("computer_choice");
		
		theWinner = document.getElementById("winner");
		
		resetButton = document.getElementById("reset_button");
		
		rollButton.style.display = "block"; 
		resetButton.style.display = "none";
		
		redTokensPlayer = 10;
		blackTokensPlayer = 10;
		redTokensComp = 10;
		blackTokensComp = 10;
		
		hideButtons();
}
	
function getRandomNum()
{
	rollButton.style.display = "none";
	computerChoice.style.display = "none";
	redDieNum = getRandomInteger(1,6);
	blackDieNum = getRandomInteger(1,6);
	display();
	showButtons();
}

function removeRedAddBlack()
{
	hideButtons();
	redTokensPlayer -= redDieNum;
	blackTokensComp += blackDieNum;
	display();
	setTimeout(compChoice, 1000);
}

function addRedRemoveBlack() 
{
	hideButtons();
	redTokensPlayer += redDieNum;
	blackTokensComp -= blackDieNum;
	display();
	setTimeout(compChoice, 1000);
}

function removeBlackaddRed()
{
	hideButtons();
	blackTokensPlayer -= blackDieNum;
	redTokensComp += redDieNum;
	display();
	setTimeout(compChoice, 1000);
}

function addBlackremoveRed()
{
	hideButtons();
	blackTokensPlayer += blackDieNum;
	redTokensComp -= redDieNum;
	display();
	setTimeout(compChoice, 1000);
}

function compChoice()
{
	computerDecison = getRandomInteger(1,4);
	redDieNum = getRandomInteger(1,6);
	blackDieNum = getRandomInteger(1,6);	
	redTokenComputer.innerHTML = redDieNum;
	blackTokenComputer.innerHTML = blackDieNum;
	computerChoice.style.display = "block";
	
	if (computerDecison == 1)
	{
		//remove red add black 
		hideButtons();
		redTokensPlayer -= redDieNum;
		blackTokensComp += blackDieNum;
		
		computerChoice.innerHTML = "Computer removed " + redTokenComputer.innerHTML + " red tokens from player and added " + blackTokenComputer.innerHTML + " black tokens to its pile.";
		
		display2();
	}
	if (computerDecison == 2)
	{
		//add red remove black
		hideButtons();
		redTokensPlayer += redDieNum;
		blackTokensComp -= blackDieNum;
		
		computerChoice.innerHTML = "Computer added " + redTokenComputer.innerHTML + " red tokens to player and removed " + blackTokenComputer.innerHTML + " black tokens from its pile.";
		
		display2();
	}
	if (computerDecison == 3)
	{
		//remove black add red 
		hideButtons();
		blackTokensPlayer -= blackDieNum;
		redTokensComp += redDieNum;
		
		computerChoice.innerHTML = "Computer removed " + blackTokenComputer.innerHTML + " black tokens from player and added " + redTokenComputer.innerHTML + " red tokens to its pile.";
		
		display2();
	}
	if (computerDecison == 4)
	{
		//add black remove red
		hideButtons();
		blackTokensPlayer += blackDieNum;
		redTokensComp -= redDieNum;
		
		computerChoice.innerHTML = "Computer added " + blackTokenComputer.innerHTML + " black tokens to player and removed " + redTokenComputer.innerHTML + " red tokens from its pile.";
		
		display2();
	}
	
	rollButton.style.display = "block"; 
}
function showButtons()
{
	for (var i = 0; i < buttonChoices.length; i++)
		buttonChoices[i].style.display = "block";
}

function hideButtons()
{
	for (var i = 0; i < buttonChoices.length; i++)
		buttonChoices[i].style.display = "none";
}

function display2() 
{
	zero();
	
	numR.innerHTML = redTokensPlayer;
	numB.innerHTML = blackTokensPlayer;
	numRC.innerHTML = redTokensComp;
	numBC.innerHTML = blackTokensComp;
}

function display()
{
	display2();
	
	for (var i = 0; i < redToken.length; i++)
		redToken[i].innerHTML = redDieNum;
	for (var i = 0; i < blackToken.length; i++)
		blackToken[i].innerHTML = blackDieNum;
}

function zero()
{
	if (redTokensPlayer < 0)
		redTokensPlayer = 0;
	if (redTokensComp < 0)
		redTokensComp = 0;
		
	if (blackTokensPlayer <= 0 || blackTokensComp <= 0)
	{
		if (redTokensPlayer > redTokensComp)
		{
			theWinner.innerHTML = "The player has won!";
			resetButton.style.display = "block";
			return getRandomNum();
		}
		if (redTokensPlayer < redTokensComp)
		{
			theWinner.innerHTML = "The computer has won!";
			resetButton.style.display = "block";
			return getRandomNum();
		}
		if (redTokensPlayer == redTokensComp)
		{
			theWinner.innerHTML = "It's a tie!";
			resetButton.style.display = "block";
			return getRandomNum();
		}	
	}
}
function reset()
{
	location.reload();
}
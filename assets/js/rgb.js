
// 3 - ** GENERATE RANDOM COLORS **
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;


// 1 - SQUARE COLORS
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked Square
		var clickedColor = this.style.backgroundColor;

		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again!"
			// 1.1 - ** CALL FUNCTION **
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			// if color match is wrong clicked square matches background color
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again";
		}
	});

}

// 1.1 - CHANGED COLOR TO MATCH GIVEN COLOR
function changeColors(color){
	//loop through all squares all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	

}
// 2 - PICKS RANDOM NUMBER FOR COLOR SELECTION
function pickColor(){
	// generate random colors 
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


// 3 - GENERATE RANDOM COLORS
function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num Times
	for(var i = 0; i < num; i++){		
		// 3.1 - ** GENERATE RANDOM COLOR **
		// get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

// 3.1 - GENERATE RANDOM COLOR
function randomColor(){
	// pick a "red" from 0 - 255
	r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";	
}


// 4 - RESET GAME (NEW COLORS BUTTON)
resetButton.addEventListener("click", function(){
	//Generate all new colors
	colors = generateRandomColors(numberOfSquares);

	//Pick a new random color from array
	pickedColor = pickColor();

	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	this.textContent = "New Colors";

	//correct message will be empty
	messageDisplay.textContent = "";

	//change colors of squares
	// 1 - SQUARE COLORS
	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	//change h1 background color to body background
	h1.style.backgroundColor = "steelblue";

});


// 5 - EASY BUTTON
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	/// generates 3 colors for easy mode
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// generate top 3 squares random colors
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display ="none";
		}
	}
});


// 6 - HARD BUTTON
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);	
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// generate top 3 squares random colors
	for(var i = 0; i < squares.length; i++){	
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display ="block";		
	}
});